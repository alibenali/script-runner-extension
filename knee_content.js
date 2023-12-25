//Knee script
async function delay() {
  // Retrieve the delay setting from storage
  return new Promise((resolve) => {
      chrome.storage.sync.get('kneeDelay', function(data) {
          const delayTime = (data.kneeDelay || 5) * 1000; // Default to 5 seconds if not set
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
  document.querySelector(
    'div[aria-label="Did the Veteran bring in records to the exam that you had reviewed?"]'
  ).querySelectorAll('input[type=radio]')[1].click();
  
  document.querySelector(
    'div[aria-label*="Does the Veteran report or have a history of instability or recurrent subluxation of the"]'
  ).querySelectorAll('input[type=radio]')[1].click();
  
  document.querySelector(
    'div[aria-label*="2e"]'
  ).querySelectorAll('input[type=radio]')[1].click();

}

async function phys1(){
   await waitForElement('div[aria-label]').then((element) => {
    element.querySelector('input[type="radio"]').click();
  });
  //'div[aria-label="All Normal"]'
  await waitForElement('div[aria-label="All Normal"]').then((element) => {
    element.querySelector('input[type="checkbox"]').click();
  });
  //'div[aria-label*="Is there evidence of pain during "]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Was passive range of motion testing performed?"]'
  await waitForElement('div[aria-label*="Was passive range of motion testing performed?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Same as Active ROM"]'
  await waitForElement('div[aria-label*="Same as Active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="Same as Active ROM"]' Second one
  await waitForElement('div[aria-label*="Same as Active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="Is there evidence of pain during"]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there evidence of pain?"]'
  await waitForElement('div[aria-label*="Is there evidence of pain?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]'
  await waitForElement('div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there objective evidence of crepitus?"]'
  await waitForElement('div[aria-label*="Is there objective evidence of crepitus?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is the Veteran able to perform repetitive-use testing with at least three repetitions?"]'
  await waitForElement('div[aria-label*="Is the Veteran able to perform repetitive-use testing with at least three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Is there additional loss of function or range of motion after three repetitions?"]'
  await waitForElement('div[aria-label*="Is there additional loss of function or range of motion after three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is the Veteran being examined immediately after repetitive use over time?"]'
  await waitForElement('div[aria-label*="Is the Veteran being examined immediately after repetitive use over time?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="None"]'
  await waitForElement('div[aria-label*="None"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="4a. Does the Veteran have muscle atrophy of the right lower extremity?"]'
  await waitForElement('div[aria-label*="4a. Does the Veteran have muscle atrophy of the right lower extremity?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function phys2(){
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label="All Normal"]'
  await waitForElement('div[aria-label="All Normal"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="Is there evidence of pain during"]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Was passive range of motion testing performed?"]'
  await waitForElement('div[aria-label*="Was passive range of motion testing performed?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Same as Active ROM"]'
  await waitForElement('div[aria-label*="Same as Active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="Same as Active ROM"]' Second one
  await waitForElement('div[aria-label*="Same as Active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="Is there evidence of pain during"]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there evidence of pain?"]'
  await waitForElement('div[aria-label*="Is there evidence of pain?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]'
  await waitForElement('div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there objective evidence of crepitus?"]'
  await waitForElement('div[aria-label*="Is there objective evidence of crepitus?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is the Veteran able to perform repetitive-use testing with at least three repetitions?"]'
  await waitForElement('div[aria-label*="Is the Veteran able to perform repetitive-use testing with at least three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Is there additional loss of function or range of motion after three repetitions?"]'
  await waitForElement('div[aria-label*="Is there additional loss of function or range of motion after three repetitions?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is the Veteran being examined immediately after repetitive use over time?"]'
  await waitForElement('div[aria-label*="Is the Veteran being examined immediately after repetitive use over time?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="None"]'
  await waitForElement('div[aria-label*="None"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  //'div[aria-label*="4a. Does the Veteran have muscle atrophy of the left lower extremity?"]'
  await waitForElement('div[aria-label*="4a. Does the Veteran have muscle atrophy of the left lower extremity?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function phys3(){
  //'div[aria-label*="Right Side:"]'
  await waitForElement('div[aria-label*="Right Side:"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Left Side:"]'
  await waitForElement('div[aria-label*="Left Side:"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Is there a history of recurrent subluxation of the right knee?"]'
  await waitForElement('div[aria-label*="Is there a history of recurrent subluxation of the right knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="6a. Is there recurrent subluxation or persistent instability?"]'
  await waitForElement('div[aria-label*="6a. Is there recurrent subluxation or persistent instability?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="6b"]'
  await waitForElement('div[aria-label*="6b"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="6e"]'
  await waitForElement('div[aria-label*="6e"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there a diagnosis of recurrent patellar dislocation of the right knee?"]'
  await waitForElement('div[aria-label*="Is there a diagnosis of recurrent patellar dislocation of the right knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Is there a history of lateral instability of the right knee?"]'
  await waitForElement('div[aria-label*="Is there a history of lateral instability of the right knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Was joint stability testing performed for the right knee?"]'
  await waitForElement('div[aria-label*="Was joint stability testing performed for the right knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="If joint stability testing was performed is there joint instability?"]'
  await waitForElement('div[aria-label*="If joint stability testing was performed is there joint instability?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there a history of recurrent subluxation of the left knee?"]'
  await waitForElement('div[aria-label*="Is there a history of recurrent subluxation of the left knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="6a. Is there recurrent subluxation or persistent instability?"]'
  await waitForElement('div[aria-label*="6a. Is there recurrent subluxation or persistent instability?"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="6b. Is there or has there been a ligament tear (sprain)?"]'
  await waitForElement('div[aria-label*="6b. Is there or has there been a ligament tear (sprain)?"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="6e. Is there recurrent patellar instability?"]'
  await waitForElement('div[aria-label*="6e. Is there recurrent patellar instability?"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there a diagnosis of recurrent patellar dislocation of the left knee?"]'
  await waitForElement('div[aria-label*="Is there a diagnosis of recurrent patellar dislocation of the left knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Is there a history of lateral instability of the left knee?"]'
  await waitForElement('div[aria-label*="Is there a history of lateral instability of the left knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="Was joint stability testing performed for the left knee?"]'
  await waitForElement('div[aria-label*="Was joint stability testing performed for the left knee?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  //'div[aria-label*="If joint stability testing was performed is there joint instability?"]'
  await waitForElement('div[aria-label*="If joint stability testing was performed is there joint instability?"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function additional(){
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=2).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=3).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=4).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=5).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="No Surgery"]'
  await waitForElement('div[aria-label*="No Surgery"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="No surgery"]'
  await waitForElement('div[aria-label*="No surgery"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="10a"]'
  await waitForElement('div[aria-label*="10a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="12a"]'
  await waitForElement('div[aria-label*="12a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}

async function diag_test(){
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Were services performed or need to be performed to support this exam?"]'
  await waitForElement('div[aria-label*="Were services performed or need to be performed to support this exam?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

}

async function diag(){
  //'div[aria-label*="Was the Veteran Hospitalized or transported to an Emergency Department for any reason during"]'
  await waitForElement('div[aria-label*="Was the Veteran Hospitalized or transported to an Emergency Department for any reason during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there the presence of a noted or suspicious condition requiring"]'
  await waitForElement('div[aria-label*="Is there the presence of a noted or suspicious condition requiring"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label*="Is there a need for the Veteran/Service Member to follow up with his or her primary care provider regarding any findings in this examination (not limited to claimed condition(s))?"]'
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
    await phys3();
    console.log('phys3 done');
    await delay();
    document.querySelector('#w-next').click();
  	await additional();
    console.log('additional done');
    await delay();
    document.querySelector('#w-next').click();
  	await diag_test();
  	console.log('diag_test done');
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