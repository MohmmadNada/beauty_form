export default class RadioButton {
    constructor(inputId) {
        const radioButtonElement = document.createElement("input");
        radioButtonElement.setAttribute("type", "radio")
        radioButtonElement.setAttribute("name", "gender")
        radioButtonElement.setAttribute("id", inputId)
        return radioButtonElement
    }
}