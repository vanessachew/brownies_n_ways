const username = document.getElementById('username')
const email = document.getElementById('email')
const question = document.getElementById('question')
const ContactForm = document.getElementById('ContactForm')
const errorElement = document.getElementById('error')



ContactForm.addEventListener('submit', (e) => {
    let messages = []
        if (username.value === "" || username.value === null) {
            messages.push('Username is required')
        }

        if (email.value === "" || email.value === null) {
            messages.push('Email is required')
        }

        if (question.value === "" || question.value === null) {
            messages.push('Question must be filled in')
        }
        
        if (question.value.length <= 25){
            messages.push('Questions must be longer than 25 characters')
        }

        if (question.value.length >= 100){
            messages.push ('Questions must be shorter than 100 characters')
        }
        

        if (messages.length > 0){
            e.preventDefault()
            errorElement.innerText = messages.join(', ')
        }else {
            window.open("HOME.html");
        }
})


function validateEmail(){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(ContactForm.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}