/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Downloader extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(options?: string) {
    const ret = prompt(
      "#",
      `App.CreateDownloader(\f${options}`,
    );
    if (ret) {
      return new Downloader(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  Download(url: string, folder: string, name: string, headers: string) {
    prompt(this.id, `Dwn.Download(\f${url}\f${folder}\f${name}\f${headers}`);
  }
  IsComplete() {
    return prompt(this.id, "Dwn.IsComplete(") === "true";
  }
  GetProgress() {
    return parseFloat(prompt(this.id, "Dwn.GetProgress(") || "");
  }
  GetSize() {
    return parseFloat(prompt(this.id, "Dwn.GetSize(") || "");
  }
  SetOnCancel(callback: Function) {
    prompt(this.id, `Dwn.SetOnCancel(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnComplete(callback: Function) {
    prompt(this.id, `Dwn.SetOnComplete(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnDownload(callback: Function) {
    prompt(this.id, `Dwn.SetOnDownload(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnError(callback: Function) {
    prompt(this.id, `Dwn.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }
}
