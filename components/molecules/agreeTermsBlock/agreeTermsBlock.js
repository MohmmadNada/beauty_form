import Paragraph from "../../atoms/paragraph/paragraph.js";
import Link from "../../atoms/link/link.js";

export default class AgreeTermsBlock {
    constructor() {
        const pElement = new Paragraph("By clicking Register, you agree on")
        const aElement = new Link(" terms and conditions", "https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97")
        // TODO: Change the link
        pElement.appendChild(aElement);
        return pElement
    }
}