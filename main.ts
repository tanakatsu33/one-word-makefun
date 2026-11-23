import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "susurrus";

function assertOneWord(word: string): void {
  if (word.length === 0 || /\s/.test(word)) {
    throw new Error(`Entry must be exactly one word, got: ${JSON.stringify(word)}`);
  }
}

assertOneWord(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
