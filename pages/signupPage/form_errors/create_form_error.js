import {errorMessages } from "../../../constants.js";
export default class ErrorMessage {
    constructor(errorTypes) {
      ErrorMessage.removePreErrors();
      ErrorMessage.createErrorMessages(errorTypes);
      ErrorMessage.showErrorDiv();
    }
  
    static createErrorMessages(errorTypes) {
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
