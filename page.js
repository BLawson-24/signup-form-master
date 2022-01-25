const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementById("signUpForm")
const firstNameError = document.getElementById("firstNameError")

const submit = document.getElementById("submit");

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


form.addEventListener("submit", (e) => {
    if(firstName.value === '' || firstName.value === null) {
        e.preventDefault();
        firstName.classList.add("invalid");
        firstName.classList.remove("error")
    } else {
        firstName.classList.add("valid");
    }
    if(lastName.value === '' || lastName.value === null) {
        lastName.classList.add("invalid");
    } else {
        lastName.classList.add("valid");
    }
    // console.log("email", typeof email.value)
    if(!email.value.includes("@") && !email.value.includes(".com")) {
        email.classList.add("invalid");
        console.log("This field must not be empty.")
    } else {
        email.classList.add("valid");
    }
    if(password.value === '' || password.value === null || password.value.length <= 5) {
        password.classList.add("invalid");
    } else {
        password.classList.add("valid");
    }
    });
// form.addEventListener("submit", e => {
//     e.preventDefault();
//     if(firstName.value === '' || lastName.value === null) {
//         lastName.classList.add("invalid");
//     } else {
//         lastName.classList.add("valid");
//     }
// });


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
