/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Toggle extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(text?: string, width?: number, height?: number, options?: string) {
    var ret = prompt(
      "#",
      "App.CreateToggle(" + text + "\f" + width + "\f" + height + "\f" +
        options,
    );
    if (ret) {
      return new Toggle(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  AddToggle(
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      "App.AddToggle(" + text + "\f" + width + "\f" + height + "\f" + options,
    );
    if (ret) {
      return new Toggle(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  getChecked() {
    return prompt(this.id, "Tgl.GetChecked(") === "true";
  }
  getText() {
    return prompt(this.id, "Tgl.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, "Tgl.GetTextSize(\f" + mode) || "");
  }
  setChecked(checked: boolean) {
    prompt(this.id, "Tgl.SetChecked(" + checked);
    return this;
  }
  setOnTouch(callback: Function) {
    prompt(this.id, "Tgl.SetOnClick(" + _Cbm(callback));
    return this;
  }
  setStyle(
    color1: string,
    color2?: string,
    radius?: number,
    strokeColor?: string,
    strokeWidth?: number,
    shadow?: number,
    checkColor?: string,
  ) {
    prompt(
      this.id,
      "Tgl.SetStyle(\f" + color1 + "\f" + color2 + "\f" + radius + "\f" +
        strokeColor + "\f" + strokeWidth + "\f" + shadow + "\f" + checkColor,
    );
    return this;
  }
  setText(text: string) {
    prompt(this.id, "Tgl.SetText(" + text);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, "Tgl.SetTextColor(" + color);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, "Tgl.SetTextSize(\f" + size + "\f" + mode);
    return this;
  }
}
