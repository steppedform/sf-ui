import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfInput {
  innerInput: HTMLInputElement;
  statesList: any;
  countriesList: any;
  citiesList: any;
  dataValue: string;
  dataList: string;
  cardDateMax: number;
  cardCvcMax: number;
  cardNumberMax: number;
  addressZipMax: number;
  inputBackground: any;
  cardImage: string;
  statesUrl: string;
  countriesUrl: string;
  citiesUrl: string;
  visaImg: string;
  amexImg: string;
  mastercardImg: string;
  discoverImg: string;
  dinnersImg: string;
  jcbImg: string;
  unionImg: string;
  sfLabel: string;
  sfId: string;
  sfData: string;
  sfRequired: boolean;
  sfDisabled: boolean;
  sfType: string;
  sfError: string;
  /**
  * Gets license to be validated.
  */
  lic: string;
  innerTextInput: string;
  innerInputValid: boolean;
  emptyList: boolean;
  innerType: string;
  creditCardType: string;
  licChecked: boolean;
  currentRender: HTMLElement;
  inputValidated: EventEmitter<boolean>;
  onHandleClickEvent(ev: any): void;
  onLicenseChecked(event: CustomEvent): Promise<void>;
  onSearchAddress(dataInput: any): Promise<void>;
  componentWillLoad(): Promise<void>;
  onTextInput(event: Event): void;
  onZipCode(): boolean;
  onCardCvc(): boolean;
  onCardDate(): any;
  onCardNumber(): any;
  onCleanState(): void;
  onSearchSuggestions: (searchText: any, dataUrl: any) => Promise<boolean>;
  outputHtml: (matches: any) => void;
  onRenderList(html: any): void;
  render(): HTMLElement;
}
