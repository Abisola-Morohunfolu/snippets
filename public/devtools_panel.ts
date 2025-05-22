chrome.devtools.panels.create(
  "Snippets", // Title of the panel
  "", // Icon path (optional, leave empty for now)
  "public/devtools.html", // HTML page to load in the panel
  (panel) => {
    // Optional callback function
    console.log("Snippets panel created", panel);
  }
);
