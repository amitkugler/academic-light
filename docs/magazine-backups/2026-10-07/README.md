# Magazine content backup - 2026-10-07

This is the complete Hebrew and English magazine data before the expansion.
Source commit: 182ae76.

To restore all articles, copy this blogPosts.ts over src/data/blogPosts.ts on development.
PowerShell (from repository root):

```powershell
Copy-Item -LiteralPath docs/magazine-backups/2026-10-07/blogPosts.ts -Destination src/data/blogPosts.ts
```

To restore one article, copy its complete object, identified by id or slug, from the backup into src/data/blogPosts.ts. Preview before committing. Restoration overwrites subsequent article edits; retain another copy first if needed.
