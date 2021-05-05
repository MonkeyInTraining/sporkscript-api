/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";

export class Button extends DSView {
  constructor(id: string) {
    super(id);
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
