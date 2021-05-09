/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Image } from "./image.ts";
import { Layout } from "./layout.ts";

export class CameraView extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(width?: number, height?: number, options?: string) {
    var ret = prompt(
      "#",
      "App.CreateCameraView(" + width + "\f" + height + "\f" + options,
    );
    if (ret) {
      return new CameraView(ret);
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
      `App.AddCameraView(${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new CameraView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }

  autoCapture(path: string, file: string, maxCount: number) {
    prompt(this.id, `Cam.AutoCapture(${path}\f${file}\f${maxCount}`);
  }
  findFaces(max: number) {
    return JSON.parse(prompt(this.id, `Cam.FindFaces(\f${max}`) || "");
  }
  focus() {
    prompt(this.id, "Cam.Focus(");
  }
  getCameraCount() {
    return parseInt(prompt(this.id, "Cam.GetCameraCount(") || "");
  }
  getColorEffects() {
    return prompt(this.id, "Cam.GetColorEffects(");
  }
  getImageHeight() {
    return parseInt(prompt(this.id, "Cam.GetImageHeight(") || "");
  }
  getMaxZoom() {
    return parseInt(prompt(this.id, "Cam.GetMaxZoom(") || "");
  }
  getParameters() {
    return prompt(this.id, "Cam.GetParams(\f");
  }
  getPictureSizes() {
    return prompt(this.id, "Cam.GetPictureSizes(");
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
      `Cam.GetPixelData(\f${format}\f${left}\f${top}\f${width}\f${height}`,
    );
  }
  getImageWidth() {
    return parseInt(prompt(this.id, "Cam.GetImageWidth(") || "");
  }
  getZoom() {
    return parseInt(prompt(this.id, "Cam.GetZoom(") || "");
  }
  hasFlash() {
    return prompt(this.id, "Cam.HasFlash(") === "true";
  }
  isRecording() {
    return prompt(this.id, "Cam.IsRecording(") === "true";
  }
  motionMosaic(
    xtiles: string,
    ytiles: string,
    sensitivity: number,
    minPeriod: number,
    image: Image,
  ) {
    prompt(
      this.id,
      `Cam.MotionMosaic(${xtiles}\f${ytiles}\f${sensitivity}\f${minPeriod}\f${(image
        ? image.id
        : null)}`,
    );
  }
  record(file: string, seconds: number) {
    prompt(this.id, `Cam.Record(\f${file}\f${seconds}`);
  }
  reportColors(
    list: string,
    callback: Function,
    sampSize: number,
    maxRate: number,
  ) {
    prompt(
      this.id,
      `Cam.ReportColors(\f${list}\f${_Cbm(callback)}\f${sampSize}\f${maxRate}`,
    );
  }
  setColorEffect(effect: string) {
    prompt(this.id, `Cam.SetColorEffect(\f${effect}`);
  }
  setDuplicateImage(image1: Image, image2: Image) {
    prompt(
      this.id,
      `Cam.SetDuplicateImage(\f${(image1 ? image1.id : null)}\f${(image2
        ? image2.id
        : null)}`,
    );
  }
  setFlash(onoff: boolean) {
    prompt(this.id, `Cam.SetFlash(${onoff}`);
  }
  setFocusMode(mode: string) {
    prompt(this.id, `Cam.SetFocusMode(\f${mode}`);
  }
  setOnFocus(callback: Function) {
    prompt(this.id, `Cam.SetOnFocus\f${_Cbm(callback)}`);
  }
  setOnMotion(callback: Function) {
    prompt(this.id, `Cam.SetOnMotion(${_Cbm(callback)}`);
  }
  setOnPicture(callback: Function) {
    prompt(this.id, `Cam.SetOnPicture\f${_Cbm(callback)}`);
  }
  setOnReady(callback: Function) {
    prompt(this.id, `Cam.SetOnReady(${_Cbm(callback)}`);
  }
  setOrientation(angle: number) {
    prompt(this.id, `Cam.SetOrientation(\f${angle}`);
  }
  setParameter(name: string, value: number | string) {
    if (typeof value === "string") {
      prompt(this.id, `Cam.SetParam(\f${name}\f${value}`);
    } else {
      prompt(this.id, `Cam.SetParamNum(\f${name}\f${value}`);
    }
  }
  setPictureSize(width: number, height?: number) {
    prompt(this.id, `Cam.SetPictureSize(\f${width}\f${height}`);
  }
  setPostRotation(angle: number) {
    prompt(this.id, `Cam.SetPostRotation(\f${angle}`);
  }
  setPreviewImage(image: Image) {
    prompt(this.id, `Cam.SetPreviewImage(${(image ? image.id : null)}`);
  }
  setSound(onoff: boolean) {
    prompt(this.id, `Cam.SetSound(${onoff}`);
  }
  setVideoSize(width: number, height?: number) {
    prompt(this.id, `Cam.SetVideoSize(\f${width}\f${height}`);
  }
  setZoom(level: number) {
    prompt(this.id, `Cam.SetZoom(\f${level}`);
  }
  startPreview() {
    prompt(this.id, "Cam.StartPreview(");
  }
  stop() {
    prompt(this.id, "Cam.Stop(");
  }
  stopPreview() {
    prompt(this.id, "Cam.StopPreview(");
  }
  stream(ip: string, port: number, quality: string, fps: number, mtu: number) {
    prompt(this.id, `Cam.Stream(${ip}\f${port}\f${quality}\f${fps}\f${mtu}`);
  }
  takePicture(file: string) {
    prompt(this.id, `Cam.TakePicture(${file}`);
  }
}
