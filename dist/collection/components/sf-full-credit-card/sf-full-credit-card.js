import { Component, h, Prop, State, Watch, Listen, Event, Element } from '@stencil/core';
import { valService } from '../../services/validation-service';
import { licService } from '../../services/license-service';
export class SfFullCreditCard {
  constructor() {
    this.inputsChecked = [];
  }
  /* Method for submit btn */
  onSubmitCreditCard() {
    if (!this.buttonDisabled) {
      this.onCreditCardSubmit();
      if (this.creditCardAddress !== 'sameAddress') {
        this.onAdditionalAddressSubmit();
      }
      this.ccSubmitted.emit(true);
    }
  }
  /*
  Listing from radio btn Web Component
  */
  onRadioValueSelected(event) {
    this.creditCardAddress = (event && event.detail) ? event.detail : null;
  }
  /*
  Listenting lic from any other wc
  */
  async onLicenseChecked(event) {
    this.licChecked = event.detail;
    if (!this.licChecked) {
      const innerLic = await licService.licProcess(this.lic);
      if (innerLic) {
        this.licChecked = true;
      }
    }
  }
  /**
  * Used at init (beginning)
  */
  onCreditCardInit() {
    this.innerPaymentAddressConfig = this.paymentAddressConfig;
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    this.inputLabels = ['card-number_' + this.eleId, 'card-date_' + this.eleId, 'card-cvc_' + this.eleId, 'card-holder_' + this.eleId];
    this.buttonDisabled = true;
  }
  componentWillLoad() {
    this.onCreditCardInit();
  }
  componentDidLoad() {
    this.creditCardForm = this.inputsArray.shadowRoot.querySelectorAll('sf-input');
    this.additionalAddressForm = this.inputsArray.shadowRoot.querySelectorAll('sf-full-address');
  }
  onInputChanged(label, event) {
    const inputsChecked = this.inputsChecked;
    const inputLabels = this.inputLabels;
    const buttonDisabled = this.buttonDisabled;
    this.inputsChecked = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).inputsChecked;
    this.buttonDisabled = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).buttonDisabled;
  }
  onValidateInput(label, event) {
    this.inputLabels.every((inputLabel) => {
      return ((inputLabel == label) && event && event.detail);
    });
  }
  onCreditCardSubmit() {
    if (this.creditCardForm && this.creditCardForm.length) {
      this.creditCardForm.forEach((element, index) => {
        // Iterate each element and save info in sessionStorage
        let inputValue;
        const cardNumber = /^card-number/.test(this.inputLabels[index]);
        const cardDate = /^card-date/.test(this.inputLabels[index]);
        const ele = element.shadowRoot.querySelector('input').value;
        if (cardNumber) {
          const origCardNumber = ele.replace(/[^0-9]/g, '');
          inputValue = origCardNumber;
        }
        else if (cardDate) {
          const fullCardDate = valService.getFullDate(ele).fullCardDate;
          inputValue = fullCardDate;
        }
        else {
          inputValue = ele;
        }
        sessionStorage.setItem(this.inputLabels[index], inputValue);
      });
    }
  }
  onAdditionalAddressSubmit() {
    if (this.additionalAddressForm && this.additionalAddressForm.length) {
      this.additionalAddressForm.forEach((element) => {
        const sfInputs = element.shadowRoot.querySelectorAll('sf-input');
        // Sfinputs is a nodeList, we need to iterate again
        sfInputs.forEach((ele) => {
          const inputId = ele.shadowRoot.querySelector('input').id;
          const inputValue = ele.shadowRoot.querySelector('input').value;
          sessionStorage.setItem(inputId, inputValue);
        });
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
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[0]), "sf-label": "Credit Card Number", "sf-data": "card-number", "sf-error": "A valid format has 16 numbers", sfId: `card-number-${this.eleId}`, "sf-required": "true" })),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[1]), "sf-label": "Valid (MM/YY)", "sf-data": "card-date", "sf-error": "MMYY (Month/Year)", sfId: `card-date-${this.eleId}`, "sf-required": "true" }))),
      h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[2]), "sf-type": "password", "sf-data": "card-cvc", "sf-error": "Use only numbers", "sf-label": "CVC", sfId: `card-cvc-${this.eleId}`, "sf-required": "true" })),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[3]), "sf-label": "Holder Name", sfId: `card-holder-${this.eleId}`, "sf-required": "true" }))),
      h("div", { class: "sf-row " },
        h("div", { class: "sf-col-1-of-1" },
          h("sf-main-title", null, "Billing Address"),
          h("sf-radio-group", { radioGroupData: this.innerPaymentAddressConfig }))),
      h("div", { class: (this.creditCardAddress !== 'sameAddress') ? 'sf-row' : 'sf-row__hide' },
        h("div", { class: "sf-col-1-of-1" },
          h("sf-full-address", { "show-buttom": "false", "id-suffix": "002", id: "ad-0002" }))),
      (this.showButtom) ? h("div", { class: "sf-row" },
        h("div", { class: "sf-col-1-of-2 sf-col-1-of-2__back-btn" },
          h("sf-submit-button", { "id-suffix": `${this.eleId}`, onClick: this.onBackPressed.bind(this) }, "Back")),
        h("div", { class: "sf-col-1-of-2" },
          h("sf-submit-button", { "sf-disabled": this.buttonDisabled, "id-suffix": `${this.eleId}`, onClick: this.onSubmitCreditCard.bind(this), "btn-style": "primary" }, "Continue"))) : ''
    ];
  }
  static get is() { return "sf-full-credit-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-full-credit-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-full-credit-card.css"]
  }; }
  static get properties() { return {
    "paymentAddressConfig": {
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
        "text": "Data array with the Object config"
      },
      "attribute": "payment-address-config",
      "reflect": true
    },
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
        "text": ""
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
    "innerPaymentAddressConfig": {},
    "creditCardAddress": {},
    "buttonDisabled": {},
    "inputsChecked": {},
    "licChecked": {}
  }; }
  static get events() { return [{
      "method": "ccSubmitted",
      "name": "ccSubmitted",
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
  static get elementRef() { return "inputsArray"; }
  static get watchers() { return [{
      "propName": "paymentAddressConfig",
      "methodName": "onCreditCardInit"
    }]; }
  static get listeners() { return [{
      "name": "radioValueSelected",
      "method": "onRadioValueSelected",
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
