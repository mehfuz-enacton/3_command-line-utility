#!/usr/bin/env node

import { Command } from "commander";
import { registerStringCommand } from "../src/commands/string.command";
import { registerFileCommand } from "../src/commands/file.command";
import { showMainMenu } from "../src/menu/main.menu";

const program = new Command();

program
  .name("cmd-utils")
  .description("A utility CLI built with Node.js + TypeScript")
  .version("1.0.0");

registerStringCommand(program);
registerFileCommand(program)

if (process.argv.length <= 2) {
  showMainMenu();
} else {
  program.parse(process.argv);
}
