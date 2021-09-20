import { r as registerInstance, e as createEvent, g as getAssetPath, h } from './index-9680f648.js';
import { t as themeSer } from './theme-service-4e4bec9c.js';
import { v as valService } from './validation-service-5e6c0756.js';
import { l as licService } from './license-service-a11771b1.js';

const sfInputCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:100%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}:host-context(body[data-theme=light]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#676767;--theme-shadow:#dddddd;--theme-contrast:#f2f2f2;--theme-datalist:#464646;--theme-element:#464646;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#ffffff;--theme-font:#000000}:host-context(body[data-theme=dark]){--theme-primary:#0101FD;--theme-secondary:#ED0D6D;--theme-overlight:#316CFD;--theme-text:#35363a;--theme-shadow:#FFFFFF;--theme-contrast:#cccccc;--theme-datalist:#464646;--theme-element:#d5d5d5;--theme-error:#ed0d2b;--theme-accepted:#0ded32;--theme-next:#d5d5d5;--theme-done:#27ae60;--theme-background:#000000;--theme-font:#ffffff}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:var(--theme-next);pointer-events:none}:host(.error){border-color:var(--theme-error)}.sf-row{max-width:150em;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5em}.sf-row__center{text-align:center;vertical-align:middle;min-height:5em;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50em}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5em}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5em/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5em/2);width:100%;padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5em) / 2);padding:0.5em;border:0 solid var(--theme-secondary)}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5em) / 3);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5em) / 3) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5em) / 4);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5em) / 4) + 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5em) / 4) + 2 * 0.5em);padding:0.5em;border:0 solid var(--theme-secondary)}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5em) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5em) / 5) + 3 * 0.5em)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1em}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:var(--theme-datalist);z-index:2000;width:18em;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1em;font-weight:300;color:var(--theme-shadow);cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:var(--theme-contrast);background-color:var(--theme-overlight)}.sf-form__group__data-list li.selected{color:var(--theme-contrast);background-color:var(--theme-primary)}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5em;font-size:1em;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid var(--theme-error) !important}.sf-form__input{font-size:1.2em;font-family:inherit;color:var(--theme-text);padding:0.5em 1em;border-radius:2px;background-color:var(--theme-contrast);border:none;border-bottom:2px solid var(--theme-text);width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1em 2em rgba(var(--theme-shadow), 0.1);border-bottom:2px solid var(--theme-done)}.sf-form__input:focus:required:invalid{border-bottom:2px solid var(--theme-error)}.sf-form__input::-webkit-input-placeholder{color:var(--theme-text)}.sf-form__label{font-size:1em;font-weight:300;margin-left:0.5em;margin-top:0.7em;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2em);background-color:var(--theme-contrast)}.sf-form__radio-group{display:block;min-height:2.5em;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1em;cursor:pointer;position:relative;padding-left:2.5em}.sf-form__radio-text{display:inline-block;margin-top:0.5em}.sf-form__radio-button{height:2em;width:2em;border:2px solid var(--theme-secondary);border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1em;width:1em;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:var(--theme-secondary);opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5em 0 0 0;padding:0.25em 0;font-size:0.8em;color:var(--theme-element)}.sf-form__radio-sub-title{padding:0.25em 0 0.5em 0;font-size:0.7em}.sf-form__radio-sub-title-final{padding:0.25em 0 0 0;margin:0;font-size:0.7em}:host{display:block}.sf-form__group{margin:0}.sf-form__input{margin:0}";

const SfInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inputValidated = createEvent(this, "inputValidated", 7);
    this.cardDateMax = 5;
    this.cardCvcMax = 4;
    this.cardNumberMax = 19;
    this.addressZipMax = 5;
    /* Datasets for Autocomplete */
    this.statesUrl = getAssetPath(`./assets/places-data/states.json`);
    this.countriesUrl = getAssetPath(`./assets/places-data/countries.json`);
    this.citiesUrl = getAssetPath(`./assets/places-data/cities.json`);
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
    themeSer.checkTheme();
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
    this.cardImage = (this.creditCardType === 'visa') ? getAssetPath(`./assets/${this.visaImg}`) : (this.creditCardType === 'amex') ? getAssetPath(`./assets/${this.amexImg}`) : (this.creditCardType == 'mastercard') ? getAssetPath(`./assets/${this.mastercardImg}`) : (this.creditCardType === 'discoverImg') ? getAssetPath(`./assets/${this.discoverImg}`) : (this.creditCardType === 'dinners') ? getAssetPath(`./assets/${this.dinnersImg}`) : (this.creditCardType == 'jcb') ? getAssetPath(`./assets/${this.jcbImg}`) : (this.creditCardType === 'unionpay') ? getAssetPath(`./assets/${this.unionImg}`) : null;
    if (this.cardImage) {
      this.inputBackground = {
        backgroundImage: `url(${this.cardImage})`,
        backgroundPosition: 'right 5px bottom 5px',
        backgroundSize: '35px',
        backgroundRepeat: 'no-repeat',
      };
    }
    this.currentRender =
      h("div", { class: "sf-form__group" }, h("input", { type: this.innerType, style: (this.inputBackground) ? this.inputBackground : '', class: this.innerInputValid ? 'sf-form__input' : 'sf-form__input sf-form__input-error', placeholder: this.sfLabel, ref: el => (this.innerInput = el), value: this.innerTextInput, maxlength: (this.sfData === 'card-number') ? this.cardNumberMax : (this.sfData === 'card-cvc') ? this.cardCvcMax : (this.sfData === 'card-date') ? this.cardDateMax : (this.sfData === 'zipcode') ? this.addressZipMax : '', onInput: this.onTextInput.bind(this), name: this.sfId, id: this.sfId, required: this.sfRequired, disabled: this.sfDisabled }), h("label", { htmlFor: this.sfId, class: "sf-form__label" }, this.sfLabel), (this.sfData === 'statesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-states", innerHTML: this.statesList }) : (this.sfData === 'countriesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-countries", innerHTML: this.countriesList }) : (this.sfData === 'citiesList' && !this.emptyList && this.innerType === 'text') ? h("div", { class: "sf-form__group__data-list", id: "sf-suggest-cities", innerHTML: this.citiesList }) : '', h("div", { class: "sf-form__group__error" }, (!this.innerInputValid && this.sfError) ? this.sfError : ''));
    return (this.currentRender);
  }
  static get assetsDirs() { return ["assets"]; }
  static get watchers() { return {
    "sfData": ["onSearchAddress"]
  }; }
};
SfInput.style = sfInputCss;

export { SfInput as sf_input };
