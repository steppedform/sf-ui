import { Component, h, Prop, Event, State, Element, Method, Watch, Listen } from '@stencil/core';
import { valService } from '../../services/validation-service';
import { licProcess } from '../../license.worker';
export class SfFullAddress {
  constructor() {
    this.inputsChecked = [];
  }
  /* Method for submit btn */
  onSubmitAddress() {
    if (!this.buttonDisabled) {
      this.onSessionDefined();
      this.addressSubmitted.emit(true);
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
  onAddressInit() {
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    this.inputLabels = ['address1_' + this.eleId, 'address2_' + this.eleId, 'city_' + this.eleId, 'state_' + this.eleId, 'zipcode_' + this.eleId, 'country_' + this.eleId];
    this.buttonDisabled = true;
  }
  componentWillLoad() {
    this.onAddressInit();
  }
  componentDidLoad() {
    this.addressForm = this.inputsArray.shadowRoot.querySelectorAll('sf-input');
    this.addressForm.forEach((element, index) => {
      const ele = ((element && !element.hasAttribute('sf-required') || (element && (element.getAttribute('sf-required') == 'false')))) ? this.inputLabels[index] : null;
      (ele) ? this.inputsChecked.push(ele) : null;
    });
  }
  onInputChanged(label, event) {
    const inputsChecked = this.inputsChecked;
    const inputLabels = this.inputLabels;
    const buttonDisabled = this.buttonDisabled;
    this.inputsChecked = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).inputsChecked;
    this.buttonDisabled = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).buttonDisabled;
  }
  // Public Method to be called from outside
  async addressSubmited() {
    this.onSessionDefined();
  }
  onSessionDefined() {
    if (this.addressForm && this.addressForm.length) {
      this.addressForm.forEach((element, index) => {
        // Iterate each element and save info in sessionStorage
        const ele = element.shadowRoot.querySelector('input').value;
        sessionStorage.setItem(this.inputLabels[index], ele);
      });
    }
  }
  onBackPressed() {
    this.backBtnPressed.emit(true);
  }
  render() {
    return [
      h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[0]), "sf-label": "Street Address", sfId: `address1-${this.eleId}`, "sf-required": "true" })),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[1]), "sf-label": "Address (Cont)", sfId: `address2-${this.eleId}` }))),
      h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[2]), "sf-label": "City/Town", "sf-data": "citiesList", sfId: `city-${this.eleId}`, "sf-required": "true" })),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[3]), "sf-label": "State/Province", "sf-data": "statesList", sfId: `state-${this.eleId}`, "sf-required": "true" }))),
      h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[4]), "sf-label": "Zip/Postal Code", "sf-error": "Please use a valid US Zip Code", "sf-data": "zipcode", sfId: `zipcode-${this.eleId}`, "sf-required": "true" })),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[5]), "sf-label": "Country", "sf-data": "countriesList", sfId: `country-${this.eleId}`, "sf-required": "true" }))),
      (this.showButtom) ? h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2 sf-col-1-of-2__back-btn" },
          h("sf-submit-button", { "id-suffix": `${this.eleId}`, onClick: this.onBackPressed.bind(this) }, "Back")),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-submit-button", { "sf-disabled": this.buttonDisabled, "id-suffix": `${this.eleId}`, onClick: this.onSubmitAddress.bind(this), "btn-style": "primary" }, "Continue"))) : ''
    ];
  }
  static get is() { return "sf-full-address"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-full-address.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-full-address.css"]
  }; }
  static get properties() { return {
    "showButtom": {
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
        "text": "Data array with the Object config"
      },
      "attribute": "show-buttom",
      "reflect": true
    },
    "idSuffix": {
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
      "attribute": "id-suffix",
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
    "buttonDisabled": {},
    "inputsChecked": {},
    "licChecked": {}
  }; }
  static get events() { return [{
      "method": "addressSubmitted",
      "name": "addressSubmitted",
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
    }, {
      "method": "backBtnPressed",
      "name": "backBtnPressed",
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
  static get methods() { return {
    "addressSubmited": {
      "complexType": {
        "signature": "() => Promise<void>",
        "parameters": [],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "inputsArray"; }
  static get watchers() { return [{
      "propName": "idSuffix",
      "methodName": "componentWillLoad"
    }]; }
  static get listeners() { return [{
      "name": "licenseChecked",
      "method": "onLicenseChecked",
      "target": "body",
      "capture": false,
      "passive": false
    }]; }
}
