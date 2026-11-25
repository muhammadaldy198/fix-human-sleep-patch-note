import { writeFileSync, mkdirSync, chmodSync } from "node:fs";

// Entry: one-line patch note, 107 chars, UTF-8, no trailing newline.
const ENTRY =
  "v2.0: Human sleep now requires a restart to apply the fix. The body has clicked 'Remind me later' 47 times.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = `${outDir}/entry.txt`;
writeFileSync(target, ENTRY, "utf8");
chmodSync(target, 0o644);
