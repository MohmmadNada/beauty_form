export default class Button {
    constructor(type, text) {
        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("type", type)
        buttonElement.textContent = text
        return buttonElement
    }
}