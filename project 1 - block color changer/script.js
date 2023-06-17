let block = document.querySelector(".mainBlock")
let positionTextX = document.querySelector(".positionX")
let positionTextY = document.querySelector(".positionY")

block.addEventListener('mousemove', (e)=> {
    let opacity = (e.clientY - block.offsetTop)/block.clientHeight
    let color = Math.round((e.clientX - block.offsetLeft)/block.clientWidth*360)
    positionTextX.textContent = String(color)
    positionTextY.textContent = String(Math.round(opacity * 100))
    block.style.backgroundColor = `hsl(${color}, 80%, 50%)` //1-360
    block.style.opacity = `${opacity}`
})