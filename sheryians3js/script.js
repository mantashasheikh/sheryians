let h1 = document.getElementById("main");
window.addEventListener("keydown" , function(dets){
    if(dets.key === " "){
        h1.textContent = "spc"
    }
    else{
        h1.textContent = dets.key
    }

})

