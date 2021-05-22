/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class PhoneState extends DSObject {
  private static instance: PhoneState;
  private constructor(id: string) {
    super(id);
  }
  public static getInstance(
    types: string,
  ): PhoneState {
    if (!PhoneState.instance) {
      const ret = prompt(
        "#",
        "App.CreatePhoneState(\f" + types,
      );
      if (ret) {
        PhoneState.instance = new PhoneState(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return PhoneState.instance;
  }
  setOnChange(callback: Function) {
    prompt(this.id, "Pst.SetOnChange(" + _Cbm(callback));
  }
  start() {
    prompt(this.id, "Pst.Start(");
  }
  stop() {
    prompt(this.id, "Pst.Stop(");
  }
}
