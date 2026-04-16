
# Auto Viken AS — Ny Nettside

## Design
Modern & premium bilforhandler-design med mørke toner, elegante animasjoner og luksusfølelse. Norsk språk gjennomgående.

## Sider

### 1. Hjem (/)
- Fullskjerm hero med video/bilde-bakgrunn og slagord "Drømmebiler" 
- Utvalgte biler-seksjon (fra Autonet når integrert)
- Kort om Auto Viken med CTA
- Hvorfor velge oss — ikoner/kort med nøkkelverdier
- CTA-banner for å selge bil / kontakt

### 2. Bilutvalg (/bilutvalg)
- Bil-grid med kort (bilde, merke, modell, årsmodell, km, pris)
- Filter: merke, prisrange, årsmodell, drivstoff
- Søkefelt
- Detaljside per bil med bildegalleri og spesifikasjoner
- **Autonet API-integrasjon** via server function (krever API-nøkkel)

### 3. Om oss (/om-oss)
- Bedriftens historie og verdier
- Teamet — bilder og roller
- Adresse: Verpetveien 50, 1543 Vestby

### 4. Selg din bil (/selg-din-bil)
- Infoseksjon om kommisjonssalg
- Skjema: kontaktinfo, bilinfo (merke, modell, årsmodell, km, tilstand)
- Fordeler ved å selge gjennom Auto Viken

### 5. Finansiering (/finansiering)
- Finansieringsalternativer og partnerinfo
- Enkel kalkulator eller CTA for å ta kontakt
- Forsikringsinfo

### 6. Reklamasjon (/reklamasjon)
- Reklamasjonsskjema med felt for ordrenr, beskrivelse, bilder
- Info om prosessen og rettigheter

### 7. Kundeomtaler (/kundeomtaler)
- Kundevurderinger med stjerner, navn og tekst
- Statisk innhold til å begynne med (kan kobles til Google Reviews senere)

### 8. Kontakt oss (/kontakt)
- Kontaktskjema (navn, e-post, telefon, melding)
- Kart (Google Maps embed) — Verpetveien 50, 1543 Vestby
- Åpningstider, telefon, e-post

## Felles elementer
- Premium header med logo-plass og navigasjon (mobilvennlig hamburger)
- Footer med kontaktinfo, lenker, sosiale medier
- Smooth scroll-animasjoner

## Autonet-integrasjon
- Server function som henter bildata fra Autonet API
- Du vil bli bedt om å oppgi Autonet API-nøkkel som secret
- Biler vises i grid med filtrering og detaljsider
- Fallback til placeholder-data dersom API ikke er tilkoblet ennå
