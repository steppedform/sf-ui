import { r as registerInstance, e as createEvent, h, f as getElement } from './index-0ef3e7b5.js';
import { l as licProcess } from './license.worker-4f31c692.js';

const sfStepperCss = "*,*::after,*::before{margin:0;padding:0;box-sizing:inherit}:host{font-size:62.5%;box-sizing:border-box;font-family:Arial, Helvetica, sans-serif}@media only screen and (max-width: 75em){:host{font-size:56.25%}}@media only screen and (max-width: 56.25em){:host{font-size:50%}}@media only screen and (min-width: 112.5em){:host{font-size:75%}}input::-webkit-calendar-picker-indicator{display:none}button:disabled,button[disabled]{background-color:#d5d5d5;pointer-events:none}:host(.error){border-color:#ed0d2b}.sf-row{max-width:150rem;margin:0 auto}.sf-row__hide{display:none}.sf-row:not(:last-child){margin-bottom:0.5rem}.sf-row__center{text-align:center;vertical-align:middle;min-height:5rem;width:100%}@media only screen and (max-width: 56.25em){.sf-row{max-width:50rem}}.sf-row::after{content:\"\";display:table;clear:both}.sf-row [class^=sf-col-]{float:left}.sf-row [class^=sf-col-]:not(:last-child){margin-right:0.5rem}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]:not(:last-child){margin:calc(0.5rem/2) 0}}@media only screen and (max-width: 56.25em){.sf-row [class^=sf-col-]{width:100% !important}}.sf-row .sf-col-1-of-1{margin-top:calc(0.5rem/2);width:100%;padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-1-of-2{width:calc((100% - 0.5rem) / 2);padding:0.5rem;border:0 solid #ED0D6D}@media only screen and (max-width: 56.25em){.sf-row .sf-col-1-of-2__back-btn{display:none}}.sf-row .sf-col-1-of-3{width:calc((100% - 2 * 0.5rem) / 3);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-2-of-3{width:calc(2 * ((100% - 2 * 0.5rem) / 3) + 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-1-of-4{width:calc((100% - 3 * 0.5rem) / 4);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-2-of-4{width:calc(2 * ((100% - 3 * 0.5rem) / 4) + 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-col-3-of-4{width:calc(3 * ((100% - 3 * 0.5rem) / 4) + 2 * 0.5rem);padding:0.5rem;border:0 solid #ED0D6D}.sf-row .sf-steps-col{padding:0;width:calc((100% - 4 * 0.5rem) / 5)}.sf-row .sf-v-stepper-content{width:calc(4 * ((100% - 4 * 0.5rem) / 5) + 3 * 0.5rem)}.sf-row .sf-col-bt{text-align:right;padding-right:0}.sf-form__group:not(:last-child){margin-bottom:1rem}.sf-form__group{display:flex;flex-direction:column;}.sf-form__group__data-list{order:2}.sf-form__group__data-list ul{position:absolute;display:block;background:#464646;z-index:2000;width:18rem;margin:0}.sf-form__group__data-list li{position:relative;list-style:none;display:block;padding:8px;font-size:1rem;font-weight:300;color:#FFFFFF;cursor:pointer;transition:all 0.5s}.sf-form__group__data-list li:hover{cursor:pointer;color:#cccccc;background-color:#316CFD}.sf-form__group__data-list li.selected{color:#cccccc;background-color:#0101FD}.sf-form__group__data-list ul{-moz-animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation:cssAnimation 0s ease-in 3s forwards;-o-animation:cssAnimation 0s ease-in 3s forwards;animation:cssAnimation 0s ease-in 3s forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.sf-form__group__error{margin-top:0.5rem;font-size:1rem;font-style:italic;order:3}@keyframes cssAnimation{to{width:0;height:0;overflow:hidden}}@-webkit-keyframes cssAnimation{to{width:0;height:0;visibility:hidden}}.sf-form__input-error{border-bottom:2px solid #ed0d2b !important}.sf-form__input{font-size:1.2rem;font-family:inherit;color:#35363a;padding:0.5rem 1rem;border-radius:2px;background-color:rbga(#FFFFFF, 0.5);border:none;border-bottom:2px solid #35363a;width:100%;display:block;transition:all 0.3s;order:1}@media only screen and (max-width: 56.25em){.sf-form__input{width:100%}}.sf-form__input:focus{outline:none;box-shadow:0 1rem 2rem rgba(255, 255, 255, 0.1);border-bottom:2px solid #27ae60}.sf-form__input:focus:required:invalid{border-bottom:2px solid #ed0d2b}.sf-form__input::-webkit-input-placeholder{color:#35363a}.sf-form__label{font-size:1rem;font-weight:300;margin-left:0.5rem;margin-top:0.7rem;display:block;transition:all 0.3s;order:0}.sf-form__input:placeholder-shown+.sf-form__label{opacity:0;visibility:hidden;transform:translateY(2rem);background-color:#cccccc}.sf-form__radio-group{display:block;min-height:2.5rem;padding:0}@media only screen and (max-width: 56.25em){.sf-form__radio-group{width:100%}}.sf-form__radio-group:not(:last-child){margin-bottom:0}.sf-form__radio-input{display:none}.sf-form__radio-label{font-size:1rem;cursor:pointer;position:relative;padding-left:2.5rem}.sf-form__radio-text{display:inline-block;margin-top:0.5rem}.sf-form__radio-button{height:2rem;width:2rem;border:2px solid #ED0D6D;border-radius:50%;display:inline-block;position:absolute;left:0}.sf-form__radio-button::after{content:\"\";display:block;height:1rem;width:1rem;border-radius:50%;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background-color:#ED0D6D;opacity:0;transition:opacity 0.2s}.sf-form__radio-input:checked~.sf-form__radio-label .sf-form__radio-button::after{opacity:1}.sf-form__radio-title{margin:0.5rem 0 0 0;padding:0.25rem 0;font-size:0.8rem;color:#d5d5d5}.sf-form__radio-sub-title{padding:0.25rem 0 0.5rem 0;font-size:0.7rem}.sf-form__radio-sub-title-final{padding:0.25rem 0 0 0;margin:0;font-size:0.7rem}.sf-row-stepper{margin:1rem auto;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden;flex-direction:row}@media only screen and (max-width: 56.25em){.sf-row-stepper{margin:auto}}.sf-row-stepper [class^=sf-col-]{box-sizing:border-box}@media only screen and (max-width: 56.25em){.sf-row-stepper [class^=sf-col-]:not(:last-child){margin:unset}}@media only screen and (max-width: 56.25em){.sf-row-stepper [class^=sf-col-]{width:unset !important}}.sf-row-stepper .sf-col-1-of-4{margin:0}@media only screen and (max-width: 56.25em){.sf-row-stepper .sf-col-1-of-4{width:35% !important}}@media only screen and (max-width: 56.25em){.sf-row-stepper .sf-col-3-of-4{width:65% !important}}@media only screen and (max-width: 56.25em){.sf-h-stepper-container{z-index:100;width:100%;margin-top:0 !important;padding-top:0.3rem;padding-bottom:0.3rem;left:0;top:0}}.sf-h-steps{padding:0.5rem;border:0 solid #ED0D6D}@media only screen and (max-width: 56.25em){.sf-h-steps{padding:0}}.sf-hide-contaniner{display:none}.sf-v-steps{display:block;width:100%}.sf-h-stepper{display:flex;list-style-type:none;margin:1rem auto 1rem auto;justify-content:space-between;max-width:150rem}.sf-h-stepper li{position:relative;display:flex;flex-direction:column;align-items:center;flex:1}.sf-h-stepper li::before{position:absolute;content:\"\";border-bottom:0.5rem solid #d5d5d5;width:100%;top:1rem;left:-50%;z-index:-1}.sf-h-stepper li::after{position:absolute;content:\"\";border-bottom:0.5rem solid #d5d5d5;width:100%;top:1rem;left:50%;z-index:-1}.sf-h-stepper li.sf-h-done .sf-step-number{position:relative;background-color:#27ae60;z-index:10}.sf-h-stepper li.sf-h-done::after{position:absolute;content:\"\";border-bottom:0.5rem solid #27ae60;width:100%;top:1rem;left:50%;z-index:0}.sf-h-stepper li:first-child::before{content:none}.sf-h-stepper li:last-child::after{content:none}.sf-h-step-label{display:inline-block;margin-top:1rem}li.sf-v-done .sf-step-number{background-color:#27ae60}.sf-v-stepper{position:relative;-webkit-flex-direction:column;flex-direction:column;float:left;text-decoration:none}.sf-v-stepper::after{content:\"\";position:absolute;width:0.5rem;height:calc(100% - 4rem);top:1rem;left:0.8rem;z-index:-2;background-color:#d5d5d5}.sf-v-stepper ul,.sf-v-stepper li{list-style-type:none;margin-bottom:2rem}.sf-v-stepper li.sf-v-li-done:not(:last-child)::after{content:\"\";position:absolute;width:0.5rem;height:5rem;margin-top:0.6rem;left:0.8rem;z-index:-1;background-color:#27ae60}.sf-step-active .sf-step-number{background-color:#27ae60;color:#cccccc}.sf-step-number{width:2.25rem;height:2.25rem;display:flex;align-items:center;justify-content:center;background-color:#d5d5d5;color:#35363a;border-radius:50%}.sf-step-number:before{content:\"\";position:relative;height:0px;width:0px;overflow:hidden;white-space:pre}.sf-prog-circle{margin:25%;width:50%;height:50%;background-color:#cccccc;border-radius:50%}.sf-check-circle{transform:rotate(45deg);height:15px;width:8px;padding:0;margin:0;display:inline-block;border-bottom:0.2rem solid #cccccc;border-right:0.2rem solid #cccccc}.sf-h-done .sf-step-number{background-color:#27ae60;color:#35363a;cursor:pointer}.sf-v-done .sf-step-number{background-color:#27ae60;color:#35363a;cursor:pointer}.sf-step-right-ele{display:inline-block;margin-right:1rem;width:2.25rem;height:2.25rem}.sf-step-left-ele{display:inline-block}.sf-h-step{background:transparent}.sf-v-step{display:inline-block;line-height:3rem}.sf-stepper-container{color:#FFFFFF}";

const SfStepper = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.updateStep = createEvent(this, "updateStep", 7);
    this.licenseChecked = createEvent(this, "licenseChecked", 7);
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
    const result = await licProcess(this.lic);
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
        h("div", { class: "sf-stepper-container" }, h("ul", { class: "sf-h-stepper sf-h-stepper-container" }, this.innerStepsData.map((step, index) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
          h("li", { onClick: (index <= this.currentStep) ? () => this.onActiveStep(index) : null, class: (index < this.currentStep) ? 'sf-h-done' : 'sf-h-li' }, h("div", { class: (index < this.currentStep) ? 'sf-h-step sf-h-done' : step.activeStep ? 'sf-h-step sf-step-active' : 'sf-h-step' }, h("div", { class: "sf-step-number" }, (index < this.currentStep) ? h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : h("div", { class: "sf-prog-circle" })), h("span", { class: "sf-h-step-label" }, step.stepLabel)))
          : null)), h("div", { class: "sf-h-steps" }, h("slot", null)));
    }
    else {
      this.innerStepperElement =
        h("div", { class: "sf-row sf-row-stepper sf-stepper-container" }, h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-hide-contaniner' : 'sf-col-1-of-4' }, h("ul", { class: "sf-v-stepper" }, this.innerStepsData.map((step, index) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
          h("li", { onClick: (index <= this.currentStep) ? () => this.onActiveStep(index) : null, class: (index < this.currentStep) ? 'sf-v-li-done' : '' }, h("div", { class: (index < this.currentStep) ? 'sf-v-step sf-v-done' : step.activeStep ? 'sf-v-step sf-step-active' : 'sf-v-step' }, h("div", { class: "sf-step-right-ele" }, h("div", { class: "sf-step-number" }, (index < this.currentStep) ? h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : h("div", { class: "sf-prog-circle" }))), h("div", { class: "sf-step-left-ele" }, h("span", { class: "sf-step-label" }, step.stepLabel))))
          : null))), h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-v-steps' : 'sf-col-3-of-4' }, h("slot", null)));
    }
    return (this.innerStepperElement);
  }
  get slotArray() { return getElement(this); }
  static get watchers() { return {
    "stepsData": ["onStepInit"]
  }; }
};
SfStepper.style = sfStepperCss;

export { SfStepper as sf_stepper };
