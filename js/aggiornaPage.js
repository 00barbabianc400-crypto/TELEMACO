(function () {
  var params = new URLSearchParams(location.search);
  var tokenRaw = params.get("t") != null ? params.get("t") : params.get("code");
  var token = tokenRaw == null ? "" : tokenRaw.trim();

  var cfg = window.GAME_CONFIG;
  var st = window.GiocoStorage.initIfNeeded();

  var msg = document.getElementById("messaggio");
  var linkHome = document.getElementById("link-home");
  linkHome.href = "index.html";

  var idx = typeof st.currentStep === "number" ? st.currentStep : 0;

  function findStepIndexByToken(t) {
    for (var i = 0; i < cfg.steps.length; i++) {
      if (cfg.steps[i].token === t) return i;
    }
    return -1;
  }

  function show(text, ok) {
    msg.textContent = text;
    msg.className = ok ? "ok" : "err";
  }

  if (!token) {
    show("Token mancante nell'URL. Controlla il QR.", false);
    return;
  }

  if (idx >= cfg.steps.length) {
    show("Hai già completato tutti i passaggi. Torna alla home.", true);
    return;
  }

  var stepIndex = findStepIndexByToken(token);
  if (stepIndex === -1) {
    show("Token non riconosciuto. Usa solo i QR del percorso.", false);
    return;
  }
  if (stepIndex < idx) {
    show("Questo QR è di un passaggio già completato. Torna all'indizio attuale.", false);
    return;
  }
  if (stepIndex > idx) {
    show("Non è ancora il momento di questo QR: completa prima il passaggio corrente.", false);
    return;
  }

  st.currentStep = idx + 1;
  window.GiocoStorage.save(st);
  show("Passaggio registrato. Torno alla pagina principale tra un secondo...", true);
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1200);
})();
