/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class MediaPlayer extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create() {
    const ret = prompt(
      "#",
      `App.CreateMediaPlayer(`,
    );
    if (ret) {
      return new MediaPlayer(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  close() {
    prompt(this.id, "Aud.Close(");
  }
  destroy() {
    prompt(this.id, "Aud.Release(");
    _map[this.id] = null;
  }
  getDuration() {
    return parseFloat(prompt(this.id, "Aud.GetDuration(") || "");
  }
  getPosition() {
    return parseFloat(prompt(this.id, "Aud.GetPosition(") || "");
  }
  isLooping() {
    return prompt(this.id, "Aud.IsLooping(") === "true";
  }
  isPlaying() {
    return prompt(this.id, "Aud.IsPlaying(") === "true";
  }
  isReady() {
    return prompt(this.id, "Aud.IsReady(") === "true";
  }
  pause() {
    prompt(this.id, "Aud.Pause(");
  }
  play(from: number) {
    prompt(this.id, `Aud.Play(\f${from}`);
  }
  release() {
    prompt(this.id, "Aud.Release(");
    _map[this.id] = null;
  }
  stop() {
    prompt(this.id, "Aud.Stop(");
  }
  seekTo(time: number) {
    prompt(this.id, `Aud.SeekTo(${time}`);
  }
  setFile(file: string) {
    prompt(this.id, `Aud.SetFile(${file}`);
    return this;
  }
  setLooping(loop: boolean) {
    prompt(this.id, `Aud.SetLooping(\f${loop}`);
    return this;
  }
  setVolume(left: number, right: number) {
    prompt(this.id, `Aud.SetVolume(${left}\f${right}`);
    return this;
  }
  setOnReady(callback: Function) {
    prompt(this.id, `Aud.SetOnReady(${_Cbm(callback)}`);
    return this;
  }
  setOnComplete(callback: Function) {
    prompt(this.id, `Aud.SetOnComplete(${_Cbm(callback)}`);
    return this;
  }
  setOnSeekDone(callback: Function) {
    prompt(this.id, `Aud.SetOnSeekDone(${_Cbm(callback)}`);
    return this;
  }
}
