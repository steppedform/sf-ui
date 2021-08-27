import { B as BUILD, c as consoleDevInfo, p as plt, w as win, H, d as doc, N as NAMESPACE, a as promiseResolve, b as bootstrapLazy } from './index-0ef3e7b5.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

/*
 Stencil Client Patch Browser v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchBrowser = () => {
    // NOTE!! This fn cannot use async/await!
    if (BUILD.isDev && !BUILD.isTesting) {
        consoleDevInfo('Running in development mode.');
    }
    if (BUILD.cssVarShim) {
        // shim css vars
        plt.$cssShim$ = win.__cssshim;
    }
    if (BUILD.cloneNodeFix) {
        // opted-in to polyfill cloneNode() for slot polyfilled components
        patchCloneNodeFix(H.prototype);
    }
    if (BUILD.profile && !performance.mark) {
        // not all browsers support performance.mark/measure (Safari 10)
        performance.mark = performance.measure = () => {
            /*noop*/
        };
        performance.getEntriesByName = () => [];
    }
    // @ts-ignore
    const scriptElm = BUILD.scriptDataOpts || BUILD.safari10 || BUILD.dynamicImportShim
        ? Array.from(doc.querySelectorAll('script')).find(s => new RegExp(`\/${NAMESPACE}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === NAMESPACE)
        : null;
    const importMeta = import.meta.url;
    const opts = BUILD.scriptDataOpts ? scriptElm['data-opts'] || {} : {};
    if (BUILD.safari10 && 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    if (!BUILD.safari10 && importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    else if (BUILD.dynamicImportShim || BUILD.safari10) {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, win.location.href)).href;
        if (BUILD.dynamicImportShim) {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if (BUILD.dynamicImportShim && !win.customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return import(/* webpackChunkName: "polyfills-dom" */ './dom-fb6a473e.js').then(() => opts);
        }
    }
    return promiseResolve(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(NAMESPACE);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        win[importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        win[importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = doc.createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(win[importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                doc.head.appendChild(script);
            }
            return mod;
        };
    }
};
const patchCloneNodeFix = (HTMLElementPrototype) => {
    const nativeCloneNodeFn = HTMLElementPrototype.cloneNode;
    HTMLElementPrototype.cloneNode = function (deep) {
        if (this.nodeName === 'TEMPLATE') {
            return nativeCloneNodeFn.call(this, deep);
        }
        const clonedNode = nativeCloneNodeFn.call(this, false);
        const srcChildNodes = this.childNodes;
        if (deep) {
            for (let i = 0; i < srcChildNodes.length; i++) {
                // Node.ATTRIBUTE_NODE === 2, and checking because IE11
                if (srcChildNodes[i].nodeType !== 2) {
                    clonedNode.appendChild(srcChildNodes[i].cloneNode(true));
                }
            }
        }
        return clonedNode;
    };
};

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["sf-full-credit-card",[[1,"sf-full-credit-card",{"paymentAddressConfig":[1537,"payment-address-config"],"showButtom":[1540,"show-buttom"],"idSuffix":[1537,"id-suffix"],"lic":[1537],"innerPaymentAddressConfig":[32],"creditCardAddress":[32],"buttonDisabled":[32],"inputsChecked":[32],"licChecked":[32]},[[16,"radioValueSelected","onRadioValueSelected"],[16,"licenseChecked","onLicenseChecked"]]]]],["sf-card",[[1,"sf-card",{"dist":[1],"center":[4]}]]],["sf-card-col",[[1,"sf-card-col"]]],["sf-card-content",[[1,"sf-card-content"]]],["sf-card-image",[[1,"sf-card-image",{"image":[1537]}]]],["sf-card-title",[[1,"sf-card-title"]]],["sf-form",[[1,"sf-form"]]],["sf-select-menu",[[1,"sf-select-menu",{"selectMenuData":[1544,"select-menu-data"],"selectMenuLabels":[1544,"select-menu-labels"],"innerSelectMenuData":[32]}]]],["sf-step",[[1,"sf-step"]]],["sf-stepper",[[1,"sf-stepper",{"stepsData":[1537,"steps-data"],"stepperAlign":[1537,"stepper-align"],"lic":[1537],"innerStepsData":[32],"innerStepperAlign":[32],"stepperControl":[32],"numberOfSteps":[32],"onNextStep":[64]},[[0,"document:sizeChanged","handleComponentResChange"]]]]],["sf-input",[[1,"sf-input",{"statesUrl":[1,"states-url"],"countriesUrl":[1,"countries-url"],"citiesUrl":[1,"cities-url"],"visaImg":[1,"visa-img"],"amexImg":[1,"amex-img"],"mastercardImg":[1,"mastercard-img"],"discoverImg":[1,"discover-img"],"dinnersImg":[1,"dinners-img"],"jcbImg":[1,"jcb-img"],"unionImg":[1,"union-img"],"sfLabel":[1537,"sf-label"],"sfId":[1537,"sf-id"],"sfData":[1537,"sf-data"],"sfRequired":[1540,"sf-required"],"sfDisabled":[1540,"sf-disabled"],"sfType":[1537,"sf-type"],"sfError":[1537,"sf-error"],"lic":[1537],"innerTextInput":[32],"innerInputValid":[32],"emptyList":[32],"innerType":[32],"creditCardType":[32],"licChecked":[32]},[[16,"click","onHandleClickEvent"],[16,"licenseChecked","onLicenseChecked"]]]]],["sf-submit-button",[[1,"sf-submit-button",{"btnStyle":[1537,"btn-style"],"idSuffix":[1537,"id-suffix"],"sfDisabled":[1540,"sf-disabled"]}]]],["sf-full-address",[[1,"sf-full-address",{"showButtom":[1540,"show-buttom"],"idSuffix":[1537,"id-suffix"],"lic":[1537],"buttonDisabled":[32],"inputsChecked":[32],"licChecked":[32],"addressSubmited":[64]},[[16,"licenseChecked","onLicenseChecked"]]]]],["sf-main-title",[[1,"sf-main-title"]]],["sf-radio-group",[[1,"sf-radio-group",{"radioGroupData":[1544,"radio-group-data"],"innerRadioGroupData":[32]}]]]], options);
});
