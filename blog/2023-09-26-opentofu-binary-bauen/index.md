---
slug: opentofu-binary-bauen
title: OpenTofu Binary bauen
authors: [jtjarks]
date: 2023-09-26T18:00
tags: [opentofu, terraform, devops, infrastructure, infrastructure-as-code]
---
**Nach einem Lizenzwechsel bei Terraform entstand mit dem OpenTofu Projekt
ein Fork, damit die bekannte Toolchain weiterhin als Open-Source
weiterentwickelt werden kann**

Aktuell gibt es noch keine offizielen Binaries vom OpenTofu Projekt. Die
Installation ist jedoch grundsaetzlich sehr simpel gehalten, da es sich um
Go Tool handelt. Der Quellcode findet sich auf Github unter
[opentofu/opentofu](https://github.com/opentofu/opentofu).

Zum Bauen der Binaries wird der Go compiler benoetigt. Die notwendige Version
ist im Git-Repository von OpenTofu in der Datei `.go-version` angegeben.
Nach einem Download des Git-Repository kann in dessen Root-Verzeichnis der
folgende Befehl ausgefuehrt werden:

```bash
go install .
```

Dadurch wird das OpenTofu CLI Tool zuerst compiliert und dann Go
executable directory installiert. Mit dem Kommando `go env GOPATH` wird
der Pfad zum Go executable directory ausgegeben.

Empfohlen ist, dass der `GOPATH` in die `PATH` Variable hinzugefuegt wird.
Dadurch kann opentofu mit einem einfachen Aufruf von `opentofu` ausgefuehrt
werden.

```txt
➜ 11:40PM janno opentofu (main) ✔ opentofu
Usage: tofu [global options] <subcommand> [args]

The available commands for execution are listed below.
The primary workflow commands are given first, followed by
less common or more advanced commands.

Main commands:
  init          Prepare your working directory for other commands
  validate      Check whether the configuration is valid
  plan          Show changes required by the current configuration
  apply         Create or update infrastructure
  destroy       Destroy previously-created infrastructure

All other commands:
  console       Try OpenTofu expressions at an interactive command prompt
  fmt           Reformat your configuration in the standard style
  force-unlock  Release a stuck lock on the current workspace
  get           Install or upgrade remote OpenTofu modules
  graph         Generate a Graphviz graph of the steps in an operation
  import        Associate existing infrastructure with a OpenTofu resource
  login         Obtain and save credentials for a remote host
  logout        Remove locally-stored credentials for a remote host
  metadata      Metadata related commands
  output        Show output values from your root module
  providers     Show the providers required for this configuration
  refresh       Update the state to match remote systems
  show          Show the current state or a saved plan
  state         Advanced state management
  taint         Mark a resource instance as not fully functional
  test          Execute integration tests for OpenTofu modules
  untaint       Remove the 'tainted' state from a resource instance
  version       Show the current OpenTofu version
  workspace     Workspace management

Global options (use these before the subcommand, if any):
  -chdir=DIR    Switch to a different working directory before executing the
                given subcommand.
  -help         Show this help output, or the help for a specified subcommand.
  -version      An alias for the "version" subcomm
```
