/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class PlayStore extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create() {
    const ret = prompt(
      "#",
      `App.CreatePlayStore(`,
    );
    if (ret) {
      return new PlayStore(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  GetBillingInfo(prodIDs: string, callback: Function, options?: string) {
    const ret = prompt(
      this.id,
      `Ply.GetBillingInfo(\f${prodIDs}\f${_Cbm(callback)}\f${options}`,
    );
  }
  Purchase(
    prodID: string,
    token: string,
    callback: Function,
    options?: string,
  ) {
    const ret = prompt(
      this.id,
      `Ply.Purchase(\f${prodID}\f${token}\f${_Cbm(callback)}\f${options}`,
    );
  }
  GetPurchases(callback: Function, options?: string) {
    const ret = prompt(
      this.id,
      `Ply.GetPurchases(\f${_Cbm(callback)}\f${options}`,
    );
  }
}
