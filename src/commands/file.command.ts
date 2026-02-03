import { Command } from "commander";
import fs from "fs";
import { compressFile, decompressFile } from "../services/file.service";

export function registerFileCommand(program: Command) {
  program
    .command("compress <path>")
    .description("Compress a file using gzip")
    .action(async (path: string) => {
      if (!fs.existsSync(path)) {
        console.error("❌ File does not exist");
        return;
      }

      try {
        const result = await compressFile(path);
        console.log(result);
      } catch (err: any) {
        console.error("❌ Error:", err.message);
      }
    });

  program
    .command("decompress <path>")
    .description("Decompress a .gz file")
    .action(async (path: string) => {
      if (!fs.existsSync(path)) {
        console.error("❌ File does not exist");
        return;
      }

      try {
        const result = await decompressFile(path);
        console.log(result);
      } catch (err: any) {
        console.error("❌ Error:", err.message);
      }
    });
}
