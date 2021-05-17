/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class TextEdit extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(text?: string, width?: number, height?: number, options?: string) {
    var ret = prompt(
      "#",
      `App.CreateTextEdit(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new TextEdit(ret);
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
      `App.AddTextEdit(${text}\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new TextEdit(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  clearHistory() {
    prompt(this.id, "Txe.ClearHistory(");
  }
  getCursorLine() {
    return parseInt(prompt(this.id, "Txe.GetCursorLine(") || "");
  }
  getCursorPos() {
    return parseInt(prompt(this.id, "Txe.GetCursorPos(") || "");
  }
  getHtml() {
    return prompt(this.id, "Txe.GetHtml(");
  }
  getLineCount() {
    return parseInt(prompt(this.id, "Txe.GetLineCount(") || "");
  }
  getLineStart(line: number) {
    return parseInt(prompt(this.id, `Txe.GetLineStart(${line}`) || "");
  }
  getLineTop(line: number) {
    return parseFloat(prompt(this.id, `Txe.GetLineTop(${line}`) || "");
  }
  getMaxLines() {
    return parseInt(prompt(this.id, "Txe.GetMaxLines(") || "");
  }
  getSelectionEnd() {
    return parseInt(prompt(this.id, "Txe.GetSelectionEnd(") || "");
  }
  getSelectionStart() {
    return parseInt(prompt(this.id, "Txe.GetSelectionStart(") || "");
  }
  getSelectedText() {
    return prompt(this.id, "Txe.GetSelectedText(");
  }
  getText() {
    return prompt(this.id, "Txe.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Txe.GetTextSize(\f${mode}`) || "");
  }
  insertText(text: string, start: number) {
    prompt(this.id, `Txe.InsertText(\f${text}\f${start}`);
  }
  redo() {
    prompt(this.id, "Txe.Redo(");
  }
  replaceText(text: string, start: number, end: number) {
    prompt(this.id, "Txe.ReplaceText(\f" + text + "\f" + start + "\f" + end);
  }
  setCursorColor(color: string) {
    prompt(this.id, `Txe.SetCursorColor(\f${color}`);
    return this;
  }
  setCursorPos(position: number) {
    prompt(this.id, `Txe.SetCursorPos(${position}`);
    return this;
  }
  setHint(text: string) {
    prompt(this.id, `Txe.SetHint(${text}`);
    return this;
  }
  setHtml(html: string) {
    prompt(this.id, `Txe.SetHtml(${html}`);
    return this;
  }
  setOnChange(callback: Function) {
    prompt(this.id, `Txe.SetOnChange(\f${_Cbm(callback)}`);
    return this;
  }
  setOnEnter(callback: Function) {
    prompt(this.id, `Txe.SetOnEnter(\f${_Cbm(callback)}`);
    return this;
  }
  setOnFocus(callback: Function) {
    prompt(this.id, `Txe.SetOnFocus(\f${_Cbm(callback)}`);
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Txe.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }
  setSelection(start: number, stop: number) {
    prompt(this.id, `Txe.SetSelection(\f${start}\f${stop}`);
    return this;
  }
  setText(text: string) {
    prompt(this.id, `Txe.SetText(${text}`);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, `Txe.SetTextColor(${color}`);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Txe.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
  undo() {
    prompt(this.id, "Txe.Undo(");
  }
}
