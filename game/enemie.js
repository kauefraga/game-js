import { screenSize } from './screen.js'

export default class Enemie {
  constructor () {
    this.color = '#aa0000'
    this.x = Math.floor(Math.random() * screenSize.width)
    this.y = Math.floor(Math.random() * screenSize.height)
    this.width = 1
    this.height = 1
  }
}
