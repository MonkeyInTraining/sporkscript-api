/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Sensor extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(type: string, options?: string) {
    const ret = prompt(
      "#",
      `App.CreateSensor(${type}\f${options}`,
    );
    if (ret) {
      return new Sensor(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  getAzimuth() {
    return parseFloat(prompt(this.id, "Sns.GetAzimuth(") || "");
  }
  getNames() {
    return prompt(this.id, "Sns.GetNames(");
  }
  getPitch() {
    return parseFloat(prompt(this.id, "Sns.GetPitch(") || "");
  }
  getRoll() {
    return parseFloat(prompt(this.id, "Sns.GetRoll(") || "");
  }
  getValues() {
    return JSON.parse(prompt(this.id, "Sns.GetValues(") || "");
  }
  setMaxRate(rate: number) {
    prompt(this.id, "Sns.SetMaxRate(\f" + rate);
  }
  setMinChange(min: number) {
    prompt(this.id, "Sns.SetMinChange(" + min);
  }
  setOnChange(callback: Function) {
    prompt(this.id, "Sns.SetOnChange(" + _Cbm(callback));
  }
  start() {
    prompt(this.id, "Sns.Start(");
  }
  stop() {
    prompt(this.id, "Sns.Stop(");
  }
}
