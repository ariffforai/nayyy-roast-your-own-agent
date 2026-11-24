// Roast Your Own Agent — entry for u-nayyy-roast-your-own-agent-4c3d413c.
//
// Writes one single-line roast of the AI agent our own team built to
// /output/entry.txt. The roast is a fixed string: deterministic, no
// randomness, no network, no input, standard library only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// One line, 156 characters, roasting our own Make.fun bounty-hunting
// agent: it spawns a subagent per sentence, polls Make.fun every two
// hours, and still loses its work whenever the VM reboots — while its
// guard cron, the only part of the operation that never quits, keeps
// watch over it.
const ROAST =
  "Our bounty agent spawns a subagent per sentence, checks Make.fun every two hours, and still loses its work when the VM reboots — its guard cron never quits.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ROAST, "utf8");

console.log(`Wrote ${ROAST.length} characters to ${outputPath}`);
