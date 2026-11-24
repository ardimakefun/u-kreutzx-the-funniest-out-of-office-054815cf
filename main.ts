// The Funniest Out-of-Office — make.fun
// Writes a single original one-line out-of-office reply to /output/entry.txt.
// Fresh, deterministic, no network, no randomness, no environment access.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out until Monday. I left my inbox unsupervised \u2014 it has already promoted itself to management.";

// Length gate: count in code points, not bytes — the em dash (U+2014)
// is 3 bytes in UTF-8 but 1 code point. A one-liner must be 1–140 chars.
const entryLength = [...entry].length;
if (entryLength < 1 || entryLength > 140) {
  throw new Error(
    `Entry length ${entryLength} code points is outside the 1–140 range; refusing to write output.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
