/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class CodeEdit extends DSView {
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
      "App.CreateCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options,
    );
    if (ret) {
      return new CodeEdit(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  static createInLayout(
    layout: Layout,
    text?: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      "App.AddCodeEdit(\f"+text+"\f"+width+"\f"+height+"\f"+options,
    );
    if (ret) {
      return new CodeEdit(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  clearHistory() {
    prompt(this.id, "Cde.ClearHistory(");
  }
  copy() {
    prompt(this.id, "Cde.Copy(");
  }
  cut() {
    prompt(this.id, "Cde.Cut(");
  }
  getCursorLine() {
    return parseInt(prompt(this.id, "Cde.GetCursorLine(") || "");
  }
  getCursorPos() {
    return parseInt(prompt(this.id, "Cde.GetCursorPos(") || "");
  }
  getLineStart(line: number) {
    return parseInt(prompt(this.id, "Cde.GetLineStart("+line) || "");
  }
  getSelectedText() {
    return prompt(this.id, "Cde.GetSelectedText(");
  }
  getSelectionEnd() {
    return parseInt(prompt(this.id, "Cde.GetSelectionEnd(") || "");
  }
  getSelectionStart() {
    return parseInt(prompt(this.id, "Cde.GetSelectionStart(") || "");
  }
  getSelectMode() {
    return prompt(this.id, "Cde.GetSelectMode(") === "true";
  }
  getText() {
    return prompt(this.id, "Cde.GetText(");
  }
  highlightLine(line: number) {
    prompt(this.id, "Cde.HighlightLine(\f"+line);
  }
  insertText(text: string, start?: number, end?: number) {
    prompt(this.id, "Cde.InsertText(\f"+text+"\f"+start);
  }
  paste() {
    prompt(this.id, "Cde.Paste(");
  }
  redo() {
    prompt(this.id, "Cde.Redo(");
  }
  replace(text: string) {
    prompt(this.id, "Cde.Replace(\f"+text);
  }
  replaceAll(
    text: string,
    newText: string,
    matchCase?: boolean,
    wholeWord?: boolean,
  ) {
    prompt(
      this.id,
      "Cde.ReplaceAll(\f"+text+"\f"+newText+"\f"+matchCase+"\f"+wholeWord,
    );
  }
  replaceText(text: string, start: number, end: number) {
    prompt(this.id, "Cde.ReplaceText(\f"+text+"\f"+start+"\f"+end);
  }
  search(
    text: string,
    direction?: string,
    matchCase?: boolean,
    wholeWord?: boolean,
  ) {
    prompt(
      this.id,
      "Cde.Search(\f"+text+"\f"+direction+"\f"+matchCase+"\f"+wholeWord,
    );
  }
  selectAll() {
    prompt(this.id, "Cde.SelectAll(");
  }
  setColorScheme(scheme: string) {
    prompt(this.id, "Cde.SetColorScheme(\f"+scheme);
    return this;
  }
  setCursorPos(position: number) {
    prompt(this.id, "Cde.SetCursorPos("+position);
    return this;
  }
  setHtml(html: string) {
    prompt(this.id, "Cde.SetText(\f"+html);
    return this;
  }
  setLanguage(ext: string) {
    prompt(this.id, "Cde.SetLanguage(\f"+ext);
    return this;
  }
  setNavigationMethod(method: string) {
    prompt(this.id, "Cde.SetNavigationMethod(\f"+method);
    return this;
  }
  setOnChange(callback: Function) {
    prompt(this.id, "Cde.SetOnChange(\f"+_Cbm(callback));
    return this;
  }
  setOnDoubleTap(callback: Function) {
    prompt(this.id, "Cde.SetOnDoubleTap(\f"+_Cbm(callback));
    return this;
  }
  setOnKey(callback: Function) {
    prompt(this.id, "Cde.SetOnKey(\f"+_Cbm(callback));
    return this;
  }
  setSelectMode(onOff: boolean) {
    prompt(this.id, "Cde.SetSelectMode(\f"+onOff);
    return this;
  }
  setSelection(start: number, stop: number) {
    prompt(this.id, "Cde.SetSelection(\f"+start+"\f"+stop);
    return this;
  }
  setText(text: string) {
    prompt(this.id, "Cde.SetText(\f"+text);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, "Cde.SetTextColor(\f"+color);
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, "Cde.SetTextSize(\f"+size+"\f"+mode);
    return this;
  }
  setUseKeyboard(onOff: boolean) {
    prompt(this.id, "Cde.SetUseKeyboard(\f"+onOff);
    return this;
  }
  undo() {
    prompt(this.id, "Cde.Undo(");
  }
}
