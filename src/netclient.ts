/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";
import { Image } from "./image.ts";

export class NetClient extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(type: string) {
    const ret = prompt(
      "#",
      `App.CreateNetClient(${type}`,
    );
    if (ret) {
      return new NetClient(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  autoReceive(server: string, port: number, mode?: string) {
    return prompt(this.id, `Net.AutoReceive(${server}\f${port}\f${mode}`);
  }
  clear() {
    prompt(this.id, "Net.Clear(");
  }
  close() {
    prompt(this.id, "Net.Disconnect(");
  }
  connect(address: string, port: number) {
    return prompt(this.id, `Net.Connect(${address}\f${port}`) == "true";
  }
  disconnect() {
    prompt(this.id, "Net.Disconnect(");
  }
  downloadFile(file: string) {
    return prompt(this.id, `Net.DownloadFile(${file}`);
  }
  getBroadcastAddress() {
    return prompt(this.id, "Net.GetBroadcastAddress(");
  }
  isConnected() {
    return prompt(this.id, "Net.IsConnected(") === "true";
  }
  isEnabled() {
    return prompt(this.id, "Net.IsEnabled(") === "true";
  }
  receiveBytes(mode: string) {
    return JSON.parse(prompt(this.id, `Net.ReceiveBytes(\f${mode}`) || "");
  }
  receiveDatagram(
    mode: string,
    port: number,
    timeout: number,
    options?: string,
  ) {
    return prompt(
      this.id,
      `Net.ReceiveDatagram(\f${mode}\f${port}\f${timeout}\f${options}`,
    );
  }
  receiveDatagrams(port: number, mode: string, options?: string) {
    prompt(this.id, `Net.ReceiveDatagrams(\f${port}\f${mode}\f${options}`);
  }
  receiveFile(file: string, wait: number) {
    return prompt(this.id, `Net.ReceiveFile(${file}\f${wait}`);
  }
  receiveText(mode: string) {
    return prompt(this.id, `Net.ReceiveText(${mode}`);
  }
  receiveVideoStream(port: number, image: Image) {
    prompt(
      this.id,
      `Net.ReceiveVideoStream(\f${port}\f${(image ? image.id : null)}`,
    );
  }
  sendBytes(data: string, mode: string) {
    prompt(this.id, `Net.SendBytes(\f${data}\f${mode}`);
  }
  sendData(text: string, encoding: string) {
    prompt(this.id, `Net.SendData(\f${text}\f${encoding}`);
  }
  sendDatagram(
    data: string,
    mode: string,
    address: string,
    port: number,
    options?: string,
  ) {
    prompt(
      this.id,
      `Net.SendDatagram(\f${data}\f${mode}\f${address}\f${port}\f${options}`,
    );
  }
  sendText(text: string, mode: string) {
    prompt(this.id, `Net.SendText(${text}\f${mode}`);
  }
  setDataMode(mode: string) {
    prompt(this.id, `Net.SetDataMode(\f${mode}`);
    return this;
  }
  setOnConnect(callback: Function) {
    prompt(this.id, `Net.SetOnConnect(${_Cbm(callback)}`);
    return this;
  }
  setOnDownload(callback: Function) {
    prompt(this.id, `Net.SetOnDownload(${_Cbm(callback)}`);
    return this;
  }
  setOnReceive(callback: Function) {
    prompt(this.id, `Net.SetOnReceive(${_Cbm(callback)}`);
    return this;
  }
  setSplitMode(mode: string, p2?: string, p3?: string) {
    prompt(this.id, `Net.SetSplitMode(\f${mode}\f${p2}\f${p3}`);
    return this;
  }
  setTimeout(secs: number) {
    prompt(this.id, `Net.SetTimeout(${secs}`);
    return this;
  }
  wakeOnLan(ip: string, mac: string) {
    prompt(this.id, `Net.WakeOnLan(\f${ip}\f${mac}`);
  }
}
