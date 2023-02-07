export default class Paragraph {
    constructor(text, className = "") {
        const pElement = document.createElement("p")
        pElement.textContent = text
        className ? pElement.classList.add(className) : ""
        return pElement
    }
}