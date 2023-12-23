chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "runScript") {
        chrome.scripting.executeScript({
            target: {tabId: message.tabId},
            files: [message.scriptName]
        });
    }
});