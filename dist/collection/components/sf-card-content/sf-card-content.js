import { Component, h } from '@stencil/core';
import { themeSer } from '../../services/theme-service';
export class SfCardContent {
  async componentWillLoad() {
    themeSer.checkTheme();
  }
  render() {
    return (h("div", { class: "sf-card-content" },
      h("slot", null)));
  }
  static get is() { return "sf-card-content"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-card-content.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-card-content.css"]
  }; }
}
