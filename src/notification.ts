/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";
import { Image } from "./image.ts";

export class Notification extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(options: string) {
    const ret = prompt(
      "#",
      `App.CreateNotification(\f"+options}`,
    );
    if (ret) {
      return new Notification(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  cancel(id: string) {
    prompt(this.id, "Not.Cancel(\f" + id);
  }
  listen(options?: string) {
    prompt(this.id, "Not.Listen(\f" + options);
  }
  notify(id: string) {
    prompt(this.id, "Not.Notify(\f" + id);
  }
  setLargeImage(image: Image): this;
  setLargeImage(image: string): this;
  setLargeImage(image: any) {
    if (image.constructor.name === "Image") {
      prompt(
        this.id,
        "Not.SetLargeImage(\f" + (image ? image.id : null),
      );
    } else prompt(this.id, "Not.SetLargeImageFile(\f" + image);
    return this;
  }
  setLights(color: string, onMs: number, offMs: number) {
    prompt(this.id, "Not.SetLights(\f" + color + "\f" + onMs + "\f" + offMs);
    return this;
  }
  setMessage(ticker: string, title: string, text: string, extra: string) {
    prompt(
      this.id,
      "Not.SetMessage(\f" + ticker + "\f" + title + "\f" + text + "\f" + extra,
    );
    return this;
  }
  setOnNotify(callback: Function) {
    prompt(this.id, "Not.SetOnNotify(\f" + _Cbm(callback));
    return this;
  }
  setSmallImage(image: Image): this;
  setSmallImage(image: string): this;
  setSmallImage(image: any) {
    if (image.constructor.name === "Image") {
      prompt(
        this.id,
        "Not.SetSmallImage(\f" + (image ? image.id : null),
      );
    } else prompt(this.id, "Not.SetSmallImageFile(\f" + image);
    return this;
  }
}
