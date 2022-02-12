import Screen, { screenSize } from './game/screen.js'
import Player from './game/player.js'
import Enemie from './game/enemie.js'

const canvas = document.querySelector('canvas') // * canvas element
const context = canvas.getContext('2d')

const scorePlayer1 = document.getElementById('scorePlayer1')
const scorePlayer2 = document.getElementById('scorePlayer2')

const screen = new Screen(screenSize.width, screenSize.height)
const players = {
  'player1': new Player('yellow', 'wasd'),
  'player2': new Player('green', 'arrows')
}
const enemie = new Enemie()

function collisionManager () {
  // ! Pegando todos os `players` e verificando a cada movimento
  // TODO: Refatorar, verificar um único player por vez (quadtree ou outro método)
  for (const player in players) {
    if (players[player].x === enemie.x && players[player].y === enemie.y) {

      enemie.x = Math.floor(Math.random() * screenSize.width)
      enemie.y = Math.floor(Math.random() * screenSize.height)

      players[player].score++

    }
  }
}

function resetGame () {
  for (const player in players) {
    players[player].x = Math.floor(Math.random() * screenSize.width)
    players[player].y = Math.floor(Math.random() * screenSize.height)

    players[player].score = 0

    enemie.x = Math.floor(Math.random() * screenSize.width)
    enemie.y = Math.floor(Math.random() * screenSize.height)
  }
}

function winner () {
  for (const player in players) {
    if (players[player].score >= 25) {
      window.alert(`${players[player].username} winner`)
      resetGame()
    }
  }
}

function scoreCounter () {
  scorePlayer1.innerText = players.player1.score
  scorePlayer2.innerText = players.player2.score
  winner()
}

function keyDownHandler (event) {
  const key = event.key

  for (const player in players) {
    switch (key) {
      case players[player].upKey: players[player].y--
        break
      case players[player].leftKey: players[player].x--
        break
      case players[player].downKey: players[player].y++
        break
      case players[player].rightKey: players[player].x++
    }
  }
  collisionManager()
  scoreCounter()
}


function renderGame () {
  context.clearRect(0, 0, screen.width, screen.height)

  for (const player in players) {
    context.fillStyle = players[player].color
    context.fillRect(
      players[player].x,
      players[player].y,
      players[player].width,
      players[player].height
    )
  }

  context.fillStyle = enemie.color
  context.fillRect(enemie.x, enemie.y, enemie.width, enemie.height)

  requestAnimationFrame(renderGame)
}

function createGame () {
  for (const player in players) {
    console.log(players[player].username)
  }

  document.addEventListener('keydown', keyDownHandler)

  renderGame()
}

createGame()
