# Porteføljeaflevering 6
Dette repository indeholder vores source code for afleveringen af Porteføljeaflevering 6 fra Team Supernova. (Mathilde, Sylvester, Johanne, Rosaline og Noah)
Vi har lavet en simpel hjemmeside, med et et dashboard hvor man kan klikke rundt og se statistik.

** Siden har ikke responsive design :)**

## 📁 Live Action Demo
Gå til http://13.48.19.175/ (EC2 instans hos AWS)

## 📁 Overordnet struktur
```
│
├─ app.js # Express server via node. Bruges til API endpoints som henter data fra Sql
│
└─ Public # Middelware mappe til offentlige filer
    │
    ├─ dashboard # Mappen til vores dashboard
    │   ├─ chart # Vores kode, ovenpå chart.js
    │   └─ leaflet # geoJSON af danmark, leaflet.js og kort.js (eget)
    ├─ imgs # Alle billeder til hjemmesiden
    ├─ styles # Alle styles til vores hjemmeside
    │   └─ fonts # Alle fonts til vores hjemmeisde.
    └─ javascript # Alle javascripts til vores hjemmeside.
```


### 📄 `app.js`
Hovedfilen for vores Node.js express server. Vi henter data fra en MySQL server, som via vores app.js laves om til endpoints.
Vi bruger express.static og path som middelware, for at kunne tilgå index.html