// content.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === "clicked_browser_action") {
    var firstHref = "https://www.thisiswhyimbroke.com/random/";
    chrome.runtime.sendMessage({ message: "open_new_tab", url: firstHref });
  }
});
