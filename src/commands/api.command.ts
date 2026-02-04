import { Command } from "commander";
import { fetchApiData, ApiType } from "../services/api.service";

const VALID_APIS: ApiType[] = ["weather", "news", "jokes"];

export function registerApiCommand(program: Command) {
  program
    .command("api <type> [query]")
    .description("Fetch data from APIs (weather, news, jokes)")
    .action(async (type: string, query?: string) => {
      if (!VALID_APIS.includes(type as ApiType)) {
        console.error(
          `❌ Invalid API type: ${type}\n👉 Valid types: ${VALID_APIS.join(", ")}`
        );
        return;
      }

      try {
        const result = await fetchApiData(type as ApiType, query);
        console.log(result);
      } catch (err: any) {
        console.error("❌ Error:", err.message);
      }
    });
}
