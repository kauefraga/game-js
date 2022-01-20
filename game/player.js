import { screenSize } from './screen.js'

export default class Player {
  constructor (color = 'yellow', keys = 'wasd') {
    this.username = 'Player_' + Math.floor(Math.random() * 9999)
    this.color = color
    this.x = Math.floor(Math.random() * screenSize.width)
    this.y = Math.floor(Math.random() * screenSize.height)
    this.width = 1
    this.height = 1
    this.score = 0
    if (keys === 'arrows') {
      this.upKey = 'ArrowUp'
      this.leftKey = 'ArrowLeft'
      this.downKey = 'ArrowDown'
      this.rightKey = 'ArrowRight'
    } else {
      this.upKey = 'w'
      this.leftKey = 'a'
      this.downKey = 's'
      this.rightKey = 'd'
    }
  }
}

