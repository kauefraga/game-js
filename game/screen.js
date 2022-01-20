export const screenSize = { width: 20, height: 20 }

export default class Screen {
  constructor (width, height) {
    this.width = width || screenSize.width
    this.height = height || screenSize.height
  }
}
