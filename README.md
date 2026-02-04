# 🛠️ Command Line Utility

A powerful Command Line Interface (CLI) tool built with **Node.js** and **TypeScript** that brings essential utilities right to your terminal.

## 📖 Overview

This CLI utility is designed for both beginners and power users, offering:

- **String manipulation** - Transform text with various operations
- **File compression & decompression** - Compress files using zlib
- **API integration** - Fetch live data from Weather, News, and Jokes APIs
- **Interactive menu** - User-friendly navigation for beginners
- **Direct commands** - Fast execution for power users (like `git`, `npm`)

This project demonstrates real-world Node.js fundamentals, CLI tool development, and production-ready project architecture.

---

## 🚀 Features

### ✅ String Manipulation
- Convert text to **upper/lower** case
- **Capitalize** words
- **Count words** in text
- Check if text is a **palindrome**

### ✅ File Operations
- **Compress** files using `zlib` (gzip format)
- **Decompress** `.gz` files
- Display compression statistics

### ✅ API Integration
- 🌤️ **Weather** - Real-time weather data for any city
- 📰 **News** - Latest news by topic
- 😂 **Jokes** - Random programming jokes

### ✅ User Experience
- Interactive menu with arrow key navigation
- Command-based usage for automation
- Input validation and error handling
- Environment variable support via `.env`
- Clear success/error messages

---

## 📦 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime environment |
| **TypeScript** | Type-safe development |
| **Commander.js** | CLI command parsing |
| **Inquirer.js** | Interactive prompts |
| **Axios** | HTTP requests for APIs |
| **Zlib** | Built-in file compression |
| **Dotenv** | Environment configuration |

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd command-line-utility
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

```env
WEATHER_API_KEY=your_weather_api_key
NEWS_API_KEY=your_news_api_key
```

**Getting API Keys:**
- **Weather API**: Sign up at [OpenWeatherMap](https://openweathermap.org/api)
- **News API**: Sign up at [NewsAPI](https://newsapi.org/)

### 4. Verify Installation

```bash
npm run dev
```

You should see the interactive menu.

---

## 🧪 Development Usage

### ▶ Run in Development Mode

```bash
npm run dev
```

This starts the interactive menu for easy navigation.

---

## 📚 Command Reference

### 🧵 String Manipulation

**Syntax:**
```bash
npm run dev -- string <action> "<text>"
```

**Available Actions:**

| Action | Description | Example |
|--------|-------------|---------|
| `lower` | Convert to lowercase | `npm run dev -- string lower "HELLO WORLD"` |
| `upper` | Convert to uppercase | `npm run dev -- string upper "hello world"` |
| `capitalize` | Capitalize each word | `npm run dev -- string capitalize "hello world"` |
| `word-count` | Count words | `npm run dev -- string word-count "hello world from node"` |
| `palindrome` | Check if palindrome | `npm run dev -- string palindrome "madam"` |

**Examples:**

```bash
# Convert to lowercase
npm run dev -- string lower "TESTDATA"
# Output: testdata

# Convert to uppercase
npm run dev -- string upper "testdata"
# Output: TESTDATA

# Capitalize words
npm run dev -- string capitalize "hello world"
# Output: Hello World

# Count words
npm run dev -- string word-count "hello world from node"
# Output: Word count: 4

# Check palindrome
npm run dev -- string palindrome "madam"
# Output: ✓ Yes, it's a palindrome!
```

---

### 📁 File Compression & Decompression

#### Compress a File

**Syntax:**
```bash
npm run dev -- compress <file-path>
```

**Example:**
```bash
npm run dev -- compress bin/index.ts
```

**Output:**
- Creates: `index.ts.gz`
- Shows compression ratio and file sizes

#### Decompress a File

**Syntax:**
```bash
npm run dev -- decompress <file.gz>
```

**Example:**
```bash
npm run dev -- decompress bin/index.ts.gz
```

**Output:**
- Extracts: `index.ts`
- Shows decompression success message

---

### 🌐 API Data Fetching

#### 🌤️ Weather API

**Syntax:**
```bash
npm run dev -- api weather <city>
```

**Example:**
```bash
npm run dev -- api weather surat
npm run dev -- api weather london
npm run dev -- api weather "new york"
```

#### 😂 Jokes API

**Syntax:**
```bash
npm run dev -- api jokes
```

**Example:**
```bash
npm run dev -- api jokes
```


#### 📰 News API

**Syntax:**
```bash
npm run dev -- api news <topic>
```

**Example:**
```bash
npm run dev -- api news sports
npm run dev -- api news technology
npm run dev -- api news business
```

---

## 🧭 Interactive Menu (Beginner Friendly)

For users who prefer a guided experience:

**Start Interactive Mode:**
```bash
npm run dev
```

**Menu Options:**

```
? What do you want to do?
❯ String manipulation
  Compress file
  Decompress file
  Fetch API
  Exit
```

**Navigation:**
- Use **↑ ↓** arrow keys to navigate
- Press **Enter** to select
- Follow the prompts for each feature

**Example Flow:**

1. Select `String manipulation`
2. Choose action (e.g., `upper`)
3. Enter your text
4. View the result
5. Return to main menu or exit

---

## 🏗️ Production Usage

### Build the Project

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder.

### Link as Global Command

```bash
npm link
```

Now you can use `cmd-utils` from anywhere in your terminal!

### Production Commands

Once linked, use without `npm run dev`:

**String Operations:**
```bash
cmd-utils string lower "TESTDATA"
cmd-utils string upper "hello"
cmd-utils string capitalize "node js"
```

**File Operations:**
```bash
cmd-utils compress bin/index.js
cmd-utils decompress bin/index.js.gz
```

**API Calls:**
```bash
cmd-utils api weather surat
cmd-utils api jokes
cmd-utils api news sports
```

**Interactive Menu:**
```bash
cmd-utils
```

---

## 🧠 Learning Outcomes

By building and exploring this project, you'll learn:

- ✅ **CLI Development** - Building professional command-line tools
- ✅ **TypeScript** - Type-safe Node.js development
- ✅ **Commander.js** - Parsing command-line arguments
- ✅ **Inquirer.js** - Creating interactive prompts
- ✅ **API Integration** - Working with REST APIs and environment variables
- ✅ **File System Operations** - Reading, writing, and compressing files
- ✅ **Error Handling** - Proper validation and error messages
- ✅ **Project Architecture** - Modular and scalable code organization
- ✅ **npm Scripts** - Development and production workflows

---

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Run in development mode with ts-node |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm start` | Run compiled production build |
| `npm run clean` | Remove dist folder |
| `npm link` | Install as global command |

---

## 📌 Future Improvements

Here are some planned enhancements:

- [ ] **Colorful Output** - Add `chalk` for better visual feedback
- [ ] **Loading Spinners** - Use `ora` for async operations
- [ ] **Better API Formatting** - Tables and formatted responses
- [ ] **Command Auto-completion** - Shell completion support
- [ ] **Config File** - User preferences and defaults
- [ ] **More String Operations** - Slugify, base64, etc.
- [ ] **Batch File Operations** - Compress multiple files
- [ ] **Unit Tests** - Jest testing suite
- [ ] **Publish to npm** - Make it installable globally
- [ ] **Documentation Site** - GitHub Pages documentation

---

## 🐛 Troubleshooting

### Issue: API requests failing
**Solution:** Check your `.env` file has valid API keys

### Issue: Commands not recognized
**Solution:** Run `npm link` after building

### Issue: TypeScript errors
**Solution:** Run `npm install` to ensure all types are installed

### Issue: Permission denied
**Solution:** Use `chmod +x dist/index.js` on Unix systems

---

## 🙌 Author

**Mehfuz Shaikh**

Built as a Node.js learning project to demonstrate real-world CLI development 🚀

---

## 🌟 Show Your Support

If you found this project helpful:
- ⭐ Star the repository
- 🍴 Fork it for your own experiments
- 📢 Share it with others learning Node.js

---

**Happy Coding!** 💻✨