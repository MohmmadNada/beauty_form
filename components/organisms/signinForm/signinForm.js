import Form from "../../atoms/form/form.js"
import InputBlock from "../../molecules/inputBlock/inputBlock.js"
import Paragraph from "../../atoms/paragraph/paragraph.js"
import { signinElements } from "../../../utils/constants.js"
import { addElementsToElement } from "../../../utils/generalUtils.js"

export default class SigninForm {
    constructor(parentElement = document.body) {
        const formElement = new Form()
        addElementsToElement(signinElements, formElement)
        parentElement.appendChild(formElement)
        return formElement
    }

    static addRealTimeValidationToTextInput() {
        document.getElementById("email").addEventListener(
            "input",
            InputBlock.isValidEmail
        )
        document.getElementById("password").addEventListener(
            "input",
            InputBlock.isValidPassword
        )
    }

    static signinFormValidation(e) {
        let preErrors = document.querySelector(".missing-field-error")
        if (preErrors) {
            preErrors.remove()
        }
        const email = e.target.email.value;
        const password = e.target.password.value;
        const userDeserialized = JSON.parse(localStorage.getItem("User"));
        const registeredEmails = userDeserialized.email;
        if (!email && !password) {
            // Use dict 
            e.target.appendChild(new Paragraph("Email Address and password are required", "missing-field-error"))
        } else if (!email) {
            e.target.appendChild(new Paragraph("Email Address is required", "missing-field-error"))
        } else if (!password) {
            e.target.appendChild(new Paragraph("Password is required", "missing-field-error"))
        } else if (
            email === registeredEmails &&
            userDeserialized.password == password
        ) {
            location.href = "../../pages/homePage/homePage.html";
        } else {
            e.target.appendChild(new Paragraph("The account doesn't exist, Try again", "missing-field-error"))
        }
    }

    static activateForm() {
        document.querySelector("form").addEventListener(
            "submit", (e) => {
                e.preventDefault();
                SigninForm.signinFormValidation(e)
            })
    }
}