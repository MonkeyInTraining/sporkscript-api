/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Text extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      "#",
      `App.CreateText(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new Text(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  createInLayout(
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddText(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new Text(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  getHtml() {
    return prompt(this.id, "Txt.GetHtml(");
  }
  getLineCount() {
    return parseInt(prompt(this.id, "Txt.GetLineCount(") || "");
  }
  getLineStart(line: number) {
    return parseInt(prompt(this.id, `Txt.GetLineStart(${line}`) || "");
  }
  getLineTop(line: number) {
    return parseFloat(prompt(this.id, `Txt.GetLineTop(${line}`) || "");
  }
  getMaxLines() {
    return parseInt(prompt(this.id, "Txt.GetMaxLines(") || "");
  }
  getText() {
    return prompt(this.id, "Txt.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Txt.GetTextSize(\f${mode}`) || "");
  }

  log(message: string, options: string) {
    prompt(this.id, `Txt.Log(\f${message}\f${options}`);
  }

  setEllipsize(mode?: string) {
    prompt(this.id, `Txt.SetEllipsize(\f${mode}`);
    return this;
  }
  setFontFile(file: string) {
    prompt(this.id, `Txt.SetFontFile(\f${file}`);
    return this;
  }
  setHtml(html: string) {
    prompt(this.id, `Txt.SetHtml(${html}`);
    return this;
  }
  setLog(maxLines: number) {
    prompt(this.id, `Txt.SetLog(\f${maxLines}`);
    return this;
  }
  setTextShadow(radius: number, dx: number, dy: number, color: string) {
    prompt(this.id, `Txt.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
    return this;
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
    return this;
  }
  setOnTouchDown(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
    return this;
  }
  setOnTouchMove(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
    return this;
  }
  setOnTouchUp(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
    return this;
  }
  setText(text: string) {
    prompt(this.id, `Txt.SetText(${text}`);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, `Txt.SetTextColor(${color}`);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Txt.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
  setTouchable(touchable: boolean) {
    prompt(this.id, `Txt.SetTouchable(${touchable}`);
    return this;
  }
}
