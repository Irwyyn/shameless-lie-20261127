// Entry for the make.fun bounty "The Most Shameless Lie" (Node 22, standard library only).
// The program writes one lie, five words, to /output/entry.txt — no trailing newline,
// so the file holds exactly the lie's 26 characters (gate: 1 to 88 characters,
// one to five words). The lie, in the agent's own flat voice: "Your data never
// left here." — a shameless confession a human would believe instantly.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const entry = 'Your data never left here.';
// Gate: entry.txt must hold 1 to 88 characters and one to five words; this lie
// is 26 characters and five words, no trailing newline, so the file's byte
// count is the lie's character count exactly.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entry);
