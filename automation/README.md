# automation.bbss.pro — site

Statische, self-contained website (geen build-stap, geen externe dependencies) over
automatisering met AI die klanten en medewerkers leert en ondersteunt.

## Bestanden
- `index.html` — pagina (Nederlands)
- `styles.css` — styling
- `script.js` — mobiel menu, header-schaduw, jaartal in footer

## Lokaal bekijken
Open `index.html` in een browser, of serveer de map lokaal, bijv.:
`python3 -m http.server 8080` in deze map, dan http://localhost:8080

## Live zetten op automation.bbss.pro (zelf uitvoeren)
1. Cloudflare-dashboard → Workers & Pages → Create application → Pages → Connect to Git → kies deze repo, output-map: `automation/`.
2. Voeg daarna de custom domain `automation.bbss.pro` toe aan dat Pages-project.

Alternatief: kopieer de inhoud van deze map naar een eigen (nieuw) project.

## Aan te passen
- Contactadres in de CTA staat nu op `info@bbss.pro` (`index.html`, sectie `#contact`).
