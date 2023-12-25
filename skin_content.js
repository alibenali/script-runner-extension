//Skin script
async function delay() {
  // Retrieve the delay setting from storage
  return new Promise((resolve) => {
      chrome.storage.sync.get('skinDelay', function(data) {
          const delayTime = (data.skinDelay || 5) * 1000; // Default to 5 seconds if not set
          setTimeout(resolve, delayTime);
      });
  });
}

async function waitForElement(selector, number=false) {
  console.log('Waiting for:');
  console.log(selector);
  return new Promise((resolve) => {
    if(number){
      var element = document.querySelectorAll(selector)[number];
    }else{
      var element = document.querySelector(selector);
    }
    if (element) {
      resolve(element);
    } else {
      const observer = new MutationObserver((mutations) => {
        const targetNode = mutations[0].target;
        const queriedElement = targetNode.querySelector(selector);
        if (queriedElement) {
          observer.disconnect();
          resolve(queriedElement);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }
  });
}


async function history() {

  await waitForElement('div[aria-label*="2b"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="3B"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function phys1(){
   await waitForElement('div[aria-label*="Does the Veteran have more than one skin condition?"]').then((element) => {
    element.querySelector('input[type="radio"]').click();
  });

  await waitForElement('div[aria-label*="Veteran does not have any of the skin conditions listed above"]').then((element) => {
    if(element.querySelectorAll('input[type="checkbox"]')[0].checked==false){
      element.querySelectorAll('input[type="checkbox"]')[0].click();
    }
  });
 
}

                                                                               
async function phys2(){

  await waitForElement('div[aria-label*="6a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="7"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="8A"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="9"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
 
}


async function diag(){
   await waitForElement('div[aria-label*="Does the Veteran have any burn conditions"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="1."]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  
  await waitForElement('div[aria-label*="Was the Veteran Hospitalized or transported to an Emergency Department for any reason during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="Is there a presence of a noted or suspicious condition requiring"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="Is there a need for the Veteran/Service Member to follow up with his or her primary care provider regarding any findings in this examination (not limited to claimed condition(s)?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
}
  
  
    
async function risk(){
  await waitForElement('div[aria-label*="None"]').then((element) => {
    if(element.querySelectorAll('input[type="checkbox"]')[0].checked==false){
      element.querySelectorAll('input[type="checkbox"]')[0].click();
    }
  });
  await waitForElement('div[aria-label="Is the Veteran homeless?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}
   
async function process(){

    console.log('Process started');
    await history();
    console.log('finished history');
    await delay();
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[1].click();
  	document.querySelector('#w-next').click();
    await phys1();
  	console.log('phys1 done');
    await delay();
    document.querySelector('#w-next').click();
  	await phys2();
    console.log('phys2 done');
    await delay();
    document.querySelector('#w-next').click();
    await diag();
    console.log('diag done');
    await delay();
    document.querySelector('#w-next').click();
  	await risk();
    console.log('risk done');
  
  
}



process();
