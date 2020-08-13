const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, message) {
  const formControl = input.parentElement;
  // getting parent element (formcontrol div) ^^
  formControl.className = "form-control error";
  // changing the formControl class name to the above for error styling found in CSS
  const small = formControl.querySelector("small");
  small.innerText = message;
  // this is setting the error small text to = "username required"
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  // changing the formControl class name to the above for success styling found in CSS
}

function isValidEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
      showSuccess(input)
  } else {
      showError(input, "Email is not valid")
  }
//   return re.test(String(email).toLowerCase());

}

//Googled js regex email for the above ^^

function checkRequired(inputArray) {
  inputArray.forEach(function(input) {
    //trim removes whiteapce on both sides of a string
    console.log(input);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
      //the id was entered in the HTML
    } else {
      showSuccess(input);
    }
  });
}
//check length of emails and passwords
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`)
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be at least ${max} characters`)
    }
    else {
        showSuccess(input)
    }
}

function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, "Passswords don't match")
    }
}

//gets Field Name and capitilizes first letter
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listeners
form.addEventListener("submit", function(event) {
  event.preventDefault();

  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  isValidEmail(email);
  passwordMatch(password, password2)


  //   if (username.value === "") {
  //     showError(username, "Username is required");
  //   } else {
  //     showSuccess(username);
  //   }
  //   if (email.value === "") {
  //     showError(email, "Email is required");
  //   } else if (!isValidEmail(email.value)) {
  //     showError(email, "Email is not valid");
  //   } else {
  //     showSuccess(email);
  //   }

  //   if (password.value === "") {
  //     showError(password, "Password is required");
  //   } else {
  //     showSuccess(password);
  //   }

  //   if (password2.value === "") {
  //     showError(password2, "Password confirmation is required");
  //   } else {
  //     showSuccess(password2);
  //   }
});
