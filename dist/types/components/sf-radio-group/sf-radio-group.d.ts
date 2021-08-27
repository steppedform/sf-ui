import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfRadioGroup {
  /**
  * Data array with the Object config
  */
  radioGroupData: any;
  /**
  * Used internally
  */
  innerRadioGroupData: any;
  radioValueSelected: EventEmitter<string>;
  onTextInput(event: Event): void;
  /**
  * Used at init (beginning)
  */
  onRadioGroupInit(): void;
  componentWillLoad(): void;
  render(): any;
}
