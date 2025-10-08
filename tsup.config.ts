import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["ts/drag-drop-touch.ts"],
  outExtension(ctx) {
    if (ctx.options.define?.["debug"]) {
      return { js: ".debug.esm.js" };
    }
    return ctx.options.minify ? { js: ".esm.min.js" } : { js: ".esm.js" };
  },
  format: "esm",
  bundle: true,
  silent: true,
  esbuildOptions(options, ctx) {
    if (!options.define?.["debug"]) {
      options.dropLabels = ["DEBUG"];
    }
  },
});
