/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Theme extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(baseTheme: string) {
    const ret = prompt(
      "#",
      `App.CreateTheme(${baseTheme}`,
    );
    if (ret) {
      return new Theme(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Thm.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  static setBackColor(color: string) {
    prompt(this.id, `Thm.SetBackColor(\f${color}`);
  }
  static setBackground(file: string, options?: string) {
    prompt(this.id, `Thm.SetBackground(\f${file}\f${options}`);
  }
  static setBtnTextColor(color: string) {
    prompt(this.id, `Thm.SetBtnTextColor(\f${color}`);
  }
  static setButtonOptions(options: string) {
    prompt(this.id, `Thm.SetButtonOptions(\f${options}`);
  }
  static setButtonPadding(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
  ) {
    prompt(
      this.id,
      `Thm.SetButtonPadding(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`,
    );
  }
  static setButtonStyle(
    color1: string,
    color2: string,
    radius: number,
    strokeColor: string,
    strokeWidth: number,
    shadow: number,
    checkColor: string,
  ) {
    prompt(
      this.id,
      `Thm.SetButtonStyle(\f${color1}\f${color2}\f${radius}\f${strokeColor}\f${strokeWidth}\f${shadow}\f${checkColor}`,
    );
  }
  static setCheckBoxOptions(options: string) {
    prompt(this.id, `Thm.SetCheckBoxOptions(\f${options}`);
  }
  static setDialogBtnColor(color: string) {
    prompt(this.id, `Thm.SetDialogBtnColor(\f${color}`);
  }
  static setDialogBtnTxtColor(color: string) {
    prompt(this.id, `Thm.SetDialogBtnTxtColor(\f${color}`);
  }
  static setDialogColor(color: string) {
    prompt(this.id, `Thm.SetDialogColor(\f${color}`);
  }
  static setDialogCornerRadius(radius: number) {
    prompt(this.id, `Thm.SetDialogCornerRadius(\f${radius}`);
  }
  static setDimBehind(dim: boolean) {
    prompt(this.id, `Thm.SetDimBehind(\f${dim}`);
  }
  static setHighlightColor(color: string) {
    prompt(this.id, `Thm.SetHighlightColor(\f${color}`);
  }
  static setListDividerColor(color: string) {
    prompt(this.id, `Thm.SetListDividerColor(\f${color}`);
  }
  static setProgressBackColor(color: string) {
    prompt(this.id, `Thm.SetProgressBackColor(\f${color}`);
  }
  static setProgressBarOptions(options: string) {
    prompt(this.id, `Thm.SetProgressBarOptions(\f${options}`);
  }
  static setProgressOptions(options: string) {
    prompt(this.id, `Thm.SetProgressOptions(\f${options}`);
  }
  static setProgressTextColor(color: string) {
    prompt(this.id, `Thm.SetProgressTextColor(\f${color}`);
  }
  static setTextColor(color1: string, color2: string) {
    prompt(this.id, `Thm.SetTextColor(\f${color1}\f${color2}`);
  }
  static setTextEditOptions(options: string) {
    prompt(this.id, `Thm.SetTextEditOptions(\f${options}`);
  }
  static setTitleColor(color: string) {
    prompt(this.id, `Thm.SetTitleColor(\f${color}`);
  }
  static setTitleDividerColor(color: string) {
    prompt(this.id, `Thm.SetTitleDividerColor(\f${color}`);
  }
  static setTitleDividerHeight(height: number, options?: string) {
    prompt(this.id, `Thm.SetTitleDividerHeight(\f${height}\f${options}`);
  }
  static setTitleHeight(height: number, options?: string) {
    prompt(this.id, `Thm.SetTitleHeight(\f${height}\f${options}`);
  }
  static setTitleTextSize(height: number, options?: string) {
    prompt(this.id, `Thm.SetTitleTextSize(\f${height}\f${options}`);
  }
}
