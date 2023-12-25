async function delay() {
  // Retrieve the delay setting from storage
  return new Promise((resolve) => {
      chrome.storage.sync.get('scarDelay', function(data) {
          const delayTime = (data.scarDelay || 5) * 1000; // Default to 5 seconds if not set
          setTimeout(resolve, delayTime);
      });
  });
}

async function click_nos(){
	const inputs = document.querySelectorAll('input[value="N"]');
    for (const input of inputs) {
        // Click on the input
        input.click();
        await new Promise(resolve => setTimeout(resolve, 1000)); // waits for 1 second
    }
}

async function progress(){
  console.log('Process started');
  await click_nos();
  document.querySelector('#w-next').click();
  await delay();
  await click_nos();
  
}

progress();
