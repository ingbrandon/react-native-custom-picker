/// <reference types="react" />
import * as React from 'react'
import { CustomPickerProps, CustomPickerState } from './types'
/**
 * React native customizable picker component
 */
export declare class CustomPicker extends React.PureComponent<
  CustomPickerProps,
  CustomPickerState
> {
  constructor(props: CustomPickerProps)
  render(): JSX.Element
  componentDidMount(): void
  componentWillReceiveProps(nextProps: CustomPickerProps): void
  /**
   * Default getLabel function. A get label from item function.
   * @param item Item value to translate.
   */
  getLabel(item: any): any
  /**
   * Show modal picker to display options.
   */
  showOptions(): void
  /**
   * Hide options by hiding modal picker.
   */
  hideOptions(): void
  /**
   * Select an option.
   * @param selectedItem Item/option to select.
   */
  selectOption(selectedItem: any): void
  /**
   * Clear selected value.
   */
  clear(): void
}
export {
  CustomPickerActions,
  CustomPickerProps,
  CustomPickerState,
  FieldTemplateFunction,
  FieldTemplateSettings,
  OptionTemplateFunction,
  OptionTemplateSettings,
  HeaderTemplateFunction,
  FooterTemplateFunction
} from './types'
