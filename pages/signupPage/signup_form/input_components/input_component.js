import { inputAttrs} from "../../../../constants.js";
export default class InputComponent {
    constructor(from, InputType) {
      InputComponent.createInputField(from, InputType);
    }
  
    static createInputField(from, InputType) {
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