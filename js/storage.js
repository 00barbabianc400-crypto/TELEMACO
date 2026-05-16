(function () {
  var STORAGE_KEY = "giocoQR_state_v1";

  function uuid() {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0;
      var v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function save(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function initIfNeeded() {
    var st = load();
    if (
      st &&
      typeof st.participantId === "string" &&
      typeof st.currentStep === "number"
    ) {
      return st;
    }
    st = { participantId: uuid(), currentStep: 0 };
    save(st);
    return st;
  }

  function reset() {
    localStorage.removeItem(STORAGE_KEY);
  }

  window.GiocoStorage = {
    load: load,
    save: save,
    initIfNeeded: initIfNeeded,
    reset: reset,
  };
})();
