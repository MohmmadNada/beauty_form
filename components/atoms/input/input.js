import {inputAttrs} from "../../../utils/constants.js"

export default class Input {
    constructor(inputType) {
        const inputElement = document.createElement("input")
        Object.entries(inputAttrs[inputType])
            .forEach(([key, value]) => {
            inputElement.setAttribute(key, value)
        });
        return inputElement
    }
}
