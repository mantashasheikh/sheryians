let form = document.querySelector("form")
let inputs = document.querySelector("input")
let main = document.querySelector("#main")

form.addEventListener("submit", function(dets){
    dets.preventDefault()

    let card = document.createElement("div")
    card.classList.add("card")


    let profile = document.createElement("profile")
    profile.classList.add("profile")

    let img = document.createElement("img")
    img.setAttribute("src" , "")

    let h5 = document.createElement("h5")
    h5.textContent = "horse"
    let h3 = document.createElement("h3")
    h3.textContent = "Runnning"
    let p = document.createElement("p")
    p.textContent = "horse is  a very good animal . he runs fat."


    profile.appendChild(img)
    card.appendChild(profile)
    card.appendChild(h3)
    card.appendChild(h5)
    card.appendChild(p)


    main.appendChild(card)

    // card.appendChild(profile)
})