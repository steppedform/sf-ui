import { Component, h } from '@stencil/core';
export class SfCardCol {
  render() {
    return (h("div", { class: "sf-card-col" },
      h("slot", null)));
  }
  static get is() { return "sf-card-col"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-card-col.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-card-col.css"]
  }; }
}
