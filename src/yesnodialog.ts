/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class YesNoDialog extends DSObject {
  private static instance: YesNoDialog;
  private constructor(id: string) {
    super(id);
  }
  public static getInstance(message: string, options?: string): YesNoDialog {
    if (!YesNoDialog.instance) {
      const ret = prompt("#", `App.CreateYesNoDialog(\f${message}\f${options}`);
      if (ret) {
        YesNoDialog.instance = new YesNoDialog(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return YesNoDialog.instance;
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Ynd.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  dismiss() {
    prompt(this.id, "Ynd.Dismiss(");
  }
  hide() {
    prompt(this.id, "Ynd.Hide(");
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Ynd.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setBackColor(color: string, radius?: number) {
    prompt(this.id, `Ynd.SetBackColor(\f${color}\f${radius}`);
    return this;
  }
  setBackground(file: string, options?: string) {
    prompt(this.id, `Ynd.SetBackground(\f${file}\f${options}`);
    return this;
  }
  setButtonText(yes: string, no: string) {
    prompt(this.id, `Ynd.SetButtonText(\f${yes}\f${no}`);
    return this;
  }
  setSize(width: number, height?: number, options?: string) {
    prompt(this.id, `Ynd.SetSize(\f${width}\f${height}\f${options}`);
    return this;
  }
  show() {
    prompt(this.id, "Ynd.Show(");
  }
}
