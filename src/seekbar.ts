/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class SeekBar extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(
    width?: number,
    height?: number,
    options?: string,
  ) {
    const ret = prompt(
      "#",
      `App.CreateSeekBar(${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new SeekBar(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
  ) {
    const ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddSeekBar(${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new SeekBar(ret);
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
      `Skb.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  getValue() {
    return parseFloat(prompt(this.id, "Skb.GetValue(") || "");
  }
  setColorFilter(color: string, mode?: string, options?: string) {
    prompt(this.id, `Skb.SetColorFilter(\f${color}\f${mode}\f${options}`);
    return this;
  }
  setMaxRate(rate: number) {
    prompt(this.id, `Skb.SetMaxRate(${rate}`);
    return this;
  }
  setOnChange(callback: Function) {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setValue(value: number) {
    prompt(this.id, `Skb.SetValue(${value}`);
    return this;
  }
  setRange(range: number) {
    prompt(this.id, `Skb.SetRange(${range}`);
    return this;
  }
}
