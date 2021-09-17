import { Component, h, Prop } from '@stencil/core';
export class SfInputCustom {
  render() {
    this.currentRender =
      h("div", { class: "sf-form__group" },
        h("input", { type: this.sfType, class: "sf-form__input", placeholder: this.sfPlaceholder, required: this.sfRequired, disabled: this.sfDisabled }));
    return (this.currentRender);
  }
  static get is() { return "sf-input-custom"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-input-custom.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-input-custom.css"]
  }; }
  static get properties() { return {
    "sfPlaceholder": {
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
      "attribute": "sf-placeholder",
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
    }
  }; }
}
