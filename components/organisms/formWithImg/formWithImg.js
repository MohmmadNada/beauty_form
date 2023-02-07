import SigninForm from "../signinForm/signinForm.js";
import ImageBlock from "../../molecules/imageBlock/imageBlock.js";

export default class FormWithImg {
    constructor(){
        const container = document.createElement("div");
        container.setAttribute("id", "container");
        new SigninForm(container);
        new ImageBlock(container);
        return container
    }
}
