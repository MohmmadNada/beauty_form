import InputComponent from "./input_component.js"
export default class UsernameComponent extends InputComponent {
    constructor() {
      super(document.querySelector("#container"), "username");
      document
        .getElementById("username")
        .addEventListener("input", UsernameComponent.isValidUsername);
    }
  
    static isValidUsername() {
      const username = document.getElementById("username");
      const validationIcon = document.querySelector(
        `#${username.id} + .validation-check`
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
  }