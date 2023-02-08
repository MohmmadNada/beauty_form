export default class Header {
    constructor({ text }) {
        const headerElement = document.createElement("h1");
        headerElement.textContent = text;
        return headerElement
    }
}