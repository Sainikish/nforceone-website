# Project slash commands

Drop project-scoped slash commands here, one Markdown file per command:

```
.claude/commands/<command-name>.md
```

The file body is the prompt that runs when a user types `/<command-name>`.
Supports `$ARGUMENTS` for user-supplied input and YAML frontmatter for
`description`/`allowed-tools`. These commands are only available in this
project (as opposed to `~/.claude/commands/`, which are available everywhere).
