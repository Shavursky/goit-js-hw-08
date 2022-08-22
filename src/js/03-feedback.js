import throttle from 'lodash.throttle'
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

populateMessage();


form.addEventListener("submit", onFormSubmit);
email.addEventListener('input', throttle(onMessageEmail, 500));
message.addEventListener('input', throttle(onMessageEmail, 500));



function onFormSubmit(e) {
    e.preventDefault();
    console.log({email: e.target.email.value, message: e.target.message.value})
    e.target.reset();
    localStorage.removeItem("feedback-form-state");
    
}

function onMessageEmail() {
    const input = email.value;
    const textarea = message.value;
    localStorage.setItem("feedback-form-state", JSON.stringify({email: input, message: textarea}));    
}


function populateMessage() {
    const savedForm = localStorage.getItem("feedback-form-state")
    if (savedForm) {
        const parsedData = JSON.parse(savedForm);
        email.value = parsedData.email;
        message.value = parsedData.message;
    }    
}