import Header from "../../atoms/header/header.js";
import InputBlock from "../../molecules/inputBlock/inputBlock.js";
import SelectList from "../../molecules/selectList/selectList.js";
import GenderCheckBlock from "../../molecules/GenderCheckBlock/GenderCheckBlock.js";
import AgreeTermsBlock from "../../molecules/agreeTermsBlock/agreeTermsBlock.js";
import Button from "../../atoms/button/button.js"
import Form from "../../atoms/form/form.js";
import User from "../../../utils/models/userModel.js";
import Paragraph from "../../atoms/paragraph/paragraph.js";
import { errorMessages } from "../../../utils/constants.js";

export default class SignupForm {
    constructor() {
        const formElement = new Form()
        const formElements = [
            new Header("Registration"),
            new InputBlock("email"),
            new InputBlock("username"),
            new InputBlock("password"),
            new InputBlock("confirmPassword"),
            new SelectList(),
            new GenderCheckBlock("male"),
            new GenderCheckBlock("female"),
            new AgreeTermsBlock(),
            new Button("submit", "Registration"),
        ]
        formElements.forEach(element => {
            formElement.appendChild(element)
        });

        return formElement
    }
    static addRealTimeValidationToTextInput() {
        document.getElementById("email").addEventListener(
            "input",
            InputBlock.isValidEmail
        )
        document.getElementById("username").addEventListener(
            "input",
            InputBlock.isValidUsername
        )
        document.getElementById("password").addEventListener(
            "input",
            InputBlock.isValidPassword
        )
        document.getElementById("confirmPassword").addEventListener(
            "input",
            InputBlock.isPasswordMatch
        )
    }

    static getInvalidInputFields() {
        let invalidFields = [];
        if (!InputBlock.isValidEmail()) {
            invalidFields.push("email");
        }
        if (!InputBlock.isValidUsername()) {
            invalidFields.push("username");
        }
        if (!InputBlock.isValidPassword()) {
            invalidFields.push("password");
        }
        if (!InputBlock.isPasswordMatch()) {
            invalidFields.push("confirmPassword");
        }
        if (!SelectList.isCountrySelected()) {
            invalidFields.push("country");
        }
        if (!GenderCheckBlock.isGenderSelected()) {
            invalidFields.push("gender");
        }
        return invalidFields;
    }
    static addSubmitEvent() {
        document.querySelector("form").addEventListener("submit", (e) => {
            e.preventDefault();
            let preErrors = document.querySelector(".missing-field-error")
            if (preErrors) {
                preErrors.remove()
            }
            const invalidFields = SignupForm.getInvalidInputFields();
            if (invalidFields.length) {
                const allMissingField = []
                invalidFields.forEach(missingField => {
                    allMissingField.push(errorMessages[missingField])
                })
                e.target.appendChild(new Paragraph(allMissingField.join(" and "), "missing-field-error"))
            } else {
                new User(
                    document.getElementById("email").value,
                    document.getElementById("username").value,
                    document.getElementById("password").value,
                    document.getElementById("country").value,
                    document.querySelector('[name="gender"]:checked').id
                );
                window.location.href = "../../atoms/pages/signInPage.html";
            }
        });
    }
}
