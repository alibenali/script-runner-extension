chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

    document.getElementById('settingsIcon').addEventListener('click', () => {
        chrome.runtime.openOptionsPage(); // This opens the extension's options page
    });

    document.getElementById('ankle').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "ankle_content.js", tabId: tabs[0].id});
    });

    document.getElementById('back').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "back_content.js", tabId: tabs[0].id});
    });

    document.getElementById('elbow').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "elbow_content.js", tabId: tabs[0].id});
    });

    document.getElementById('foot').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "foot_content.js", tabId: tabs[0].id});
    });

    document.getElementById('hand').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "hand_content.js", tabId: tabs[0].id});
    });

    document.getElementById('hip').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "hip_content.js", tabId: tabs[0].id});
    });

    document.getElementById('knee').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "knee_content.js", tabId: tabs[0].id});
    });

    document.getElementById('neck').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "neck_content.js", tabId: tabs[0].id});
    });

    document.getElementById('scar').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "scar_content.js", tabId: tabs[0].id});
    });

    document.getElementById('shoulder').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "shoulder_content.js", tabId: tabs[0].id});
    });

    document.getElementById('skin').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "skin_content.js", tabId: tabs[0].id});
    });

    document.getElementById('wrist').addEventListener('click', () => {
        chrome.runtime.sendMessage({action: "runScript", scriptName: "wrist_content.js", tabId: tabs[0].id});
    });
});
