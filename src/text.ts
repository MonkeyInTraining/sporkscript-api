/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";

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
      throw new Error("Could not create Text");
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
  }
  setFontFile(file: string) {
    prompt(this.id, `Txt.SetFontFile(\f${file}`);
  }
  setHtml(html: string) {
    prompt(this.id, `Txt.SetHtml(${html}`);
  }
  setLog(maxLines: number) {
    prompt(this.id, `Txt.SetLog(\f${maxLines}`);
  }
  setTextShadow(radius: number, dx: number, dy: number, color: string) {
    prompt(this.id, `Txt.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
  }
  setOnTouchDown(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
  }
  setOnTouchMove(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
  }
  setOnTouchUp(callback: OnTouchCallable) {
    prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
  }
  setText(text: string) {
    prompt(this.id, `Txt.SetText(${text}`);
  }
  setTextColor(color: string) {
    prompt(this.id, `Txt.SetTextColor(${color}`);
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Txt.SetTextSize(\f${size}\f${mode}`);
  }
  setTouchable(touchable: boolean) {
    prompt(this.id, `Txt.SetTouchable(${touchable}`);
  }
}
