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
    var ret = prompt("#", "App.CreateLayout("+type+"\f"+options);
    if (ret) {
      return new Layout(ret);
    } else {
      throw new Error("Could not create Layout");
    }
  }
  addChild(child: Child, order?: number) {
    prompt(
      this.id,
      "Lay.AddChild(\f"+(child ? child.id : null)+"\f"+order,
    );
    if (child) child._parent = this;
  }
  animate(type: string, callback?: (type: string) => void, time?: number) {
    prompt(
      this.id,
      "Lay.Animate(\f"+type+"\f"+_Cbm(callback)+"\f"+time,
    );
  }
  childToFront(child: Child) {
    prompt(this.id, "Lay.ChildToFront("+(child ? child.id : null));
  }
  destroyChild(child: Child) {
    prompt(this.id, "Lay.DestroyChild("+(child ? child.id : null));
    if (child) child._parent = null;
  }
  getChildOrder(child: Child) {
    return parseInt(
      prompt(this.id, "Lay.GetChildOrder(\f"+(child ? child.id : null)) || "",
    );
  }
  removeChild(child: Child) {
    prompt(this.id, "Lay.RemoveChild("+(child ? child.id : null));
    if (child) {
      child._parent = null;
    }
  }
  setBackColor(color: string) {
    prompt(this.id, "Lay.SetBackColor(\f"+color);
    return this;
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
      "Lay.SetChildMargins(\f"+left+"\f"+top+"\f"+right+"\f"+bottom+"\f"+mode,
    );
    return this;
  }
  setChildTextSize(size: number, mode?: string) {
    prompt(this.id, "Lay.SetChildTextSize(\f"+size+"\f"+mode);
    return this;
  }
  setCornerRadius(radius: number) {
    prompt(this.id, "Lay.SetCornerRadius(\f"+radius);
    return this;
  }
  setElevation(elevation: number) {
    prompt(this.id, "Lay.SetElevation(\f"+elevation);
    return this;
  }
  setGravity(gravity: number) {
    prompt(this.id, "Lay.SetGravity(\f"+gravity);
    return this;
  }
  setOnChildChange(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnChildChange(\f"+_Cbm(callback));
    return this;
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnLongTouch(\f"+_Cbm(callback));
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnTouch(\f"+_Cbm(callback));
    return this;
  }
  setOnTouchDown(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnTouchDown(\f"+_Cbm(callback));
    return this;
  }
  setOnTouchMove(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnTouchMove(\f"+_Cbm(callback));
    return this;
  }
  setOnTouchUp(callback: OnTouchCallable) {
    prompt(this.id, "Lay.SetOnTouchUp(\f"+_Cbm(callback));
    return this;
  }
  setOrientation(orientation: string) {
    prompt(this.id, "Lay.SetOrientation(\f"+orientation);
    return this;
  }
  setTouchable(touchable: boolean) {
    prompt(this.id, "Lay.SetTouchable(\f"+touchable);
    return this;
  }
  setTouchThrough(through: boolean) {
    prompt(this.id, "Lay.SetTouchThrough(\f"+through);
    return this;
  }
}
