/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class BluetoothList extends DSObject {
  private static instance: BluetoothList;
  private constructor(id: string) {
    super(id);
  }
  public static getInstance(filter: string): BluetoothList {
    if (!BluetoothList.instance) {
      const ret = prompt(
        "#",
        "App.CreateBluetoothList("+filter
      );
      if (ret) {
        BluetoothList.instance = new BluetoothList(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return BluetoothList.instance;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, "Btl.SetOnClick("+_Cbm(callback));
    return this;
  }
  setOnTouchEx(callback: OnTouchCallable) {
    prompt(this.id, "Btl.SetOnClick("+callback);
    return this;
  }
}
