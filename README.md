# Dive AI Agent 🤿 🤖

![GitHub stars](https://img.shields.io/github/stars/OpenAgentPlatform/Dive?style=social)
![GitHub forks](https://img.shields.io/github/forks/OpenAgentPlatform/Dive?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/OpenAgentPlatform/Dive?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/OpenAgentPlatform/Dive)
![GitHub language count](https://img.shields.io/github/languages/count/OpenAgentPlatform/Dive)
![GitHub top language](https://img.shields.io/github/languages/top/OpenAgentPlatform/Dive)
![GitHub last commit](https://img.shields.io/github/last-commit/OpenAgentPlatform/Dive?color=red)
![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FOpenAgentPlatform%2FDive&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)
[![Discord](https://img.shields.io/badge/Discord-Dive-blue?logo=discord&logoColor=white)](https://discord.gg/jact84GwGh)
[![Twitter Follow](https://img.shields.io/twitter/follow/Dive_ai_agent?style=social)](https://twitter.com/Dive_ai_agent)


Dive is an open-source AI Agent desktop application that seamlessly integrates any Tools Call-supported LLM with frontend MCP Server—part of the Open Agent Platform initiative. ✨

![Dive Demo](./docs/DiveAI.gif)


## Features 🎯

- 🌐 **Universal LLM Support**: Compatible with ChatGPT, Anthropic, Ollama and OpenAI-compatible models
- 💻 **Cross-Platform**: Available for Windows, MacOS, and Linux
- 🔄 **Model Context Protocol**: Enabling seamless AI agent integration
- 🔌 **MCP Server Integration**: External data access and processing capabilities
- 🌍 **Multi-Language Support**: Traditional Chinese, English, with more coming soon
- ⚙️ **Advanced API Management**: Multiple API keys and model switching support
- 💡 **Custom Instructions**: Personalized system prompts for tailored AI behavior
- 💬 **Intuitive Chat Interface**: Real-time context management and user-friendly design

- 🚀 **Upcoming Features**: Prompt Schedule and OpenAgentPlatform MarketPlace

## Download and Install ⬇️

Get the latest version of Dive:
[![Download](https://img.shields.io/badge/Download-Latest%20Release-blue.svg)](https://github.com/OpenAgentPlatform/Dive/releases/latest)

For Windows users: 🪟
- Download the .exe version
- Python and Node.js environments are pre-installed

For MacOS users: 🍎
- Download the .dmg version
- You need to install Python and Node.js (with npx uvx) environments yourself
- Follow the installation prompts to complete setup

For Linux users: 🐧
- Download the .AppImage version
- You need to install Python and Node.js (with npx uvx) environments yourself
- For Ubuntu/Debian users:
  - You may need to add `--no-sandbox` parameter
  - Or modify system settings to allow sandbox
  - Run `chmod +x` to make the AppImage executable

## MCP Tips

While the system comes with a default echo MCP Server, your LLM can access more powerful tools through MCP. Here's how to get started with two beginner-friendly tools: Fetch and Youtube-dl.

![Set MCP](./docs/MCP_Screenshot.png)


### Quick Setup

Add this JSON configuration to your Dive MCP settings to enable both tools:

```json
 "mcpServers":{
    "fetch": {
      "command": "uvx",
      "args": [
        "mcp-server-fetch",
        "--ignore-robots-txt"
      ],
      "enabled": true
    },
    "youtubedl": {
      "command": "npx",
      "args": [
        "@kevinwatt/yt-dlp-mcp"
      ],
      "enabled": true
    }
  }
```

### Additional Setup for yt-dlp-mcp

yt-dlp-mcp requires the yt-dlp package. Install it based on your operating system:

#### Windows
```bash
winget install yt-dlp
```

#### MacOS
```bash
brew install yt-dlp
```

#### Linux
```bash
pip install yt-dlp
```

## Build 🛠️

See [BUILD.md](BUILD.md) for more details.

## Connect With Us 🌐
- 💬 Join our [Discord](https://discord.gg/jact84GwGh)
- 🐦 Follow us on [Twitter/X](https://x.com/Dive_ai_agent)
- ⭐ Star us on GitHub
- 🐛 Report issues on our [Issue Tracker](https://github.com/OpenAgentPlatform/Dive/issues)


