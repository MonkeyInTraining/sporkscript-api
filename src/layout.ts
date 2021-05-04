/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";

interface Child {
  id: string | null;
  _parent: any;
}

export class Layout extends DSView {
  constructor(id: string) {
    super(id);
  }
  public static create(type: string, options?: string) {
    var ret = prompt("#", `App.CreateLayout(${type}\f${options}`);
    if (ret) {
      return new Layout(ret);
    } else {
      throw new Error("Could not create Layout");
    }
  }
  addChild(child: Child, order?: number) {
    prompt(
      this.id,
      `Lay.AddChild(\f${(child ? child.id : null)}\f${order}`,
    );
    if (child) child._parent = this;
  }
  animate(type: string, callback?: (type: string) => void, time?: number) {
    prompt(
      this.id,
      `Lay.Animate(\f${type}\f${_Cbm(callback)}\f${time}`,
    );
  }
  childToFront(child: Child) {
    prompt(this.id, `Lay.ChildToFront(${(child ? child.id : null)}`);
  }
  destroyChild(child: Child) {
    prompt(this.id, `Lay.DestroyChild(${(child ? child.id : null)}`);
    if (child) child._parent = null;
  }
  getChildOrder(child: Child) {
    return parseInt(
      prompt(this.id, `Lay.GetChildOrder(\f${(child ? child.id : null)}`) || "",
    );
  }
  removeChild(child: Child) {
    prompt(this.id, `Lay.RemoveChild(${(child ? child.id : null)}`);
    if (child) {
      child._parent = null;
    }
  }
  setBackColor(color: string) {
    prompt(this.id, `Lay.SetBackColor(\f${color}`);
  }
  setChildMargins(
    left: number,
    top?: number,
    right?: number,
    bottom?: number,
    mode?: string,
  ) {
    prompt(
      this.id,
      `Lay.SetChildMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`,
    );
  }
  setChildTextSize(size: number, mode?: string) {
    prompt(this.id, `Lay.SetChildTextSize(\f${size}\f${mode}`);
  }
  setCornerRadius(radius: number) {
    prompt(this.id, `Lay.SetCornerRadius(\f${radius}`);
  }
  setElevation(elevation: number) {
    prompt(this.id, `Lay.SetElevation(\f${elevation}`);
  }
  setGravity(gravity: number) {
    prompt(this.id, `Lay.SetGravity(\f${gravity}`);
  }
  setOnChildChange(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnChildChange(\f${_Cbm(callback)}`);
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnLongTouch(\f${_Cbm(callback)}`);
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnTouch(\f${_Cbm(callback)}`);
  }
  setOnTouchDown(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnTouchDown(\f${_Cbm(callback)}`);
  }
  setOnTouchMove(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnTouchMove(\f${_Cbm(callback)}`);
  }
  setOnTouchUp(callback: OnTouchCallable) {
    prompt(this.id, `Lay.SetOnTouchUp(\f${_Cbm(callback)}`);
  }
  setOrientation(orientation: string) {
    prompt(this.id, `Lay.SetOrientation(\f${orientation}`);
  }
  setTouchable(touchable: boolean) {
    prompt(this.id, `Lay.SetTouchable(\f${touchable}`);
  }
  setTouchThrough(through: boolean) {
    prompt(this.id, `Lay.SetTouchThrough(\f${through}`);
  }
}
