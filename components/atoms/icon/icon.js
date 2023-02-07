import { iconClass } from "../../../utils/constants.js"

export default class Icon {
    constructor(inputType) {
        const iconElement = document.createElement("i")
        iconElement.className = iconClass[inputType]
        return iconElement
    }
}