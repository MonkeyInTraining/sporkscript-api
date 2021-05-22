/// <reference path="./globals.d.ts" />
import { DSObject } from "./dsobject.ts";

export class Synth extends DSObject {
  private constructor(id: string) {
    super(id);
  }
  public static create(type: string) {
    const ret = prompt(
      "#",
      "App.CreateSynth(" + type,
    );
    if (ret) {
      return new Synth(ret);
    } else {
      throw new Error(`Could not create ${this.constructor.name}`);
    }
  }
  start() {
    prompt(this.id, "Syn.Start(");
  }
  stop() {
    prompt(this.id, "Syn.Stop(");
  }
  playTone(frequency: number, duration: number) {
    prompt(this.id, "Syn.PlayTone(" + frequency + "\f" + duration);
  }
  playNote(note: number) {
    prompt(this.id, "Syn.PlayNote(" + note);
  }
  playMidiTune(tune: string) {
    prompt(this.id, "Syn.PlayMidiTune(" + tune);
  }
  setFrequency(frequency: number) {
    prompt(this.id, "Syn.SetFrequency(" + frequency);
    return this;
  }
  setWaveShape(shape: string) {
    prompt(this.id, "Syn.SetWaveShape(" + shape);
    return this;
  }
  setVolume(left: number, right: number) {
    prompt(this.id, "Syn.SetVolume(" + left + "\f" + right);
    return this;
  }
  setNoteLength(duration: number) {
    prompt(this.id, "Syn.SetNoteLength(" + duration);
    return this;
  }

  setVca(attack: number, decay: number, sustain: number, release: number) {
    prompt(
      this.id,
      "Syn.SetVca\f" + attack + "\f" + decay + "\f" + sustain + "\f" + release,
    );
    return this;
  }
  setVcaAttack(attack: number) {
    prompt(this.id, "Syn.SetVcaAttack(" + attack);
    return this;
  }
  setVcaDecay(decay: number) {
    prompt(this.id, "Syn.SetVcaDecay(" + decay);
    return this;
  }
  setVcaSustain(sustain: number) {
    prompt(this.id, "Syn.SetVcaSustain(" + sustain);
    return this;
  }
  setVcaRelease(release: number) {
    prompt(this.id, "Syn.SetVcaRelease(" + release);
    return this;
  }
  setVcaEnabled(enable: boolean) {
    prompt(this.id, "Syn.SetVcaEnabled(" + enable);
    return this;
  }

  setVcf(
    attack: number,
    decay: number,
    sustain: number,
    release: number,
    cuttoff: number,
    resonance: number,
    depth: number,
  ) {
    prompt(
      this.id,
      "Syn.SetVcf\f" + attack + "\f" + decay + "\f" + sustain + "\f" + release +
        "\f" + cuttoff + "\f" + resonance + "\f" + depth,
    );
    return this;
  }
  setVcfAttack(attack: number) {
    prompt(this.id, "Syn.SetVcfAttack(" + attack);
    return this;
  }
  setVcfDecay(decay: number) {
    prompt(this.id, "Syn.SetVcfDecay(" + decay);
    return this;
  }
  setVcfSustain(sustain: number) {
    prompt(this.id, "Syn.SetVcfSustain(" + sustain);
    return this;
  }
  setVcfRelease(release: number) {
    prompt(this.id, "Syn.SetVcfRelease(" + release);
    return this;
  }
  setVcfCutoff(cuttoff: number) {
    prompt(this.id, "Syn.SetVcfCutoff(" + cuttoff);
    return this;
  }
  setVcfResonance(resonance: number) {
    prompt(this.id, "Syn.SetVcfResonance(" + resonance);
    return this;
  }
  setVcfDepth(depth: number) {
    prompt(this.id, "Syn.SetVcfDepth(" + depth);
    return this;
  }
  setVcfEnabled(enable: boolean) {
    prompt(this.id, "Syn.SetVcfEnabled(" + enable);
    return this;
  }

  setPhaser(drywet: number, rate: number, range: number, feedback: number) {
    prompt(
      this.id,
      "Syn.SetPhaser\f" + drywet + "\f" + rate + "\f" + range + "\f" + feedback,
    );
    return this;
  }
  setPhaserDryWet(drywet: number) {
    prompt(this.id, "Syn.SetPhaserDryWet(" + drywet);
    return this;
  }
  setPhaserRate(rate: number) {
    prompt(this.id, "Syn.SetPhaserRate(" + rate);
    return this;
  }
  setPhaserRange(range: number) {
    prompt(this.id, "Syn.SetPhaserRange(" + range);
    return this;
  }
  setPhaserFeedback(feedback: number) {
    prompt(this.id, "Syn.SetPhaserFeedback(" + feedback);
    return this;
  }
  setPhaserEnabled(enable: boolean) {
    prompt(this.id, "Syn.SetPhaserEnabled(" + enable);
    return this;
  }

  setDelay(ms: number) {
    prompt(this.id, "Syn.SetDelay(" + ms);
    return this;
  }
  setFeedback(feedback: number) {
    prompt(this.id, "Syn.SetFeedback(" + feedback);
    return this;
  }
  setDelayEnabled(enable: boolean) {
    prompt(this.id, "Syn.SetDelayEnabled(" + enable);
    return this;
  }
}
