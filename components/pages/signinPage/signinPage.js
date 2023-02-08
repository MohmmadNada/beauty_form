import FormWithImg from "../../organisms/formWithImg/formWithImg.js"
import SigninForm from "../../organisms/signinForm/signinForm.js"
class SigninPage {
    constructor() {
        const container = new FormWithImg()
        document.body.appendChild(container)
        SigninForm.addRealTimeValidationToTextInput()
        SigninForm.activateForm()
    }
}

new SigninPage()