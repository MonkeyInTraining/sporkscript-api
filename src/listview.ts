/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";

export class ListView extends DSView {
  constructor(id: string) {
    super(id);
  }
  show() {
    prompt(this.id, "Lvw.Show(");
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Lvw.SetOnClick(${_Cbm(callback)}`);
  }
}
