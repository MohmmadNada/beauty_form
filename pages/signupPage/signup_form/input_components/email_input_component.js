import InputComponent from "./input_component.js"
export default class EmailComponent extends InputComponent {
    constructor() {
      super(document.querySelector("#container"), "email");
      document
        .getElementById("email")
        .addEventListener("input", EmailComponent.isValidEmail);
    }
  
    static isValidEmail() {
      const email = document.getElementById("email");
      const validationIcon = document.querySelector(
        `#${email.id} + .validation-check`
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
  }
  