import { Component, Prop, getAssetPath, h } from '@stencil/core';
export class SfCardImage {
  componentWillLoad() {
    this.image = (this.image) ? this.image : this.image = 'new-balance.png';
  }
  render() {
    return h("img", { src: getAssetPath(`./assets/${this.image}`), class: "card-image" });
  }
  static get is() { return "sf-card-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-card-image.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-card-image.css"]
  }; }
  static get assetsDirs() { return ["assets"]; }
  static get properties() { return {
    "image": {
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
      "attribute": "image",
      "reflect": true
    }
  }; }
}
