import Header from "../components/atoms/header/header.js"
import InputBlock from "../components/molecules/inputBlock/inputBlock.js";
import SelectList from "../components/molecules/selectList/selectList.js";
import GenderCheckBlock from "../components/molecules/GenderCheckBlock/GenderCheckBlock.js";
import AgreeTermsBlock from "../components/molecules/agreeTermsBlock/agreeTermsBlock.js";
import Button from "../components/atoms/button/button.js";
import { signinElements } from "../utils/elementItems.js"
import Paragraph from "../components/atoms/paragraph/paragraph.js";
import Link from "../components/atoms/link/link.js";


function addElementsToForm(elementsToAdd, parentElement = null) {
    const allElements = []
    elementsToAdd.forEach(e => {
        allElements.push(
            (e.classParam) ? eval(`new ${e.className}(e.classParam)`) : eval(`new ${e.className}()`)
        )
    });
    if (parentElement) {
        allElements.forEach(element => {
            parentElement.appendChild(
                element
            )
        });
    }
    return parentElement || allElements
}

export { addElementsToForm }