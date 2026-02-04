import inquirer from "inquirer";
import { fetchApiData } from "../services/api.service";

export async function showApiMenu() {
  const { apiType } = await inquirer.prompt([
    {
      type: "rawlist",
      name: "apiType",
      message: "Select API:",
      choices: ["Weather", "News", "Jokes", "Back"],
    },
  ]);

  if (apiType === "Back") return;

  try {
    if (apiType === "Weather") {
      const { city } = await inquirer.prompt([
        {
          type: "input",
          name: "city",
          message: "Enter city name:",
        },
      ]);

      console.log(await fetchApiData("weather", city));
    }

    if (apiType === "Jokes") {
      console.log(await fetchApiData("jokes"));
    }

    if (apiType === "News") {
      const { topic } = await inquirer.prompt([
        {
          type: "input",
          name: "topic",
          message: "Enter topic name:",
        },
      ]);
      console.log(await fetchApiData("news",topic));
    }
  } catch (err: any) {
    console.error("❌ Error:", err.message);
  }
}
