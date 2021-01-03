console.log("Hello World!");

chrome.tabs.onUpdated.addListener((id, info, tab) => {
    if (tab.url.startsWith("https://moodle.technion.ac.il")) {
        chrome.tabs.executeScript(id, { file: "./moodle_home.js" });
    }
    if (tab.url.startsWith("https://techwww.technion.ac.il/tech_ident/")) {
        chrome.tabs.executeScript(id, { file: "./tech_ident.js" });
    }
    if (tab.url.startsWith("https://login.microsoftonline.com/") && tab.url.includes("&redirect_uri=https%3A%2F%2Fmoodle.technion.ac.il%2Fauth%2Foidc%2F")) {
        chrome.tabs.executeScript(id, { file: "./ms_login.js" });
    }
});
