/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Dialog extends DSView {
  private constructor(id: string) {
    super(id);
  }
  public static create(
    title: string,
    options?: string,
  ) {
    const ret = prompt(
      "#",
      `App.CreateDialog(\f${title}\f${options}`,
    );
    if (ret) {
      return new Dialog(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  addLayout(layout: Layout) {
    prompt(this.id, `Dlg.AddLayout(${layout.id}`);
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Dlg.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  dismiss() {
    prompt(this.id, "Dlg.Dismiss(");
  }
  enableBackKey(enable: boolean) {
    prompt(this.id, `Dlg.EnableBackKey(\f${enable}`);
  }
  getTitleHeight() {
    return parseFloat(prompt(this.id, "Dlg.GetTitleHeight(\f") || "");
  }
  hide() {
    prompt(this.id, "Dlg.Hide(");
  }
  isVisible() {
    return prompt(this.id, "Dlg.IsVisible\f") === "true";
  }
  removeLayout(layout: Layout) {
    prompt(this.id, `Dlg.RemoveLayout(${layout.id}`);
  }
  setBackColor(color: string, radius?: number) {
    prompt(this.id, `Dlg.SetBackColor(\f${color}\f${radius}`);
    return this;
  }
  setBackground(file: string, options?: string) {
    prompt(this.id, `Dlg.SetBackground(\f${file}\f${options}`);
    return this;
  }
  setOnBack(callback: Function) {
    prompt(this.id, `Dlg.SetOnBack(\f${_Cbm(callback)}`);
    return this;
  }
  setOnCancel(callback: Function) {
    prompt(this.id, `Dlg.SetOnCancel(\f${_Cbm(callback)}`);
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Dlg.SetOnClick(${_Cbm(callback)}`);
    return this;
  }
  setPosition(
    left: number,
    top?: number,
    width?: number,
    height?: number,
    options?: string,
  ) {
    prompt(
      this.id,
      `Dlg.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`,
    );
    return this;
  }
  setSize(width: number, height?: number, options?: string) {
    prompt(this.id, `Dlg.SetSize(\f${width}\f${height}\f${options}`);
    return this;
  }
  setTitle(title: string, options?: string) {
    prompt(this.id, "Dlg.SetTitle(\f" + title + "\f" + options);
    return this;
  }
  setTitleColor(color: string) {
    prompt(this.id, `Dlg.SetTitleColor(\f${color}`);
    return this;
  }
  setTitleDividerColor(color: string) {
    prompt(this.id, `Dlg.SetTitleDividerColor(\f${color}`);
    return this;
  }
  setTitleDividerHeight(height: number, options?: string) {
    prompt(this.id, `Dlg.SetTitleDividerHeight(\f${height}\f${options}`);
    return this;
  }
  setTitleHeight(height: number, options?: string) {
    prompt(this.id, `Dlg.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }
  setTitleTextSize(height: number, options?: string) {
    prompt(this.id, `Dlg.SetTitleTextSize(\f${height}\f${options}`);
    return this;
  }
  show() {
    prompt(this.id, "Dlg.Show(");
  }
}
