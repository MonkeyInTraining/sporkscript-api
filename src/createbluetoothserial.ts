/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class CreateBluetoothSerial extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(mode: string) {
    const ret = prompt(
      "#",
      "App.CreateBluetoothSerial(\f"+mode,
    );
    if (ret) {
      return new CreateBluetoothSerial(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  clear() {
    prompt(this.id, "Bts.Clear(");
  }
  connect(name: string, channel: string) {
    return prompt(this.id, "Bts.Connect("+name+"\f"+channel) === "true";
  }
  disconnect() {
    prompt(this.id, "Bts.Disconnect(");
  }
  listen(enabled: boolean) {
    prompt(this.id, "Bts.Listen(\f"+enabled);
  }
  isBluetoothEnabled() {
    return prompt(this.id, "Bts.IsEnabled(") === "true";
  }
  isConnected() {
    return prompt(this.id, "Bts.IsConnected(") === "true";
  }
  isPaired(name: string) {
    return prompt(this.id, "Bts.IsPaired("+name) === "true";
  }
  requestEnable() {
    prompt(this.id, "Bts.RequestEnable(");
  }
  setDataMode(mode: string) {
    prompt(this.id, "Bts.SetDataMode(\f"+mode);
    return this;
  }
  setOnConnect(callback: Function) {
    prompt(this.id, "Bts.SetOnConnect("+_Cbm(callback));
    return this;
  }
  setOnDisconnect(callback: Function) {
    prompt(this.id, "Bts.SetOnDisconnect(\f"+_Cbm(callback));
    return this;
  }
  setOnReceive(callback: Function) {
    prompt(this.id, "Bts.SetOnReceive("+_Cbm(callback));
    return this;
  }
  setSplitMode(mode: string, p2?: string, p3?: string) {
    prompt(this.id, "Bts.SetSplitMode("+mode+"\f"+p2+"\f"+p3);
    return this;
  }
  setTimeout(ms: number) {
    prompt(this.id, "Bts.SetTimeout("+ms);
    return this;
  }
  write(data: string) {
    prompt(this.id, "Bts.Write("+data);
  }
}
