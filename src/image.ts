/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class Image extends DSView {
  private _auto: boolean;
  private _gfb: string;
  private constructor(id: string) {
    super(id);
    this._auto = true;
    this._gfb = "";
  }
  static create(
    file: string | null = null,
    width?: number,
    height?: number,
    options?: string,
    w?: number,
    h?: number,
  ) {
    var ret = prompt(
      "#",
      "App.CreateImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h,
    );
    if (ret) {
      return new Image(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  static createInLayout(
    layout: Layout,
    file: string | null = null,
    width?: number,
    height?: number,
    options?: string,
    w?: number,
    h?: number,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      "App.AddImage("+file+"\f"+width+"\f"+height+"\f"+options+"\f"+w+"\f"+h,
    );
    if (ret) {
      return new Image(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number,
  ) {
    prompt(
      this.id,
      "Img.AdjustColor(\f"+hue+"\f"+saturation+"\f"+brightness+"\f"+contrast,
    );
  }
  clear() {
    if (this._auto) prompt(this.id, "Img.Clear(");
    else this.draw("c");
  }
  draw(
    func: string,
    p1?: number | null | string,
    p2?: number | string,
    p3?: number,
    p4?: number,
    p5?: number,
    p6?: number,
    p7?: number | string,
  ) {
    if (this._gfb.length > 2) {
      this._gfb += "\f";
    }
    this._gfb += func+"~"+p1+"~"+p2+"~"+p3+"~"+p4+"~"+p5+"~"+p6+"~"+p7
  }
  drawArc(
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    start: number,
    sweep: number,
  ) {
    if (this._auto) {
      prompt(
        this.id,
        "Img.DrawArc("+x1+"\f"+y1+"\f"+x2+"\f"+y2+"\f"+start+"\f"+sweep,
      );
    } else {
      this.draw("a", null, x1, y1, x2, y2, start, sweep);
    }
  }
  drawCircle(x: number, y: number, radius: number) {
    if (this._auto) {
      prompt(this.id, "Img.DrawCircle("+x+"\f"+y+"\f"+radius);
    } else {
      this.draw("e", null, x, y, radius);
    }
  }
  drawFrame(ms: number) {
    prompt(this.id, "Img.DrawFrame\f"+ms);
  }

  drawImage(
    image: Image,
    x: number,
    y: number,
    w?: number,
    h?: number,
    angle?: number,
    mode?: string,
  ) {
    if (this._auto) {
      prompt(
        this.id,
        "Img.DrawImage\f"+(image
          ? image.id
          : null)+"\f"+x+"\f"+y+"\f"+w+"\f"+h+"\f"+angle+"\f"+mode,
      );
    } else {
      this.draw(
        "i",
        (image ? image.id : null),
        x,
        y,
        (w ? w : -1),
        (h ? h : -1),
        angle,
        mode,
      );
    }
  }
  drawImageMatrix(image: Image, matrix: string) {
    if (this._auto) {
      prompt(
        this.id,
        "Img.DrawImageMtx\f"+(image ? image.id : null)+"\f"+matrix,
      );
    } else {
      this.draw("m", (image ? image.id : null), matrix);
    }
  }
  drawLine(x1: number, y1: number, x2: number, y2: number) {
    if (this._auto) {
      prompt(this.id, "Img.DrawLine("+x1+"\f"+y1+"\f"+x2+"\f"+y2);
    } else {
      this.draw("l", null, x1, y1, x2, y2);
    }
  }
  drawPoint(x: number, y: number) {
    if (this._auto) {
      prompt(this.id, "Img.DrawPoint(" + x + "\f" + y);
    } else {
      this.draw("p", null, x, y);
    }
  }
  drawRectangle(x1: number, y1: number, x2: number, y2: number) {
    if (this._auto) {
      prompt(this.id, "Img.DrawRect("+x1+"\f"+y1+"\f"+x2+"\f"+y2);
    } else {
      this.draw("r", null, x1, y1, x2, y2);
    }
  }
  drawSamples(data: string, range: string) {
    if (this._auto) {
      prompt(this.id, "Img.DrawSamples(\f"+data+"\f"+range);
    } else {
      this.draw("g", data, range, 0, 0, 0, 0);
    }
  }
  drawText(text: string, x: number, y: number) {
    if (this._auto) {
      prompt(this.id, "Img.DrawText("+text+"\f"+x+"\f"+y);
    } else {
      this.draw("t", text, x, y, 0, 0, 0);
    }
  }

  flatten() {
    prompt(this.id, "Img.Flatten(");
  }

  getAbsHeight() {
    return parseFloat(prompt(this.id, "Img.GetAbsHeight(") + "");
  }
  getAbsWidth() {
    return parseFloat(prompt(this.id, "Img.GetAbsWidth(") + "");
  }
  getHeight() {
    return parseFloat(prompt(this.id, "Img.GetHeight(") + "");
  }
  getName() {
    return prompt(this.id, "Img.GetName(");
  }
  getPixelColor(x: number, y: number) {
    return JSON.parse(prompt(this.id, "Img.GetPixelColor(\f"+x+"\f"+y) + "");
  }
  getPixelData(
    format: string,
    left: number,
    top: number,
    width: number,
    height: number,
  ) {
    return prompt(
      this.id,
      "Img.GetPixelData(\f"+format+"\f"+left+"\f"+top+"\f"+width+"\f"+height,
    );
  }
  getWidth() {
    return parseFloat(prompt(this.id, "Img.GetWidth(") + "");
  }

  measureText(text: string) {
    return JSON.parse(prompt(this.id, "Img.MeasureText(\f"+text) + "");
  }
  move(x: number, y: number) {
    prompt(this.id, "Img.Move("+x+"\f"+y);
  }
  play(ms: number) {
    prompt(this.id, "Img.Play\f"+ms);
  }
  reset() {
    prompt(this.id, "Img.Reset(");
  }
  rotate(angle: number, pivX: number, pivY: number) {
    prompt(this.id, "Img.Rotate("+angle+"\f"+pivX+"\f"+pivY);
  }

  save(fileName: string, quality: string) {
    prompt(this.id, "Img.Save\f"+fileName+"\f"+quality);
  }
  scale(x: number, y: number) {
    prompt(this.id, "Img.Scale("+x+"\f"+y);
  }
  skew(x: number, y: number) {
    prompt(this.id, "Img.Skew("+x+"\f"+y);
  }

  setAlpha(alpha: string) {
    if (this._auto) {
      prompt(this.id, "Img.SetAlpha("+alpha);
    } else {
      this.draw("k", null, alpha);
    }
    return this;
  }
  setAutoUpdate(onoff: boolean) {
    this._auto = onoff;
    prompt(this.id, "Img.SetAutoUpdate(\f"+onoff);
    return this;
  }
  setColor(color: string) {
    if (this._auto) {
      prompt(this.id, "Img.SetColor("+color);
    } else {
      this.draw("o", color);
    }
    return this;
  }
  setColorFilter(color: string, mode: string) {
    prompt(this.id, "Img.SetColorFilter(\f"+color+"\f"+mode);
    return this;
  }
  setFontFile(file: string) {
    if (this._auto) {
      prompt(this.id, "Img.SetFontFile(\f"+file);
    } else {
      this.draw("f", file);
    }
    return this;
  }
  setImage(
    image: Image | string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    if (typeof image === "string") {
      prompt(
        this.id,
        "Img.LoadImage(\f"+image+"\f"+width+"\f"+height+"\f"+options,
      );
    } else {
      prompt(
        this.id,
        "Img.CopyImage(\f"+(image
          ? image.id
          : null)+"\f"+width+"\f"+height+"\f"+options,
      );
    }
    return this;
  }
  setLineWidth(width: number) {
    if (this._auto) {
      prompt(this.id, "Img.SetLineWidth("+width);
    } else {
      this.draw("w", null, width);
    }
    return this;
  }
  setMaxRate(ms: number) {
    prompt(this.id, "Img.SetMaxRate("+ms);
    return this;
  }
  setName(name: string) {
    prompt(this.id, "Img.SetName("+name);
    return this;
  }
  setOnLoad(callback: Callable) {
    prompt(this.id, "Img.SetOnLoad\f"+_Cbm(callback));
    return this;
  }
  setOnLongTouch(callback: OnTouchCallable) {
    prompt(this.id, "Img.SetOnLongTouch("+_Cbm(callback));
    return this;
  }
  setOnTouch(callback: OnTouchCallable) {
    prompt(this.id, "Img.SetOnTouch("+_Cbm(callback));
    return this;
  }
  setOnTouchDown(callback: OnTouchCallable) {
    prompt(this.id, "Img.SetOnTouchDown("+_Cbm(callback));
    return this;
  }
  setOnTouchMove(callback: OnTouchCallable) {
    prompt(this.id, "Img.SetOnTouchMove("+_Cbm(callback));
    return this;
  }
  setOnTouchUp(callback: OnTouchCallable) {
    prompt(this.id, "Img.SetOnTouchUp("+_Cbm(callback));
    return this;
  }
  setPaintColor(color: string) {
    if (this._auto) {
      prompt(this.id, "Img.SetPaintColor("+color);
    } else {
      this.draw("n", color);
    }
    return this;
  }
  setPaintStyle(style: string) {
    if (this._auto) {
      prompt(this.id, "Img.SetPaintStyle("+style);
    } else {
      this.draw("s", style);
    }
    return this;
  }
  setPixelData(
    data: string,
    width?: number,
    height?: number,
    options?: string,
  ) {
    prompt(
      this.id,
      "Img.SetPixelData(\f"+data+"\f"+width+"\f"+height+"\f"+options,
    );
    return this;
  }
  setPixelMode(onoff: boolean) {
    prompt(this.id, "Img.SetPixelMode(\f"+onoff);
    return this;
  }
  setSize(width: number, height?: number, options?: string) {
    prompt(this.id, "Img.SetSize(\f"+width+"\f"+height+"\f"+options);
    return this;
  }
  setTextSize(size: number) {
    if (this._auto) {
      prompt(this.id, "Img.SetTextSize(" + size);
    } else {
      this.draw("x", null, size);
    }
    return this;
  }
  setTouchable(touchable: boolean) {
    prompt(this.id, "Img.SetTouchable("+touchable);
    return this;
  }
  transform(matrix: string) {
    prompt(this.id, "Img.Transform(\f"+matrix);
  }
  update() {
    if (this._auto) {
      prompt(this.id, "Img.Update(");
    } else {
      prompt(this.id, "Img.Batch("+this._gfb);
      this._gfb = "";
    }
  }
}
