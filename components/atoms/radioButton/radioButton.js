export default class RadioButton {
    constructor(inputName, inputId) {
        const radioButtonElement = document.createElement("input");
        radioButtonElement.setAttribute("type", "radio")
        radioButtonElement.setAttribute("name", inputName)
        radioButtonElement.setAttribute("id", inputId)
        return radioButtonElement
    }
}