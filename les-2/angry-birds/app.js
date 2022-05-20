//. is voor class # is voor id niks voor tag
const bird = document.querySelector(".bird");
let count = 0;


bird.addEventListener("click", function() {
   count = count + 50;
    bird.style.left = count + "px" ;
});

