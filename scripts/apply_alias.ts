#! /usr/bin/env -S deno run --allow-read --allow-write --allow-env

import * as JSONC from "jsr:@std/jsonc@^1.0.0";
import {
  aliasConfigPath,
  decodeKey,
  dumpKeybidingsPath,
  encodeKey,
} from "./common.ts";

export async function main() {
  let config = JSONC.parse(await Deno.readTextFile(dumpKeybidingsPath)) as {
    key: string;
    command: string;
    when?: string;
  }[];
  const aliasConfig = JSONC.parse(await Deno.readTextFile(aliasConfigPath)) as {
    from: string;
    to: string;
  }[];

  for (const alias of aliasConfig) {
    config = config.flatMap((k) => {
      const replaced = encodeKey(
        decodeKey(k.key).map((step) =>
          step.join("+") === alias.from
            ? alias.to.split("+")
            : step.map((k) => (k === alias.from ? alias.to : k))
        )
      );
      if (replaced === k.key) {
        return [k];
      }
      const isAliasNotFound = !config.some(
        (c) =>
          c.key === replaced && c.command === k.command && c.when === k.when
      );
      if (isAliasNotFound) {
        return [k, { ...k, key: replaced }];
      }
      return [k];
    });
  }

  await Deno.writeFile(
    dumpKeybidingsPath,
    new TextEncoder().encode(JSON.stringify(config, null, 4))
  );
}

if (import.meta.main) {
  await main();
}
