import './index-56124763.js';
import { c as createWorker } from './sf-card.sf-card-col.sf-card-content.sf-card-image.sf-card-title.sf-full-address.sf-full-credit-card.sf-input.sf-main-title.sf-radio-group.sf-select-menu.sf-step.sf-stepper.sf-submit-button-2df848e3.js';

const workerName = 'license.worker';
const workerMsgId = 'stencil.license.worker';
const workerPath = /*@__PURE__*/new URL('license.worker-8d56a9dd.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
