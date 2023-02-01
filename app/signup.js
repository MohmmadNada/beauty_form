import User from "../models/user_model.js";

const inputAttrs = {
  check: {
    iconClass: "validation-check",
  },
  email: {
    iconClass: "fa-regular fa-envelope",
    placeholder: "Email",
  },
  username: {
    iconClass: "fa-regular fa-user",
    placeholder: "User Name",
  },
  "password-1": {
    iconClass: "fa-solid fa-shield-halved",
    placeholder: "Password",
  },
  "password-2": {
    iconClass: "fa-solid fa-shield-halved",
    placeholder: "Confirm Password",
  },
  genderCheck: {
    iconClass: "fa-solid fa-circle-check gender-icon",
  },
};

class CountryComponent {
  constructor(form) {
    CountryComponent.createCountryList(form);
  }
  static createCountryList(form) {
    const countryListContainer = document.createElement("div");
    countryListContainer.classList.add("main-div");
    countryListContainer.classList.add("input-field");
    // Do it one line
    const selectList = document.createElement("select");
    selectList.setAttribute("id", "country");
    // Move it Outer
    // [{label: "country", value:""}]
    const countries = {
      default: {
        countryName: "Country",
        countryValue: "",
      },
      US: {
        countryName: "United State",
        countryValue: "US",
      },
      UK: {
        countryName: "United kingdom",
        countryValue: "UK",
      },
    };
    // TODO: ...
    Object.values(countries).forEach((country) => {
      let countryElement = document.createElement("option");
      countryElement.value = country.countryValue;
      countryElement.textContent = country.countryName;
      selectList.appendChild(countryElement);
    });
    countryListContainer.appendChild(selectList);
    form.appendChild(countryListContainer);
  }
  // For Consistency
  static isCountrySelected() {
    const selectedCountry = document.getElementById("country").value;
    if (!selectedCountry) {
      return false;
    }
    return true;
  }
}
class InputComponent {
  constructor(from, InputType) {
    // TODO: Move it to static fun
    const InputContainer = document.createElement("div");
    InputContainer.classList.add("main-div");
    InputContainer.classList.add("input-field");
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", InputType);
    const iconElement = document.createElement("i");
    iconElement.className = inputAttrs[InputType].iconClass;
    labelElement.appendChild(iconElement);
    const inputField = document.createElement("input");
    inputField.setAttribute("name", InputType);
    inputField.setAttribute("id", InputType);
    inputField.setAttribute("placeholder", inputAttrs[InputType].placeholder);
    inputField.setAttribute(
      "type",
      InputType.includes("password") ? "password" : "text"
    );
    const checkSpan = document.createElement("span");
    checkSpan.className = inputAttrs.check.iconClass;
    checkSpan.textContent = "&#x2718;";
    InputContainer.appendChild(labelElement);
    InputContainer.appendChild(inputField);
    InputContainer.appendChild(checkSpan);
    from.appendChild(InputContainer);
  }
}
class EmailComponent extends InputComponent {
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

class UsernameComponent extends InputComponent {
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

class PasswordComponent extends InputComponent {
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
    // Change test
    // Refactor
    // Try switch
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

class ConfirmPasswordComponent extends InputComponent {
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
    // TODO: Refactor
    if (
      !firstPassword.value.length &&
      secondPassword.value == firstPassword.value
    ) {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
    if (secondPassword.value == firstPassword.value) {
      validationIcon.innerHTML = "&#10003;";
      return true;
    } else {
      validationIcon.innerHTML = "&#x2718;";
      return false;
    }
  }
}

class GenderRadioComponent {
  constructor(form, genderType) {
    // TODO: Use static to create
    const ButtonsContainer = document.createElement("div");
    ButtonsContainer.classList.add("main-div");
    const maleRadioButton = document.createElement("input");
    maleRadioButton.setAttribute("type", "radio");
    maleRadioButton.setAttribute("name", "gender");
    maleRadioButton.setAttribute("id", genderType);
    ButtonsContainer.appendChild(maleRadioButton);
    const genderIconCheck = document.createElement("i");
    genderIconCheck.className = inputAttrs.genderCheck.iconClass;
    ButtonsContainer.appendChild(genderIconCheck);
    const genderLabel = document.createElement("label");
    genderLabel.setAttribute("for", genderType);
    genderLabel.textContent =
      genderType.charAt(0).toUpperCase() + genderType.slice(1);
    ButtonsContainer.appendChild(genderLabel);
    form.appendChild(ButtonsContainer);
  }
  static isGenderSelected() {
    if (document.querySelector('[id="female"]').checked) {
      return "female";
    } else if (document.querySelector('[id="male"]').checked) {
      return "male";
    }
    return false;
  }
}

class SignUpForm {
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
    document.getElementsByTagName("form");
    // TODO: Use static method
    // On submit
    // https://www.w3schools.com/jsref/event_onsubmit.asp
    document.querySelector("form").addEventListener("submit", (e) => {
      // e.preventDefault();
      const invalidFields = SignUpForm.getInvalidInputFields();
      if (invalidFields.length) {
        new ErrorMessage(invalidFields);
      } else {
        // target.country
        new User(
          document.getElementById("email").value,
          document.getElementById("username").value,
          document.getElementById("password-1").value,
          document.getElementById("country").value,
          document.querySelector('[name="gender"]:checked').id
        );
      }
    });
  }

  static createSignUpForm() {
    const formElement = document.createElement("form");
    formElement.setAttribute("action", "./home_page.html");
    // formElement.setAttribute("method", "get");
    document.body.appendChild(formElement);
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container");
    formElement.appendChild(containerDiv);
    return containerDiv;
  }

  static createRegistrationHeader(form) {
    // Title
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
}
class SignUpErrorComponent {
  constructor() {
    const errorContainer = document.createElement("div");
    errorContainer.classList.add("error-container");
    document.body.appendChild(errorContainer);
  }
}
class SignUpPage {
  constructor() {
    new SignUpForm();
    new SignUpErrorComponent();
  }
}

new SignUpPage();

class ErrorMessage {
  constructor(errorTypes) {
    ErrorMessage.removePreErrors();
    ErrorMessage.createErrorMessages(errorTypes);
    ErrorMessage.showErrorDiv();
  }

  static createErrorMessages(errorTypes) {
    // Outer
    const errorMessages = {
      email: "Invalid Email Address",
      username: "Invalid Username",
      password: "Invalid Password",
      confirmPassword: "Those Passwords didn't match",
      country: "Select country",
      gender: "Select Gender",
    };
    errorTypes.forEach((errorType) => {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error-msg");
      errorElement.innerText = errorMessages[errorType];
      document.querySelector("div.error-container").appendChild(errorElement);
    });
  }

  static removePreErrors() {
    const parentDiv = document.querySelector(".error-container");
    parentDiv.classList.remove("error-animation");
    let child = parentDiv.lastElementChild;
    while (child) {
      parentDiv.removeChild(child);
      child = parentDiv.lastElementChild;
    }
  }

  static showErrorDiv() {
    window.setTimeout(() => {
      document
        .querySelector("div.error-container")
        .classList.add("error-animation");
    }, 10);
  }
}
