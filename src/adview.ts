/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class AdView extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(
    unitId: string,
    testId: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    const ret = prompt(
      "#",
      `App.CreateAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new AdView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    unitId: string,
    testId: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    const ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddAdView(\f${unitId}\f${testId}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new AdView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  load() {
    prompt(this.id, "Adv.Load(");
  }
  setOnStatus(callback: Function) {
    prompt(this.id, `Adv.SetOnStatus(\f${_Cbm(callback)}`);
  }
}
