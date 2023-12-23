// Foot script
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
  document.querySelector(
    'div[aria-label="Did the Veteran bring in records to the exam that you had reviewed?"]'
  ).querySelectorAll('input[type=radio]')[1].click();
  document.querySelector('div[aria-label*="2b"]').querySelectorAll('input[type=radio]')[0].click();
  document.querySelector('div[aria-label*="2c"]').querySelectorAll('input[type=radio]')[1].click();
  document.querySelector('div[aria-label*="2d"]').querySelectorAll('input[type=radio]')[1].click();
}

async function flat_foot(){
}

async function plantar_fasciitis(){
  js_path = 'div[aria-label*="Does the Veteran have or have they ever had plantar fasciitis?"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}


async function neuroma(){
    
  js_path = 'div[aria-label*="5a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  js_path = 'div[aria-label*="5b"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
}

async function hammer(){
  js_path = 'div[aria-label*="Does the Veteran have Hammer Toe?"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}
async function hallux_valgus(){
  js_path = 'div[aria-label*="7a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  js_path = 'div[aria-label*="7b"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}

async function hallux_rigidus(){
  js_path = 'div[aria-label*="8a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function claw_foot(){
  js_path = 'div[aria-label*="Does the Veteran have Acquired Pes Cavus (Claw Foot)?"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function malunion(){
  js_path = 'div[aria-label*="Does the Veteran have Malunion or Nonunion of Tarsal or Metatarsal Bones?"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function fracture(){
  js_path = 'div[aria-label*="11a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}


async function additional(){
  js_path = 'div[aria-label*="No functional loss for LEFT lower extremity attributable to claimed condition"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  js_path = 'div[aria-label*="No functional loss of RIGHT lower extremity attributable to claimed condition"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  js_path = 'div[aria-label*="14b"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  js_path = 'div[aria-label*="14c"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  js_path = 'div[aria-label*="14d"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  js_path = 'div[aria-label*="15a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  
  js_path = 'div[aria-label*="17a"]';
  await waitForElement(js_path).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  
  
}


async function diag_test(){
  await waitForElement('div[aria-label]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}


async function diag(){

  await waitForElement('div[aria-label*="Was the Veteran Hospitalized or transported to an Emergency Department for any reason during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  await waitForElement('div[aria-label*="Is there the presence of a noted or suspicious condition requiring"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  await waitForElement('div[aria-label*="Is there a need for the Veteran/Service Member to follow up with his or her primary care provider regarding any findings in this examination (not limited to claimed condition(s))?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function risk(){
  await waitForElement('div[aria-label*="None"]').then((element) => {
    if(element.querySelectorAll('input[type="checkbox"]')[0].checked==false){
      element.querySelectorAll('input[type="checkbox"]')[0].click();
    }
  });
  await waitForElement('div[aria-label*="Is the Veteran homeless?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function process(){
  	var sleepAmount = (Math.floor(Math.random() * 2) + 4)*1000;
    console.log('Process started');
	  await history();
  	document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await flat_foot();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await plantar_fasciitis();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await neuroma();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await hammer();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await hallux_valgus();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await hallux_rigidus();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await claw_foot();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await malunion();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await fracture();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await additional();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await diag_test();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await diag();
    document.querySelector('#w-next').click();
  	await delay(sleepAmount);
    await risk();
    console.log('Risk done');
}

process()
