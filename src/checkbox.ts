/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class CheckBox extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      "#",
      `App.CreateCheckBox(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new CheckBox(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddCheckBox(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new CheckBox(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Chk.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  getChecked() {
    return prompt(this.id, "Chk.GetChecked(") === "true";
  }
  getText() {
    return prompt(this.id, "Chk.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Chk.GetTextSize(\f${mode}`) || "");
  }
  setChecked(checked: boolean) {
    prompt(this.id, `Chk.SetChecked(${checked}`);
  }
  setColorFilter(color: string, mode?: string) {
    prompt(this.id, `Chk.SetColorFilter(\f${color}\f${mode}`);
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Chk.SetOnClick(${_Cbm(callback)}`);
  }
  setText(text: string) {
    prompt(this.id, `Chk.SetText(${text}`);
  }
  setTextColor(color: string) {
    prompt(this.id, `Chk.SetTextColor(${color}`);
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Chk.SetTextSize(\f${size}\f${mode}`);
  }
}
