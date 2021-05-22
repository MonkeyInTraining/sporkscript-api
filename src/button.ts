/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Button extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(text?: string, width?: number, height?: number, options?: string) {
    const ret = prompt(
      "#",
      "App.CreateButton("+text+"\f"+width+"\f"+height+"\f"+options,
    );
    if (ret) {
      return new Button(ret);
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
      "App.AddButton("+text+"\f"+width+"\f"+height+"\f"+options,
    );
    if (ret) {
      return new Button(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  getText() {
    return prompt(this.id, "Btn.GetText(");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, "Btn.GetTextSize(\f"+mode) || "");
  }
  setBackColor(color: string) {
    prompt(this.id, "Btn.SetBackColor(\f"+color);
    return this;
  }
  setEllipsize(mode: string) {
    prompt(this.id, "Btn.SetEllipsize(\f"+mode);
    return this;
  }
  setEnabled(enable: boolean) {
    prompt(this.id, "Btn.SetEnabled(\f"+enable);
    return this;
  }
  setFontFile(file: string) {
    prompt(this.id, "Btn.SetFontFile(\f"+file);
    return this;
  }
  setHtml(html: string) {
    prompt(this.id, "Btn.SetHtml("+html);
    return this;
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, "Btn.SetOnLongTouch(\f"+_Cbm(callback));
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, "Btn.SetOnTouch(\f"+_Cbm(callback));
    return this;
  }
  setStyle(
    color1: string,
    color2?: string,
    radius?: number,
    strokeColor?: string,
    strokeWidth?: number,
    shadow?: number,
  ) {
    prompt(
      this.id,
      "Btn.SetStyle(\f"+color1+"\f"+color2+"\f"+radius+"\f"+strokeColor+"\f"+strokeWidth+"\f"+shadow,
    );
    return this;
  }
  setText(text: string) {
    prompt(this.id, "Btn.SetText("+text);
    return this;
  }
  setTextColor(color: string) {
    prompt(this.id, "Btn.SetTextColor("+color);
    return this;
  }
  setTextShadow(radius: number, dx: number, dy: number, color: number) {
    prompt(
      this.id,
      "Btn.SetTextShadow(\f"+radius+"\f"+dx+"\f"+dy+"\f"+color,
    );
    return this;
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, "Btn.SetTextSize(\f"+size+"\f"+mode);
    return this;
  }
}
