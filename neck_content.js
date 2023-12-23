// Neck Script

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
}

async function phys1(){
	console.log('phys1');
  await waitForElement('div[aria-label*="All Normal"]').then((element) => {
    element.querySelector('input[type="checkbox"]').click();
  });
  
  await waitForElement('div[aria-label*="Is there evidence of pain during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="Was passive range of motion testing performed"').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="Indicate why passive range of motion testing was not performed"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  
  textaread_element = document.querySelectorAll('textarea')[1];
  textaread_element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  await delay(500);
  textaread_element.value = 'Passive ROM of the spine is not advised by the VBA, to ensure safety of the Veteran';
  textaread_element.innerHTML = 'Passive ROM of the spine is not advised by the VBA, to ensure safety of the Veteran';

  await delay(500);
  await waitForElement('div[aria-label*="Is there evidence of pain?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue of the cervical spine (neck)?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="Is there objective evidence of crepitus"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label="Is the Veteran able to perform repetitive-use testing with at least three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  
  await waitForElement('div[aria-label="Is there additional loss of function or range of motion after three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label="Is the Veteran being examined immediately after repetitive use over time?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  
}

async function phys2(){
  
  await waitForElement('div[aria-label="3e. Does the Veteran have localized tenderness, guarding or muscle spasm of the cervical spine?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  await waitForElement('div[aria-label*="None"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  await waitForElement('div[aria-label="All Normal"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  await waitForElement('div[aria-label="All Normal"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  await waitForElement('div[aria-label="4b. Does the Veteran have muscle atrophy?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}


async function phys3(){
  await waitForElement('div[aria-label="All Normal"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  await waitForElement('div[aria-label="All Normal"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  await waitForElement('div[aria-label="All Normal"]', number=2).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  await waitForElement('div[aria-label*="7. Does the Veteran have radicular pain or any other signs or symptoms due to radiculopathy?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });



}

async function phys4(){
  await waitForElement('div[aria-label*="8a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  await waitForElement('div[aria-label*="9a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  await waitForElement('div[aria-label*="10"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function additional(){
  await waitForElement('div[aria-label*="11a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="12a"]'
  await waitForElement('div[aria-label*="12a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  await waitForElement('div[aria-label*="13a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}


async function diag_test(){
  await waitForElement('div[aria-label]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  await waitForElement('div[aria-label*="14d. Does the Veteran have imaging evidence of a cervical vertebral fracture?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  await waitForElement('div[aria-label*="14e').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}


async function diag(){
  await waitForElement('div[aria-label*="1a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });

  await waitForElement('div[aria-label*="Was the Veteran Hospitalized or transported to an Emergency Department for any reason during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  await waitForElement('div[aria-label*="Is there a presence of a noted or suspicious condition requiring"]').then((element) => {
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
  await waitForElement('div[aria-label="Is the Veteran homeless?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function process(){
    var sleepAmount = (Math.floor(Math.random() * 4) + 8)*1000;
    console.log('Process started');
    await history();
    console.log('finished history');
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[1].click();
  	document.querySelector('#w-next').click();
    await phys1();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[2].click();
    document.querySelector('#w-next').click();
  	await phys2();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[3].click();
    document.querySelector('#w-next').click();
  	await phys3();
    await delay(sleepAmount);
  	document.querySelector('div[role="navigation"]').querySelectorAll('button')[4].click();
    await phys4();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[5].click();
    document.querySelector('#w-next').click();  
    await additional();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[6].click();
    document.querySelector('#w-next').click();    
    await diag_test();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[7].click();
    document.querySelector('#w-next').click();    
    await diag();
    await delay(sleepAmount);
  	//document.querySelector('div[role="navigation"]').querySelectorAll('button')[8].click();
    document.querySelector('#w-next').click();    
    await risk();
}

process()
