# Eesti.ee Cypress UI Testid

## 📌 Kirjeldus

See projekt sisaldab automatiseeritud UI teste [eesti.ee](https://www.eesti.ee) veebilehe jaoks, kasutades [Cypress](https://www.cypress.io) tööriista. Testide eesmärk on kontrollida veebilehe põhilist funktsionaalsust, nagu otsing, navigeerimine, kontaktivorm ja populaarsed teenused.

Kodutöö on tehtud individuaalselt vastavalt õppeülesandele loengus _E2E testimine_.

---

## ✅ Tehtud testid

1. **`01-homepage.cy.js` – Avalehe otsing**
   - Kontrollib, et otsingukast on nähtav ja sinna saab teksti sisestada
   - Kontrollib, et peale teksti sisestamist kuvatakse tulemused

2. **`02-navigation.cy.js` – Lehe navigeatsioon**
   - Kontrollib, et saab liikuda peamenüü kaudu alalehtedele:
     - Kodanikule
     - Ettevõtjale
     - Ametnikule

3. **`03-contact.cy.js` – Kontaktivorm**
   - Avab "Kirjuta meile" vormi
   - Kontrollib, et vormi sisestusväljad on olemas (nimi, e-post, sõnum)

4. **`04-popular-services.cy.js` – Populaarsed teenused**
   - Kontrollib, et sektsioon "Populaarsemad teenused" on nähtav
   - Kontrollib, et populaarsete teenuste linke on mitu ja nad töötavad

---

## 🚀 Paigaldamine ja käivitamine

1. Paigalda sõltuvused:
   ```bash
   npm install
   ```

2. Käivita Cypress:
   ```bash
   npx cypress open
   ```

3. Vali soovitud testifail Cypressi aknas ja alusta testimist.

---

## 📄 Autor

Kristofer Beljakov
