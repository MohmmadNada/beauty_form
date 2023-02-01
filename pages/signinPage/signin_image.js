export default class SignInImage {
  constructor() {
    const imgContainer = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", "./images/fern-gd18b0fc37_1920.jpg");
    imgContainer.appendChild(imgElement);
    return imgContainer;
  }
}