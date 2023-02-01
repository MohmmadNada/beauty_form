import { User } from "../models/user_model.js";
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
    const countryListContainer = document.createElement("div");
    countryListContainer.classList.add("main-dev");
    countryListContainer.classList.add("input-field");
    const selectList = document.createElement("select");
    selectList.setAttribute("id", "country");
    let countries = {
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
    Object.values(countries).forEach((country) => {
      let countryElement = document.createElement("option");
      countryElement.value = country["countryValue"];
      countryElement.textContent = country["countryName"];
      selectList.appendChild(countryElement);
    });
    countryListContainer.appendChild(selectList);
    form.appendChild(countryListContainer);
  }
}
class InputComponent {
  constructor(from, InputType) {
    const InputContainer = document.createElement("div");
    InputContainer.classList.add("main-dev");
    InputContainer.classList.add("input-field");
    const labelElement = document.createElement("label");
    labelElement.setAttribute("for", InputType);
    const iconElement = document.createElement("i");
    iconElement.className = inputAttrs[InputType]["iconClass"];
    labelElement.appendChild(iconElement);
    const inputField = document.createElement("input");
    inputField.setAttribute("name", InputType);
    inputField.setAttribute("id", InputType);
    inputField.setAttribute(
      "placeholder",
      inputAttrs[InputType]["placeholder"]
    );
    inputField.setAttribute(
      "type",
      InputType.includes("password") ? "password" : "text"
    );
    const checkSpan = document.createElement("span");
    checkSpan.className = inputAttrs["check"]["iconClass"];
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

class Password1Component extends InputComponent {
  constructor() {
    super(document.querySelector("#container"), "password-1");
    document
      .getElementById("password-1")
      .addEventListener("input", Password1Component.isValidPassword);
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

class ConfirmPasswordComponent extends InputComponent {
  constructor() {
    super(document.querySelector("#container"), "password-2");
    document
      .getElementById("password-2")
      .addEventListener("input", ConfirmPasswordComponent.isPasswordMatch);
  }

  static isPasswordMatch() {
    const firstPassword = document.getElementById("password-1");
    // On submit
    const secondPassword = document.getElementById("password-2");
    const validationIcon = document.querySelector(
      `#${secondPassword.id} + .validation-check`
    );
    validationIcon.style.display = "inline";
    if (!firstPassword.value.length) {
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
    const ButtonsContainer = document.createElement("div");
    ButtonsContainer.classList.add("main-dev");
    const maleRadioButton = document.createElement("input");
    maleRadioButton.setAttribute("type", "radio");
    maleRadioButton.setAttribute("name", "gender");
    maleRadioButton.setAttribute("id", genderType);
    ButtonsContainer.appendChild(maleRadioButton);
    const genderIconCheck = document.createElement("i");
    genderIconCheck.className = inputAttrs["genderCheck"]["iconClass"];
    ButtonsContainer.appendChild(genderIconCheck);
    const genderLabel = document.createElement("label");
    genderLabel.setAttribute("for", genderType);
    genderLabel.textContent =
      genderType.charAt(0).toUpperCase() + genderType.slice(1);
    ButtonsContainer.appendChild(genderLabel);
    form.appendChild(ButtonsContainer);
  }
}
class SignUpForm {
  constructor() {
    const formElement = SignUpForm.createSignUpForm();
    SignUpForm.createRegistrationHeader(formElement);
    new EmailComponent();
    new UsernameComponent();
    new Password1Component();
    new ConfirmPasswordComponent();
    new CountryComponent(formElement);
    new GenderRadioComponent(formElement, "male");
    new GenderRadioComponent(formElement, "female");
    SignUpForm.createAgreeTermsComponent(formElement);
    SignUpForm.createRegisterButton(formElement);
  }

  static createSignUpForm() {
    const formElement = document.createElement("form");
    formElement.setAttribute("action", "./home_page.html");
    formElement.setAttribute("method", "get");
    document.body.appendChild(formElement);
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container");
    formElement.appendChild(containerDiv);
    return containerDiv;
  }

  static createRegistrationHeader(form) {
    const headerElement = document.createElement("div");
    headerElement.classList.add("main-dev");
    headerElement.classList.add("registration-header");
    headerElement.textContent = "Registration";
    form.appendChild(headerElement);
  }

  static createAgreeTermsComponent(form) {
    const agreeTermContainer = document.createElement("div");
    agreeTermContainer.classList.add("main-dev");
    const pElement = document.createElement("p");
    pElement.textContent = "By clicking Register, you agree on";
    const aElement = document.createElement("a");
    aElement.setAttribute("href", "./home_page.html");
    aElement.textContent = "terms and conditions";
    pElement.appendChild(aElement);
    agreeTermContainer.appendChild(pElement);
    form.appendChild(agreeTermContainer);
  }
  static createRegisterButton(form) {
    const submitButtonContainer = document.createElement("div");
    submitButtonContainer.classList.add("main-dev");
    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.textContent = "Register";
    submitButtonContainer.appendChild(submitButton);
    form.appendChild(submitButtonContainer);
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

const formElement = document.getElementsByTagName("form");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // Prevent Default =>
  let meetReq = new Set();
  let emailValue;
  let usernameValue;
  let passwordValue;
  let countryValue;
  let genderValue;
  document
    .querySelector("div.error-container")
    .classList.remove("error-animation");
  removePreErrors();
  if (!isValidEmail()) {
    createErrorMsg("email");
    meetReq.add(false);
  } else {
    emailValue = isValidEmail();
  }
  if (!isValidUsername()) {
    createErrorMsg("username");
    meetReq.add(false);
  } else {
    usernameValue = isValidUsername();
  }
  if (!isValidPassword()) {
    createErrorMsg("first password");
    meetReq.add(false);
  } else {
    passwordValue = isValidPassword();
  }
  if (!isPasswordMatch()) {
    createErrorMsg("second password");
    meetReq.add(false);
  }
  if (!isCountrySelected()) {
    createErrorMsg("country");
    meetReq.add(false);
  } else {
    countryValue = isCountrySelected();
  }
  if (!isGenderSelected()) {
    createErrorMsg("gender");
    meetReq.add(false);
  } else {
    genderValue = isGenderSelected();
  }
  window.setTimeout(function () {
    document
      .querySelector("div.error-container")
      .classList.add("error-animation");
  }, 10);
  if (!meetReq.has(false)) {
    const userObj = new User(
      emailValue,
      usernameValue,
      passwordValue,
      countryValue,
      genderValue
    );
    let userSerialized = JSON.stringify(userObj);
    localStorage.setItem("User", userSerialized);
    let userDeserialized = JSON.parse(localStorage.getItem("User"));
    location.href = "./home_page.html";
  }
});

function isCountrySelected() {
  let select = document.querySelector("select");
  let selectedOption = select.options[select.selectedIndex];
  return selectedOption.value == false ? false : selectedOption.value;
}

function isGenderSelected() {
  if (document.querySelector('[id="female"]').checked) {
    return "female";
  } else if (document.querySelector('[id="male"]').checked) {
    return "male";
  }
  return false;
}

function createErrorMsg(errorType) {
  const errorsTypes = {
    country: "Select Country",
    gender: "Select Gender",
    "first password":
      "The password must have One or more Capital letters, \
      special char and number & The length must be more than 7 chars",
    "second password": "Those passwords didn’t match",
    username: "The user name must start with letter",
    email: "invalid email address",
    "empty field": "The empty field/s must be filled",
  };
  if (
    errorType === "empty field" &&
    document.getElementById("empty-field-error")
  ) {
    return;
  }
  const errorElement = document.createElement("div");
  if (errorType === "empty field") {
    errorElement.setAttribute("id", "empty-field-error");
  }
  errorElement.classList.add("error-msg");
  errorElement.innerText = errorsTypes[errorType];
  document.querySelector("div.error-container").appendChild(errorElement);
}

function removePreErrors() {
  const parentDiv = document.querySelector(".error-container");
  let child = parentDiv.lastElementChild;
  while (child) {
    parentDiv.removeChild(child);
    child = parentDiv.lastElementChild;
  }
}
