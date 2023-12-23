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
  await new Promise(resolve => setTimeout(resolve, 3000));
  await click_nos();
  
}

progress();
