(function () {
  var cfg = window.GAME_CONFIG;
  var st = window.GiocoStorage.initIfNeeded();

  document.getElementById("titolo-marca").textContent = cfg.titoloMarca || "";
  document.getElementById("titolo-evento").textContent = cfg.titoloEvento || "";
  document.title =
    (cfg.titoloMarca ? cfg.titoloMarca + " · " : "") +
    (cfg.titoloEvento || "Caccia QR");
  document.getElementById("participant").textContent = st.participantId;

  var zoneIntro = document.getElementById("zone-intro");
  var zoneClue = document.getElementById("zone-clue");
  var zoneClueBody = document.getElementById("zone-clue-body");
  var zoneTesoro = document.getElementById("zone-tesoro");

  var progressBar = document.getElementById("progress-bar");
  var progressFill = document.getElementById("progress-fill");
  var progressLabel = document.getElementById("progress-label");
  var progressCount = document.getElementById("progress-count");

  var revealGrid = document.getElementById("reveal-grid");
  var revealCaption = document.getElementById("reveal-caption");

  zoneIntro.innerHTML = cfg.introHtml;

  var phrase = cfg.revealPhrase ? String(cfg.revealPhrase).toUpperCase().trim() : "";
  var n = cfg.steps.length;

  function applyProgress(done) {
    var max = Math.max(n, 1);
    progressBar.setAttribute("aria-valuemax", String(max));
    if (done) {
      progressLabel.textContent = "Percorso";
      progressCount.textContent = "Completato";
      progressBar.setAttribute("aria-valuenow", String(max));
      progressFill.style.width = "100%";
      progressFill.classList.add("is-complete");
      return;
    }
    progressLabel.textContent = "Avanzamento";
    progressCount.textContent = "Passaggio " + (st.currentStep + 1) + " di " + n;
    progressBar.setAttribute("aria-valuenow", String(st.currentStep));
    progressFill.classList.remove("is-complete");
    progressFill.style.width = (100 * st.currentStep) / max + "%";
  }

  function renderReveal() {
    var L = phrase.length;
    revealGrid.innerHTML = "";
    if (L === 0) {
      revealCaption.textContent = "";
      return;
    }

    /* Ogni scansione QR superata incrementa currentStep: quel valore conta i caratteri svelati */
    var revealed = Math.min(st.currentStep, L);

    var i;
    for (i = 0; i < L; i++) {
      var cell = document.createElement("span");
      cell.className = "reveal-cell";
      if (i < revealed) {
        cell.classList.add("is-revealed");
        var chr = phrase.charAt(i);
        cell.textContent = chr === " " ? "\u00a0" : chr;
      } else {
        cell.classList.add("is-hidden");
        cell.setAttribute(
          "title",
          "Si sbloccherà dopo un altro QR (simbolo nascosto)"
        );
        cell.textContent = "·";
      }
      revealGrid.appendChild(cell);
    }

    if (revealed === 0) {
      revealCaption.textContent =
        "Completa gli indizi nell'ordine: ogni QR svelato aggiungerà qui un carattere (" +
        L +
        " in tutto).";
    } else if (revealed < L) {
      revealCaption.textContent =
        "Caratteri svelati " + revealed + " su " + L + ". Continua!";
    } else {
      revealCaption.textContent =
        "Hai ricomposto tutto il messaggio. Complimenti, equipaggio!";
    }
  }

  if (phrase.length > 0 && phrase.length !== n) {
    if (typeof console !== "undefined" && console.warn) {
      console.warn(
        "[GiocoQR] revealPhrase ha lunghezza " +
          phrase.length +
          " ma ci sono " +
          n +
          " passaggi: allinea i numeri in gameConfig.js."
      );
    }
  }

  if (st.currentStep >= n) {
    zoneClue.hidden = true;
    zoneTesoro.hidden = false;
    zoneTesoro.innerHTML = cfg.tesoroHtml;
    applyProgress(true);
  } else {
    zoneTesoro.hidden = true;
    zoneClue.hidden = false;
    zoneClueBody.innerHTML = cfg.steps[st.currentStep].clueHtml;
    applyProgress(false);
  }

  renderReveal();

  var btnReset = document.getElementById("btn-reset");
  if (btnReset) {
    btnReset.addEventListener("click", function () {
      if (
        confirm(
          "Ripristinare il gioco su questo telefono? Perderai i progressi."
        )
      ) {
        window.GiocoStorage.reset();
        location.reload();
      }
    });
  }
})();
