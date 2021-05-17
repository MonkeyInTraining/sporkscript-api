/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class WebView extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(width?: number, height?: number, options?: string, zoom?: number) {
    const ret = prompt(
      "#",
      `App.CreateWeb(\f${width}\f${height}\f${options}\f${zoom}`,
    );
    if (ret) {
      return new WebView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  createInLayout(
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
    zoom?: number,
  ) {
    const ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddWeb(\f${width}\f${height}\f${options}\f${zoom}`,
    );
    if (ret) {
      return new WebView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  back() {
    prompt(this.id, "Web.Back(");
  }
  canGoBack() {
    return prompt(this.id, "Web.CanGoBack(") === "true";
  }
  canGoForward() {
    return prompt(this.id, "Web.CanGoForward(") === "true";
  }
  capture(file: string) {
    prompt(this.id, `Web.Capture(\f${file}`);
  }
  clearHistory() {
    prompt(this.id, "Web.ClearHistory(");
  }
  execute(code: string, callback?: string) {
    return prompt(this.id, `Web.Execute(\f${code}\f${_Cbm(callback)}`);
  }
  forward() {
    prompt(this.id, "Web.Forward(");
  }
  getUrl() {
    return prompt(this.id, "Web.GetUrl(");
  }
  getTitle() {
    return prompt(this.id, "Web.GetTitle(");
  }
  loadHtml(html: string, base?: string, options?: string) {
    prompt(this.id, `Web.LoadHtml(\f${html}\f${base}\f${options}`);
  }
  loadUrl(url: string, options?: string) {
    prompt(this.id, `Web.LoadUrl(\f${url}\f${options}`);
  }
  print() {
    prompt(this.id, "Web.Print(\f");
  }
  reload() {
    prompt(this.id, "Web.Reload(");
  }
  setErrorPage(url: string) {
    prompt(this.id, `Web.SetErrorPage(\f${url}`);
    return this;
  }
  setOnProgress(callback: Function) {
    prompt(this.id, `Web.SetOnProgress(${_Cbm(callback)}`);
    return this;
  }
  setOnError(callback: Function) {
    prompt(this.id, `Web.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }
  setOnConsole(callback: Function) {
    prompt(this.id, `Web.SetOnConsole(\f${_Cbm(callback)}`);
    return this;
  }
  setZoom(zoom: number) {
    prompt(this.id, `Web.SetZoom(\f${zoom}`);
    return this;
  }
  setTextZoom(zoom: number) {
    prompt(this.id, `Web.SetTextZoom(\f${zoom}`);
    return this;
  }
  setUserAgent(agent: string) {
    prompt(this.id, `Web.SetUserAgent(\f${agent}`);
    return this;
  }
  setUserCreds(name: string, password: string) {
    prompt(this.id, `Web.SetUserCreds(\f${name}\f${password}`);
    return this;
  }
  setRedirect(urlFrom: string, urlTo: string) {
    prompt(this.id, `Web.SetRedirect(\f${urlFrom}\f${urlTo}`);
    return this;
  }
  setTouchMode(mode: string) {
    prompt(this.id, `Web.SetTouchMode(\f${mode}`);
    return this;
  }
  setOnTouch(callback: Function) {
    prompt(this.id, `Web.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }
  setOnUrl(callback: Function) {
    prompt(this.id, `Web.SetOnUrl(\f${_Cbm(callback)}`);
    return this;
  }
  setOnRequest(callback: Function) {
    prompt(this.id, `Web.SetOnRequest(\f${_Cbm(callback)}`);
    return this;
  }
  setBlockedUrls(urls: string) {
    prompt(this.id, `Web.SetBlockedUrls(\f${urls}`);
    return this;
  }
  simulateKey(keyName: string, modifiers?: string, pause?: boolean) {
    prompt(this.id, `Web.SimulateKey(\f${keyName}\f${modifiers}\f${pause}`);
  }
  stop() {
    prompt(this.id, "Web.Stop(");
  }
}
