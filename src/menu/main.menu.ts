import inquirer from "inquirer";
import { handleStringMenu } from "./string.menu";
import { showApiMenu } from "./api.menu";
import { compressFile, decompressFile } from "../services/file.service";

export async function showMainMenu() {
  while (true) {
    const { feature } = await inquirer.prompt([
      {
        type: "rawlist",
        name: "feature",
        message: "What do you want to do?",
        choices: [
          { name: "String manipulation", value: "string" },
          { name: "Compress file", value: "compress" },
          { name: "Decompress file", value: "decompress" },
          { name: "Fetch API", value: "api" },
          { name: "Exit", value: "exit" },
        ],
      },
    ]);

    switch (feature) {
      case "string":
        await handleStringMenu();
        break;

      case "compress":
      case "decompress": {
        const { path } = await inquirer.prompt<{ path: string }>([
          {
            type: "input",
            name: "path",
            message: "Enter file path:",
            validate(input) {
              return input.trim().length > 0 || "Path is required";
            },
          },
        ]);

        try {
          const result =
            feature === "compress"
              ? await compressFile(path)
              : await decompressFile(path);

          console.log("\n" + result + "\n");
        } catch (err: any) {
          console.error("❌ Error:", err.message);
        }
        break;
      }

      case "api":
        await showApiMenu();
        break;

      case "exit":
        console.log("👋 Goodbye!");
        process.exit(0);

      default:
        console.log("🚧 Feature coming soon");
    }
  }
}
