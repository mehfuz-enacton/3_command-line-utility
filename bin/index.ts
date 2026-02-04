#!/usr/bin/env node

import dotenv from 'dotenv';
import { Command } from "commander";
import { registerStringCommand } from "../src/commands/string.command";
import { registerFileCommand } from "../src/commands/file.command";
import { registerApiCommand } from '../src/commands/api.command';
import { showMainMenu } from "../src/menu/main.menu";

dotenv.config();
const program = new Command();

program
  .name("cmd-utils")
  .description("A utility CLI built with Node.js + TypeScript")
  .version("1.0.0");

registerStringCommand(program);
registerFileCommand(program);
registerApiCommand(program)

if (process.argv.length <= 2) {
  showMainMenu();
} else {
  program.parse(process.argv);
}
