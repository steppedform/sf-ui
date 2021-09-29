'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a686913.js');
const themeService = require('./theme-service-1304576e.js');

const sfCardCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-card-container{display:block;margin:0;padding:0}.sf-row{padding:0;margin:0}";

const SfCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    const oneCol = index.h("div", { class: "sf-row" }, index.h("div", { class: (this.center) ? 'sf-col-1-of-1 sf-row__center' : 'sf-col-1-of-1' }, index.h("slot", null)));
    const twoCols = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("slot", { name: "col-2" })));
    const threeCols = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-3" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-1-of-3" }, index.h("slot", { name: "col-2" })), index.h("div", { class: "sf-col-1-of-3" }, index.h("slot", { name: "col-3" })));
    const fourCols = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-2" })), index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-3" })), index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-4" })));
    const twoThirds = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-3" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-2-of-3" }, index.h("slot", { name: "col-2" })));
    const twoFourth = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-2" })), index.h("div", { class: "sf-col-2-of-4" }, index.h("slot", { name: "col-3" })));
    const threeFourth = index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-4" }, index.h("slot", { name: "col-1" })), index.h("div", { class: "sf-col-3-of-4" }, index.h("slot", { name: "col-2" })));
    return (index.h("section", { class: "sf-card-container" }, (this.dist == "1") ? oneCol : (this.dist == "2") ? twoCols : (this.dist == "3") ? threeCols : (this.dist == "4") ? fourCols :
      (this.dist == "2-3") ? twoThirds : (this.dist == "2-4") ? twoFourth : (this.dist == "3-4") ? threeFourth : oneCol));
  }
};
SfCard.style = sfCardCss;

const sfCardColCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-card-col{font-size:1em}";

const SfCardCol = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    return (index.h("div", { class: "sf-card-col" }, index.h("slot", null)));
  }
};
SfCardCol.style = sfCardColCss;

const sfCardContentCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-card-content{margin:0;padding:0;display:block;min-height:30vh;position:relative}@media only screen and (max-width: 56.25em){.sf-card-content{min-height:auto}}";

const SfCardContent = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    return (index.h("div", { class: "sf-card-content" }, index.h("slot", null)));
  }
};
SfCardContent.style = sfCardContentCss;

const sfCardImageCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.card-image{border:none;width:20vh}";

const SfCardImage = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() {
    this.image = (this.image) ? this.image : this.image = 'new-balance.png';
    themeService.themeSer.checkTheme();
  }
  render() {
    return index.h("img", { src: index.getAssetPath(`./assets/${this.image}`), class: "card-image" });
  }
  static get assetsDirs() { return ["assets"]; }
};
SfCardImage.style = sfCardImageCss;

const sfCardTitleCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-card-title{padding:0.25em 0 0.5em 0;font-size:1.2em}";

const SfCardTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    return (index.h("h2", { class: "sf-card-title" }, index.h("slot", null)));
  }
};
SfCardTitle.style = sfCardTitleCss;

class validationService {
  constructor() { }
  isValidUSZip(sZip) {
    return /^\d{5}(-\d{4})?$/.test(sZip);
  }
  creditCardType(cc) {
    let amex = new RegExp('^3[47]0-9]{2}.*$');
    let visa = new RegExp('^4[0-9]{3}.*$');
    let cup1 = new RegExp('^62[0-9]{2}.*$');
    let cup2 = new RegExp('^81[0-9]{2}.*$');
    let mastercard = new RegExp('^5[1-5][0-9]{2}.*$');
    let mastercard2 = new RegExp('^2[2-7][0-9]{2}.*$');
    let disco1 = new RegExp('^6011.*$');
    let disco2 = new RegExp('^62[24568][0-9].*$');
    let disco3 = new RegExp('^6[45][0-9]{2}.*$');
    let diners = new RegExp('^3[0689][0-9]{2}.*$');
    let jcb = new RegExp('^35[0-9]{2}.*$');
    return (visa.test(cc)) ? 'visa' : (amex.test(cc)) ? 'amex' : (mastercard.test(cc) || mastercard2.test(cc)) ? 'mastercard' : (disco1.test(cc) || disco2.test(cc) || disco3.test(cc)) ? 'discover' : (diners.test(cc)) ? 'dinners' : (jcb.test(cc)) ? 'jcb' : (cup1.test(cc) || cup2.test(cc)) ? 'unionpay' : undefined;
  }
  isValidCVV(cvv) {
    const validCVV = new RegExp('^[0-9]{3,4}$');
    return validCVV.test(cvv);
  }
  isDateValid(date) {
    let formattedDate = this.getFullDate(date);
    let exMonth = formattedDate.exMonth;
    let matchDate = formattedDate.matchDate;
    let exYear = formattedDate.exYear;
    let today = formattedDate.today;
    let fullCardDate = formattedDate.fullCardDate;
    let expiration;
    (exMonth && exYear) ? expiration = fullCardDate : null;
    let validation, formDate;
    (!expiration || (expiration < today)) ? validation = false : validation = true;
    (exMonth && exYear) ? formDate = matchDate[1] + '/' + matchDate[2] : '';
    return { newDate: formDate, validation };
  }
  isCardValid(cardNumber) {
    const cleanCardNumber = cardNumber.replace(/[^0-9]/g, '');
    const validCardNumberFormat = new RegExp('^(\\d{4})\\/?(\\d{4})\/?(\\d{4})\/?(\\d{4})$');
    let matchCardNumber = cleanCardNumber.match(validCardNumberFormat);
    let slot1 = (matchCardNumber && matchCardNumber[1]) ? +matchCardNumber[1] : null;
    let slot2 = (matchCardNumber && matchCardNumber[2]) ? +matchCardNumber[2] : null;
    let slot3 = (matchCardNumber && matchCardNumber[3]) ? +matchCardNumber[3] : null;
    let slot4 = (matchCardNumber && matchCardNumber[4]) ? +matchCardNumber[4] : null;
    let formCardNumber, validation;
    (slot1 && slot2 && slot3 && slot4) ? validation = true : validation = false;
    (slot1 && slot2 && slot3 && slot4) ? formCardNumber = matchCardNumber[1] + '-' + matchCardNumber[2] + '-' + matchCardNumber[3] + '-' + matchCardNumber[4] : '';
    return { newCardNumber: formCardNumber, validation };
  }
  getFullDate(date) {
    const cleanDate = date.replace(/[^0-9]/g, '');
    const validDateFormat = new RegExp('^(0[1-9]|1[0-2])\/?([0-9]{2})$');
    const matchDate = cleanDate.match(validDateFormat);
    const exMonth = (matchDate && matchDate[1]) ? +matchDate[1] : null;
    const exYear = (matchDate && matchDate[2]) ? +('20' + matchDate[2]) : null;
    const today = new Date();
    const someday = new Date();
    const fullCardDate = new Date(someday.setFullYear(exYear, exMonth, 1));
    return { matchDate, exMonth, exYear, today, someday, fullCardDate };
  }
  compareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if (aCount !== bCount)
        return false;
    }
    return true;
  }
  inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled) {
    const checkValue = (label) && event && event.detail;
    (checkValue && (inputsChecked.indexOf(label) === -1)) ? inputsChecked.push(label) : null;
    const allInputsChecked = this.compareArrays(inputsChecked, inputLabels);
    (allInputsChecked) ? buttonDisabled = false : buttonDisabled = true;
    return { inputsChecked, buttonDisabled };
  }
}
const valService = new validationService();

class licenseService {
  constructor() {
    this.licCheck = async (salt) => {
      const textToChars = text => text.split('').map(c => c.charCodeAt(0));
      const applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code);
      return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
    };
    this.prefixCheck = async (str, word) => {
      return str.lastIndexOf(word, 0) === 0;
    };
    this.licMsg = async (licArray, resType) => {
      let licChecked = false;
      let licType = '';
      let ctr = 0;
      for (const lic of licArray) {
        const licVal = await this.prefixCheck(resType, lic);
        if (licVal) {
          licChecked = true;
          licType = lic;
        }
        ctr++;
        if (ctr === licArray.length) {
          const checks = await this.checkValidation(licChecked, resType, licType);
          if (checks) {
            return checks;
          }
        }
      }
    };
    this.checkValidation = async (licChecked, resType, licType) => {
      if (licChecked === true) {
        const checkResult = await this.isValidTrial(resType, licType);
        if (checkResult) {
          return true;
        }
      }
      else {
        this.outputInvalidLicenseKey();
        return false;
      }
    };
    this.extractExpiry = async (dataRef) => {
      const resHashed = dataRef.substring(dataRef.lastIndexOf('_') + 1, dataRef.length);
      const hash = +(new Date(parseInt(resHashed, 10)));
      return hash;
    };
    this.isValidTrial = async (dataRef, lic) => {
      const licDate = dataRef.substring(dataRef.lastIndexOf('_') + 1, dataRef.length);
      const expDate = new Date(licDate);
      const today = new Date();
      if (lic == 'tea') {
        if (licDate && licDate.length >= 8) {
          if (expDate < today) {
            this.outputExpiredTrialKey(licDate);
            return false;
          }
          else {
            return true;
          }
        }
        else {
          this.outputInvalidLicenseKey();
          return false;
        }
      }
      else if (lic == 'ind' || lic == 'tea' || lic == 'ent') {
        const licKey = await this.extractExpiry(dataRef);
        if (!licKey || licKey > 13) {
          this.outputInvalidLicenseKey();
          return false;
        }
        else {
          return true;
        }
      }
      else {
        this.outputMissingLicenseKey();
        return false;
      }
    };
    this.outputInvalidLicenseKey = async () => {
      console.error('*****************************************************************************************************************');
      console.error('***************************************** steppedForm License ********************************************');
      console.error('********************************************* Invalid License ***************************************************');
      console.error('* Your license for steppedForm is not valid - please contact hi@steppedform.com to obtain a valid license. *');
      console.error('*****************************************************************************************************************');
      console.error('*****************************************************************************************************************');
    };
    this.outputExpiredTrialKey = async (expDate) => {
      console.error('****************************************************************************************************************');
      console.error('***************************************** steppedForm License *******************************************');
      console.error('*****************************************   Trial Period Expired.    *******************************************');
      console.error("* Your license for steppedForm expired on " + expDate + ". *");
      console.error('* Please email hi@steppedform.com to purchase a license. *');
      console.error('****************************************************************************************************************');
      console.error('****************************************************************************************************************');
    };
    this.outputMissingLicenseKey = async () => {
      console.error('****************************************************************************************************************');
      console.error('***************************************** steppedForm License *******************************************');
      console.error('****************************************** License Key Not Found ***********************************************');
      console.error('* All steppedForm features are unlocked. *');
      console.error('* This is an evaluation only version, it is not licensed for development projects intended for production. *');
      console.error('****************************************************************************************************************');
      console.error('****************************************************************************************************************');
    };
    this.licProcess = async (license) => {
      if (license) {
        // Validate the type
        const licData = license;
        let whatType = await this.licCheck('282429536481');
        let resType = whatType(licData);
        // Type list
        const lt = ['tea', 'ind', 'tea', 'ent'];
        return await this.licMsg(lt, resType);
      }
      else {
        this.outputMissingLicenseKey();
        return false;
      }
    };
  }
}
const licService = new licenseService();

const sfFullAddressCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-row{margin:0 !important}.sf-col-1-of-2{margin:0}";

const SfFullAddress = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.addressSubmitted = index.createEvent(this, "addressSubmitted", 7);
    this.backBtnPressed = index.createEvent(this, "backBtnPressed", 7);
    this.inputsChecked = [];
  }
  /* Method for submit btn */
  onSubmitAddress() {
    if (!this.buttonDisabled) {
      this.onSessionDefined();
      this.addressSubmitted.emit(true);
    }
  }
  /*
  Listenting lic from any other wc
  */
  async onLicenseChecked(event) {
    this.licChecked = event.detail;
    if (!this.licChecked) {
      const innerLic = await licService.licProcess(this.lic);
      if (innerLic) {
        this.licChecked = true;
      }
    }
  }
  onAddressInit() {
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    this.inputLabels = ['address1_' + this.eleId, 'address2_' + this.eleId, 'city_' + this.eleId, 'state_' + this.eleId, 'zipcode_' + this.eleId, 'country_' + this.eleId];
    this.buttonDisabled = true;
  }
  componentWillLoad() {
    this.onAddressInit();
    themeService.themeSer.checkTheme();
  }
  componentDidLoad() {
    this.addressForm = this.inputsArray.shadowRoot.querySelectorAll('sf-input');
    this.addressForm.forEach((element, index) => {
      const ele = ((element && !element.hasAttribute('sf-required') || (element && (element.getAttribute('sf-required') == 'false')))) ? this.inputLabels[index] : null;
      (ele) ? this.inputsChecked.push(ele) : null;
    });
  }
  onInputChanged(label, event) {
    const inputsChecked = this.inputsChecked;
    const inputLabels = this.inputLabels;
    const buttonDisabled = this.buttonDisabled;
    this.inputsChecked = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).inputsChecked;
    this.buttonDisabled = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).buttonDisabled;
  }
  // Public Method to be called from outside
  async addressSubmited() {
    this.onSessionDefined();
  }
  onSessionDefined() {
    if (this.addressForm && this.addressForm.length) {
      this.addressForm.forEach((element, index) => {
        // Iterate each element and save info in sessionStorage
        const ele = element.shadowRoot.querySelector('input').value;
        sessionStorage.setItem(this.inputLabels[index], ele);
      });
    }
  }
  onBackPressed() {
    this.backBtnPressed.emit(true);
  }
  render() {
    return [
      index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[0]), "sf-label": "Street Address", sfId: `address1-${this.eleId}`, "sf-required": "true" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[1]), "sf-label": "Address (Cont)", sfId: `address2-${this.eleId}` }))),
      index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[2]), "sf-label": "City/Town", "sf-data": "citiesList", sfId: `city-${this.eleId}`, "sf-required": "true" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[3]), "sf-label": "State/Province", "sf-data": "statesList", sfId: `state-${this.eleId}`, "sf-required": "true" }))),
      index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[4]), "sf-label": "Zip/Postal Code", sfId: `zipcode-${this.eleId}`, "sf-required": "true" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[5]), "sf-label": "Country", "sf-data": "countriesList", sfId: `country-${this.eleId}`, "sf-required": "true" }))),
      (this.showButtom) ? index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2 sf-col-1-of-2__back-btn" }, index.h("sf-submit-button", { "id-suffix": `${this.eleId}`, onClick: this.onBackPressed.bind(this) }, "Back")), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-submit-button", { "sf-disabled": this.buttonDisabled, "id-suffix": `${this.eleId}`, onClick: this.onSubmitAddress.bind(this), "btn-style": "primary" }, "Continue"))) : ''
    ];
  }
  get inputsArray() { return index.getElement(this); }
  static get watchers() { return {
    "idSuffix": ["componentWillLoad"]
  }; }
};
SfFullAddress.style = sfFullAddressCss;

const sfFullCreditCardCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-row{margin:0 !important}";

const SfFullCreditCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ccSubmitted = index.createEvent(this, "ccSubmitted", 7);
    this.backBtnPressed = index.createEvent(this, "backBtnPressed", 7);
    this.inputsChecked = [];
  }
  /* Method for submit btn */
  onSubmitCreditCard() {
    if (!this.buttonDisabled) {
      this.onCreditCardSubmit();
      if (this.creditCardAddress !== 'sameAddress') {
        this.onAdditionalAddressSubmit();
      }
      this.ccSubmitted.emit(true);
    }
  }
  /*
  Listing from radio btn Web Component
  */
  onRadioValueSelected(event) {
    this.creditCardAddress = (event && event.detail) ? event.detail : null;
  }
  /*
  Listenting lic from any other wc
  */
  async onLicenseChecked(event) {
    this.licChecked = event.detail;
    if (!this.licChecked) {
      const innerLic = await licService.licProcess(this.lic);
      if (innerLic) {
        this.licChecked = true;
      }
    }
  }
  /**
  * Used at init (beginning)
  */
  onCreditCardInit() {
    this.innerPaymentAddressConfig = this.paymentAddressConfig;
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    this.inputLabels = ['card-number_' + this.eleId, 'card-date_' + this.eleId, 'card-cvc_' + this.eleId, 'card-holder_' + this.eleId];
    this.buttonDisabled = true;
  }
  componentWillLoad() {
    this.onCreditCardInit();
    themeService.themeSer.checkTheme();
  }
  componentDidLoad() {
    this.creditCardForm = this.inputsArray.shadowRoot.querySelectorAll('sf-input');
    this.additionalAddressForm = this.inputsArray.shadowRoot.querySelectorAll('sf-full-address');
  }
  onInputChanged(label, event) {
    const inputsChecked = this.inputsChecked;
    const inputLabels = this.inputLabels;
    const buttonDisabled = this.buttonDisabled;
    this.inputsChecked = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).inputsChecked;
    this.buttonDisabled = valService.inputChecked(label, event, inputsChecked, inputLabels, buttonDisabled).buttonDisabled;
  }
  onValidateInput(label, event) {
    this.inputLabels.every((inputLabel) => {
      return ((inputLabel == label) && event && event.detail);
    });
  }
  onCreditCardSubmit() {
    if (this.creditCardForm && this.creditCardForm.length) {
      this.creditCardForm.forEach((element, index) => {
        // Iterate each element and save info in sessionStorage
        let inputValue;
        const cardNumber = /^card-number/.test(this.inputLabels[index]);
        const cardDate = /^card-date/.test(this.inputLabels[index]);
        const ele = element.shadowRoot.querySelector('input').value;
        if (cardNumber) {
          const origCardNumber = ele.replace(/[^0-9]/g, '');
          inputValue = origCardNumber;
        }
        else if (cardDate) {
          const fullCardDate = valService.getFullDate(ele).fullCardDate;
          inputValue = fullCardDate;
        }
        else {
          inputValue = ele;
        }
        sessionStorage.setItem(this.inputLabels[index], inputValue);
      });
    }
  }
  onAdditionalAddressSubmit() {
    if (this.additionalAddressForm && this.additionalAddressForm.length) {
      this.additionalAddressForm.forEach((element) => {
        const sfInputs = element.shadowRoot.querySelectorAll('sf-input');
        // Sfinputs is a nodeList, we need to iterate again
        sfInputs.forEach((ele) => {
          const inputId = ele.shadowRoot.querySelector('input').id;
          const inputValue = ele.shadowRoot.querySelector('input').value;
          sessionStorage.setItem(inputId, inputValue);
        });
      });
    }
  }
  onBackPressed() {
    this.backBtnPressed.emit(true);
  }
  render() {
    return [
      index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[0]), "sf-label": "Credit Card Number", "sf-data": "card-number", "sf-error": "A valid format has 16 numbers", sfId: `card-number-${this.eleId}`, "sf-required": "true" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[1]), "sf-label": "Valid (MM/YY)", "sf-data": "card-date", "sf-error": "MMYY (Month/Year)", sfId: `card-date-${this.eleId}`, "sf-required": "true" }))),
      index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[2]), "sf-type": "password", "sf-data": "card-cvc", "sf-error": "Use only numbers", "sf-label": "CVC", sfId: `card-cvc-${this.eleId}`, "sf-required": "true" })), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-input", { onInputValidated: this.onInputChanged.bind(this, this.inputLabels[3]), "sf-label": "Holder Name", sfId: `card-holder-${this.eleId}`, "sf-required": "true" }))),
      index.h("div", { class: "sf-row " }, index.h("div", { class: "sf-col-1-of-1" }, index.h("sf-main-title", null, "Billing Address"), index.h("sf-radio-group", { radioGroupData: this.innerPaymentAddressConfig }))),
      index.h("div", { class: (this.creditCardAddress !== 'sameAddress') ? 'sf-row' : 'sf-row__hide' }, index.h("div", { class: "sf-col-1-of-1" }, index.h("sf-full-address", { "show-buttom": "false", "id-suffix": "002", id: "ad-0002" }))),
      (this.showButtom) ? index.h("div", { class: "sf-row" }, index.h("div", { class: "sf-col-1-of-2 sf-col-1-of-2__back-btn" }, index.h("sf-submit-button", { "id-suffix": `${this.eleId}`, onClick: this.onBackPressed.bind(this) }, "Back")), index.h("div", { class: "sf-col-1-of-2" }, index.h("sf-submit-button", { "sf-disabled": this.buttonDisabled, "id-suffix": `${this.eleId}`, onClick: this.onSubmitCreditCard.bind(this), "btn-style": "primary" }, "Continue"))) : ''
    ];
  }
  get inputsArray() { return index.getElement(this); }
  static get watchers() { return {
    "paymentAddressConfig": ["onCreditCardInit"]
  }; }
};
SfFullCreditCard.style = sfFullCreditCardCss;

const sfInputCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-form__group{margin:0}.sf-form__input{margin:0}";

const SfInput = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.inputValidated = index.createEvent(this, "inputValidated", 7);
    this.cardDateMax = 5;
    this.cardCvcMax = 4;
    this.cardNumberMax = 19;
    this.addressZipMax = 5;
    /* Datasets for Autocomplete */
    this.statesUrl = index.getAssetPath(`./assets/places-data/states.json`);
    this.countriesUrl = index.getAssetPath(`./assets/places-data/countries.json`);
    this.citiesUrl = index.getAssetPath(`./assets/places-data/cities.json`);
    /* CC Icons Images */
    this.visaImg = 'visa.svg';
    this.amexImg = 'amex.svg';
    this.mastercardImg = 'mastercard.svg';
    this.discoverImg = 'discover.svg';
    this.dinnersImg = 'dinners.svg';
    this.jcbImg = 'jcb.svg';
    this.unionImg = 'unionpay.svg';
    this.innerInputValid = true;
    /* Logic for autocomplete  */
    this.onSearchSuggestions = async (searchText, dataUrl) => {
      const res = await fetch(dataUrl);
      const options = await res.json();
      if (!searchText) {
        this.emptyList = true;
        this.onCleanState();
        return false;
      }
      let matches = options.filter((match) => {
        if (match && match.name && match.name.charAt(1)) {
          return (match.name.indexOf(searchText) !== -1);
        }
      });
      if (searchText.length === 0) {
        matches = [];
        this.onCleanState();
      }
      const size = 10;
      let matchesFilt;
      (matches.length > size) ? matchesFilt = matches.slice(0, size) : matchesFilt = matches;
      this.outputHtml(matchesFilt);
      this.innerInputValid = true;
    };
    this.outputHtml = matches => {
      if (matches.length > 0) {
        const html = matches
          .map(match => `
          <li id="${'sf-' + this.dataList + '-' + match[this.dataValue].toLowerCase()}" data-value=${match[this.dataValue]}>${match.name}</li>`)
          .join("");
        this.onRenderList(html);
      }
    };
  }
  /* Listen clicks on li element */
  onHandleClickEvent(ev) {
    const clickedElement = ev.composedPath()[0];
    if (clickedElement.tagName == 'INPUT' && this.innerType === 'text') {
      this.onSearchAddress('');
      this.emptyList = true;
    }
    else if (clickedElement.tagName == 'LI' && this.innerType === 'text') {
      this.innerTextInput = clickedElement.textContent;
      this.emptyList = true;
    }
  }
  /*
Listenting lic from any other wc
*/
  async onLicenseChecked(event) {
    this.licChecked = event.detail;
    if (!this.licChecked) {
      const innerLic = await licService.licProcess(this.lic);
      if (innerLic) {
        this.licChecked = true;
      }
    }
  }
  async onSearchAddress(dataInput) {
    if (this.sfData === 'zipcode' && this.innerType === 'text') {
      this.innerInputValid = this.onZipCode();
    }
    else if (this.sfData === 'card-cvc' && (this.innerType === 'text' || this.innerType === 'password')) {
      this.innerInputValid = this.onCardCvc();
    }
    else if (this.sfData === 'card-date' && this.innerType === 'text') {
      this.innerInputValid = this.onCardDate();
    }
    else if (this.sfData === 'card-number' && this.innerType === 'text') {
      this.innerInputValid = this.onCardNumber();
    }
    else if (this.sfData === 'statesList' && this.innerType === 'text') {
      await this.onSearchSuggestions(dataInput, this.statesUrl);
    }
    else if (this.sfData === 'countriesList' && this.innerType === 'text') {
      await this.onSearchSuggestions(dataInput, this.countriesUrl);
    }
    else if (this.sfData === 'citiesList' && this.innerType === 'text') {
      await this.onSearchSuggestions(dataInput, this.citiesUrl);
    }
    else {
      this.innerInputValid = true;
    }
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  onTextInput(event) {
    const inputValue = event.target.value;
    if ((this.sfData === 'card-date') && inputValue && inputValue.toString().length > this.cardDateMax) {
      event.preventDefault();
      return;
    }
    this.innerType = ((this.sfType === 'text') || (this.sfType === 'email') || (this.sfType === 'password')) ? this.sfType : 'text';
    this.dataValue = this.sfData === 'statesList' ? 'state_code' : this.sfData === 'countriesList' ? 'iso3' : this.sfData === 'citiesList' ? 'country' : null;
    this.dataList = this.sfData === 'statesList' ? 'states-list' : this.sfData === 'countriesList' ? 'countries-list' : this.sfData === 'citiesList' ? 'cities-list' : null;
    (this.sfType === 'text') ? this.innerTextInput = inputValue.charAt(0).toUpperCase() + inputValue.slice(1) : this.innerTextInput = inputValue;
    (inputValue == '') ? this.emptyList = true : this.emptyList = false;
    if (this.innerTextInput.trim() != '') {
      this.onSearchAddress(this.innerTextInput);
    }
    else {
      this.innerInputValid = false;
    }
    (this.innerInputValid && this.innerTextInput.length) ? this.inputValidated.emit(true) : this.inputValidated.emit(false);
  }
  onZipCode() {
    const fetchInputChanges = valService.isValidUSZip(this.innerTextInput);
    return fetchInputChanges;
  }
  onCardCvc() {
    const fetchInputChanges = valService.isValidCVV(this.innerTextInput);
    return fetchInputChanges;
  }
  onCardDate() {
    const fetchInputChanges = valService.isDateValid(this.innerTextInput);
    (fetchInputChanges.newDate) ? this.innerTextInput = fetchInputChanges.newDate : null;
    return fetchInputChanges.validation;
  }
  onCardNumber() {
    const fetchInputChanges = valService.isCardValid(this.innerTextInput);
    this.creditCardType = valService.creditCardType(this.innerTextInput);
    (fetchInputChanges.newCardNumber) ? this.innerTextInput = fetchInputChanges.newCardNumber : this.inputBackground = null;
    return fetchInputChanges.validation;
  }
  onCleanState() {
    this.sfData === 'statesList' ? this.statesList = '' : this.sfData === 'countriesList' ? this.countriesList = '' : this.sfData === 'citiesList' ? this.citiesList = '' : null;
  }
  onRenderList(html) {
    if (html) {
      if (this.sfData === 'statesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.statesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
      else if (this.sfData === 'countriesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.countriesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
      else if (this.sfData === 'citiesList' && this.innerType === 'text') {
        this.emptyList = false;
        this.citiesList = `<ul id=${this.dataList}> ${html} </ul>`;
      }
    }
  }
  render() {
    /*
      sfReadonly
      sfExpressions: 'this.role == 'admin' && this.addressInputs[mame]'
      'class' are **** ALL optional *****
    */
    this.cardImage = (this.creditCardType === 'visa') ? index.getAssetPath(`./assets/${this.visaImg}`) : (this.creditCardType === 'amex') ? index.getAssetPath(`./assets/${this.amexImg}`) : (this.creditCardType == 'mastercard') ? index.getAssetPath(`./assets/${this.mastercardImg}`) : (this.creditCardType === 'discoverImg') ? index.getAssetPath(`./assets/${this.discoverImg}`) : (this.creditCardType === 'dinners') ? index.getAssetPath(`./assets/${this.dinnersImg}`) : (this.creditCardType == 'jcb') ? index.getAssetPath(`./assets/${this.jcbImg}`) : (this.creditCardType === 'unionpay') ? index.getAssetPath(`./assets/${this.unionImg}`) : null;
    if (this.cardImage) {
      this.inputBackground = {
        backgroundImage: `url(${this.cardImage})`,
        backgroundPosition: 'right 5px bottom 5px',
        backgroundSize: '35px',
        backgroundRepeat: 'no-repeat',
      };
    }
    this.currentRender =
      index.h("div", { class: "sf-form__group" }, index.h("input", { type: this.innerType, style: (this.inputBackground) ? this.inputBackground : '', class: this.innerInputValid ? 'sf-form__input' : 'sf-form__input sf-form__input-error', placeholder: this.sfLabel, ref: el => (this.innerInput = el), value: this.innerTextInput, maxlength: (this.sfData === 'card-number') ? this.cardNumberMax : (this.sfData === 'card-cvc') ? this.cardCvcMax : (this.sfData === 'card-date') ? this.cardDateMax : (this.sfData === 'zipcode') ? this.addressZipMax : '', onInput: this.onTextInput.bind(this), name: this.sfId, id: this.sfId, required: this.sfRequired, disabled: this.sfDisabled }), index.h("label", { htmlFor: this.sfId, class: "sf-form__label" }, this.sfLabel), (this.sfData === 'statesList' && !this.emptyList && this.innerType === 'text') ? index.h("div", { class: "sf-form__group__data-list", id: "sf-suggest-states", innerHTML: this.statesList }) : (this.sfData === 'countriesList' && !this.emptyList && this.innerType === 'text') ? index.h("div", { class: "sf-form__group__data-list", id: "sf-suggest-countries", innerHTML: this.countriesList }) : (this.sfData === 'citiesList' && !this.emptyList && this.innerType === 'text') ? index.h("div", { class: "sf-form__group__data-list", id: "sf-suggest-cities", innerHTML: this.citiesList }) : '', index.h("div", { class: "sf-form__group__error" }, (!this.innerInputValid && this.sfError) ? this.sfError : ''));
    return (this.currentRender);
  }
  static get assetsDirs() { return ["assets"]; }
  static get watchers() { return {
    "sfData": ["onSearchAddress"]
  }; }
};
SfInput.style = sfInputCss;

const sfMainTitleCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-main-title{padding:0.25em 0;font-size:1.2em}";

const SfMainTitle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    return index.h("h1", { class: "sf-main-title" }, index.h("slot", null));
  }
};
SfMainTitle.style = sfMainTitleCss;

const sfRadioGroupCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}";

const SfRadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.radioValueSelected = index.createEvent(this, "radioValueSelected", 7);
  }
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
    themeService.themeSer.checkTheme();
  }
  render() {
    return (index.h("div", { class: "sf-form__group" }, this.innerRadioGroupData.map((radio, index$1) => index.h("div", { class: "sf-form__radio-group" }, index.h("input", { type: "radio", class: "sf-form__radio-input", id: radio.radioName, name: radio.radioModel, value: radio.radioName, onChange: this.onTextInput.bind(this), checked: index$1 === 0 }), index.h("label", { htmlFor: radio.radioName, class: "sf-form__radio-label" }, index.h("div", { class: "sf-form__radio-button" }), index.h("div", { class: "sf-form__radio-text" }, radio.radioLabel), radio.radioTitle ?
      index.h("div", { class: "sf-form__radio-title" }, radio.radioTitle)
      : null, radio.radioSubTitle ?
      index.h("div", { class: (this.innerRadioGroupData.length == (index$1 + 1)) ? 'sf-form__radio-sub-title-final' : 'sf-form__radio-sub-title' }, radio.radioSubTitle)
      : null)))));
  }
  static get watchers() { return {
    "radioGroupData": ["onRadioGroupInit"]
  }; }
};
SfRadioGroup.style = sfRadioGroupCss;

const sfSelectMenuCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-select-menu{margin-top:0.5em;border:1px solid var(--theme-secondary);min-width:2em;font-size:1em}.sf-select-menu:focus{outline:0}.sf-select-label{display:inline-block;width:2em;height:1em;margin-right:0.5em;font-size:1em}";

const SfSelectMenu = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.selectMenuValue = index.createEvent(this, "selectMenuValue", 7);
  }
  /**
  * Used at init (beginning)
  */
  onSelectMenuInit() {
    this.innerSelectMenuData = this.selectMenuData;
    this.selectMenuValue.emit(this.selectMenuData[0].optionLabel);
  }
  componentWillLoad() {
    this.onSelectMenuInit();
    themeService.themeSer.checkTheme();
  }
  onSelectOption(event) {
    const selectOptionValue = event.target.value;
    this.selectMenuValue.emit(selectOptionValue);
  }
  render() {
    return [
      index.h("label", { class: "sf-select-label" }, this.selectMenuLabels.selectLabel),
      index.h("select", { name: this.selectMenuLabels.selectName, class: "sf-select-menu", onChange: this.onSelectOption.bind(this) }, this.innerSelectMenuData.map((option) => index.h("option", { value: option.optionValue }, option.optionLabel)))
    ];
  }
  static get watchers() { return {
    "selectMenuData": ["onSelectMenuInit"]
  }; }
};
SfSelectMenu.style = sfSelectMenuCss;

const sfStepCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}:host(.sf-step-is-active){display:block;height:100%}:host(:not(sf-step-is-active)){display:none}";

const SfStep = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    this.innerStepElement =
      index.h("div", { class: "sf-step" }, index.h("slot", null));
    return (this.innerStepElement);
  }
};
SfStep.style = sfStepCss;

const sfStepperCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}.sf-row-stepper{margin:1em auto;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;flex-direction:row}@media only screen and (max-width: 56.25em){.sf-row-stepper{margin:auto}}.sf-row-stepper [class^=sf-col-]{box-sizing:border-box}@media only screen and (max-width: 56.25em){.sf-row-stepper [class^=sf-col-]:not(:last-child){margin:unset}}@media only screen and (max-width: 56.25em){.sf-row-stepper [class^=sf-col-]{width:unset !important}}.sf-row-stepper .sf-col-1-of-4{margin:0}@media only screen and (max-width: 56.25em){.sf-row-stepper .sf-col-1-of-4{width:35% !important}}@media only screen and (max-width: 56.25em){.sf-row-stepper .sf-col-3-of-4{width:65% !important}}@media only screen and (max-width: 56.25em){.sf-h-stepper-container{z-index:100;width:100%;margin-top:0 !important;padding-top:0.3em;padding-bottom:0.3em;left:0;top:0}}.sf-h-steps{padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-h-steps{padding:0}}.sf-hide-contaniner{display:none}.sf-v-steps{display:block;width:100%}.sf-h-stepper{display:flex;list-style-type:none;margin:1em auto 1em auto;justify-content:space-between;max-width:150em}.sf-h-stepper li{position:relative;display:flex;flex-direction:column;align-items:center;flex:1}.sf-h-stepper li::before{position:absolute;content:\"\";border-bottom:0.5em solid var(--theme-next);width:100%;top:1em;left:-45%;z-index:-1}.sf-h-stepper li::after{position:absolute;content:\"\";border-bottom:0.5em solid var(--theme-next);width:100%;top:1em;left:45%;z-index:-1}.sf-h-stepper li.sf-h-done .sf-step-number{position:relative;background-color:var(--theme-done);z-index:10}.sf-h-stepper li.sf-h-done::after{position:absolute;content:\"\";border-bottom:0.5em solid var(--theme-done);width:100%;top:1em;left:45%;z-index:0}.sf-h-stepper li:first-child::before{content:none}.sf-h-stepper li:last-child::after{content:none}.sf-h-step-label{display:inline-block;margin-top:1em}li.sf-v-done .sf-step-number{background-color:var(--theme-done)}.sf-v-stepper{position:relative;-webkit-flex-direction:column;flex-direction:column;float:left;text-decoration:none}.sf-v-stepper::after{content:\"\";position:absolute;width:0.5em;height:calc(100% - 4em);top:1em;left:1.2em;z-index:-2;background-color:var(--theme-next)}.sf-v-stepper ul,.sf-v-stepper li{list-style-type:none;margin-bottom:2em}.sf-v-stepper li.sf-v-li-done:not(:last-child)::after{content:\"\";position:absolute;width:0.5em;height:5em;margin-top:0.6em;left:1.2em;z-index:-1;background-color:var(--theme-done)}.sf-step-active .sf-step-number{background-color:var(--theme-done);color:var(--theme-contrast)}.sf-step-number{width:2.9em;height:2.9em;display:flex;align-items:center;justify-content:center;background-color:var(--theme-next);color:var(--theme-text);border-radius:50%}.sf-step-number:before{content:\"\";position:relative;height:0px;width:0px;overflow:hidden;white-space:pre}.sf-prog-circle{margin:25%;width:50%;height:50%;background-color:var(--theme-contrast);border-radius:50%}.sf-check-circle{transform:rotate(45deg);height:15px;width:8px;padding:0;margin:0;display:inline-block;border-bottom:0.2em solid var(--theme-contrast);border-right:0.2em solid var(--theme-contrast)}.sf-h-done .sf-step-number{background-color:var(--theme-done);color:var(--theme-text);cursor:pointer}.sf-v-done .sf-step-number{background-color:var(--theme-done);color:var(--theme-text);cursor:pointer}.sf-step-right-ele{display:table-cell;width:2.9em;height:2.9em}.sf-step-left-ele{display:table-cell;padding-left:0.5em;vertical-align:middle}.sf-step-left-ele .sf-step-label{display:table-cell}.sf-h-step{background:transparent;display:flex;flex-direction:column;justify-content:center;align-items:center}.sf-v-step{display:inline-block;line-height:2.3em}.sf-stepper-container{color:var(--theme-font)}";

const SfStepper = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.updateStep = index.createEvent(this, "updateStep", 7);
    this.licenseChecked = index.createEvent(this, "licenseChecked", 7);
  }
  /**
  * Used when steper is clicked (update)
  */
  onActiveStep(index) {
    for (const [stepIndex, step] of this.innerStepsData.entries()) {
      if (stepIndex == index) {
        step.activeStep = true;
        this.currentStep = stepIndex;
      }
      else {
        step.activeStep = false;
      }
    }
    this.updateStep.emit(this.currentStep);
    this.stepperControl = index;
    this.onUpdateStepper();
    this.onActiveSlot();
  }
  getnumberOfSteps(stepsData) {
    this.numberOfSteps = 0;
    for (const stepIndex of stepsData) {
      if (!stepIndex.stepHidden) {
        this.numberOfSteps++;
      }
    }
    return this.numberOfSteps;
  }
  /*
  Listen when element size changes
  */
  handleComponentResChange(e) {
    if (e && e.matches) {
      (this.innerStepperAlign == 'h' || this.innerStepperAlign == 'horizontal') ? this.innerStepperAlign = 'v' : null;
    }
  }
  /**
  * Used at init (beginning)
  */
  onStepInit() {
    this.innerStepsData = this.stepsData;
    this.getnumberOfSteps(this.stepsData);
    this.innerStepperAlign = (this.stepperAlign) ? this.stepperAlign : 'h';
    this.stepperControl = '';
    this.onUpdateStepper();
  }
  // Public Method to be called from outside
  async onNextStep(index) {
    this.onActiveStep(index);
  }
  onUpdateStepper() {
    this.innerStepsData.map((step, index) => {
      if (step.activeStep) {
        this.currentStep = index;
      }
    });
  }
  async componentWillLoad() {
    this.onStepInit();
    const result = await licService.licProcess(this.lic);
    themeService.themeSer.checkTheme();
    this.licenseChecked.emit(result);
  }
  componentDidLoad() {
    this.onActiveSlot();
  }
  onActiveSlot() {
    this.currentStepper = this.slotArray.querySelectorAll('sf-step');
    if (this.currentStepper && this.currentStepper.length) {
      this.currentStepper.forEach(element => {
        element.classList.remove('sf-step-is-active');
      });
      this.currentStepper[this.currentStep].classList.add('sf-step-is-active');
    }
  }
  render() {
    if (this.innerStepperAlign == 'h' || this.innerStepperAlign == 'horizontal') {
      this.innerStepperElement =
        index.h("div", { class: "sf-stepper-container" }, index.h("ul", { class: "sf-h-stepper sf-h-stepper-container" }, this.innerStepsData.map((step, index$1) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
          index.h("li", { onClick: (index$1 <= this.currentStep) ? () => this.onActiveStep(index$1) : null, class: (index$1 < this.currentStep) ? 'sf-h-done' : 'sf-h-li' }, index.h("div", { class: (index$1 < this.currentStep) ? 'sf-h-step sf-h-done' : step.activeStep ? 'sf-h-step sf-step-active' : 'sf-h-step' }, index.h("div", { class: "sf-step-number" }, (index$1 < this.currentStep) ? index.h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : index.h("div", { class: "sf-prog-circle" })), index.h("span", { class: "sf-h-step-label" }, step.stepLabel)))
          : null)), index.h("div", { class: "sf-h-steps" }, index.h("slot", null)));
    }
    else {
      this.innerStepperElement =
        index.h("div", { class: "sf-row sf-row-stepper sf-stepper-container" }, index.h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-hide-contaniner' : 'sf-col-1-of-4' }, index.h("ul", { class: "sf-v-stepper" }, this.innerStepsData.map((step, index$1) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
          index.h("li", { onClick: (index$1 <= this.currentStep) ? () => this.onActiveStep(index$1) : null, class: (index$1 < this.currentStep) ? 'sf-v-li-done' : '' }, index.h("div", { class: (index$1 < this.currentStep) ? 'sf-v-step sf-v-done' : step.activeStep ? 'sf-v-step sf-step-active' : 'sf-v-step' }, index.h("div", { class: "sf-step-right-ele" }, index.h("div", { class: "sf-step-number" }, (index$1 < this.currentStep) ? index.h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : index.h("div", { class: "sf-prog-circle" }))), index.h("div", { class: "sf-step-left-ele" }, index.h("span", { class: "sf-step-label" }, step.stepLabel))))
          : null))), index.h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-v-steps' : 'sf-col-3-of-4' }, index.h("slot", null)));
    }
    return (this.innerStepperElement);
  }
  get slotArray() { return index.getElement(this); }
  static get watchers() { return {
    "stepsData": ["onStepInit"]
  }; }
};
SfStepper.style = sfStepperCss;

const sfSubmitButtonCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}.sf-btn,.sf-btn:link,.sf-btn:visited{text-decoration:none;padding:1em 1.5em;display:inline-block;border-radius:0.4em;transition:all 0.2s;position:relative;font-size:1.2em;min-width:25%;border:none;cursor:pointer}.sf-btn:hover:not([disabled]){transform:translateY(-2px);box-shadow:0 1em 1em rgba(var(--theme-next), 0.1)}.sf-btn:hover:not([disabled])::after{transform:scaleX(1.4) scaleY(1.6);opacity:0}.sf-btn:disabled{color:var(--theme-text)}.sf-btn:active,.sf-btn:focus{outline:none}.sf-btn__primary{background-color:var(--theme-secondary);color:var(--theme-contrast);width:100%;margin-top:0;bottom:0}.sf-btn__primary::after{background-color:var(--theme-secondary)}.sf-btn__continue{background-color:var(--theme-text);color:var(--theme-contrast);width:50%;bottom:0}.sf-btn__continue::after{background-color:var(--theme-secondary)}";

const SfSubmitButton = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
  }
  async componentWillLoad() {
    themeService.themeSer.checkTheme();
  }
  render() {
    this.eleId = (this.idSuffix) ? this.idSuffix : '001';
    return (index.h("button", { disabled: this.sfDisabled, class: (this.btnStyle == 'primary' ? 'sf-btn sf-btn__primary' : 'sf-btn sf-btn__continue'), id: `submit-button-${this.eleId}` }, index.h("slot", null)));
  }
};
SfSubmitButton.style = sfSubmitButtonCss;

exports.sf_card = SfCard;
exports.sf_card_col = SfCardCol;
exports.sf_card_content = SfCardContent;
exports.sf_card_image = SfCardImage;
exports.sf_card_title = SfCardTitle;
exports.sf_full_address = SfFullAddress;
exports.sf_full_credit_card = SfFullCreditCard;
exports.sf_input = SfInput;
exports.sf_main_title = SfMainTitle;
exports.sf_radio_group = SfRadioGroup;
exports.sf_select_menu = SfSelectMenu;
exports.sf_step = SfStep;
exports.sf_stepper = SfStepper;
exports.sf_submit_button = SfSubmitButton;
