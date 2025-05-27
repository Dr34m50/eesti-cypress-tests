**# Eesti.ee Cypress UI Testid

See projekt sisaldab automatiseeritud UI teste Eesti riigiportaali [eesti.ee](https://www.eesti.ee) jaoks, kasutades tööriista [Cypress](https://www.cypress.io/).

## 📦 Projekti ülesehitus

- `01-homepage.cy.js` – testid avalehe laadimise ja otsinguvälja kohta
- `02-navigation.cy.js` – testid põhinavigatsiooni jaoks
- `03-contact.cy.js` – testid kontaktivormi olemasolu ja funktsionaalsuse kohta
- `04-popular-services.cy.js` – testid populaarsete teenuste sektsiooni kohta

## 🚀 Kuidas käivitada testid

1. Lae alla või klooni see repositoorium:
   ```bash
   git clone https://github.com/SINU_GITHUB/eesti-cypress-tests.git
   cd eesti-cypress-tests
   ```

2. Paigalda sõltuvused:
   ```bash
   npm install
   ```

3. Ava Cypress Test Runner:
   ```bash
   npx cypress open
   ```

4. Vali soovitud testifail ja käivita see Cypressi aknas.

## ✅ Kaetud stsenaariumid

- Avalehe korrektne laadimine ja otsinguväli
- Menüüpõhine navigeerimine (Kodanikule, Ettevõtjale, Ametnikule)
- Kontaktivormi väljade olemasolu ja kehtetu e-posti kontroll
- Populaarsed teenused – nähtavus ja navigeerimine
- (soovi korral) Otsing: "Eesti hümn", tühi päring, veateade

## 📝 Märkmed

- Testide baas-URL on määratud `cypress.config.js` failis (`https://www.eesti.ee`)
- Testid on kirjutatud kasutades `Cypress 14.4.0`

## 📄 Autor

Kristofer Beljakov**
