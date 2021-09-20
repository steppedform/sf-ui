import { Component, h, Prop, Watch, State, Event } from '@stencil/core';
import { themeSer } from '../../services/theme-service';
export class SfRadioGroup {
  onTextInput(event) {
    const radioGroupValue = event.target.value;
    this.radioValueSelected.emit(radioGroupValue);
  }
  /**
  * Used at init (beginning)
  */
  onRadioGroupInit() {
    this.innerRadioGroupData = this.radioGroupData;
  }
  componentWillLoad() {
    this.onRadioGroupInit();
    this.radioValueSelected.emit(this.radioGroupData[0].radioName);
    themeSer.checkTheme();
  }
  render() {
    return (h("div", { class: "sf-form__group" }, this.innerRadioGroupData.map((radio, index) => h("div", { class: "sf-form__radio-group" },
      h("input", { type: "radio", class: "sf-form__radio-input", id: radio.radioName, name: radio.radioModel, value: radio.radioName, onChange: this.onTextInput.bind(this), checked: index === 0 }),
      h("label", { htmlFor: radio.radioName, class: "sf-form__radio-label" },
        h("div", { class: "sf-form__radio-button" }),
        h("div", { class: "sf-form__radio-text" }, radio.radioLabel),
        radio.radioTitle ?
          h("div", { class: "sf-form__radio-title" }, radio.radioTitle)
          : null,
        radio.radioSubTitle ?
          h("div", { class: (this.innerRadioGroupData.length == (index + 1)) ? 'sf-form__radio-sub-title-final' : 'sf-form__radio-sub-title' }, radio.radioSubTitle)
          : null)))));
  }
  static get is() { return "sf-radio-group"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-radio-group.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-radio-group.css"]
  }; }
  static get properties() { return {
    "radioGroupData": {
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
      "attribute": "radio-group-data",
      "reflect": true
    }
  }; }
  static get states() { return {
    "innerRadioGroupData": {}
  }; }
  static get events() { return [{
      "method": "radioValueSelected",
      "name": "radioValueSelected",
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
      "propName": "radioGroupData",
      "methodName": "onRadioGroupInit"
    }]; }
}
