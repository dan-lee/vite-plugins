import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import type { BuildOptions } from "esbuild";

export async function bundleEdge(buildDir: string, options: BuildOptions) {
  const esbuild = await import("esbuild");
  const result = await esbuild.build({
    bundle: true,
    minify: true,
    metafile: true,
    format: "esm",
    platform: "browser",
    external: ["node:async_hooks"],
    define: {
      "process.env.NODE_ENV": `"production"`,
    },
    logOverride: {
      "ignored-bare-import": "silent",
    },
    ...options,
  });
  await writeFile(
    join(buildDir, "esbuild-metafile.json"),
    JSON.stringify(result.metafile),
  );
}
