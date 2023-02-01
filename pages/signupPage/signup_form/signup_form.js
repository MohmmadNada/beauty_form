
import User from "../../../models/user_model.js"
import ErrorMessage from "../form_errors/create_form_error.js"
import CountryComponent from "./input_components/country_list_component.js"
import GenderRadioComponent from "./input_components/gender_button_component.js"
import EmailComponent from "./input_components/email_input_component.js"
import UsernameComponent from "./input_components/username_input_component.js"
import PasswordComponent from "./input_components/password_input_component.js"
import ConfirmPasswordComponent from "./input_components/confirm_password_component.js"

export default class SignUpForm {
    constructor() {
      const formElement = SignUpForm.createSignUpForm();
      SignUpForm.createRegistrationHeader(formElement);
      new EmailComponent();
      new UsernameComponent();
      new PasswordComponent();
      new ConfirmPasswordComponent();
      new CountryComponent(formElement);
      new GenderRadioComponent(formElement, "male");
      new GenderRadioComponent(formElement, "female");
      SignUpForm.createAgreeTermsComponent(formElement);
      SignUpForm.createRegisterButton(formElement);
      SignUpForm.addEventToForm();
    }
  
    static createSignUpForm() {
      const formElement = document.createElement("form");
      document.body.appendChild(formElement);
      const containerDiv = document.createElement("div");
      containerDiv.setAttribute("id", "container");
      formElement.appendChild(containerDiv);
      return containerDiv;
    }
  
    static createRegistrationHeader(form) {
      const headerElement = document.createElement("div");
      headerElement.classList.add("main-div");
      headerElement.classList.add("registration-header");
      headerElement.textContent = "Registration";
      form.appendChild(headerElement);
    }
  
    static createAgreeTermsComponent(form) {
      const agreeTermContainer = document.createElement("div");
      agreeTermContainer.classList.add("main-div");
      const pElement = document.createElement("p");
      pElement.textContent = "By clicking Register, you agree on";
      const aElement = document.createElement("a");
      aElement.setAttribute("href", "./home_page.html");
      aElement.textContent = " terms and conditions";
      pElement.appendChild(aElement);
      agreeTermContainer.appendChild(pElement);
      form.appendChild(agreeTermContainer);
    }
  
    static createRegisterButton(form) {
      const submitButtonContainer = document.createElement("div");
      submitButtonContainer.classList.add("main-div");
      const submitButton = document.createElement("button");
      submitButton.setAttribute("type", "submit");
      submitButton.textContent = "Register";
      submitButtonContainer.appendChild(submitButton);
      form.appendChild(submitButtonContainer);
    }
  
    static getInvalidInputFields() {
      let invalidFields = [];
      if (!EmailComponent.isValidEmail()) {
        invalidFields.push("email");
      }
      if (!UsernameComponent.isValidUsername()) {
        invalidFields.push("username");
      }
      if (!PasswordComponent.isValidPassword()) {
        invalidFields.push("password");
      }
      if (!ConfirmPasswordComponent.isPasswordMatch()) {
        invalidFields.push("confirmPassword");
      }
      if (!CountryComponent.isCountrySelected()) {
        invalidFields.push("country");
      }
      if (!GenderRadioComponent.isGenderSelected()) {
        invalidFields.push("gender");
      }
      return invalidFields;
    }
    static addEventToForm() {
      document.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        const invalidFields = SignUpForm.getInvalidInputFields();
        if (invalidFields.length) {
          new ErrorMessage(invalidFields);
        } else {
          new User(
            document.getElementById("email").value,
            document.getElementById("username").value,
            document.getElementById("password-1").value,
            document.getElementById("country").value,
            document.querySelector('[name="gender"]:checked').id
          );
          window.location.href = "../pages/home_page.html";
        }
      });
    }
  }