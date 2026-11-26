import { mkdirSync, writeFileSync } from "node:fs";

// Rejected Olympic Sports — entry program.
// Writes one funny single-line sport the Olympics rejected
// to /output/entry.txt. Deterministic, no network, no randomness.

const ENTRY: string =
  "Competitive Queueing: athletes stand in a line for four hours; " +
  "gold goes to whoever complains the least.";

const OUTPUT_PATH: string = "/output/entry.txt";

function main(): void {
  // The gate requires 1-200 characters of UTF-8 text.
  if (ENTRY.length < 1 || ENTRY.length > 200) {
    throw new Error(`entry is ${ENTRY.length} characters, must be 1-200`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
}

main();
