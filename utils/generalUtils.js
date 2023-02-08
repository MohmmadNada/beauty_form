import Header from "../components/atoms/header/header.js";
import InputBlock from "../components/molecules/inputBlock/inputBlock.js";
import SelectList from "../components/molecules/selectList/selectList.js";
import GenderCheckBlock from "../components/molecules/GenderCheckBlock/GenderCheckBlock.js";
import AgreeTermsBlock from "../components/molecules/agreeTermsBlock/agreeTermsBlock.js";
import Button from "../components/atoms/button/button.js";

function addElementsToElement(arrayOfElements, parentElement) {
    arrayOfElements.forEach(element => {
        parentElement.appendChild(
            eval(`new ${element.className}(${JSON.stringify(element)})`)
        )
    });
}

export { addElementsToElement }