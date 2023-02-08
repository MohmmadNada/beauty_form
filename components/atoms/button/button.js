export default class Button {
    constructor(text) {
        const buttonElement = document.createElement("button");
        buttonElement.setAttribute("type", "submit")
        buttonElement.textContent = text
        return buttonElement
    }
}