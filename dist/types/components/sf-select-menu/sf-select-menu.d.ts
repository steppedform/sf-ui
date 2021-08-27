import { EventEmitter } from '../../stencil-public-runtime';
export declare class SfSelectMenu {
  /**
  * Data array with the Object config
  */
  selectMenuData: any;
  selectMenuLabels: any;
  /**
  * Used internally
  */
  innerSelectMenuData: any;
  selectMenuValue: EventEmitter<string>;
  /**
  * Used at init (beginning)
  */
  onSelectMenuInit(): void;
  componentWillLoad(): void;
  onSelectOption(event: Event): void;
  render(): any[];
}
