#! /usr/bin/env -S deno run --allow-read --allow-write --allow-env

import {
  dirname,
  fromFileUrl,
  join,
} from "https://deno.land/std@0.211.0/path/mod.ts";

export const keybindingsJson = "keybindings.json";
export const dumpKeybidingsPath = join(
  dirname(fromFileUrl(import.meta.url)),
  "..",
  keybindingsJson
);
export const aliasConfigPath = join(
  dirname(fromFileUrl(import.meta.url)),
  "..",
  "aliases.json"
);

export function getVscodeUserConfigPath() {
  if (Deno.build.os === "darwin") {
    return `${Deno.env.get("HOME")}/Library/Application Support/Code/User`;
  }
  if (Deno.build.os === "windows") {
    return `${Deno.env.get("APPDATA")}/Code/User`;
  }
  return `${Deno.env.get("HOME")}/.config/Code/User`;
}

export function decodeKey(key: string): string[][] {
  return key.split(" ").map((step) => step.split("+"));
}

export function encodeKey(decoded: string[][]): string {
  return decoded.map((step) => step.join("+")).join(" ");
}
