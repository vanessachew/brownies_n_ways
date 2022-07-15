const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const username = document.getElementById('username')
const gender = document.getElementById("gender")
const email = document.getElementById('email')
const continent = document.getElementById('continent')
const country = document.getElementById('country')
const password = document.getElementById('password')
const SignUp = document.getElementById('SignUp')
const errorElement = document.getElementById('error')


SignUp.addEventListener('submit', (e) => {
    let messages = []
        if (firstName.value === "" || firstName.value === null) {
            messages.push('Firstname is required')
        }

        if (lastName.value === "" || lastName.value === null) {
            messages.push('Lastname is required')
        }

        if (username.value === "" || username.value === null) {
            messages.push('Username is required')
        }

        if (gender.value === "" || gender.value === null) {
            messages.push('Gender is required')
        }

        if (email.value === "" || email.value === null) {
            messages.push('Email is required')
        }

        if (continent.value === "" || continent.value === null) {
            messages.push('Continent is required')
        }

        if (country.value === "" || country.value === null) {
            messages.push('Country is required')
        }

        if (password.value === "" || password.value === null) {
            messages.push('Password is required')
        }

        if (password.value.length <= 7){
            messages.push ('Password must be longer than 7 characters')
        }

        if (password.value.length >= 15){
            messages.push ('Password must be shorter than 15 characters')
        }

        if (messages.length > 0){
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }else {
            window.open("HOME.html");
        }
})

let genderValue = male.checked ? "male" : "female"

function getGender() {
    return document.querySelector('input[name="gender"]:checked')
}

function validateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(SignUp.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

function showPassword() {
    var p = document.getElementById("password");
    if (p.type === "password") {
      p.type = "text";
    } 
    else {
      p.type = "password";
    }
}