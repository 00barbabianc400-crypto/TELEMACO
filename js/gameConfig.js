/**
 * Configurazione caccia al tesoro — STEPS.length deve coincidere con
 * la lunghezza di revealPhrase (un carattere svelato per passaggio QR).
 *
 * Immagini: per le tappe fotografiche carica i file JPG nella cartella
 * `media/` con i nomi indicati nei testi (vedi clueHtml delle tappe 3–4, 7–8, 11–12).
 *
 * Sito pubblico (GitHub Pages): usato dalla pagina test-qrcodes per generare gli URL dentro i QR.
 * Esempio: https://NOME_UTENTE.github.io/NOME_REPO  (senza slash finale).
 */
window.GAME_CONFIG = {
  titoloMarca: "La Nave di Telemaco",
  titoloEvento: "Festa di fine anno",
  siteUrl: "https://00barbabianc400-crypto.github.io/TELEMACO",
  revealPhrase: "TELEMACO2026",
  introHtml:
    "<p><strong>Marinai, il momento è arrivato!</strong></p>" +
    "<p>Come Telemaco partì per mare alla ricerca del padre, oggi anche voi salperete — non su acque salate, ma tra i corridoi, i giardini e i segreti della vostra scuola.</p>" +
    "<p>Dodici sigilli sono stati nascosti. Ognuno custodisce una lettera e un indizio per trovare il prossimo. Chi li troverà tutti scoprirà la parola del tesoro — e il tesoro stesso!</p>" +
    "<p>Ricordate: il mare non perdona chi salta le tappe. Seguite la rotta nell'ordine giusto, fate squadra, e tenete gli occhi aperti.</p>",
  tesoroHtml:
    "<p><strong>Il viaggio è compiuto!</strong> Avete ricomposto il messaggio della nave <strong>TELEMACO2026</strong>.</p>" +
    "<p>Ora tornate all'equipaggio della festa: merito a voi e a Telemaco, che insegnò che anche i piccoli marinai trovano la rotta quando non mollano mai.</p>" +
    "<p><em>Buona festa di fine anno, dalla Nave di Telemaco. 20 giugno 2026.</em></p>",
  steps: [
    {
      token: "94ea4e5af61fdfbd47ae811ae86c97bde756cc7fd08a",
      clueHtml:
        "<p><strong>Indizio 1</strong></p>" +
        "<p>Non ho voce ma ogni mattina dico &ldquo;benvenuto&rdquo;, non ho gambe ma mi muovo quando qualcuno è atteso. Sono fatto del materiale dei guerrieri, e scorro da un lato come il tempo — mai indietro.</p>",
    },
    {
      token: "90110f13ed61f1be6e3a06b538394085e90eaf28c2ff",
      clueHtml:
        "<p><strong>Indizio 2</strong></p>" +
        "<p>Ho pareti ma non sono una prigione, ho un tetto ma non riparo dalla pioggia, ho una porta ma nessuno ci dorme dentro. Sono il regno dei piccoli esploratori, colorata e silenziosa tra l'erba.</p>",
    },
    {
      token: "e91dc83cf9a834647fe6600df9a557949dd3eb2ef2ed",
      clueHtml:
        "<p><strong>Indizio 3</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-03.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
    {
      token: "bf14b942483250dd6cca4238ce6d98b3de31248f8472",
      clueHtml:
        "<p><strong>Indizio 4</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-04.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
    {
      token: "a3ee94bc6a8afa05ba66963d3f36eaaa087002fc82e7",
      clueHtml:
        "<p><strong>Indizio 5</strong></p>" +
        "<p>Ogni giorno mi passano davanti con la fame ma nessuno mi guarda davvero. Sto sotto a chi serve, sopra al pavimento, nel posto più frequentato dai genitori della scuola ma nel punto che tutti ignorano. Abbassati. Guarda dove non guardi mai.</p>",
    },
    {
      token: "5e1e51fdfdcdce793f3e96b96020b240e30de2e92ca3",
      clueHtml:
        "<p><strong>Indizio 6</strong></p>" +
        "<p>Sono più vecchio della scuola stessa. Conosco l'acqua, il buio e il silenzio. I bambini mi girano attorno senza capire quanto sono profondo. Telemaco avrebbe detto che somiglio al mare: si vede la superficie, ma il mistero è sotto.</p>",
    },
    {
      token: "32bacf6d2753989f2553731eadba0c5a9ccd43b3395a",
      clueHtml:
        "<p><strong>Indizio 7</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-07.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
    {
      token: "b3d39dd0f1102a91b09500459eb185b2fab0ee031cdc",
      clueHtml:
        "<p><strong>Indizio 8</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-08.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
    {
      token: "58a8abdff572b7ea19f8e5a011ceae7e16819d371c81",
      clueHtml:
        "<p><strong>Indizio 9</strong></p>" +
        "<p>Non è appeso a un muro. Non è sul telefono. Segna ogni secondo di questa avventura ed è sempre con voi — anzi, è sempre con lui. Chi vi ha dato il primo QR code porta al polso la vostra prossima lettera. Avete il coraggio di chiedergli di mostrarvela?</p>",
    },
    {
      token: "ab3e78a247eaa0df1e7bbe3e63c9a757e3f4cb334124",
      clueHtml:
        "<p><strong>Indizio 10</strong></p>" +
        "<p>Nella nostra scuola ogni classe ha un nome che non trovate sui libri di testo. Cercate quella che porta il nome di ciò che scalda, illumina e non tramonta mai davvero.</p>",
    },
    {
      token: "e681d2bb54825e289a880ca32b8739ddaa3a39d1ece2",
      clueHtml:
        "<p><strong>Indizio 11</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-11.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
    {
      token: "770f4096b6a9ea2d2441b53df98447ec3b64da1b0edb",
      clueHtml:
        "<p><strong>Indizio 12</strong></p>" +
        "<figure class=\"clue-photo\"><img src=\"media/tappa-12.jpg\" alt=\"Indizio fotografico\" loading=\"lazy\" decoding=\"async\" /></figure>",
    },
  ],
};
