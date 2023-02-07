export default class Option {
    constructor(text, value) {
        const countryOption = document.createElement("option");
        countryOption.setAttribute("value", value);
        countryOption.textContent = text;
        return countryOption
    }
}