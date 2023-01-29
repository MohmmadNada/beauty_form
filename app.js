const emoji = ["💩", "👯‍", "😸", "🏄", "🚀", "🔥", "🎉", "😄", "🦁"];
let separator = `${emoji[0]} ${emoji[0]} ${emoji[0]} ${emoji[0]} ${emoji[0]} \n`;
console.log(separator);

const emailElement = document.getElementById("email");
const usernameElement = document.getElementById("username");
const passwordOneElement = document.getElementById("password-1");
const passwordTwoElement = document.getElementById("password-2");
const formElement = document.getElementsByTagName("form");

formElement[0].addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // let allInputs = document.querySelectorAll("input");
  const email = document.getElementById("email");
  const username = document.getElementById("username");
  const password1 = document.getElementById("password-1");
  const password2 = document.getElementById("password-2");
  let errorMsg = document.getElementById("error-msg");
  errorMsg.innerText = "";

  if (!isValidEmail(email)) {
    errorMsg.innerText += "Invalid email address! ";
  }
  if (!isValidUserName(username)) {
    errorMsg.innerText += "Invalid User Name! ";
  }
  if (!isValidPassword(password1)) {
    errorMsg.innerText += "Invalid Password!";
  }
  if (!isPasswordMatch(password1, password2)) {
    errorMsg.innerText += "Those passwords didn’t match.";
  }
  let select = document.querySelector("select");
  let selectedOption = select.options[select.selectedIndex];
  if (selectedOption.value == false) {
    errorMsg.innerText += "Select the country!";
  }

  let gender = getGenderType();
}

function isValidEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    return true;
  }
  return false;
}

function isValidUserName(username) {
  if (/^[a-zA-Z][a-zA-Z\-\ ]+$/.test(username.value)) {
    return true;
  }
  return false;
}

function isValidPassword(password) {
  let isMeetPasswordReqs = [];
  // Check if it contain at least one Capital letter
  if (/[A-Z]/.test(password.value) && /[a-z]/.test(password.value)) {
    isMeetPasswordReqs.push(true);
  } else {
    isMeetPasswordReqs.push(false);
  }
  // Check if it contain at least one Special Char
  if (/[_&@*#$!\-]/g.test(password.value)) {
    isMeetPasswordReqs.push(true);
  } else {
    isMeetPasswordReqs.push(false);
  }
  // Check if it contain at least one Number
  if (/[\d]/.test(password.value)) {
    isMeetPasswordReqs.push(true);
  } else {
    isMeetPasswordReqs.push(false);
  }
  return isMeetPasswordReqs.every((isMeet) => isMeet == true) ? true : false;
}

function isPasswordMatch(password, confirmPassword) {
  if (password.value == confirmPassword.value) {
    return true;
  }
  return false;
}

function getGenderType() {
  if (document.querySelector('[id="female"]').checked) {
    gender = "female";
  } else if (document.querySelector('[id="male"]').checked) {
    gender = "male";
  } else {
    document.getElementById("error-msg").innerText += "Select the Gender!";
  }
}
