---
slug: markdown-reader-in-visual-studio-code
title: Markdown Reader in Visual Studio Code
authors: [jtjarks]
date: 2023-01-15T18:00
tags: [Visual Studio Code, Markdown, MarkdownLint, Neovim]
---
**Visual Studio Code besitzt einen built-in Markdown Reader, aufrufbar
über die Command Palette**

[Visual Studio Code](https://code.visualstudio.com/) hat seit seinem ersten
Release in 2015 eine unglaublich große Nutzerbasis akquiriert - sowohl bei
allen Arten von Softwareentwicklern als auch SysAdmins und NetAdmins.  
Gleichzeitig halfen DevOps Plattformen wie Github oder auch Static site
generators, z.B. Hugo oder Jekyll, beim Durchbruch von
[Markdown](https://daringfireball.net/projects/markdown/) zur de-facto
Standardsyntax für Dokumentation aller Art.  
Daher bietet Visual Studio Code auch bereits im Default ohne Extensions
aus dem Marketplace nützlich Features zum Schreiben in Markdown.

Visual Studio Code besitzt einen built-in Markdown Reader, der aufrufbar
ist über die Command Palette oder über die Tastenkürzel `CTRL+Shift+V`
bzw. `Ctrl+K V`.
`CTRL+Shift+V` öffnet ein neues Tab innerhalb von Visual Studio Code, während
`Ctrl+K V` hingegen eine Side-by-side Anzeige öffnet.

![Side by Side View in VS Code](/img/2022-15-01-markdown-reader-in-vs-code/side-by-side-view.png)

Da ich selber [neovim](https://neovim.io/) Nutzer bin, kann ich mir den Hinweis
nicht ersparen, dass eine ähnliche Funktionalität in Neovim mit dem Plugin
[markdown-preview.nvim](https://github.com/iamcco/markdown-preview.nvim)
nachgerüstet werden kann.

Desweiteren kann ich für Visual Studio Code Nutzer auch das Plugin
[markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
empfehlen, welche auf das gleichnamige
[Open-Source Tool](https://github.com/DavidAnson/markdownlint) basiert.
Markdownlint ist ein `Style Checker`, der den geschrieben Markdown Text anhand
fester Regel überprüft und so beim Schreiben von syntaktisch sauberen
Markdown unterstützt. Zu dem Thema Markdownlint wird sicherlich in Zukunft
noch ein eigener Post erscheinen.

## Tastenkürzel

| Action | Windows/Linux | MacOS |
| --- | --- | --- |
| Side-by-side View | `Ctrl+K V` | `Cmd+K V` |
| View in new Tab | `CTRL+Shift+V` | `Cmd+Shift+V` |

## Weiterführende Links

- [Markdown and Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown)
- [Markdown Specification](https://daringfireball.net/projects/markdown/)
- [CommonMark](https://commonmark.org/)

*Dieser Blog ist mit Markdown verfasst; genutzt wird das built-in Blog
Plugin von [Docusaurus](https://docusaurus.io/)*
