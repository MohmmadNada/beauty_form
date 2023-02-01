import SignInImage from "./signin_image.js"
import SignInForm from "./signin_form.js"

class SignInPage {
  constructor() {
    const containerDiv = SignInPage.createContainer();
    containerDiv.appendChild(new SignInForm());
    containerDiv.appendChild(new SignInImage());
  }

  static createContainer() {
    const containerDiv = document.createElement("div");
    containerDiv.setAttribute("id", "container");
    document.body.appendChild(containerDiv);
    return containerDiv;
  }
}

new SignInPage();
