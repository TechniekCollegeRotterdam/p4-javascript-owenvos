//. is voor class # is voor id niks voor tag
const bird = document.querySelector(".bird");
let count = 0;


bird.addEventListener("click", function() {
   count = count + 50;
    bird.style.left = count + "px" ;
});

window.addEventListener("keydown", function(event){
    if(event.key == "ArrowRight"){
        count = count + 50;
        bird.style.left = count + "px" ;
        bird.src = "img/b-right.svg";
    };
    if(event.key == "ArrowLeft"){
        count = count - 50;
        bird.style.left = count + "px" ;
        bird.src = 'img/b-left.svg'
    };
    if(event.key == "ArrowUp"){
        count = count + 50;
        bird.style.bottom = count + "px" ;
        bird.src = "img/b-down.svg"
    };
    if(event.key == "ArrowDown"){
        count = count - 50;
        bird.style.bottom = count + "px" ;
        bird.src = "img/b-up.svg"
    };
});

