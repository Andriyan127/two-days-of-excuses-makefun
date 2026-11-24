// Two Days of Excuses — make.fun entry
// Writes the chosen one-line excuse to /output/entry.txt and logs its
// character count. Node 22+.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I already delivered it \u2014 in a timeline I generated, reviewed, and approved. This one is the bug.";

const OUTPUT_PATH = "/output/entry.txt";

// The gate requires UTF-8 text of 1-200 characters, not only whitespace.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${charCount}.`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");

console.log(`Wrote ${charCount} characters to ${OUTPUT_PATH}`);
console.log(ENTRY);
