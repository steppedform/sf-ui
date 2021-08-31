import { p as promiseResolve, b as bootstrapLazy } from './index-0b50913a.js';

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["sf-form",[[1,"sf-form"]]],["sf-card_14",[[1,"sf-full-credit-card",{"paymentAddressConfig":[1537,"payment-address-config"],"showButtom":[1540,"show-buttom"],"idSuffix":[1537,"id-suffix"],"lic":[1537],"innerPaymentAddressConfig":[32],"creditCardAddress":[32],"buttonDisabled":[32],"inputsChecked":[32],"licChecked":[32]},[[16,"radioValueSelected","onRadioValueSelected"],[16,"licenseChecked","onLicenseChecked"]]],[1,"sf-card",{"dist":[1],"center":[4]}],[1,"sf-card-col"],[1,"sf-card-content"],[1,"sf-card-image",{"image":[1537]}],[1,"sf-card-title"],[1,"sf-select-menu",{"selectMenuData":[1544,"select-menu-data"],"selectMenuLabels":[1544,"select-menu-labels"],"innerSelectMenuData":[32]}],[1,"sf-step"],[1,"sf-stepper",{"stepsData":[1537,"steps-data"],"stepperAlign":[1537,"stepper-align"],"lic":[1537],"innerStepsData":[32],"innerStepperAlign":[32],"stepperControl":[32],"numberOfSteps":[32],"onNextStep":[64]},[[0,"document:sizeChanged","handleComponentResChange"]]],[1,"sf-full-address",{"showButtom":[1540,"show-buttom"],"idSuffix":[1537,"id-suffix"],"lic":[1537],"buttonDisabled":[32],"inputsChecked":[32],"licChecked":[32],"addressSubmited":[64]},[[16,"licenseChecked","onLicenseChecked"]]],[1,"sf-main-title"],[1,"sf-radio-group",{"radioGroupData":[1544,"radio-group-data"],"innerRadioGroupData":[32]}],[1,"sf-input",{"statesUrl":[1,"states-url"],"countriesUrl":[1,"countries-url"],"citiesUrl":[1,"cities-url"],"visaImg":[1,"visa-img"],"amexImg":[1,"amex-img"],"mastercardImg":[1,"mastercard-img"],"discoverImg":[1,"discover-img"],"dinnersImg":[1,"dinners-img"],"jcbImg":[1,"jcb-img"],"unionImg":[1,"union-img"],"sfLabel":[1537,"sf-label"],"sfId":[1537,"sf-id"],"sfData":[1537,"sf-data"],"sfRequired":[1540,"sf-required"],"sfDisabled":[1540,"sf-disabled"],"sfType":[1537,"sf-type"],"sfError":[1537,"sf-error"],"lic":[1537],"innerTextInput":[32],"innerInputValid":[32],"emptyList":[32],"innerType":[32],"creditCardType":[32],"licChecked":[32]},[[16,"click","onHandleClickEvent"],[16,"licenseChecked","onLicenseChecked"]]],[1,"sf-submit-button",{"btnStyle":[1537,"btn-style"],"idSuffix":[1537,"id-suffix"],"sfDisabled":[1540,"sf-disabled"]}]]]], options);
  });
};

export { defineCustomElements };
