import { Command } from "commander";
import { handleStringAction, StringAction } from "../services/string.service";

const VALID_ACTIONS: StringAction[] = [
  "upper",
  "lower",
  "word-count",
  "capitalize",
  "palindrome",
];

export function registerStringCommand(program: Command) {
  program
    .command("string <action> <text>")
    .description("String manipulation utilities")
    .action((action: string, text: string) => {
      if (!VALID_ACTIONS.includes(action as StringAction)) {
        console.error(
          `❌ Invalid action: ${action}\n👉 Valid actions: ${VALID_ACTIONS.join(
            ", ",
          )}`,
        );
        return;
      }
      const result = handleStringAction(action as StringAction, text);
      console.log(result);
    });
}
