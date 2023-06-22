let randomColor = [0, 0, 0]
let RGB = []
let endGame=false
const getH1=document.querySelector("h1")
const reset=document.querySelector("#reset")
const getMessage=document.querySelector("#message")
let randomCont
const getRGB = document.querySelector("#color-display")
const container = document.querySelectorAll(".square")
function selectRandomColor() {
    //  for(let i=0 ; i<randomColor.length;i++){
    //     randomColor[i]=Math.round(Math.random()*255)

    //  }
    randomColor = [randomNumber(), randomNumber(), randomNumber()]
    getRGB.innerHTML = `RGB(${randomColor.join(",")})`
    reset.addEventListener("click",ryLoad)
    console.log(randomColor)
    randomCont = container[Math.floor(Math.random() * container.length)]
    randomCont.style.backgroundColor = `rgb(${randomColor.join(",")})`
    randomCont.style.backgroundColor = `rgb(${randomColor.join(",")})`
    container.forEach(item => {
        if (item.style.backgroundColor != randomCont.style.backgroundColor) {
            item.style.backgroundColor = `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`
            // console.log(item)
        }

        console.log(item)
        item.addEventListener("click", btnHandler)
        // console.log(item.id)
    })
}
function ryLoad(){
    selectRandomColor()
    getH1.style.backgroundColor="#2C8E99"
    container.forEach(item=>{
        item.classList.remove('hidden')
    })
    // container.classList.remove('hidden')
    getMessage.innerHTML=""
    reset.innerHTML="New Color"
    endGame=false
}

function randomNumber() {
    return Math.round(Math.random() * 255)
}

selectRandomColor()