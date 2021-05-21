
const { files, diagnostics, stats, ignoredOptions } = await Deno.emit("./spork.test.ts", {bundle:"iife"});
if (diagnostics.length) {
  // there is something that impacted the emit
  console.warn(Deno.formatDiagnostics(diagnostics));
}
if (stats.length) {
    console.log(stats)
}
if (ignoredOptions?.length) {
    console.log(ignoredOptions)
}

const text = files["deno:///bundle.js"]
    .replaceAll("\f","\\f")
    .split("\n")
const end = text.map(x=>x.trim()).lastIndexOf("return {")
console.log(end)

Deno.writeTextFile("./spork-test.js", text.slice(1,end).join("\n"))
//const e = new TextEncoder()
//Deno.writeFile("./spork-test.js", e.encode(files["deno:///bundle.js"]))


/*
const { files, diagnostics, stats, ignoredOptions } = await Deno.emit("./spork.test.ts");
let m = [];
for (const k in files) {
    //console.log(k)
    m.push("// " + k);
    //console.log(files[k])
    m.push(files[k].replaceAll("\f","\\f"))
}
Deno.writeTextFile("./out.js", m.join("\n"))
*/
