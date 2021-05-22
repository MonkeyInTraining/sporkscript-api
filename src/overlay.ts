/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Overlay extends DSView {
  constructor(id: string) {
    super(id);
  }
  addLayout(layout: Layout, left?: number, top?: number, options?: string) {
    prompt(
      this.id,
      "Ovl.AddLayout(\f"+(layout
        ? layout.id
        : null)+"\f"+left+"\f"+top+"\f"+options
    );
      }
  removeLayout(layout: Layout) {
    prompt(this.id, "Ovl.RemoveLayout(\f"+(layout ? layout.id : null));
  }
  setPosition(layout: Layout, left?: number, top?: number, options?: string) {
    prompt(
      this.id,
      "Ovl.SetPosition(\f"+(layout
        ? layout.id
        : null)+"\f"+left+"\f"+top+"\f"+options
    );
      }
    }
