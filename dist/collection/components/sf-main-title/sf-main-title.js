import { Component, h } from '@stencil/core';
export class SfMainTitle {
  render() {
    return h("h1", { class: "sf-main-title" },
      h("slot", null));
  }
  static get is() { return "sf-main-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-main-title.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-main-title.css"]
  }; }
}
