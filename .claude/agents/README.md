# Project subagents

Drop project-scoped subagent definitions here, one Markdown file per agent:

```
.claude/agents/<agent-name>.md
```

Each file needs YAML frontmatter (`name`, `description`, optionally `tools`
and `model`) followed by the agent's system prompt in Markdown. These agents
are only available in this project (as opposed to `~/.claude/agents/`, which
are available everywhere).
