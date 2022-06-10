//Tips:
//Maak gebruik van de andere manier om functies te maken
//Maak meer gebruik van comments
//In je index.html heb je de style tag gebruikt, maak gebruik van een style.css bestand in plaats van de style tag
//Tops:
//Goed gebruik van canvas
//Goede manier van variabelen aanmaken gebruikt
//In je index.html heb je de juiste manier van je JS linken gebruikt

//ik haal hier canvas op en sla het op in een variable
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const gravity= 1.5
class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 30
        this.height = 30
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
update(){
    this.draw()
    this.position.y += this.velocity.y

    if(this.position.y + this.height +  this.velocity.y <= canvas.height)
    this.velocity.y += gravity
    else this.velocity.y = 0
}
}

const player = new Player()
player.update()

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0, canvas.width, canvas.height)
    player.update()
}
animate()
