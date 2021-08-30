import { Component, h, Prop } from '@stencil/core';
export class SfSubmitButton {
  render() {
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    return (h("button", { disabled: this.sfDisabled, class: (this.btnStyle == 'primary' ? 'sf-btn sf-btn__primary' : 'sf-btn sf-btn__continue'), id: `submit-button-${this.eleId}` },
      h("slot", null)));
  }
  static get is() { return "sf-submit-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-submit-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-submit-button.css"]
  }; }
  static get properties() { return {
    "btnStyle": {
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
      "attribute": "btn-style",
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
    }
  }; }
}
