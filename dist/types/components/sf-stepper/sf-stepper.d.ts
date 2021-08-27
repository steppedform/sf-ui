import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfStepper {
  innerStepperElement: HTMLElement;
  currentStepper: any;
  currentStep: string;
  private slotArray;
  /**
  * Steps array with the Object config
  */
  stepsData: string;
  /**
  * Defines if stepper is 'horizontal' or 'vertical'
  */
  stepperAlign: string;
  /**
  * Gets license to be validated.
  */
  lic: string;
  /**
  * Used internally
  */
  innerStepsData: any;
  innerStepperAlign: string;
  stepperControl: string;
  numberOfSteps: number;
  updateStep: EventEmitter<string>;
  licenseChecked: EventEmitter<boolean>;
  /**
  * Used when steper is clicked (update)
  */
  onActiveStep(index: any): void;
  getnumberOfSteps(stepsData: any): number;
  handleComponentResChange(e: any): void;
  /**
  * Used at init (beginning)
  */
  onStepInit(): void;
  onNextStep(index: any): Promise<void>;
  onUpdateStepper(): void;
  componentWillLoad(): Promise<void>;
  componentDidLoad(): void;
  onActiveSlot(): void;
  render(): HTMLElement;
}
