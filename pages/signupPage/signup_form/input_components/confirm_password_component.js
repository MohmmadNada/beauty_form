import InputComponent from "./input_component.js"
export default class ConfirmPasswordComponent extends InputComponent {
    constructor() {
      super(document.querySelector("#container"), "password-2");
      document
        .getElementById("password-2")
        .addEventListener("input", ConfirmPasswordComponent.isPasswordMatch);
    }
  
    static isPasswordMatch() {
      const firstPassword = document.getElementById("password-1");
      const secondPassword = document.getElementById("password-2");
      const validationIcon = document.querySelector(
        `#${secondPassword.id} + .validation-check`
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