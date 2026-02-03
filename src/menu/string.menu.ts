import inquirer from "inquirer";
import { handleStringAction, StringAction } from "../services/string.service";

export async function handleStringMenu() {
  const { action } = await inquirer.prompt([
    {
      type: "rawlist",
      name: "action",
      message: "Choose string action:",
      choices: ["upper", "lower", "word-count", "capitalize", "palindrome"],
    },
  ]);

  const { text } = await inquirer.prompt([
    {
      type: "input",
      name: "text",
      message: "Enter text:",
      validate(input) {
        return input.trim().length > 0 || "Text cannot be empty";
      },
    },
  ]);

  const result = handleStringAction(action as StringAction, text);
  console.log("\n✅ Result:");
  console.log(result);
}