import { Component, h, Prop, State, Watch, Element, Method, Event, Listen } from '@stencil/core';
import { licService } from '../../services/license-service';
export class SfStepper {
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
        h("div", { class: "sf-stepper-container" },
          h("ul", { class: "sf-h-stepper sf-h-stepper-container" }, this.innerStepsData.map((step, index) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
            h("li", { onClick: (index <= this.currentStep) ? () => this.onActiveStep(index) : null, class: (index < this.currentStep) ? 'sf-h-done' : 'sf-h-li' },
              h("div", { class: (index < this.currentStep) ? 'sf-h-step sf-h-done' : step.activeStep ? 'sf-h-step sf-step-active' : 'sf-h-step' },
                h("div", { class: "sf-step-number" }, (index < this.currentStep) ? h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : h("div", { class: "sf-prog-circle" })),
                h("span", { class: "sf-h-step-label" }, step.stepLabel)))
            : null)),
          h("div", { class: "sf-h-steps" },
            h("slot", null)));
    }
    else {
      this.innerStepperElement =
        h("div", { class: "sf-row sf-row-stepper sf-stepper-container" },
          h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-hide-contaniner' : 'sf-col-1-of-4' },
            h("ul", { class: "sf-v-stepper" }, this.innerStepsData.map((step, index) => (!step.stepHidden && (+this.currentStep < this.numberOfSteps)) ?
              h("li", { onClick: (index <= this.currentStep) ? () => this.onActiveStep(index) : null, class: (index < this.currentStep) ? 'sf-v-li-done' : '' },
                h("div", { class: (index < this.currentStep) ? 'sf-v-step sf-v-done' : step.activeStep ? 'sf-v-step sf-step-active' : 'sf-v-step' },
                  h("div", { class: "sf-step-right-ele" },
                    h("div", { class: "sf-step-number" }, (index < this.currentStep) ? h("div", { class: "sf-check-circle" }) : (step.stepNumber) ? step.stepNumber : h("div", { class: "sf-prog-circle" }))),
                  h("div", { class: "sf-step-left-ele" },
                    h("span", { class: "sf-step-label" }, step.stepLabel))))
              : null))),
          h("div", { class: (+this.currentStep >= this.numberOfSteps) ? 'sf-v-steps' : 'sf-col-3-of-4' },
            h("slot", null)));
    }
    return (this.innerStepperElement);
  }
  static get is() { return "sf-stepper"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["sf-stepper.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["sf-stepper.css"]
  }; }
  static get properties() { return {
    "stepsData": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Steps array with the Object config"
      },
      "attribute": "steps-data",
      "reflect": true
    },
    "stepperAlign": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Defines if stepper is 'horizontal' or 'vertical'"
      },
      "attribute": "stepper-align",
      "reflect": true
    },
    "lic": {
      "type": "string",
      "mutable": true,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Gets license to be validated."
      },
      "attribute": "lic",
      "reflect": true
    }
  }; }
  static get states() { return {
    "innerStepsData": {},
    "innerStepperAlign": {},
    "stepperControl": {},
    "numberOfSteps": {}
  }; }
  static get events() { return [{
      "method": "updateStep",
      "name": "updateStep",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      }
    }, {
      "method": "licenseChecked",
      "name": "licenseChecked",
      "bubbles": true,
      "cancelable": true,
      "composed": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      }
    }]; }
  static get methods() { return {
    "onNextStep": {
      "complexType": {
        "signature": "(index: any) => Promise<void>",
        "parameters": [{
            "tags": [],
            "text": ""
          }],
        "references": {
          "Promise": {
            "location": "global"
          }
        },
        "return": "Promise<void>"
      },
      "docs": {
        "text": "",
        "tags": []
      }
    }
  }; }
  static get elementRef() { return "slotArray"; }
  static get watchers() { return [{
      "propName": "stepsData",
      "methodName": "onStepInit"
    }]; }
  static get listeners() { return [{
      "name": "document:sizeChanged",
      "method": "handleComponentResChange",
      "target": undefined,
      "capture": false,
      "passive": false
    }]; }
}
