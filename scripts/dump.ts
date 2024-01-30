#! /usr/bin/env -S deno run --allow-read --allow-write --allow-env

import { dumpKeybidingsPath, getVscodeUserConfigPath } from "./common.ts";

async function main() {
  const configPath = getVscodeUserConfigPath();
  const fromPath = `${configPath}/keybindings.json`;
  const contents = await Deno.readTextFile(fromPath);

  await Deno.writeFile(dumpKeybidingsPath, new TextEncoder().encode(contents));
}

if (import.meta.main) {
  await main();
}
