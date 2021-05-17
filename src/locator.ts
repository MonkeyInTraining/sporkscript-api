/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Locator extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(type: string, options?: string) {
    const ret = prompt(
      "#",
      `App.CreateLocator(${type}\f${options}`,
    );
    if (ret) {
      return new Locator(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  getBearingTo(latitude: number, longitude: number) {
    return parseFloat(
      prompt(this.id, `Loc.GetBearingTo(${latitude}\f${longitude}`) || "",
    );
  }
  getDistanceTo(latitude: number, longitude: number) {
    return parseFloat(
      prompt(this.id, `Loc.GetDistanceTo(${latitude}\f${longitude}`) || "",
    );
  }
  setOnChange(callback: Function) {
    prompt(this.id, `Loc.SetOnChange(${_Cbm(callback)}`);
    return this;
  }
  setRate(rate: number) {
    prompt(this.id, `Loc.SetRate(${rate}`);
    return this;
  }
  start() {
    prompt(this.id, "Loc.Start(");
  }
  stop() {
    prompt(this.id, "Loc.Stop(");
  }
}
