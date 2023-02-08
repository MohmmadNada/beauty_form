import Header from "../components/atoms/header/header.js"
import InputBlock from "../components/molecules/inputBlock/inputBlock.js";
import SelectList from "../components/molecules/selectList/selectList.js";
import GenderCheckBlock from "../components/molecules/GenderCheckBlock/GenderCheckBlock.js";
import AgreeTermsBlock from "../components/molecules/agreeTermsBlock/agreeTermsBlock.js";
import Button from "../components/atoms/button/button.js";
import {signinElements} from "../utils/elementItems.js"

function addElementsToForm(elementsToAdd, parentElement) {
    elementsToAdd.forEach(e => {
        parentElement.appendChild(
            (e.classParam)? eval(`new ${e.className}(e.classParam)`): eval(`new ${e.className}()`)
        )
    });
    return parentElement
}

export {addElementsToForm}