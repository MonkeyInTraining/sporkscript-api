/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class AudioRecorder extends DSObject {
  private static instance: AudioRecorder;
  private constructor(id: string) {
    super(id);
  }
  public static getInstance(): AudioRecorder {
    if (!AudioRecorder.instance) {
      const ret = prompt("#", "App.CreateAudioRecorder(");
      if (ret) {
        AudioRecorder.instance = new AudioRecorder(ret);
      } else {
        throw new Error(`Could not create ${this.constructor.name}`);
      }
    }
    return AudioRecorder.instance;
  }
  getData() {
    return JSON.parse(prompt(this.id, "Rec.GetData(") || "");
  }
  getPeak() {
    return parseFloat(prompt(this.id, "Rec.GetPeak(") || "");
  }
  getRMS() {
    return parseFloat(prompt(this.id, "Rec.GetRMS(") || "");
  }
  pause() {
    prompt(this.id, "Rec.Pause(");
  }
  setFile(file: string) {
    prompt(this.id, `Rec.SetFile(${file}`);
    return this;
  }
  setFrequency(frequency: number) {
    prompt(this.id, `Rec.SetFrequency(\f${frequency}`);
    return this;
  }
  setSource(source: string) {
    prompt(this.id, `Rec.SetSource(\f${source}`);
    return this;
  }
  start() {
    prompt(this.id, "Rec.Start(");
  }
  stop() {
    prompt(this.id, "Rec.Stop(");
  }
}
