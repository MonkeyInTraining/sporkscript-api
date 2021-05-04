/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class DSView extends DSObject {
  _left: number;
  _top: number;
  _parent: any;
  constructor(id: string) {
    super(id);
    this._left = 0;
    this._top = 0;
    this._parent = null;
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Obj.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  animate(type: string, callback?: (type: string) => void, time?: number) {
    prompt(
      this.id,
      `Obj.Animate(\f${type}\f${_Cbm(callback)}\f${time}`,
    );
  }
  clearFocus() {
    prompt(this.id, "Obj.ClearFocus(\f");
  }
  destroy() {
    prompt(this.id, "Obj.Release(");
    _map[this.id] = null;
  }
  focus() {
    prompt(this.id, "Obj.Focus(\f");
  }
  getParent() {
    return this._parent;
  }
  getVisibility() {
    return prompt(this.id, "Obj.GetVisibility(");
  }
  getWidth(options?: string) {
    return parseFloat(prompt(this.id, `Obj.GetWidth(\f${options}`) || "");
  }
  getHeight(options?: string) {
    return parseFloat(prompt(this.id, `Obj.GetHeight(\f${options}`) || "");
  }
  getAbsWidth() {
    return parseInt(prompt(this.id, "Obj.GetAbsWidth(") || "");
  }
  getAbsHeight() {
    return parseInt(prompt(this.id, "Obj.GetAbsHeight(") || "");
  }
  getLeft(options?: string) {
    return parseFloat(prompt(this.id, `Obj.GetLeft(\f${options}`) || "");
  }
  getTop(options?: string) {
    return parseFloat(prompt(this.id, `Obj.GetTop(\f"${options}`) || "");
  }
  getPosition(
    options?: string,
  ): { left: number; top: number; right: number; bottom: number } {
    return JSON.parse(prompt(this.id, `Obj.GetPosition(\f${options}`) || "");
  }
  gone() {
    prompt(this.id, "Obj.SetVisibility(Gone");
  }
  hide() {
    prompt(this.id, "Obj.SetVisibility(Hide");
  }
  isVisible() {
    return prompt(this.id, "Obj.GetVisibility(") === "Show";
  }
  isEnabled() {
    return prompt(this.id, "Obj.IsEnabled(") === "true";
  }
  method(
    name: string,
    types?: string,
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
  ) {
    return prompt(
      this.id,
      `Obj.Method(\f${name}\f${types}\f${p1}\f${p2}\f${p3}\f${p4}`,
    );
  }
  release() {
    prompt(this.id, "Obj.Release(");
    _map[this.id] = null;
  }
  setBackAlpha(alpha: number) {
    prompt(this.id, `Obj.SetBackAlpha(\f${alpha}`);
  }
  setBackColor(color: string) {
    prompt(this.id, `Obj.SetBackColor(\f${color}`);
  }
  setBackGradient(
    color1: string,
    color2?: string,
    color3?: string,
    options?: string,
  ) {
    prompt(
      this.id,
      `Obj.SetBackGradient(Linear\f${color1}\f${color2}\f${color3}\f${options}\f${null}\f${null}\f${null}`,
    );
  }
  setBackGradientRadial(
    x: number,
    y: number,
    radius: number,
    color1: string,
    color2?: string,
    color3?: string,
    options?: string,
  ) {
    prompt(
      this.id,
      `Obj.SetBackGradient(Radial\f${x}\f${y}\f${radius}\f${color1}\f${color2}\f${color3}\f${options}`,
    );
  }
  setBackground(file: string, options?: string) {
    prompt(this.id, `Obj.SetBackground(${file}\f${options}`);
  }
  setColorFilter(color: string, mode?: string) {
    prompt(this.id, `Obj.SetColorFilter(\f${color}\f${mode}`);
  }
  setDescription(text: string) {
    prompt(this.id, `Obj.SetDescription(\f${text}`);
  }
  setEnabled(enable: boolean) {
    prompt(this.id, `Obj.SetEnabled(\f${enable}`);
  }
  setMargins(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
  ) {
    prompt(
      this.id,
      `Obj.SetMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`,
    );
  }
  setPadding(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
  ) {
    prompt(
      this.id,
      `Obj.SetPadding(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`,
    );
  }
  setPosition(
    left: number,
    top: number,
    width?: number,
    height?: number,
    options?: string,
  ) {
    prompt(
      this.id,
      `Obj.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`,
    );
    this._left = left;
    this._top = top;
  }
  setScale(x: number, y: number) {
    prompt(this.id, `Obj.SetScale(\f${x}\f${y}`);
  }
  setSize(width: number, height?: number, options?: string) {
    prompt(this.id, `Obj.SetSize(\f${width}\f${height}\f${options}`);
  }
  setVisibility(mode: string) {
    prompt(this.id, `Obj.SetVisibility(${mode}`);
  }
  show() {
    prompt(this.id, "Obj.SetVisibility(Show");
  }
  tween(
    target: {
      x: number;
      y: number;
      w: number;
      h: number;
      sw: number;
      sh: number;
      rot: number;
    },
    duration: number,
    type: string,
    repeat: number,
    yoyo: boolean,
    callback: Function,
  ) {
    _Tween.apply(this, [target, duration, type, repeat, yoyo, callback]);
  }
}
