/* Open the Waters machine immediately with the embedded public story. */
(function () {
  const open = () => {
    if (!window.watersMachine || !window.WATERS_DATA) return;
    window.watersMachine.open({ data: window.WATERS_DATA });
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", open);
  } else {
    open();
  }
})();
