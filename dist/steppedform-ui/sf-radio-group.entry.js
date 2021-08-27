import { r as registerInstance, e as createEvent, h } from './index-0ef3e7b5.js';

const sfRadioGroupCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:62.5%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}@media only screen and (max-width: 75em){:host{font-size:56.25%}}@media only screen and (max-width: 56.25em){:host{font-size:50%}}@media only screen and (min-width: 112.5em){:host{font-size:75%}}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:#d5d5d5;pointer-events:none}:host(.error){border-color:#ed0d2b}.sf-row{max-width:150rem;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5rem}.sf-row__center{text-align:center;vertical-align:middle;min-height:5rem;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50rem}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5rem}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5rem/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5rem/2);width:100%;padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5rem) / 2);padding:0.5rem;border:0 solid #ED0D6D}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5rem) / 3);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5rem) / 3) + 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5rem) / 4);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5rem) / 4) + 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5rem) / 4) + 2 * 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5rem) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5rem) / 5) + 3 * 0.5rem)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1rem}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:#464646;z-index:2000;width:18rem;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1rem;font-weight:300;color:#FFFFFF;cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:#cccccc;background-color:#316CFD}.sf-form__group__data-list li.selected{color:#cccccc;background-color:#0101FD}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5rem;font-size:1rem;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid #ed0d2b !important}.sf-form__input{font-size:1.2rem;font-family:inherit;color:#35363a;padding:0.5rem 1rem;border-radius:2px;background-color:rbga(#FFFFFF, 0.5);border:none;border-bottom:2px solid #35363a;width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1rem 2rem rgba(255, 255, 255, 0.1);border-bottom:2px solid #27ae60}.sf-form__input:focus:required:invalid{border-bottom:2px solid #ed0d2b}.sf-form__input::-webkit-input-placeholder{color:#35363a}.sf-form__label{font-size:1rem;font-weight:300;margin-left:0.5rem;margin-top:0.7rem;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2rem);background-color:#cccccc}.sf-form__radio-group{display:block;min-height:2.5rem;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1rem;cursor:pointer;position:relative;padding-left:2.5rem}.sf-form__radio-text{display:inline-block;margin-top:0.5rem}.sf-form__radio-button{height:2rem;width:2rem;border:2px solid #ED0D6D;border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1rem;width:1rem;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#ED0D6D;opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5rem 0 0 0;padding:0.25rem 0;font-size:0.8rem;color:#d5d5d5}.sf-form__radio-sub-title{padding:0.25rem 0 0.5rem 0;font-size:0.7rem}.sf-form__radio-sub-title-final{padding:0.25rem 0 0 0;margin:0;font-size:0.7rem}:host{display:block}";

const SfRadioGroup = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.radioValueSelected = createEvent(this, "radioValueSelected", 7);
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
  }
  render() {
    return (h("div", { class: "sf-form__group" }, this.innerRadioGroupData.map((radio, index) => h("div", { class: "sf-form__radio-group" }, h("input", { type: "radio", class: "sf-form__radio-input", id: radio.radioName, name: radio.radioModel, value: radio.radioName, onChange: this.onTextInput.bind(this), checked: index === 0 }), h("label", { htmlFor: radio.radioName, class: "sf-form__radio-label" }, h("div", { class: "sf-form__radio-button" }), h("div", { class: "sf-form__radio-text" }, radio.radioLabel), radio.radioTitle ?
      h("div", { class: "sf-form__radio-title" }, radio.radioTitle)
      : null, radio.radioSubTitle ?
      h("div", { class: (this.innerRadioGroupData.length == (index + 1)) ? 'sf-form__radio-sub-title-final' : 'sf-form__radio-sub-title' }, radio.radioSubTitle)
      : null)))));
  }
  static get watchers() { return {
    "radioGroupData": ["onRadioGroupInit"]
  }; }
};
SfRadioGroup.style = sfRadioGroupCss;

export { SfRadioGroup as sf_radio_group };