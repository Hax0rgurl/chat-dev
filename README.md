<p align="center">
    <img src="./screenshots/chatdev.svg">
</p>
<h1 align="center">ChatDev IDE: Building Your AI Agent</h1>

<div align="center">

[![author][author-image]][author-url]
[![license][license-image]][license-url]
[![release][release-image]][release-url]
[![last commit][last-commit-image]][last-commit-url]
[![discord][discord-image]][discord-url]
[![chrome-version][chrome-image]][chrome-url]
[![chrome-user][chrome-user-image]][chrome-user-url]

<a href="https://chrome.google.com/webstore/detail/chatdev-visualize-your-ai/dopllopmmfnghbahgbdejnkebfcmomej?utm_source=github"><img src="./screenshots/chrome-logo.png" width="200" alt="Get ChatDev for Chromium"></a>
<a href="https://microsoftedge.microsoft.com/addons/detail/ceoneifbmcdiihmgfjeodiholmbpmibm?utm_source=github"><img src="./screenshots/edge-logo.png" width="160" alt="Get ChatDev for Microsoft Edge"></a>

[Screenshot](#-screenshot) &nbsp;&nbsp;|&nbsp;&nbsp; [GameWindow](#-game-window) &nbsp;&nbsp;|&nbsp;&nbsp; [ChatWindow](#-chat-window) &nbsp;&nbsp;|&nbsp;&nbsp; [PromptIDE](#-prompt-ide) &nbsp;&nbsp;|&nbsp;&nbsp; [Bots](#-bots) &nbsp;&nbsp;|&nbsp;&nbsp; [Installation](#-installation) &nbsp;&nbsp;

[author-image]: https://img.shields.io/badge/author-10cl-blue.svg
[author-url]: https://github.com/10cl
[license-image]: https://img.shields.io/github/license/10cl/chatdev?color=blue
[license-url]: https://github.com/10cl/chatdev/blob/main/LICENSE
[release-image]: https://img.shields.io/github/v/release/10cl/chatdev?color=blue
[release-url]: https://github.com/10cl/chatdev/releases/latest
[last-commit-image]: https://img.shields.io/github/last-commit/10cl/chatdev?label=last%20commit
[last-commit-url]: https://github.com/10cl/chatdev/commits
[discord-image]: https://img.shields.io/discord/977885982579884082?logo=discord
[discord-url]: https://discord.gg/fdjWfgGPjb
[chrome-url]: https://chromewebstore.google.com/detail/chatdev-ide-building-your/dopllopmmfnghbahgbdejnkebfcmomej
[chrome-image]: https://img.shields.io/chrome-web-store/v/dopllopmmfnghbahgbdejnkebfcmomej
[chrome-user-url]: https://chromewebstore.google.com/detail/chatdev-ide-building-your/dopllopmmfnghbahgbdejnkebfcmomej
[chrome-user-image]: https://img.shields.io/chrome-web-store/users/dopllopmmfnghbahgbdejnkebfcmomej

</div>

ChatDev IDE is a comprehensive platform for building AI agents with visual prompt flow design, game-like interfaces, and multi-LLM support. Whether you're creating NPCs for games or powerful agent tools, ChatDev provides the tools to design, test, and deploy your AI agents.

## 🚀 Key Features

### 🎮 Game Mode
- **AI Town Social Simulation**: Interactive environment where you can customize NPCs and location markers
- **Real-time Agent Interaction**: Control characters with arrow keys or mouse, trigger conversations by proximity
- **Customizable NPCs**: Design unique personalities and behaviors for each agent

### 🤖 Agent Development
- **Visual Prompt Flow Designer**: Drag-and-drop interface for creating complex agent workflows
- **JavaScript Support**: Implement advanced prompting techniques with custom scripts
- **Agent Community**: Import agents from the community or share your creations
- **Multi-format Support**: Handle text, documents, URLs, and multimedia inputs

### 💻 PromptIDE
- **Dual-screen Editor**: YAML workflow editor with live preview
- **Syntax Highlighting**: Advanced code completion for agent definitions
- **Real-time Visualization**: See your prompt flow execution in real-time
- **Export/Import**: Share agents as JSON files or deploy to the community

### 🔗 Multi-LLM Support
Support for 10+ language models including:
- **ChatGPT** (GPT-3.5, GPT-4)
- **Claude** (Claude-2, Claude-3)
- **Gemini** (Bard)
- **Local Models** (Ollama, Llama 2)
- **Open Source** (Vicuna, Mistral, Yi, Gemma)
- **Chinese Models** (Qianwen, Baichuan, iFlytek Spark)
- **Microsoft Copilot** (Bing Chat)

## 🏗️ Architecture

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Jotai** for state management
- **React Flow** for visual workflow design
- **Ace Editor** for code editing

### Backend Integration
- **Browser Extension** (Chrome/Edge)
- **WebContainer** runtime environment
- **Multi-provider API support**
- **Local storage** with cloud sync

### AI/ML Features
- **Embedding Support** with transformers.js
- **Vector Search** for knowledge retrieval
- **Time-weighted Memory** for context awareness
- **Document Processing** (PDF, CSV, JSON, URLs)

## 📦 Installation

### Option 1: Web Store (Recommended)
1. **Chrome**: [Install from Chrome Web Store](https://chrome.google.com/webstore/detail/chatdev/dopllopmmfnghbahgbdejnkebfcmomej)
2. **Edge**: [Install from Microsoft Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/chatdev-visualize-your-a/ceoneifbmcdiihmgfjeodiholmbpmibm)

### Option 2: Manual Installation
1. Download `chatdev1.5.0.zip` from [Releases](https://github.com/10cl/chatdev/releases)
2. Extract the files
3. Open Chrome/Edge extensions page (`chrome://extensions` or `edge://extensions`)
4. Enable developer mode
5. Drag and drop the extracted folder

### Option 3: Build from Source
```bash
# Clone the repository
git clone https://github.com/10cl/chatdev.git
cd chatdev

# Install dependencies
npm install

# Build the extension
npm run build

# Load the dist folder in your browser
```

## 🎯 Quick Start

1. **Install the Extension**: Follow installation instructions above
2. **Choose Your Mode**: 
   - **Game Mode**: Explore the AI town and interact with NPCs
   - **Chat Mode**: Direct conversation with AI models
   - **Agent Mode**: Design custom workflows with PromptIDE

3. **Create Your First Agent**:
   - Click "New Agent" in the flow menu
   - Define your agent's purpose and behavior
   - Use the visual editor to create prompt flows
   - Test with different LLM providers

4. **Explore the Community**: Browse and import agents created by other users

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Chrome/Edge browser

### Development Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

### Project Structure
```
src/
├── app/                 # Main application code
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── bots/           # LLM integrations
│   └── utils/          # Utility functions
├── services/           # Business logic services
├── embedding/          # AI/ML embedding features
├── document-loader/    # Document processing
└── types/             # TypeScript definitions
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Use conventional commit messages
- Ensure code passes linting and formatting

### Reporting Issues
- Use the [GitHub Issues](https://github.com/10cl/chatdev/issues) page
- Provide detailed reproduction steps
- Include browser and extension version information

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## 🌟 Acknowledgments

- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
- UI components from [Headless UI](https://headlessui.dev/)
- Icons from [Heroicons](https://heroicons.com/)
- AI integrations powered by various LLM providers

## 📞 Support

- 💬 [Discord Community](https://discord.gg/fdjWfgGPjb)
- 📧 [Email Support](mailto:notice@toscl.com)
- 🐛 [GitHub Issues](https://github.com/10cl/chatdev/issues)
- 📖 [Documentation](https://chatdev.toscl.com/docs)

---

<p align="center">
  Made with ❤️ by the ChatDev team
</p>