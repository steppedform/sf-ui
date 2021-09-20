import { Component, h } from '@stencil/core';
import { themeSer } from '../../services/theme-service';
export class SfStep {
  async componentWillLoad() {
    themeSer.checkTheme();
  }
  render() {
    this.innerStepElement =
      h("div", { class: "sf-step" },
        h("slot", null));
    return (this.innerStepElement);
  }
  static get is() { return "sf-step"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-step.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-step.css"]
  }; }
}
