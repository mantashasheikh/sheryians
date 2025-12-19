let count = 0
let progress = document.querySelector(".progress-bar")
let progressPercent = document.querySelector("#progressPercent")

setInterval(function(){
    if(count <= 99){
        count++
        progress.style.width = `${count}%`
        progressPercent.textContent = `${count}%`
    }
},60)
