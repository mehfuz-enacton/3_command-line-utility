import axios from "axios";

export type ApiType = "weather" | "news" | "jokes";

export async function fetchApiData(type: ApiType, query?: string) {
  switch (type) {
    case "weather":
      if (!query || !query.trim()) throw new Error("City is required for weather");

      const weatherRes = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${query}`,
      );
      return weatherRes.data;

    case "jokes":
      const jokeRes = await axios.get(
        "https://official-joke-api.appspot.com/random_joke",
      );
      return `${jokeRes.data.setup}\n😂 ${jokeRes.data.punchline}`;

    case "news":
      if (!query || !query.trim()) throw new Error("Topic is required for better news");

      const NewsRes = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=${process.env.NEWS_API_KEY}&q=${query}`,
      );
      return NewsRes.data.results[0];

    default:
      throw new Error("Invalid API type");
  }
}
