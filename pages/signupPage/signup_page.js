import SignUpErrorComponent from "./form_errors/error_container.js"
import SignUpForm from "./signup_form/signup_form.js"

class SignUpPage {
  constructor() {
    new SignUpForm();
    new SignUpErrorComponent();
  }
}

new SignUpPage();
