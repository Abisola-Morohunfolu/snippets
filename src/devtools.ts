chrome.devtools.panels.create(
    "Snippets",
    "icon48.png", // optional icon
    "index.html",
    (panel) => {
        console.log("DevTools panel created", panel);
    }
);
