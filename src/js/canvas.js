import platform from '../img/platform.png';
import hills from '../img/hills.png';
import background from '../img/background.png';
import platformSmallTall from '../img/platformSmallTall.png';

import spriteRunLeft from '../img/spriteRunLeft.png';
import spriteRunRight from '../img/spriteRunRight.png';
import spriteStandLeft from '../img/spriteStandLeft.png';
import spriteStandRight from '../img/spriteStandRight.png';
// audio van bart
console.log(platform);

//ik haal hier canvas op en sla het op in een variable
const canvas = document.querySelector('canvas')

const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = 1.5
class Player {
    constructor() {
        this.speed = 10
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.width = 66
        this.height = 150

        this.image= createImage(spriteStandRight)
    }
    draw() {
        c.drawImage(this.image,0,0,177,400, this.position.x, this.position.y, this.width, this.height)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
            this.velocity.y += gravity
       
    }
}

class Platform {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height

        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}


class GenericObject {
    constructor({x, y, image}) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height

        this.image = image
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }
}
function createImage(imageSrc){ 
    const image = new Image()
    image.src = imageSrc 
    return image

}

let platformImage = createImage(platform)
let platformSmallTallImage = createImage(platformSmallTall)

let player = new Player()
let platforms = []

let genericObject = [
    
]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
}

let scrollOffset = 0
function init(){


 platformImage = createImage(platform)

 player = new Player()
 platforms = [new Platform({x: platformImage.width *4 +300 -2 + platformImage.width - platformSmallTallImage.width, y: 270, image: createImage(platformSmallTall)}),
     new Platform({x:-1, y: 470, image: platformImage}), new Platform({x: platformImage.width -3, y: 470, image: platformImage}),
    new Platform({x: platformImage.width *2 + 100, y: 470, image: platformImage}),new Platform({x: platformImage.width *3 +300, y: 470, image: platformImage}),
    new Platform({x: platformImage.width *4 + 300 -2, y: 470, image: platformImage}),
    new Platform({x: platformImage.width *5 + 700 -2, y: 470, image: platformImage})
    
]

 genericObject = [
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(background)
    }),
    new GenericObject({
        x: -1,
        y: -1,
        image: createImage(hills)
    })
]



 scrollOffset = 0
}
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'white'
    c.fillRect(0, 0, canvas.width, canvas.height)

    genericObject.forEach(genericObject=> {
        genericObject.draw()
    })

    platforms.forEach(platform =>{
        platform.draw()
    } )
    player.update()
    

    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = player.speed
    } else if ((keys.left.pressed && player.position.x > 100) || keys.left.pressed && scrollOffset ===0 && player.position.x >0) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0
    
        if(keys.right.pressed){
            scrollOffset += player.speed
            platforms.forEach(platform =>{
                platform.draw()
                platform.position.x -= player.speed
            } )
            genericObject.forEach(genericObject =>{
                genericObject.position.x -= player.speed * 0.66
            })
        }else if(keys.left.pressed && scrollOffset > 0){
            scrollOffset -= 5
            platforms.forEach(platform =>{
                platform.draw()
                platform.position.x += player.speed
            } )
            genericObject.forEach(genericObject =>{
                genericObject.position.x += player.speed * 0.66
            })
        }
    }

    
    // platform detection
    platforms.forEach(platform =>{
    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
        player.velocity.y = 0
    }
} )
//win senario
if (scrollOffset > platformImage.width *5 + 700 -2 ){
    console.log('you win')
}
//lose senario
if(player.position.y > canvas.height){
    init()
}
}
init()
animate()

addEventListener('keydown', ({
    keyCode
}) => {
    // audio.play();
    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            break

        case 83:

            break

        case 68:
            keys.right.pressed = true
            break

        case 87:
            player.velocity.y -= 20
            break
    }
})
addEventListener('keyup', ({
    keyCode
}) => {
    // console.log(keyCode)
    switch (keyCode) {
        case 65:
            console.log('left')
            keys.left.pressed = false
            break

        case 83:
            console.log('down')

            break

        case 68:
            console.log('right')
            keys.right.pressed = false
            break

        case 87:
            console.log('up')
            player.velocity.y -= 20
            break
    }
})