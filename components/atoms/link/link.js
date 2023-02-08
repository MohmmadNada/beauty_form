export default class Link {
    constructor(text, href = "#") {
        const aElement = document.createElement("a");
        aElement.textContent = text
        aElement.setAttribute("href", href);
        return aElement
    }
}