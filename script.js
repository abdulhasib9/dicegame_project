

function dice (){
    let random = Math.floor(Math.random()*6)+1 //1-6

let randomDiceImage = "dice"+random+".png"
let randomImageSource = "images/"+randomDiceImage
let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src",randomImageSource)

let random2=Math.floor(Math.random()*6)+1
let image2 = document.querySelectorAll("img")[1]
let randomImageSource2="images/dice"+random2+".png"
image2.setAttribute("src",randomImageSource2) 

let result = document.querySelector("#won")

if(random >random2){
result.innerHTML="Player one Won!"
}else if (random<random2){
    result.innerHTML="player two Won!"
}else{
    result.innerHTML="No Body Won!"
}
}


