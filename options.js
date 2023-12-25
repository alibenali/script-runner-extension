
// on document loaded

document.addEventListener('DOMContentLoaded', function() {


    scripts.forEach(script => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h2>${script.charAt(0).toUpperCase() + script.slice(1)} Delay</h2>
            <div class="input-group">
                <input type="number" id="${script}Delay" min="1" max="60" placeholder="Delay duration in seconds Ex: 12">
                <button type="button" class="saveButton" data-script="${script}">Update</button>
            </div>
        `;
        document.getElementById('delaySettings').appendChild(card);
    });

    
    document.querySelectorAll('.saveButton').forEach(button => {
        button.addEventListener('click', function() {
            console.log('button clicked');
            var scriptName = this.dataset.script;
            var delay = document.getElementById(scriptName + 'Delay').value;
            var settings = {};
            settings[scriptName + 'Delay'] = delay;

            chrome.storage.sync.set(settings, function() {
                console.log(scriptName + ' settings saved');
            });
        });
    });

    // Load the saved settings when the page is opened
    scripts.forEach(script => {
        chrome.storage.sync.get(script + 'Delay', function(data) {
            if (data[script + 'Delay']) {
                document.getElementById(script + 'Delay').value = data[script + 'Delay'];
            }
        });
    });

})
