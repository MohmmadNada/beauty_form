import { countries} from "../../../../constants.js";
export default class CountryComponent {
    constructor(form) {
      CountryComponent.createCountryList(form);
    }
    static createCountryList(form) {
      const countryListContainer = document.createElement("div");
      countryListContainer.classList.add("main-div");
      countryListContainer.classList.add("input-field");
      const selectList = document.createElement("select");
      selectList.setAttribute("id", "country");
      countries.forEach(({ label, value }) => {
        let countryElement = document.createElement("option");
        countryElement.value = value;
        countryElement.textContent = label;
        selectList.appendChild(countryElement);
      });
      countryListContainer.appendChild(selectList);
      form.appendChild(countryListContainer);
    }
    // For Consistency
    static isCountrySelected() {
      const selectedCountry = document.getElementById("country").value;
      if (!selectedCountry) {
        return false;
      }
      return true;
    }
  }