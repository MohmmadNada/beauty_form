import Paragraph from "../../atoms/paragraph/paragraph.js";
import Link from "../../atoms/link/link.js";
import { agreeTermElements } from "../../../utils/elementItems.js"
import {addElementsToForm} from "../../../utils/generalUtils.js"
export default class AgreeTermsBlock {
    constructor() {
        const allElements = addElementsToForm( agreeTermElements)
        const pElement = allElements[0]
        const aElement = allElements[1]
        pElement.appendChild(aElement);
        return pElement
    }
}