// Java script

var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;
var height = window.innerHeight - 100
var score = document.querySelector('.score')
const bombsdiv = document.querySelector(".bombs")
const arrowsdiv = document.querySelector(".arrows")



var bombs = []
var arrows = []
var score_num = 0





function keyup(event) {

	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop + 1;

		var element = document.elementFromPoint(player.offsetLeft, newTop + 32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop - 1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft - 1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft + 1;

		var element = document.elementFromPoint(newLeft + 32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}


function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);
}


document.addEventListener('DOMContentLoaded', myLoadFunction);



// players name 

document.querySelector('.start').addEventListener('click', () => {
	var lives = 4;
	var score_num = 0
	score.textContent = score_num



	gsap.to('#player', { opacity: 1, duration: 1.5, ease: 'Power3easeIn' })

	var player_name = document.getElementById('player_name').value
	var name = document.querySelector('.name')
	name.innerHTML = player_name
	document.querySelector('.input-area').style.display = 'none'
	gsap.to('.start', { duration: 2, opacity: 0, display: 'none' })
	// var not_pause = true
	document.querySelector('.game-over').style.display = 'none'





	// creating of bombs

	var creating_bombs = setInterval(() => {

		const bomb = document.createElement('div')
		bomb.classList.add('bomb')
		bombsdiv.appendChild(bomb)




		bomb.style.left = Math.floor(Math.random() * 1200) + 'px'
		bombs.push(bomb)


	}, 700)


	// creating arrow 


	document.addEventListener('keyup', event => {
		if (event.code === 'Space') {
			var arrow = document.createElement('div')
			arrow.classList.add('arrows')
			document.body.appendChild(arrow)
			arrows.push(arrow)

			var playerX = document.getElementById('player').offsetLeft
			var playerY = document.getElementById('player').offsetTop
			arrow.style.top = playerY + 'px'
			arrow.style.left = playerX + 'px'


		}

		


	})
	// const readingarrow_collison = setInterval(() => {

	// arrow_X = arrow.offsetLeft
	// arrow_Y = arrow.offsetTop



	// }
	// bombs.forEach(bomb => {
	// 	var bombX = bomb.offsetLeft
	// 	var bombY = bomb.offsetTop

	// })





	// }, 10)








	// const shoot_arrow = setInterval(() => {
	// 	document.body.appendChild(arrow)



	// 	var playerX = document.getElementById('player').offsetLeft
	// 	var playerY = document.getElementById('player').offsetTop
	// 	arrow.style.top = playerY + 'px'
	// 	arrow.style.left = playerX + 'px'
	// 	var arrow_top = arrow.offsetTop
	// 	var arrow_X = arrow.offsetLeft
	// 	var x = playerX - arrow_X
	// 	var y = playerY - arrow_top
	// 	var distance = Math.sqrt(x * x + y * y);
	// 	if (arrow_top <= 0) {
	// 		arrow.remove();

	// 	}



	// }, 10);




	// moving of arrow

	// document.addEventListener('keyup', event => {
	// 	if (event.code === 'Space') {
	// 		var arrow = document.createElement('div')
	// 		arrow.classList.add('arrows')
	// 		var playerX = document.getElementById('player').offsetLeft
	// 		var playerY = document.getElementById('player').offsetTop
	// 		arrow.style.top = playerY + 'px'
	// 		arrow.style.left = playerX + 'px'




	// 		document.body.appendChild(arrow)
	// 		var read_arrow = setInterval(() => {
	// 			var arrow_top = arrow.offsetTop
	// 			var arrow_X = arrow.offsetLeft
	// 			var x = playerX - arrow_X
	// 			var y = playerY - arrow_top
	// 			var distance = Math.sqrt(x * x + y * y);
	// 			// console.log(distance)





	// 			if (arrow_top <= 0) {
	// 				arrow.remove();

	// 			}
	// 			if (distance <= 50) {
	// 				var bombs = document.getElementsByClassName('bombs')
	// 				for (var i = 0; i < bombs.length; i++) {
	// 					var bomb = bombs[i];
	// 					bomb.remove()
	// 				}
	// 				console.log('hit')


	// 				arrow.remove();
	// 				score_num++
	//                 score.textContent = score_num







	// 			}


	// 		}, 100)



	// 	}
	// })



	// reading explosion
	var read_explosion = setInterval(() => {
		bombs.forEach(bomb => {
			if (bomb.offsetTop === window.innerHeight - bomb.clientHeight) {
				let explosionX = bomb.offsetLeft
				let explosionY = bomb.offsetTop
				const explosion = document.createElement("div")
				explosion.classList.add("explosion")
				// explosionDiv.appendChild(explosion)
				document.body.appendChild(explosion)
				bomb.remove()
				explosion.style.left = explosionX + "px"
				explosion.style.top = explosionY + "px"
				gsap.to('.explosion', { opacity: 0, duration: 1.5, ease: 'Power2easeOut', display: 'none' })
				var player = document.getElementById('player');
				var playerX = player.offsetLeft
				var playerY = player.offsetTop


				var bombX = bomb.offsetLeft
				var bombY = bomb.offsetTop
				var x = explosionX - playerX
				var y = explosionY - playerY
				var distance = Math.sqrt(x * x + y * y)
				// console.log(distance)
				if (distance <= 60) {
					lives = lives - 1
					var l1 = document.getElementById('h1')
					var l2 = document.getElementById('h2')
					var l3 = document.getElementById('h3')
					// console.log('hi')
				}


				if (lives == 3) {
					l1.style.display = 'none'
					gsap.from('#player', { opacity: 0, duration: 2, ease: 'bounce' })

					// console.log('3')

				}
				if (lives == 2) {
					gsap.from('#player', { opacity: 0, duration: 2, ease: 'bouce' })

					l2.style.display = 'none'

					// console.log('2')

				}
				if (lives == 1) {
					gsap.to('#player', { opacity: 0, duration: 2.5, ease: 'Power3easeIn' })

					document.querySelector('.game-over').style.display = 'block'

					gsap.to('.start', { opacity: 1, duration: 2, display: 'block' })
					pause = true
					l1.style.display = 'block'
					l2.style.display = 'block'
					const marks = document.querySelectorAll('.explosion')
					marks.forEach(mark => {
						mark.remove()
					})
					bombs = []
					document.querySelectorAll(".bomb").forEach(bomb => {
						bomb.remove()
					})
					clearInterval(creating_bombs)


				}


			}
			arrows.forEach(arrow => {
				var arrow_X = arrow.offsetLeft
				var arrow_Y = arrow.offsetTop

				var x = arrow_X - bombX
				var y = arrow_Y - bombY
				var distance = Math.sqrt(x * x + y * y);
				if (arrow_Y <= 0){
					arrow.remove()
				}
				

				if (distance < 30) {
					bomb.remove();
					arrow.remove();
					
					console.log('hit')
					score_num++
					score.textContent = score_num


				}


			})




		})











	}, 10)

})













