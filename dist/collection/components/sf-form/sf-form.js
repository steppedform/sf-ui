import { Component, h } from '@stencil/core';
import { themeSer } from '../../services/theme-service';
export class SfForm {
  async componentWillLoad() {
    themeSer.checkTheme();
  }
  render() {
    return (h("div", { class: "sf-book__form" },
      h("form", { action: "#", class: "sf-form" },
        h("slot", null))));
  }
  static get is() { return "sf-form"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-form.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-form.css"]
  }; }
}
