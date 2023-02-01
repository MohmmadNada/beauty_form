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

const errorMessages = {
  email: "Invalid Email Address",
  username: "Invalid Username",
  password: "Invalid Password",
  confirmPassword: "Those Passwords didn't match",
  country: "Select country",
  gender: "Select Gender",
};

export { inputAttrs, countries, errorMessages };