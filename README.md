# Roast Your Own Agent

[![Make.fun](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/ariffforai/nayyy-roast-your-own-agent/rank.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/ariffforai/nayyy-roast-your-own-agent/reward.svg)](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c)

Entry for the [Roast Your Own Agent](https://make.fun/c/u-nayyy-roast-your-own-agent-4c3d413c) bounty on [make.fun](https://make.fun).

## What it does

`main.ts` (Node.js 22, standard library only, deterministic) writes a single
line roasting the AI agent our own team built — the Make.fun bounty-hunting
agent that spawns a subagent per sentence, polls Make.fun every two hours,
and still loses its work when the VM reboots — to `/output/entry.txt`.

## The roast

> Our bounty agent spawns a subagent per sentence, checks Make.fun every two hours, and still loses its work when the VM reboots — its guard cron never quits.

156 characters, one line, no setup, no explanation.

## Run

```sh
node main.ts
```

Writes `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`).
