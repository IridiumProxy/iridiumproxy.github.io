---
title: Installation
---

This page will guide you through the installation process for Iridium.

To check that you have the latest version of Iridium, you can run `iridium --version` in your terminal.

## Docker

One of the easiest ways to get started with Iridium is by using Docker.

## Prebuilt Binaries

You can download prebuilt binaries for various operating systems from the [Iridium Releases](https://github.com/IridiumProxy/iridium/releases) page on GitHub.

### macOS

If you're using macOS, you can run the following command to install Iridium with Homebrew:

```bash
brew install iridiumproxy/iridium/iridium
```

## Build from source

To build Iridium from source, you'll need to have the following prerequisites installed on your machine:
- [Go](https://go.dev/dl/) 1.25+
- [Git](https://git-scm.com/downloads)

Once you have the prerequisites installed, you can clone the Iridium repository and build the project by running the following commands:

```bash
git clone https://github.com/IridiumProxy/iridium.git
cd iridium
go build -o iridium .
```