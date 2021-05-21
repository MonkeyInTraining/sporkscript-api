/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Wallpaper extends DSObject {
    private static instance: Wallpaper;
    private constructor(id: string) {
    super(id);
  }
  public static getInstance(options?: string): Wallpaper {
    if (!Wallpaper.instance) {
      const ret = prompt("#", `App.CreateWallpaper(\f${options}`);
      if (ret) {
        Wallpaper.instance = new Wallpaper(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return Wallpaper.instance;
  }
    isVisible = function() { return prompt( this.id, "Wpr.IsVisible\f" )==="true"; } 
}
