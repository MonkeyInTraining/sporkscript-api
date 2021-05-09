/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class List extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(
    list?: string,
    width?: number,
    height?: number,
    options?: string,
    delimiter?: string,
  ) {
    var ret = prompt(
      "#",
      `App.CreateList(\f${list}\f${width}\f${height}\f${options}\f${delimiter}`,
    );
    if (ret) {
      return new List(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    list?: string,
    width?: number,
    height?: number,
    options?: string,
    delimiter?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddList(\f${list}\f${width}\f${height}\f${options}\f${delimiter}`,
    );
    if (ret) {
      return new List(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  addItem(title: string, body?: string, image?: string) {
    prompt(this.id, `Lst.AddItem(\f${title}\f${body}\f${image}`);
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      `Lst.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`,
    );
  }
  setList(list: string, delimiter?: string) {
    prompt(this.id, `Lst.SetList(\f${list}\f${delimiter}`);
  }
  getItem(title: string) {
    var p = `Lst.GetItem(\f${title}`;
    return JSON.parse(prompt(this.id, p) || "");
  }
  getItemByIndex(index: number) {
    var p = `Lst.GetItemByIndex(\f${index}`;
    return JSON.parse(prompt(this.id, p) || "");
  }
  getLength() {
    return parseInt(prompt(this.id, "Lst.GetLength(") || "");
  }
  getList(delimiter?: string) {
    return JSON.parse(prompt(this.id, `Lst.GetList(${delimiter}`) || "");
  }
  getTextSize(mode?: string) {
    return parseFloat(prompt(this.id, `Lst.GetTextSize(\f${mode}`) || "");
  }
  insertItem(index: number, title: string, body?: string, image?: string) {
    prompt(this.id, `Lst.InsertItem(\f${index}\f${title}\f${body}\f${image}`);
  }
  removeItem(title: string) {
    prompt(this.id, `Lst.RemoveItem(\f${title}`);
  }
  removeItemByIndex(index: number) {
    prompt(this.id, `Lst.RemoveItemByIndex(\f${index}`);
  }
  removeAll() {
    prompt(this.id, "Lst.RemoveAll(");
  }
  scrollToItem(title: string, body?: string) {
    var p = `Lst.ScrollToItem(\f${title}\f${body}`;
    prompt(this.id, p);
  }
  scrollToItemByIndex(index: number) {
    var p = `Lst.ScrollToItemByIndex(\f${index}`;
    prompt(this.id, p);
  }
  selectItem(title: string, body?: string, scroll?: boolean) {
    var p = `Lst.SelectItem(\f${title}\f${body}\f${scroll}`;
    prompt(this.id, p);
  }
  selectItemByIndex(index: number, scroll?: boolean) {
    var p = `Lst.SelectItemByIndex(\f${index}\f${scroll}`;
    prompt(this.id, p);
  }
  setColumnWidths(icon?: string, title?: string, body?: string, mode?: string) {
    prompt(
      this.id,
      `Lst.SetColumnWidths(\f${icon}\f${title}\f${body}\f${mode}`,
    );
  }
  setDivider(height: number, color?: string) {
    prompt(this.id, `Lst.SetDivider(\f${height}\f${color}`);
  }
  setEllipsize(mode?: string) {
    prompt(this.id, `Lst.SetEllipsize(\f${mode}`);
  }
  setEllipsize1(mode?: string) {
    prompt(this.id, `Lst.SetEllipsize1(\f${mode}`);
  }
  setEllipsize2(mode?: string) {
    prompt(this.id, `Lst.SetEllipsize2(\f${mode}`);
  }
  setFontFile(file: string) {
    prompt(this.id, `Lst.SetFontFile(\f${file}`);
  }
  setHiTextColor1(color: string) {
    prompt(this.id, `Lst.SetHiTextColor1(${color}`);
  }
  setHiTextColor2(color: string) {
    prompt(this.id, `Lst.SetHiTextColor2(${color}`);
  }
  setIconMargins(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
  ) {
    prompt(
      this.id,
      `Lst.SetIconMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`,
    );
  }
  setIconSize(size: number, mode?: string) {
    prompt(this.id, `Lst.SetIconSize(\f${size}\f${mode}`);
  }
  setItem(
    title: string,
    newTitle: string,
    newBody?: string,
    newImage?: string,
  ) {
    prompt(
      this.id,
      `Lst.SetItem(\f${title}\f${newTitle}\f${newBody}\f${newImage}`,
    );
  }
  setItemByIndex(
    index: number,
    newTitle: string,
    newBody?: string,
    newImage?: string,
  ) {
    prompt(
      this.id,
      `Lst.SetItemByIndex(\f${index}\f${newTitle}\f${newBody}\f${newImage}`,
    );
  }
  setItemColor(title: string, color: string, bgColor: string) {
    prompt(this.id, `Lst.SetItemColor(\f${title}\f${color}\f${bgColor}`);
  }
  setItemColorByIndex(index: number, color: string, bgColor: string) {
    prompt(this.id, `Lst.SetItemColorByIndex(\f${index}\f${color}\f${bgColor}`);
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, `Lst.SetOnLongClick(${_Cbm(callback)}`);
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Lst.SetOnClick(${_Cbm(callback)}`);
  }
  setTextColor(color: string) {
    prompt(this.id, `Lst.SetTextColor1(${color}`);
  }
  setTextColor1(color: string) {
    prompt(this.id, `Lst.SetTextColor1(${color}`);
  }
  setTextColor2(color: string) {
    prompt(this.id, `Lst.SetTextColor2(${color}`);
  }
  setTextMargins(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
    options?: string,
  ) {
    prompt(
      this.id,
      `Lst.SetTextMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}\f${options}`,
    );
  }
  setTextShadow(radius: number, dx: number, dy: number, color: string) {
    prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
  }
  setTextShadow1(radius: number, dx: number, dy: number, color: string) {
    prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
  }
  setTextShadow2(radius: number, dx: number, dy: number, color: string) {
    prompt(this.id, `Lst.SetTextShadow2(\f${radius}\f${dx}\f${dy}\f${color}`);
  }
  setTextSize(size: number, mode?: string) {
    prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
  }
  setTextSize1(size: number, mode?: string) {
    prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
  }
  setTextSize2(size: number, mode?: string) {
    prompt(this.id, `Lst.SetTextSize2(\f${size}\f${mode}`);
  }
}
