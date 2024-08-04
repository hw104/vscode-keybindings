#! /usr/bin/env -S deno run --allow-read --allow-write --allow-env

import * as JSONC from "jsr:@std/jsonc@^1.0.0";
import { decodeKey, dumpKeybidingsPath, encodeKey } from "./common.ts";

export async function main() {
  const contents = await Deno.readTextFile(dumpKeybidingsPath);
  console.log(contents);

  const config = JSONC.parse(contents) as {
    key: string;
    command: string;
    when?: string;
  }[];

  const res = config.flatMap((k) => {
    const replaced = encodeKey(
      decodeKey(k.key).map((step) => step.map((k) => (k === "cmd" ? "alt" : k)))
    );
    if (
      replaced !== k.key &&
      !config.some(
        (c) =>
          c.key === replaced && c.command === k.command && c.when === k.when
      )
    ) {
      return [k, { ...k, key: replaced }];
    }
    return [k];
  });

  // const configPath = getVscodeUserConfigPath();
  // const toPath = `${configPath}/keybindings.json`;
  await Deno.writeFile(
    dumpKeybidingsPath,
    new TextEncoder().encode(JSON.stringify(res, null, 4))
  );
}

if (import.meta.main) {
  await main();
}
