export default class Label {
    constructor(elementFor) {
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", elementFor)
        return labelElement
    }
}