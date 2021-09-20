import { Component, h, Prop } from '@stencil/core';
import { themeSer } from '../../services/theme-service';
export class SfCard {
  async componentWillLoad() {
    themeSer.checkTheme();
  }
  render() {
    const oneCol = h("div", { class: "sf-row" },
      h("div", { class: (this.center) ? 'sf-col-1-of-1 sf-row__center' : 'sf-col-1-of-1' },
        h("slot", null)));
    const twoCols = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-2" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-1-of-2" },
        h("slot", { name: "col-2" })));
    const threeCols = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-3" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-1-of-3" },
        h("slot", { name: "col-2" })),
      h("div", { class: "sf-col-1-of-3" },
        h("slot", { name: "col-3" })));
    const fourCols = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-2" })),
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-3" })),
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-4" })));
    const twoThirds = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-3" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-2-of-3" },
        h("slot", { name: "col-2" })));
    const twoFourth = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-2" })),
      h("div", { class: "sf-col-2-of-4" },
        h("slot", { name: "col-3" })));
    const threeFourth = h("div", { class: "sf-row" },
      h("div", { class: "sf-col-1-of-4" },
        h("slot", { name: "col-1" })),
      h("div", { class: "sf-col-3-of-4" },
        h("slot", { name: "col-2" })));
    return (h("section", { class: "sf-card-container" }, (this.dist == "1") ? oneCol : (this.dist == "2") ? twoCols : (this.dist == "3") ? threeCols : (this.dist == "4") ? fourCols :
      (this.dist == "2-3") ? twoThirds : (this.dist == "2-4") ? twoFourth : (this.dist == "3-4") ? threeFourth : oneCol));
  }
  static get is() { return "sf-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-card.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-card.css"]
  }; }
  static get properties() { return {
    "dist": {
      "type": "string",
      "mutable": false,
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
      "attribute": "dist",
      "reflect": false
    },
    "center": {
      "type": "boolean",
      "mutable": false,
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
      "attribute": "center",
      "reflect": false
    }
  }; }
}
