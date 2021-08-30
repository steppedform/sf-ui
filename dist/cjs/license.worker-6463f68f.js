'use strict';

require('./index-4881f163.js');
const sfCard_sfCardCol_sfCardContent_sfCardImage_sfCardTitle_sfFullAddress_sfFullCreditCard_sfInput_sfMainTitle_sfRadioGroup_sfSelectMenu_sfStep_sfStepper_sfSubmitButton_entry = require('./sf-card.sf-card-col.sf-card-content.sf-card-image.sf-card-title.sf-full-address.sf-full-credit-card.sf-input.sf-main-title.sf-radio-group.sf-select-menu.sf-step.sf-stepper.sf-submit-button-b4c41806.js');

const workerName = 'license.worker';
const workerMsgId = 'stencil.license.worker';
const workerPath = /*@__PURE__*/(typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/license.worker-8d56a9dd.js').href : new URL('license.worker-8d56a9dd.js', document.currentScript && document.currentScript.src || document.baseURI).href);
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/sfCard_sfCardCol_sfCardContent_sfCardImage_sfCardTitle_sfFullAddress_sfFullCreditCard_sfInput_sfMainTitle_sfRadioGroup_sfSelectMenu_sfStep_sfStepper_sfSubmitButton_entry.createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

exports.worker = worker;
exports.workerMsgId = workerMsgId;
exports.workerName = workerName;
exports.workerPath = workerPath;
