import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfFullCreditCard {
  eleId: any;
  inputLabels: Array<string>;
  /**
  * Data array with the Object config
  */
  paymentAddressConfig: string;
  showButtom: boolean;
  idSuffix: string;
  /**
  * Gets license to be validated.
  */
  lic: string;
  private inputsArray;
  creditCardForm: any;
  additionalAddressForm: any;
  /**
  * Used internally
  */
  innerPaymentAddressConfig: any;
  creditCardAddress: string;
  buttonDisabled: boolean;
  inputsChecked: any[];
  licChecked: boolean;
  ccSubmitted: EventEmitter<boolean>;
  backBtnPressed: EventEmitter<boolean>;
  onSubmitCreditCard(): void;
  onRadioValueSelected(event: CustomEvent): void;
  onLicenseChecked(event: CustomEvent): Promise<void>;
  /**
  * Used at init (beginning)
  */
  onCreditCardInit(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  onInputChanged(label: any, event: any): void;
  onValidateInput(label: any, event: any): any;
  onCreditCardSubmit(): void;
  onAdditionalAddressSubmit(): void;
  onBackPressed(): void;
  render(): any[];
}
