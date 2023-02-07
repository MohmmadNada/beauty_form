import Icon from "../../atoms/icon/icon.js"
import Label from "../../atoms/label/label.js"

export default class IconLabel {
    constructor(inputType) {
        const iconElement = new Icon(inputType);
        const labelElement = new Label(inputType);
        labelElement.classList.add("icon-label");
        labelElement.appendChild(iconElement)
        return labelElement
    }
}
