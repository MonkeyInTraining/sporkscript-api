/// <reference path="./globals.d.ts" />

export class DSObject {
  id: string;
  data: any;
  constructor(id: string) {
    _map[id] = this;
    this.id = id;
    this.data = {};
  }
  destroy() {
    prompt(this.id, "SObj.Release(");
    _map[this.id] = null;
  }
  getType() {
    return this.constructor.name;
  }
  method(
    name: string,
    types: string,
    p1: string,
    p2: string,
    p3: string,
    p4: string,
  ) {
    return prompt(
      this.id,
      "SObj.Method(\f"+name+"\f"+types+"\f"+p1+"\f"+p2+"\f"+p3+"\f"+p4
    );
  }
  release() {
    prompt(this.id, "SObj.Release(");
    _map[this.id] = null;
  }
}
