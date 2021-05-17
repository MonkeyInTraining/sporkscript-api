/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Switch extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(text?: string, width?: number, height?: number, options?: string) {
    const ret = prompt(
      "#",
      `App.CreateSwitch(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new Switch(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  createInLayout(
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddSwitch(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new Switch(ret);
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
      `Swi.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  getChecked() {
    return prompt(this.id, "Swi.GetChecked(") === "true";
  }
  getText() {
    return prompt(this.id, "Swi.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Swi.GetTextSize(\f${mode}`) || "");
  }
  setChecked(checked: boolean) {
    prompt(this.id, `Swi.SetChecked(${checked}`);
    return this;
  }
  setColorFilter(color: string, mode?: string, options?: string) {
    prompt(this.id, `Swi.SetColorFilter(\f${color}\f${mode}\f${options}`);
    return this;
  }
  setOnTouch(callback: Function) {
    prompt(this.id, `Swi.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }
  setText(text: string) {
    prompt(this.id, `Swi.SetText(${text}`);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, `Swi.SetTextColor(${color}`);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Swi.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
