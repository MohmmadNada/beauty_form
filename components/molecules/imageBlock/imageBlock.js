import Image from "../../atoms/image/image.js";

export default class ImageBlock {
    constructor(parentElement){
        const imageContainer = document.createElement("div");
        imageContainer.setAttribute("id", "image-container")
        imageContainer.appendChild(
            new Image("../../../utils/images/formImg.jpg")
        )
        parentElement.appendChild(imageContainer)
        return imageContainer
    }
}
