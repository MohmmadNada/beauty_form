export default class ValidationSpan {
    constructor() {
        const validationElement = document.createElement("span")
        validationElement.textContent = "✘";
        return validationElement;
    }
}