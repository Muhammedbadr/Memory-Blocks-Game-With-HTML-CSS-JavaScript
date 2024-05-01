var audio = document.getElementById("myAudio");

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
function stpeAudio(){
  

}
let btn = document.querySelector(".start-button span").onclick = function(){
  
  let yourname = prompt("Enter your name ")
  
  if(yourname == null || yourname == "") {
    document.querySelector(".name span").innerHTML = "null"
  }else{
    document.querySelector(".name span").innerHTML = yourname
  }
  document.querySelector(".start-button").remove()

  playAudio()
}
let duration = 1000 ;
let memory = document.querySelector(".momery-game-black")
const elements = document.querySelectorAll('.momery-game-black');



// let memoryintoArray = Array.from(memory.children)
let memoryintoArray = Array.from(Array.from(memory.children))

shurful(memoryintoArray)

let random = [...Array(memoryintoArray.length).keys()]


memoryintoArray.forEach((block , index) => {
  block.style.order = random[index];

block.addEventListener("click",function(){
    flipblock(block)
  })
}  
);


// for(let i= 0 ; i<memoryintoArray.length ; i++){
//   memoryintoArray[i].style.order=random[i]
//     memoryintoArray.addEventListener("click",function(){
//     flipblock(memoryintoArray[i])
//   })
// }
//flipblock function
function flipblock(selectdBlock){

  selectdBlock.classList.add("is-flipped")

  document.getElementById("successful").play()
  let allflippedblock = memoryintoArray.filter(filterblock => filterblock.classList.contains("is-flipped"))

  if(allflippedblock.length === 2){
    
    stopClick()

    checkMachedBlock(allflippedblock[0],allflippedblock[1])

  }
}

//stopClick function 
function stopClick (){
  memory.classList.add("no_clik")

  setTimeout(() =>{

    memory.classList.remove("no_clik")
  },duration)
}

// function

let triesElement = document.querySelector(".wrong-total span")
function checkMachedBlock(first,scend){


  if (first.dataset.images === scend.dataset.images){

    first.classList.remove("is-flipped")
    scend.classList.remove("is-flipped")
    first.classList.add("is-matched")
    scend.classList.add("is-matched")

    document.getElementById("correct").play()
}
else {
  triesElement.innerHTML =  parseInt(triesElement.innerHTML)+1;

  setTimeout(()=>{
    first.classList.remove("is-flipped") 
  scend.classList.remove("is-flipped")
},duration)
// document.getElementById("fail").play()

}
}

//random function 

function shurful(array){
  let current = array.length,
  temp,
  random;
  
  while (current > 0){
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current];

    array[current] = array[random];
    array[random] = temp;
  }
  return array
}


// alart 

