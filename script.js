//your JS code here. If required.
const browser = document.getElementById("browser-info");

let browserName = window.navigator.appName;
let browserVersion = window.navigator.appVersion;

let details = "You are using " + browserName + " version " + browserVersion;


browser.innerHTML = details;