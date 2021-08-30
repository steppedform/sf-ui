import { Component, h } from '@stencil/core';
export class SfCardContent {
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
