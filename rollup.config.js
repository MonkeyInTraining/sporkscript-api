import { terser } from "https://deno.land/x/drollup@2.42.3+0.17.1/plugins/terser/mod.ts";

export default {
  input: './src/spork-api.ts',
  output: {
    file: 'mod.js',
    format: "es",
  },
  plugins: [terser()],
};