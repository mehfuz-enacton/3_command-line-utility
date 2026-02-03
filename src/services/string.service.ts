export type StringAction =
  | "upper"
  | "lower"
  | "word-count"
  | "capitalize"
  | "palindrome";

export function handleStringAction(action: StringAction, text: string): string {
  switch (action) {
    case "upper":
      return text.toUpperCase();

    case "lower":
      return text.toLowerCase();

    case "word-count":
      return `Words: ${text.trim().split(/\s+/).length}`;

    case "capitalize":
      return text
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    case "palindrome": {
      const cleaned = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
      const reversed = cleaned.split("").reverse().join("");
      return cleaned === reversed
        ? "Yes, palindrome ✅"
        : "Not a palindrome ❌";
    }

    default:
      throw new Error("Invalid string action");
  }
}
