import { inputAttrs} from "../../../../constants.js";
export default class GenderRadioComponent {
    constructor(form, genderType) {
      GenderRadioComponent.createGenderRadio(form, genderType);
    }
    static createGenderRadio(form, genderType) {
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