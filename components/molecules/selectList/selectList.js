import Select from "../../atoms/select/select.js";
import Option from "../../atoms/option/option.js"
import {countries} from "../../../utils/constants.js"
export default class SelectList {
    constructor() {
        const countrySelectElement = new Select("country");
        countries.forEach(({ label, value }) => {
            countrySelectElement.appendChild(new Option(label, value))
        });
        const CountryListContainer = document.createElement("div");
        CountryListContainer.classList.add("country-list-container");
        CountryListContainer.appendChild(countrySelectElement)
        return CountryListContainer
    }

    static isCountrySelected() {
      const selectedCountry = document.getElementById("country").value;
      if (!selectedCountry) {
        return false;
      }
      return true;
    }

}
