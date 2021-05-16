/// <reference path="./globals.d.ts" />
import { DSView } from "./dsview.ts";
import { Layout } from "./layout.ts";

export class VideoView extends DSView {
  private constructor(id: string) {
    super(id);
  }
  create(width?: number, height?: number, options?: string) {
    var ret = prompt(
      "#",
      `App.CreateVideoView(\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new VideoView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  createInLayout(
    layout: Layout,
    width?: number,
    height?: number,
    options?: string,
  ) {
    var ret = prompt(
      (layout ? layout.id : undefined),
      `App.AddVideoView(\f${width}\f${height}\f${options}`,
    );
    if (ret) {
      return new VideoView(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  getPosition() {
    return parseFloat(prompt(this.id, "Vid.GetPosition(") || "");
  }
  getDuration() {
    return parseFloat(prompt(this.id, "Vid.GetDuration(") || "");
  }
  isReady() {
    return prompt(this.id, "Vid.IsReady(") === "true";
  }
  isPlaying() {
    return prompt(this.id, "Vid.IsPlaying(") === "true";
  }
  pause() {
    prompt(this.id, "Vid.Pause(");
  }
  play() {
    prompt(this.id, "Vid.Play(");
  }
  seekTo(seconds: number) {
    prompt(this.id, "Vid.SeekTo(" + seconds);
  }
  setFile(file: string) {
    prompt(this.id, "Vid.SetFile(" + file);
  }
  setOnComplete(callback: Function) {
    prompt(this.id, "Vid.SetOnComplete(" + _Cbm(callback));
  }
  setOnError(callback: Function) {
    prompt(this.id, "Vid.SetOnError(" + _Cbm(callback));
  }
  setOnReady(callback: Function) {
    prompt(this.id, "Vid.SetOnReady(" + _Cbm(callback));
  }
  setOnSubtitle(callback: Function) {
    prompt(this.id, "Vid.SetOnSubtitle(\f" + _Cbm(callback));
  }
  setSubtitles(file: string) {
    prompt(this.id, "Vid.SetSubtitles(\f" + file);
  }
  setVolume(left: number, right: number) {
    prompt(this.id, "Vid.SetVolume(\f" + left + "\f" + right);
  }
  stop() {
    prompt(this.id, "Vid.Stop(");
  }
}
