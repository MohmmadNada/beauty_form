export default class SignInForm {
    constructor() {
      const formElement = document.createElement("form");
      formElement.appendChild(SignInForm.createInputFieldComponent("email"));
      formElement.appendChild(SignInForm.createInputFieldComponent("password"));
      formElement.appendChild(SignInForm.createButtons());
      formElement.appendChild(SignInForm.createErrorsMessage());
      SignInForm.addSubmitEventToForm(formElement);
      return formElement;
    }
  
    static createInputFieldComponent(inputType) {
      const inputContainerDiv = document.createElement("div");
      inputContainerDiv.classList.add("input-field");
      const inputLabel = document.createElement("label");
      inputLabel.setAttribute("for", inputType);
      inputLabel.textContent =
        inputType.charAt(0).toUpperCase() + inputType.slice(1);
      inputContainerDiv.appendChild(inputLabel);
      const inputField = document.createElement("Input");
      inputField.setAttribute("type", (inputType=="password") ? "password" : "text");
      inputField.setAttribute("name", inputType);
      inputField.setAttribute("id", inputType);
      inputContainerDiv.appendChild(inputField);
      return inputContainerDiv;
    }
  
    static createButtons() {
      const buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("button-container");
      buttonsContainer.appendChild(SignInForm.createSignInButton());
      buttonsContainer.appendChild(SignInForm.createSignUpButton());
      return buttonsContainer;
    }
    static createSignInButton() {
      const buttonElement = document.createElement("button");
      buttonElement.setAttribute("type", "submit");
      buttonElement.textContent = "Sign In";
      return buttonElement;
    }
    static createSignUpButton() {
      const signupButton = document.createElement("button");
      const aElement = document.createElement("a");
      aElement.setAttribute("href", "../../pages/signupPage/signup.html");
      aElement.textContent = "Sign Up";
      signupButton.appendChild(aElement);
      return signupButton;
    }
  
    static createErrorsMessage() {
      const errorContainerDiv = document.createElement("div");
      errorContainerDiv.classList.add("error-container");
      const unfoundAccount = document.createElement("span");
      unfoundAccount.classList.add("unfound-account-msg");
      unfoundAccount.textContent =
        "Couldn't find you account, Check the email or password";
      errorContainerDiv.appendChild(unfoundAccount);
      const emptyEmailField = document.createElement("span");
      emptyEmailField.classList.add("empty-email-msg");
      emptyEmailField.textContent = "The Email field must be filled";
      errorContainerDiv.appendChild(emptyEmailField);
      const emptyPasswordField = document.createElement("span");
      emptyPasswordField.classList.add("empty-password-msg");
      emptyPasswordField.textContent = "The Password field must be filled";
      errorContainerDiv.appendChild(emptyPasswordField);
      return errorContainerDiv;
    }
  
    static addSubmitEventToForm(formElement) {
      formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        SignInForm.formValidation();
      });
    }
    static formValidation() {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const userDeserialized = JSON.parse(localStorage.getItem("User"));
      const registeredEmails = userDeserialized.email;
      const emailElement = document.querySelector(".empty-email-msg");
      const passwordElement = document.querySelector(".empty-password-msg");
      const unfoundMsg = document.querySelector(".unfound-account-msg");
      if (!email) {
        emailElement.style.display = "inline-block";
        window.setTimeout(() => {
          emailElement.style.display = "none";
        }, 5000);
      } else if (!password) {
        passwordElement.style.display = "inline-block";
        window.setTimeout(() => {
          passwordElement.style.display = "none";
        }, 5000);
      } else if (
        email === registeredEmails &&
        userDeserialized.password == password
      ) {
        location.href = "./pages/home_page.html";
      } else {
        unfoundMsg.style.display = "inline-block";
        window.setTimeout(() => {
          unfoundMsg.style.display = "none";
        }, 5000);
      }
    }
  }
  