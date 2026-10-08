<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the template's TanStack routing infrastructure; implement all requested business functionality with native React and browser storage only, because the hosting framework is fixed and the experience must remain frontend-only.
- Centralize mock content and storage in one shared React provider so public pages reflect demo administrator changes consistently.
- Use native reusable controls and inline SVG icons, not the preinstalled UI libraries, to respect the no-additional-library requirement.
- Generated preschool photography uses eager Vite asset imports; migrate legacy reference-photo URLs when restoring demo storage so existing browsers receive the new images.
- Prerender all fixed routes and bundle imported photographs into the client output for static hosting without an asset proxy.
