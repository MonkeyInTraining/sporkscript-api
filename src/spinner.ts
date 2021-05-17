/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Spinner extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(list?: string, width?: number, height?: number, options?: number) {
    var ret = prompt(
      "#",
      `App.CreateSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spinner(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  createInLayout(
    layout: Layout,
    list?: string,
    width?: number,
    height?: number,
    options?: number,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddSpinner(${list}\f${width}\f${height}\f${options}`
    );
    if (ret) {
      return new Spinner(ret);
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
      `Spn.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  getText() {
    return prompt(this.id, "Spn.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Spn.GetTextSize(\f${mode}`) || "");
  }
  selectItem(item: string) {
    prompt(this.id, `Spn.SetText(${item}`);
  }
  setList(list: string, delimiter?: string) {
    prompt(this.id, `Spn.SetList(\f${list}\f${delimiter}`);
    return this;
  }
  setOnChange(callback: Function) {
    prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setText(text: string) {
    prompt(this.id, `Spn.SetText(${text}`);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, `Spn.SetTextColor(${color}`);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Spn.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
