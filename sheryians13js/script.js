let email = document.querySelector("#email")
let password = document.querySelector("#password")
let form = document.querySelector("form")

form.addEventListener("submit" , function(dets){
    dets.preventDefault()
    const emailRegex = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
    const passwordRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

    let emailAns = emailRegex.test(email.value)
    let passwordAns = passwordRegex.test(password.value)

    if(!emailAns){
        document.querySelector("#emailError").textContent = "Email is incorrect"
        document.querySelector(".error").style.display = "initial"
    }
    if(!passwordAns){
        document.querySelector("#passwordError").textContent = "Password is incorrect"
        document.querySelector(".error").style.display = "initial"
    }


})