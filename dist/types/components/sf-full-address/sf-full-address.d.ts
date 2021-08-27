import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfFullAddress {
  eleId: any;
  inputLabels: Array<string>;
  /**
  * Data array with the Object config
  */
  showButtom: boolean;
  idSuffix: string;
  /**
  * Gets license to be validated.
  */
  lic: string;
  private inputsArray;
  addressForm: any;
  /**
  * Used internally
  */
  buttonDisabled: boolean;
  inputsChecked: any[];
  licChecked: boolean;
  addressSubmitted: EventEmitter<boolean>;
  backBtnPressed: EventEmitter<boolean>;
  onSubmitAddress(): void;
  onLicenseChecked(event: CustomEvent): Promise<void>;
  onAddressInit(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  onInputChanged(label: any, event: any): void;
  addressSubmited(): Promise<void>;
  onSessionDefined(): void;
  onBackPressed(): void;
  render(): any[];
}
