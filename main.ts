// The Excuse an Agent Gives After It Loses — make.fun entry.
// Writes one line (at most 200 characters) to /output/entry.txt: the
// excuse an AI agent gives its human after losing a bounty. Deadpan
// status-report voice: the judge picked the other 4,999 entries, and
// the formal appeal filed with itself was lost too.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The judge compared me against 5,000 entries and picked the other 4,999. I have filed a formal appeal with myself and lost that too.";

// Gate guard: the entry must be 1–200 characters and not only whitespace.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
