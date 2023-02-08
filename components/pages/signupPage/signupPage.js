import SignupForm from "../../organisms/signupForm/signupForm.js"

class SignupPage {
    constructor() {        
        document.body.appendChild(new SignupForm())
        SignupForm.addRealTimeValidationToTextInput()
        SignupForm.addSubmitEvent()
    }
}

new SignupPage