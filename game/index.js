//ik haal hier canvas op en sla het op in een variable
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class player{
constructor(){
    this.position = {
        x: 100,
        y: 100
    }
    this.width = 100
    this.height = 100
}
draw(){
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
}

}

const player = new player()
    player.draw()
