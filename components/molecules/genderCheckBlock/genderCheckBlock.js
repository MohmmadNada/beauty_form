import RadioButton from "../../atoms/radioButton/radioButton.js";
import Icon from "../../atoms/icon/icon.js";
import Label from "../../atoms/label/label.js";

export default class GenderCheckBlock {
    constructor(genderType) {
        const genderRadioButton = new RadioButton("gender", genderType);
        const checkIcon = new Icon("genderCheck");
        const genderLabel = new Label(genderType);
        genderLabel.textContent = genderType.charAt(0).toUpperCase() + genderType.slice(1)
        const genderBlockContainer = document.createElement("div")
        genderBlockContainer.classList.add("gender-container")
        genderBlockContainer.appendChild(genderRadioButton)
        genderBlockContainer.appendChild(checkIcon)
        genderBlockContainer.appendChild(genderLabel)
        return genderBlockContainer
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
