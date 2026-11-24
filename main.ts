// One Word for the Boss — entry program.
// Writes exactly one word describing a boss to entry.txt in the output dir.
// Node 22, standard library only. Paths are resolved relative to this
// source file, never relative to the process working directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The word: a boss who pulls in time, energy, emails and meetings, and
// lets nothing escape back out. One word, nine characters, no spaces,
// no punctuation, no trailing newline — it has to land on its own.
const WORD = "Blackhole";

// Resolve the repository root from this file's own location, so the
// program behaves the same no matter which directory it is run from.
// main.ts lives at the repository root, so its own directory is the root.
const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;

function validate(text) {
  if (typeof text !== "string" || text.trim().length === 0) {
    throw new Error("entry must not be blank");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (/[\r\n]/.test(text)) {
    throw new Error("entry must be a single line");
  }
  if (text.length < 1 || text.length > 30) {
    throw new Error(`entry must be 1-30 characters, got ${text.length}`);
  }
  // Exactly one word: letters only, so no spaces, punctuation or digits
  // can sneak in and turn it into a phrase or a caption.
  if (!/^[A-Za-z]+$/.test(text)) {
    throw new Error("entry must be exactly one word, letters only");
  }
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(WORD);
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), WORD, "utf8");
console.log(`wrote entry.txt (${WORD.length} characters) to ${outputDir}`);
