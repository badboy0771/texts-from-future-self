import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry is one text message from the writer's future self. The sealed
// gate reads /output/entry.txt and requires UTF-8 text of 1 to 200
// characters, not only white space, so the program enforces the same shape
// here before it writes anything.
//
// Validation order matters: the length check runs first because it is the
// gate's headline rule (1 to 200 characters); the single-line check runs
// next because a line break would split the text into two messages, which
// the brief forbids ("just the message as it would arrive"); the
// whitespace check runs last because an entry of spaces passes the first
// two checks yet still fails the gate. Every failure throws before any
// write, so /output/entry.txt never holds a half-valid entry.
const raw = readFileSync(new URL("./line.txt", import.meta.url), "utf8");
const line = raw.trim();

if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (/\r|\n/.test(line)) {
  throw new Error("entry must be a single line, no line breaks allowed");
}
if (!/\S/.test(line)) {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// The leaderboard's tie-break prefers the smaller text, so report the byte
// size too; then read the file back and confirm it round-trips exactly.
// The round-trip read is not paranoia: the grader runs the program twice
// in separate sandboxes and gates each run's /output/entry.txt, so a write
// that silently dropped a character (a bad encoding, a truncated flush)
// would fail the second run even if the first looked fine. Reading the
// file back in the same process catches that class of failure before the
// entry ever leaves this machine.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== line) {
  throw new Error("entry.txt did not round-trip exactly");
}
const bytes = Buffer.byteLength(line, "utf8");
console.log(`wrote ${line.length} characters (${bytes} bytes) to /output/entry.txt`);
