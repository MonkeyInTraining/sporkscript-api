/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class ListDialog extends DSObject {
  private static instance: ListDialog;
  private constructor(id: string) {
    super(id);
  }
  public static getInstance(
    title: string,
    list: string,
    options?: string,
  ): ListDialog {
    if (!ListDialog.instance) {
      const ret = prompt(
        "#",
        "App.CreateListDialog(\f"+title+"\f"+list+"\f"+options,
      );
      if (ret) {
        ListDialog.instance = new ListDialog(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return ListDialog.instance;
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      "Ldg.AdjustColor(\f"+hue+"\f"+saturation+"\f"+brightness+"\f"+contrast,
    );
  }
  dismiss() {
    prompt(this.id, "Ldg.Dismiss(");
  }
  hide() {
    prompt(this.id, "Ldg.Hide(");
  }
  setBackColor(color: string, radius?: number) {
    prompt(this.id, "Ldg.SetBackColor(\f"+color+"\f"+radius);
  }
  setBackground(file: string, options?: string) {
    prompt(this.id, "Ldg.SetBackground(\f"+file+"\f"+options);
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, "Ldg.SetOnClick("+_Cbm(callback));
  }
  setSize(width: number, height?: number, options?: string) {
    prompt(this.id, "Ldg.SetSize(\f"+width+"\f"+height+"\f"+options);
  }
  setTextColor(color: string) {
    prompt(this.id, "Ldg.SetTextColor(\f"+color);
  }
  setTitle(title: string) {
    prompt(this.id, "Ldg.SetTitle(\f"+title);
  }
  setTitleColor(color: string) {
    prompt(this.id, "Ldg.SetTitleColor(\f"+color);
  }
  setTitleHeight(height: number, options?: string) {
    prompt(this.id, "Ldg.SetTitleHeight(\f"+height+"\f"+options);
  }
  show() {
    prompt(this.id, "Ldg.Show(");
  }
}
