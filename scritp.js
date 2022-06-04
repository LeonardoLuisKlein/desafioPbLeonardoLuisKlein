const button = document.getElementById('button');
const nameInput = document.getElementById('fullname');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const birthdayInput = document.getElementById('birthday');
const termsInput = document.getElementById('checkboxbutton');
const form = document.getElementById('form')
const sucess = document.getElementById('sucess');

button.addEventListener('click', (event) => {
    event.preventDefault();
    checkInputs();

})

function checkInputs(){
    const nameValue = nameInput.value;
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const birthdayValue = birthdayInput.value;
    const termsValue = document.forms.checked;

    if(nameValue === '')
    {
        errorValidation(nameInput);
    } 
    
    if (emailValue === '' )
    {
        errorValidation(emailInput);
    } 
    
    if (phoneValue === '')
    {
        errorValidation(phoneInput);
    }
    
    if (passwordValue === '')
    {
        errorValidation(passwordInput);
    } 
    
    if(birthdayValue === '')
    {
        errorValidation(birthdayInput);
    }

    if(termsValue == false){
        errorValidation(termsInput)
    }

    else{
            form.classList = 'form back';
            sucess.classList = 'sucess go';
     }

}

function errorValidation(input){
    const formControl = input.parentElement;

    formControl.className = 'form-control error';
}

