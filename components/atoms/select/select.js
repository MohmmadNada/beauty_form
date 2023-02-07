export default class Select {
    constructor(listType) {
        const selectList = document.createElement("select");
        selectList.setAttribute("id", listType)
        return selectList
    }
}