#! /usr/bin/env -S deno run --allow-read --allow-write --allow-env

import { dumpKeybidingsPath, getVscodeUserConfigPath } from "./common.ts";

async function main() {
  const contents = await Deno.readTextFile(dumpKeybidingsPath);

  const configPath = getVscodeUserConfigPath();
  const toPath = `${configPath}/keybindings.json`;
  await Deno.writeFile(toPath, new TextEncoder().encode(contents));
}

if (import.meta.main) {
  await main();
}
