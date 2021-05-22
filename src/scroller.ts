/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Scroller extends DSView {
  private constructor(id: string) {
    super(id);
  }
  static create(width?: number, height?: number, options?: string) {
    var ret = prompt(
      "#",
      "App.CreateScroller(" + width + "\f" + height + "\f" + options,
    );
    if (ret) {
      return new Scroller(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      "App.AddScroller(" + width + "\f" + height + "\f" + options,
    );
    if (ret) {
      return new Scroller(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  addChild(layout: Layout) {
    prompt(this.id, "Scr.AddChild(\f" + (layout ? layout.id : null));
  }
  destroyChild(layout: Layout) {
    prompt(this.id, "Scr.DestroyChild(\f" + (layout ? layout.id : null));
  }
  getScrollX() {
    return parseFloat(prompt(this.id, "Scr.GetScrollX(") || "");
  }
  getScrollY() {
    return parseFloat(prompt(this.id, "Scr.GetScrollY(") || "");
  }
  removeChild(layout: Layout) {
    prompt(this.id, "Scr.RemoveChild(\f" + (layout ? layout.id : null));
  }
  scrollTo(x: number, y: number) {
    prompt(this.id, "Scr.ScrollTo\f" + x + "\f" + y);
  }
  scrollBy(x: number, y: number) {
    prompt(this.id, "Scr.ScrollBy\f" + x + "\f" + y);
  }
}
