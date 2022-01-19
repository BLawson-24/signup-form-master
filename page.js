
const inputs = document.querySelectorAll('input')
console.log('inputs', inputs)

let submit = document.getElementById('claimButton');

// inputs.forEach(function logKey() {
//   submit.addEventListener('keyup', logKey);
//   function logKey(e) {
//       console.log(FirstName.textContent += `${e.code}`);
//   }
//   document.onkeyup = logKey;
// })

// inputs.forEach( function validateForm() {
//     submit.addEventListener("submit", inputs);
//     inputs.preventDefault();
//     // if(FirstName === ' ') {
//     //     FirstNameError.textContent = 'Enter a proper name';
//     //     return false;
//     // }
//     if (FirstName.value.trim === "") {
//     console.log(message, "First Name Must Not Be Empty");
//     FirstName.focus();
//     // return false;
//     }
//     if (LastName.value.trim === "") {
//     console.log("Last Name Must Not Be Empty");
//     // return false;
//     }
//     if (password.value.trim === "") {
//     console.log("Password Must Not Be Empty");
   
//     }
//     if (email.value.trim === "") {
//     console.log("Email Must Not Be Empty");
//     return false;
// }
//      return (true)

// })
// -----------------------------------------------------------------------------------

inputs.forEach(input => {
    console.log(input)
    input.addEventListener("keyup", e => {
      e.preventDefault()  
      const value = e.target.value
      const fieldName = e.target.attributes.name
      const element = document.getElementById(fieldName)
      if(fieldName === 'FirstName') {
        if(value === '') {
            className = "invalid"
        } else if(value.length > 0) {
            element.classList.add('valid')
            console.log("hey")
        }
    }
    
    })
});




// ------------------------------------------------------------------------------




































// submit.addEventListener("submit", function(event){
//     event.preventDefault();

//     let isFirstNameValid = checkFirstName(),
//     isLastNameValid = checkFirstName(),
//     isEmailValid = checkEmail(),
//     isPasswordValid = checkPassword();

//     let isFormValid = isFirstNameValid &&
//     isLastNameValid &&
//     isEmailValid &&
//     isPasswordValid;
// })

// function errorMessage() {
//     let LastError = document.getElementById("#LastError");
//     if(LastName === "") {
//         LastError.textContent = "Last Name should not be empty!"
//         LastError.style.color = "red"
//         preventDefault();
//     }
// }
