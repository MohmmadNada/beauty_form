import IconLabel from "../iconLabel/iconLabel.js";
import Input from "../../atoms/input/input.js";
import ValidationSpan from "../../atoms/validationSpan/validationSpan.js"

export default class InputBlock {
  constructor({ inputType }) {
    const inputBlockElements = [new IconLabel(inputType), new Input(inputType), new ValidationSpan()]
    const inputBlockContainer = document.createElement("div")
    inputBlockContainer.classList.add("input-block-container")
    inputBlockElements.forEach(element => {
      inputBlockContainer.appendChild(element)
    });
    return inputBlockContainer
  }

  static isValidEmail() {
    const email = document.getElementById("email");
    const validationIcon = document.querySelector(
      `#${email.id} + span`
    );
    validationIcon.style.display = "inline";
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
      validationIcon.innerHTML = "&#10003;";
      return email.value;
    } else {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
  }

  static isValidUsername() {
    const username = document.getElementById("username");
    const validationIcon = document.querySelector(
      `#${username.id} + span`
    );
    validationIcon.style.display = "inline";
    if (/^[a-z][a-z\-\ ]+$/.test(username.value)) {
      validationIcon.innerHTML = "&#10003;";
      return username.value;
    } else {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
  }

  static isValidPassword() {
    const firstPassword = document.getElementById("password");
    const validationIcon = document.querySelector(
      `#${firstPassword.id} + span`
    );
    validationIcon.style.display = "inline";
    let isMeetPasswordReqs = [];
    // Check if it contain at least one Capital letter
    if (
      /[A-Z]/.test(firstPassword.value) &&
      /[a-z]/.test(firstPassword.value)
    ) {
      isMeetPasswordReqs.push(true);
    } else {
      isMeetPasswordReqs.push(false);
    }
    // Check if it contain at least one Special Char
    if (/[_&@*#$!\-]/g.test(firstPassword.value)) {
      isMeetPasswordReqs.push(true);
    } else {
      isMeetPasswordReqs.push(false);
    }
    // Check if it contain at least one Number
    if (/[\d]/.test(firstPassword.value)) {
      isMeetPasswordReqs.push(true);
    } else {
      isMeetPasswordReqs.push(false);
    }
    if (firstPassword.value.length >= 8) {
      // The length must be more than 7 chars
      isMeetPasswordReqs.push(true);
    } else {
      isMeetPasswordReqs.push(false);
    }
    if (isMeetPasswordReqs.every((isMeet) => isMeet == true)) {
      validationIcon.innerHTML = "&#10003;";
      return firstPassword.value;
    } else {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
  }

  static isPasswordMatch() {
    const firstPassword = document.getElementById("password");
    const secondPassword = document.getElementById("confirmPassword");
    const validationIcon = document.querySelector(
      `#${secondPassword.id} + span`
    );
    validationIcon.style.display = "inline";
    if (!firstPassword.value || secondPassword.value != firstPassword.value) {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
    if (secondPassword.value == firstPassword.value) {
      validationIcon.innerHTML = "&#10003;";
      return true;
    }
  }
}