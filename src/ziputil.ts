/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class ZipUtil extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(mode?: string) {
    const ret = prompt(
      "#",
      `App.CreateZipUtil(\f${mode}`,
    );
    if (ret) {
      return new ZipUtil(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  addFile(name: string, file: string) {
    prompt(this.id, `Zip.AddFile(\f${name}\f${file}`);
  }
  addText(name: string, text: string) {
    prompt(this.id, `Zip.AddText(\f${name}\f${text}`);
  }
  close() {
    prompt(this.id, "Zip.Close(");
  }
  createDebugKey(file: string) {
    prompt(this.id, `Zip.CreateDebugKey(\f${file}`);
  }
  createFile(file: string) {
    prompt(this.id, `Zip.Create(\f${file}`);
  }
  createKey(file: string, password: string, name: string, org: string) {
    prompt(this.id, `Zip.CreateKey(\f${file}\f${password}\f${name}\f${org}`);
  }
  extract(name: string, file: string) {
    prompt(this.id, `Zip.Extract(\f${name}\f${file}`);
  }
  list(path: string) {
    return prompt(this.id, `Zip.List(\f${path}`);
  }
  open(file: string) {
    prompt(this.id, `Zip.Open(\f${file}`);
  }
  sign(fileIn: string, fileOut: string, keyStore: string, password: string) {
    return prompt(
      this.id,
      `Zip.Sign(\f${fileIn}\f${fileOut}\f${keyStore}\f${password}`,
    ) === "true";
  }
  updateManifest(
    fileIn: string,
    fileOut: string,
    packageName: string,
    appName: string,
    permissions: string,
    options?: string,
  ) {
    prompt(
      this.id,
      `Zip.UpdateManifest(\f${fileIn}\f${fileOut}\f${packageName}\f${appName}\f${permissions}\f${options}`,
    );
  }
}
