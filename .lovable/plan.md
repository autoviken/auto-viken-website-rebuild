
Mål: Fjerne det gamle hero-bildet som fortsatt vises på forsiden og sørge for at banneret faktisk oppleves som video.

Det jeg fant:
- Forsiden bruker allerede en `<video>` i hero-seksjonen under “Din neste drømmebil venter”.
- Men videoen har fortsatt `poster="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?..."`
- Det betyr at det gamle bildet fortsatt vises før videoen starter, og i noen tilfeller hvis videoen ikke lastes/avspilles med en gang.

Plan:
1. Oppdatere hero-seksjonen i `src/routes/index.tsx`
   - Fjerne `poster`-bildet helt, eller erstatte det med et nytt bilde som matcher videoen.
   - Beholde video som bakgrunn med `autoPlay`, `muted`, `loop` og `playsInline`.

2. Gjøre video-visningen mer robust
   - Legge til en mørk bakgrunn under videoen slik at heroen ikke “hopper” visuelt mens videoen laster.
   - Sikre at overlayen fortsatt gjør teksten lett å lese.

3. Hindre at gammel versjon henger igjen visuelt
   - Hvis nødvendig, bytte videokilde eller legge til en liten cache-busting-endring i media-URL-en hvis nettleseren viser gammel tilstand.
   - Kontrollere at det ikke finnes andre hero-bakgrunner på forsiden som overlapper.

4. Verifisering etter endring
   - Sjekke at forsiden ikke lenger viser det gamle Unsplash-bildet.
   - Bekrefte at heroen viser video på desktop og mobilvisning, og at fallback fortsatt ser ryddig ut dersom video ikke starter umiddelbart.

Tekniske detaljer:
- Fil: `src/routes/index.tsx`
- Sannsynlig årsak: `poster`-attributtet på videoen peker fortsatt til det gamle bildet.
- Mest sannsynlige løsning: fjerne `poster` eller erstatte den med riktig fallback som ikke viser det gamle motivet.
