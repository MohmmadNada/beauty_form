export default class SignUpErrorComponent {
    constructor() {
      const errorContainer = document.createElement("div");
      errorContainer.classList.add("error-container");
      document.body.appendChild(errorContainer);
    }
  }