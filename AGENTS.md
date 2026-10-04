# Development workflow

- Make website changes on the development branch. main is reserved for production.
- Before editing, check the current branch and working-tree status. If on main, switch to development before making changes. Preserve existing uncommitted work; never reset or discard it.
- Keep local preview and build verification on the development branch.
- When the user requests a push, commit and push to the current development branch, never to main.
- Do not merge into main or push to main unless the user explicitly requests that production action. The user normally reviews and merges development into main through a GitHub pull request.
- Do not change hosting deployment settings or branch protection unless explicitly requested.
- Maintain both Hebrew and English content when updating website copy.
