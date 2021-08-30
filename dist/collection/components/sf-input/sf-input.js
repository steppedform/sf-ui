import { Component, h, getAssetPath, Prop, State, Listen, Watch, Event } from '@stencil/core';
import { valService } from '../../services/validation-service';
import { licProcess } from '../../license.worker';
export class SfInput {
  constructor() {
    this.cardDateMax = 5;
    this.cardCvcMax = 4;
    this.cardNumberMax = 19;
    this.addressZipMax = 5;
    /* Datasets for Autocomplete */
    this.statesUrl = getAssetPath(`../global-data/states.json`);
    this.countriesUrl = getAssetPath(`../global-data/countries.json`);
    this.citiesUrl = getAssetPath(`../global-data/cities.json`);
    /* CC Icons Images */
    this.visaImg = 'visa.svg';
    this.amexImg = 'amex.svg';
    this.mastercardImg = 'mastercard.svg';
    this.discoverImg = 'discover.svg';
    this.dinnersImg = 'dinners.svg';
    this.jcbImg = 'jcb.svg';
    this.unionImg = 'unionpay.svg';
    this.innerInputValid = true;
    /* Logic for autocomplete  */
    this.onSearchSuggestions = async (searchText, dataUrl) => {
      const res = await fetch(dataUrl);
      const options = await res.json();
      if (!searchText) {
        this.emptyList = true;
        this.onCleanState();
        return false;
      }
      let matches = options.filter((match) => {
        if (match && match.name && match.name.charAt(1)) {
          return (match.name.indexOf(searchText) !== -1);
        }
      });
      if (searchText.length === 0) {
        matches = [];
        this.onCleanState();
      }
      const size = 10;
      let matchesFilt;
      (matches.length > size) ? matchesFilt = matches.slice(0, size) : matchesFilt = matches;
      this.outputHtml(matchesFilt);
      this.innerInputValid = true;
    };
    this.outputHtml = matches => {
      if (matches.length > 0) {
        const html = matches
          .map(match => `
          <li id="${'sf-' + this.dataList + '-' + match[this.dataValue].toLowerCase()}" data-value=${match[this.dataValue]}>${match.name}</li>`)
          .join("");
        this.onRenderList(html);
      }
    };
  }
  /* Listen clicks on li element */
  onHandleClickEvent(ev) {
    const clickedElement = ev.composedPath()[0];
    if (clickedElement.tagName == 'INPUT' && this.innerType === 'text') {
      this.onSearchAddress('');
      this.emptyList = true;
    }
    else if (clickedElement.tagName == 'LI' && this.innerType === 'text') {
      this.innerTextInput = clickedElement.textContent;
      this.emptyList = true;
    }
  }
  /*
Listenting lic from any other wc
*/
  async onLicenseChecked(event) {
    this.licChecked = event.detail;
    if (!this.licChecked) {
      const innerLic = await licProcess(this.lic);
      if (innerLic) {
        this.licChecked = true;
      }
    }
  }
  onSearchAddress(dataInput) {
    if (this.sfData === 'zipcode' && this.innerType === 'text') {
      this.innerInputValid = this.onZipCode();
    }
    else if (this.sfData === 'card-cvc' && (this.innerType === 'text' || this.innerType === 'password')) {
      this.innerInputValid = this.onCardCvc();
    }
    else if (this.sfData === 'card-date' && this.innerType === 'text') {
      this.innerInputValid = this.onCardDate();
    }
    else if (this.sfData === 'card-number' && this.innerType === 'text') {
      this.innerInputValid = this.onCardNumber();
    }
    else if (this.sfData === 'statesList' && this.innerType === 'text') {
      this.onSearchSuggestions(dataInput, this.statesUrl);
    }
    else if (this.sfData === 'countriesList' && this.innerType === 'text') {
      this.onSearchSuggestions(dataInput, this.countriesUrl);
    }
    else if (this.sfData === 'citiesList' && this.innerType === 'text') {
      this.onSearchSuggestions(dataInput, this.citiesUrl);
    }
    else {
      this.innerInputValid = true;
    }
  }
  onTextInput(event) {
    const inputValue = event.target.value;
    if ((this.sfData === 'card-date') && inputValue && inputValue.toString().length > this.cardDateMax) {
      event.preventDefault();
      return;
    }
    this.innerType = ((this.sfType === 'text') || (this.sfType === 'email') || (this.sfType === 'password')) ? this.sfType : 'text';
    this.dataValue = this.sfData === 'statesList' ? 'state_code' : this.sfData === 'countriesList' ? 'iso3' : this.sfData === 'citiesList' ? 'country' : null;
    this.dataList = this.sfData === 'statesList' ? 'states-list' : this.sfData === 'countriesList' ? 'countries-list' : this.sfData === 'citiesList' ? 'cities-list' : null;
    this.innerTextInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
    (inputValue == '') ? this.emptyList = true : this.emptyList = false;
    if (this.innerTextInput.trim() != '') {
      this.onSearchAddress(this.innerTextInput);
    }
    else {
      this.innerInputValid = false;
    }
    (this.innerInputValid && this.innerTextInput.length) ? this.inputValidated.emit(true) : this.inputValidated.emit(false);
    //console.log('innerInputValid-->', this.innerInputValid);
  }
  onZipCode() {
    const fetchInputChanges = valService.isValidUSZip(this.innerTextInput);
    return fetchInputChanges;
  }
  onCardCvc() {
    const fetchInputChanges = valService.isValidCVV(this.innerTextInput);
    return fetchInputChanges;
  }
  onCardDate() {
    const fetchInputChanges = valService.isDateValid(this.innerTextInput);
    (fetchInputChanges.newDate) ? this.innerTextInput = fetchInputChanges.newDate : null;
    return fetchInputChanges.validation;
  }
  onCardNumber() {
    const fetchInputChanges = valService.isCardValid(this.innerTextInput);
    this.creditCardType = valService.creditCardType(this.innerTextInput);
    (fetchInputChanges.newCardNumber) ? this.innerTextInput = fetchInputChanges.newCardNumber : this.inputBackground = null;
    return fetchInputChanges.validation;
  }
  onCleanState() {
    this.sfData === 'statesList' ? this.statesList = '' : this.sfData === 'countriesList' ? this.countriesList = '' : this.sfData === 'citiesList' ? this.citiesList = '' : null;
  }
  onRenderList(html) {
    if (html) {
      if (this.sfData === 'statesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.statesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
      else if (this.sfData === 'countriesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.countriesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
      else if (this.sfData === 'citiesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.citiesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
    }
  }
  render() {
    /*
      sfReadonly
      sfExpressions: 'this.role == 'admin' && this.addressInputs[mame]'
      'class' are **** ALL optional *****
    */
    this.cardImage = (this.creditCardType === 'visa') ? getAssetPath(`./assets/${this.visaImg}`) : (this.creditCardType === 'amex') ? getAssetPath(`./assets/${this.amexImg}`) : (this.creditCardType == 'mastercard') ? getAssetPath(`./assets/${this.mastercardImg}`) : (this.creditCardType === 'discoverImg') ? getAssetPath(`./assets/${this.discoverImg}`) : (this.creditCardType === 'dinners') ? getAssetPath(`./assets/${this.dinnersImg}`) : (this.creditCardType == 'jcb') ? getAssetPath(`./assets/${this.jcbImg}`) : (this.creditCardType === 'unionpay') ? getAssetPath(`./assets/${this.unionImg}`) : null;
    if (this.cardImage) {
      this.inputBackground = {
        backgroundImage: `url(${this.cardImage})`,
        backgroundPosition: 'right 5px bottom 5px',
        backgroundSize: '45px',
        backgroundRepeat: 'no-repeat',
      };
    }
    this.currentRender =
      h("div", { class: "sf-form__group" },
        h("input", { type: this.innerType, style: (this.inputBackground) ? this.inputBackground : '', class: this.innerInputValid ? 'sf-form__input' : 'sf-form__input sf-form__input-error', placeholder: this.sfLabel, ref: el => (this.innerInput = el), value: this.innerTextInput, maxlength: (this.sfData === 'card-number') ? this.cardNumberMax : (this.sfData === 'card-cvc') ? this.cardCvcMax : (this.sfData === 'card-date') ? this.cardDateMax : (this.sfData === 'zipcode') ? this.addressZipMax : '', onInput: this.onTextInput.bind(this), name: this.sfId, id: this.sfId, required: this.sfRequired, disabled: this.sfDisabled }),
        h("label", { htmlFor: this.sfId, class: "sf-form__label" }, this.sfLabel),
        (this.sfData === 'statesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-states", innerHTML: this.statesList }) : (this.sfData === 'countriesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-countries", innerHTML: this.countriesList }) : (this.sfData === 'citiesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-cities", innerHTML: this.citiesList }) : '',
        h("div", { class: "sf-form__group__error" }, (!this.innerInputValid && this.sfError) ? this.sfError : ''));
    return (this.currentRender);
  }
  static get is() { return "sf-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-input.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-input.css"]
  }; }
  static get assetsDirs() { return ["../global-data", "assets"]; }
  static get properties() { return {
    "statesUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "states-url",
      "reflect": false,
      "defaultValue": "getAssetPath(`../global-data/states.json`)"
    },
    "countriesUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "countries-url",
      "reflect": false,
      "defaultValue": "getAssetPath(`../global-data/countries.json`)"
    },
    "citiesUrl": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "cities-url",
      "reflect": false,
      "defaultValue": "getAssetPath(`../global-data/cities.json`)"
    },
    "visaImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "visa-img",
      "reflect": false,
      "defaultValue": "'visa.svg'"
    },
    "amexImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "amex-img",
      "reflect": false,
      "defaultValue": "'amex.svg'"
    },
    "mastercardImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mastercard-img",
      "reflect": false,
      "defaultValue": "'mastercard.svg'"
    },
    "discoverImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "discover-img",
      "reflect": false,
      "defaultValue": "'discover.svg'"
    },
    "dinnersImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "dinners-img",
      "reflect": false,
      "defaultValue": "'dinners.svg'"
    },
    "jcbImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "jcb-img",
      "reflect": false,
      "defaultValue": "'jcb.svg'"
    },
    "unionImg": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "union-img",
      "reflect": false,
      "defaultValue": "'unionpay.svg'"
    },
    "sfLabel": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-label",
      "reflect": true
    },
    "sfId": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-id",
      "reflect": true
    },
    "sfData": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-data",
      "reflect": true
    },
    "sfRequired": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-required",
      "reflect": true
    },
    "sfDisabled": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-disabled",
      "reflect": true
    },
    "sfType": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-type",
      "reflect": true
    },
    "sfError": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "sf-error",
      "reflect": true
    },
    "lic": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Gets license to be validated."
      },
      "attribute": "lic",
      "reflect": true
    }
  }; }
  static get states() { return {
    "innerTextInput": {},
    "innerInputValid": {},
    "emptyList": {},
    "innerType": {},
    "creditCardType": {},
    "licChecked": {}
  }; }
  static get events() { return [{
      "method": "inputValidated",
      "name": "inputValidated",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "sfData",
      "methodName": "onSearchAddress"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "onHandleClickEvent",
      "target": "body",
      "capture": false,
      "passive": false
    }, {
      "name": "licenseChecked",
      "method": "onLicenseChecked",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
