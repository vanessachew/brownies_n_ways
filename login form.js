const password = document.getElementById('password')
const username = document.getElementById('username')
const LogIn = document.getElementById('LogIn')
const errorElement = document.getElementById('error')

LogIn.addEventListener('submit', (e) => {
    let messages = []
        if (username.value === "" || username.value === null) {
            messages.push('Username is required')
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

function showPassword() {
    var p = document.getElementById("password");
    if (p.type === "password") {
      p.type = "text";
    } 
    else {
      p.type = "password";
    }
}
