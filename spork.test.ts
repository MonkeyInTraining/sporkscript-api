import { Api, Layout, Text } from "./src/spork-api.ts";

export function OnStart() {
  const lay = Layout.create("linear", "vcenter,fillxy");
  const txt = Text.create("Hello World")
    .setMargins(0, 0.05, 0, 0)
    .setTextSize(22);
  lay.addChild(txt);
  Api.addLayout(lay);
}
