import './index-0ef3e7b5.js';
import { c as createWorker } from './license.worker-4f31c692.js';

const workerName = 'license.worker';
const workerMsgId = 'stencil.license.worker';
const workerPath = /*@__PURE__*/new URL('license.worker-c674fff3.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
