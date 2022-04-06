const dino = document.getElementById("dino");
const cact = document.getElementById("cact");
let count = 0;

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        },300)
    }

}

document.addEventListener("keydown",function(event){
    jump();
});

let isAlive = setInterval(function(){
    //current man's Y pos
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //current fire's X pos
    let cactLeft = parseInt(window.getComputedStyle(cact).getPropertyValue("left"));
    
    //detect collision
    if(cactLeft < 50 && cactLeft > 0 && dinoTop >= 140 ){
        //collision
        alert("Game Over!");
    }
    else{
        count++;
    }
    console.log(count);
},10);