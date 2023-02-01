import InputComponent from "./input_component.js"
export default class PasswordComponent extends InputComponent {
    constructor() {
      super(document.querySelector("#container"), "password-1");
      document
        .getElementById("password-1")
        .addEventListener("input", PasswordComponent.isValidPassword);
    }
  
    static isValidPassword() {
      const firstPassword = document.getElementById("password-1");
      const validationIcon = document.querySelector(
        `#${firstPassword.id} + .validation-check`
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
  }