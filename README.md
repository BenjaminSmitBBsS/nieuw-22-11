# nieuw-22-11

Demo multi-deploy: één Git origin (deze repo), automatisch live op **Cloudflare** en **Vercel**.

## Deploy koppelen
1. **Cloudflare**: Dashboard → Workers & Pages → Create → Pages → Connect to Git → kies deze repo. Output-map: `.` (statische site).
2. **Vercel**: Add New → Project → Import Git Repository → kies deze repo.

Elke push naar `main` deployt daarna automatisch op beide platformen.

## Bewerken
- **Cursor / Cline AI**: clone lokaal (`git clone https://github.com/BenjaminSmitBBsS/nieuw-22-11.git`), commit en push vanuit de editor.
- **Devin AI**: koppel deze repo, Devin levert PR's.
- **Servercode**: via `wrangler deploy` (Cloudflare) of de Vercel-dashboard-editor; zet wijzigingen altijd terug naar deze repo.
