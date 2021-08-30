import { Component, Prop, h, State, Watch, Event } from '@stencil/core';
export class SfSelectMenu {
  /**
  * Used at init (beginning)
  */
  onSelectMenuInit() {
    this.innerSelectMenuData = this.selectMenuData;
    this.selectMenuValue.emit(this.selectMenuData[0].optionLabel);
  }
  componentWillLoad() {
    this.onSelectMenuInit();
  }
  onSelectOption(event) {
    const selectOptionValue = event.target.value;
    this.selectMenuValue.emit(selectOptionValue);
  }
  render() {
    return [
      h("label", { class: "sf-select-label" }, this.selectMenuLabels.selectLabel),
      h("select", { name: this.selectMenuLabels.selectName, class: "sf-select-menu", onChange: this.onSelectOption.bind(this) }, this.innerSelectMenuData.map((option) => h("option", { value: option.optionValue }, option.optionLabel)))
    ];
  }
  static get is() { return "sf-select-menu"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-select-menu.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-select-menu.css"]
  }; }
  static get properties() { return {
    "selectMenuData": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Data array with the Object config"
      },
      "attribute": "select-menu-data",
      "reflect": true
    },
    "selectMenuLabels": {
      "type": "any",
      "mutable": true,
      "complexType": {
        "original": "any",
        "resolved": "any",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "select-menu-labels",
      "reflect": true
    }
  }; }
  static get states() { return {
    "innerSelectMenuData": {}
  }; }
  static get events() { return [{
      "method": "selectMenuValue",
      "name": "selectMenuValue",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }]; }
  static get watchers() { return [{
      "propName": "selectMenuData",
      "methodName": "onSelectMenuInit"
    }]; }
}
