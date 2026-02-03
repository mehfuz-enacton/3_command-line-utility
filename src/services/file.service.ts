import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
import { promisify } from "util";

const pipe = promisify(pipeline);

export async function compressFile(
  inputPath: string,
  outputPath?: string
) {
  const out = outputPath ?? `${inputPath}.gz`;

  await pipe(
    fs.createReadStream(inputPath),
    zlib.createGzip(),
    fs.createWriteStream(out)
  );

  return `✅ File compressed: ${out}`;
}

export async function decompressFile(
  inputPath: string,
  outputPath?: string
) {
  const out =
    outputPath ?? inputPath.replace(/\.gz$/, "");

  await pipe(
    fs.createReadStream(inputPath),
    zlib.createGunzip(),
    fs.createWriteStream(out)
  );

  return `✅ File decompressed: ${out}`;
}
