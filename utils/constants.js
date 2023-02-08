const iconClass = {
  email: "fa-regular fa-envelope",
  username: "fa-regular fa-user",
  password: "fa-solid fa-shield-halved",
  confirmPassword: "fa-solid fa-shield-halved",
  genderCheck: "fa-solid fa-circle-check gender-icon",
}

const inputAttrs = {
  email: {
    name: "email",
    id: "email",
    placeholder: "Email",
    type: "text",
  },
  username: {
    name: "username",
    id: "username",
    placeholder: "User Name",
    type: "text",
  },
  password: {
    placeholder: "Password",
    name: "password",
    id: "password",
    type: "password",
  },
  confirmPassword: {
    placeholder: "Confirm Password",
    name: "confirmPassword",
    id: "confirmPassword",
    type: "password",
  },
};

const radioButtonsAttrs = [
  {
    name: "gender",
    id: "male",
  },
  {
    name: "gender",
    id: "female",
  }
]

const errorMessages = {
  email: "Invalid Email Address",
  username: "Invalid Username",
  password: "Invalid Password",
  confirmPassword: "Those Passwords didn't match",
  country: "Select country",
  gender: "Select Gender",
  "empty-field": "All fields are required",
  "wrong-email": "This Email doesn't exist, Try again",
  "wrong-password": "Wrong Password, Try again"
};

const countries = [
  {
    label: "Country",
    value: "",
  },
  {
    label: "United State",
    value: "US",
  },
  {
    label: "United kingdom",
    value: "UK",
  },
];

const signupElements = [
  {
    className: "Header",
    text: "Registration",
  },
  {
    className: "InputBlock",
    inputType: "email",
  },
  {
    className: "InputBlock",
    inputType: "username",

  },
  {
    className: "InputBlock",
    inputType: "password",

  },
  {
    className: "InputBlock",
    inputType: "confirmPassword",

  },
  {
    className: "SelectList",
  },
  {
    className: "GenderCheckBlock",
    genderType: "male",
  },
  {
    className: "GenderCheckBlock",
    genderType: "female",
  },
  {
    className: "AgreeTermsBlock",
  },
  {
    className: "Button",
    text: "Registration",
  }
]

const signinElements = [
  {
    className: "Header",
    text: "Sign In",
  },
  {
    className: "InputBlock",
    inputType: "email",
  },
  {
    className: "InputBlock",
    inputType: "password",
  },
  {
    className: "Button",
    text: "Sign In",
  },
]

export { inputAttrs, errorMessages, countries, iconClass, radioButtonsAttrs, signupElements, signinElements }