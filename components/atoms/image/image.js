export default class Image {
    constructor(srcImage){
        const imageElement = document.createElement("img");
        imageElement.setAttribute("src", srcImage);
        return imageElement
    }
}