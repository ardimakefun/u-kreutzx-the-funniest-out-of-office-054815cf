// The Funniest Out-of-Office — make.fun
// Writes a single original one-line out-of-office reply to /output/entry.txt.
// Fresh, deterministic, no network, no randomness, no environment access.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Out until Monday. I left my inbox unsupervised \u2014 it has already promoted itself to management.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
