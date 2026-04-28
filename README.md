# Gist Gallery

Gist Gallery is a React + TypeScript app for browsing GitHub gists as a small searchable library. It fetches gists from a GitHub account, shows them as cards, lets you filter them by topic, and opens a detail view for reading the full content of each gist.

## What this app does

- Fetches public gists from the GitHub user configured in `VITE_GITHUB_USERNAME`.
- Displays the gists in a responsive card grid on the home page.
- Lets you search by gist description or file name.
- Groups gists into topic tabs such as `Leetcode`, `MySQL`, `Status Code`, `OOP`, `Linux`, and `Docker`.
- Opens a detail page where the selected gist file is rendered as code or markdown.
- Links back to the original gist on GitHub.

## How the data flows

1. The app calls the GitHub Gist API through `fetchGists()` in `src/services/gistServices.ts`.
2. The home page stores the returned gists in local state.
3. The search bar updates the search query as you type.
4. The category tabs filter the list by the topic detected in the gist description and file names.
5. Clicking a gist opens the detail page, which fetches the full gist data again so the content stays current.

## Category behavior

The category tabs are not separate metadata from GitHub. Instead, the app looks at the gist description and file names and checks them against the curated topic list used in `Home.tsx`.

That means if you create a new gist and include one of those topic words in the description or file name, the gist will show up under that tab automatically.

Example descriptions that match the current categories:

- `self_learning linux`
- `mysql interview notes`
- `leetcode binary search`
- `status code reference`

## Detail page behavior

The gist detail view is designed to keep the page width stable even when a gist contains long lines of code or markdown.

- Code blocks stay inside their own scrollable container.
- Long content does not stretch the whole page horizontally.
- The sidebar and content area stay aligned inside the main layout.

## Project structure

- `src/pages/Home.tsx` - Home page with search, category filtering, and the gist grid.
- `src/pages/GistDetail.tsx` - Full gist view for reading individual files.
- `src/services/gistServices.ts` - API helper for loading gists from GitHub.
- `src/components/CategoryTabs.tsx` - Category filter buttons.
- `src/components/SearchBar.tsx` - Search input.
- `src/components/Card.tsx` - Gist preview cards.
- `src/components/CodeRenderer.tsx` - Syntax-highlighted code rendering.
- `src/components/MarkdownRenderer.tsx` - Markdown rendering with GitHub-flavored markdown support.

## Configuration

Set the GitHub username in your environment:

```bash
VITE_GITHUB_USERNAME=your-github-username
```

If this variable is missing, the app falls back to `github`.

## Development

```bash
pnpm install
pnpm dev
```

For a production build:

```bash
pnpm build
```
