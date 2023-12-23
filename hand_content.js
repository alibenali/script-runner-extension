// Hand script

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
    'div[aria-label*="Did the Veteran bring in records to the exam that you had reviewed?"]'
  ).querySelectorAll('input[type=radio]')[1].click();
  
  //'div[aria-label*="2b"]'
  document.querySelector(
    'div[aria-label*="2b"]'
  ).querySelectorAll('input[type=radio]')[1].click();
  //'div[aria-label*="2c"]'
  document.querySelector(
    'div[aria-label*="2c"]'
  ).querySelectorAll('input[type=radio]')[1].click();
}

async function phys1(){
   await waitForElement('div[aria-label]').then((element) => {
    element.querySelector('input[type="radio"]').click();
  });
  //'div[aria-label="All normal"]'
  await waitForElement('div[aria-label="All normal"]').then((element) => {
    element.querySelector('input[type="checkbox"]').click();
  });
  
  //'div[aria-label*="Is there a gap between the pad of the right thumb and the right fingers while attempting to oppose the fingers to the thumb on"]'
  await waitForElement('div[aria-label*="Is there a gap between the pad of the right thumb and the right fingers while attempting to oppose the fingers to the thumb on"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]'
  await waitForElement('div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  
  //'div[aria-label*="Is there evidence of pain during "]'
  await waitForElement('div[aria-label*="Is there evidence of pain during "]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  //'div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]'
  await waitForElement('div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label=""]' 
  await waitForElement('div[aria-label=""]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Was passive range of motion testing performed?"]'
  await waitForElement('div[aria-label*="Was passive range of motion testing performed?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]'
  await waitForElement('div[aria-label*="Flexion same as active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]'
  await waitForElement('div[aria-label*="Extension same as active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Long
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Long
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Ring
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=2).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Ring
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=2).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  
  //'div[aria-label*="Flexion same as active ROM"]' Little finger
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=3).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Little finger
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=3).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Thumb
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=4).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Thumb
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=4).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Is there a gap between the pad of the right thumb and the right fingers while attempting to oppose the fingers to the thumb on"]'
  await waitForElement('div[aria-label*="Is there a gap between the pad of the right thumb and the right fingers while attempting to oppose the fingers to the thumb on"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]'
  await waitForElement('div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there evidence of pain during"]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there objective evidence of localized tenderness or pain on palpation of the joint or associated soft tissue on"]'
  await waitForElement('div[aria-label*="Is there objective evidence of localized tenderness or pain on palpation of the joint or associated soft tissue on"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there any limitation of motion (that is different than the above) specifically attributable to pain, weakness, fatigability, incoordination, or other during"]'
  await waitForElement('div[aria-label*="Is there any limitation of motion (that is different than the above) specifically attributable to pain, weakness, fatigability, incoordination, or other during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there evidence of pain?"]'
  await waitForElement('div[aria-label*="Is there evidence of pain?"]').then((element) => {
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
  
  //'div[aria-label="None"]'
  await waitForElement('div[aria-label="None"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  }); 
}

                                                                               
async function phys2(){
   await waitForElement('div[aria-label]').then((element) => {
    element.querySelector('input[type="radio"]').click();
  });
  //'div[aria-label="All normal"]'
  await waitForElement('div[aria-label="All normal"]').then((element) => {
    element.querySelector('input[type="checkbox"]').click();
  });
    
  //'div[aria-label*="Is there evidence of pain during "]'
  await waitForElement('div[aria-label*="Is there evidence of pain during "]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });

  //'div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]'
  await waitForElement('div[aria-label*="evidence of localized tenderness or pain on palpation of the joint or associated soft tissue?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label=""]' 
  await waitForElement('div[aria-label=""]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Was passive range of motion testing performed?"]'
  await waitForElement('div[aria-label*="Was passive range of motion testing performed?"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]'
  await waitForElement('div[aria-label*="Flexion same as active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]'
  await waitForElement('div[aria-label*="Extension same as active ROM"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Long
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Long
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=1).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Ring
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=2).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Ring
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=2).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  
  //'div[aria-label*="Flexion same as active ROM"]' Little finger
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=3).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Little finger
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=3).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Flexion same as active ROM"]' Thumb
  await waitForElement('div[aria-label*="Flexion same as active ROM"]', number=4).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Extension same as active ROM"]' Thumb
  await waitForElement('div[aria-label*="Extension same as active ROM"]', number=4).then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label*="Is there a gap between the pad of the left thumb and the left fingers while attempting to oppose the fingers to the thumb on"]'
  await waitForElement('div[aria-label*="Is there a gap between the pad of the left thumb and the left fingers while attempting to oppose the fingers to the thumb on"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]'
  await waitForElement('div[aria-label*="Is there a gap between the index and/or long finger and proximal transverse crease of the hand on maximal finger flexion on"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there evidence of pain during"]'
  await waitForElement('div[aria-label*="Is there evidence of pain during"]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there objective evidence of localized tenderness or pain on palpation of the joint or associated soft tissue on"]'
  await waitForElement('div[aria-label*="Is there objective evidence of localized tenderness or pain on palpation of the joint or associated soft tissue on"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there any limitation of motion (that is different than the above) specifically attributable to pain, weakness, fatigability, incoordination, or other during"]'
  await waitForElement('div[aria-label*="Is there any limitation of motion (that is different than the above) specifically attributable to pain, weakness, fatigability, incoordination, or other during"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  //'div[aria-label*="Is there evidence of pain?"]'
  await waitForElement('div[aria-label*="Is there evidence of pain?"]').then((element) => {
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
  
  //'div[aria-label="None"]'
  await waitForElement('div[aria-label="None"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  }); 
}


async function phys3(){
  
  //'div[aria-label*="All normal"]'
  await waitForElement('div[aria-label*="All normal"]').then((element) => {
    element.querySelectorAll('input[type="checkbox"]')[0].click();
  });
  
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]', number=1).then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
}
    
async function additional(){
  //'div[aria-label*="6a"]'
  await waitForElement('div[aria-label*="6a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="6b"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label*="7a"]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
  
  await waitForElement('div[aria-label=""]').then((element) => {
    element.querySelectorAll('input[type="radio"]')[1].click();
  });
}
    
async function diag_test(){
  //'div[aria-label=""]'
  await waitForElement('div[aria-label=""]').then((element) => {
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
  
  // 'div[aria-label*="Is there a need for the Veteran/Service member to follow up with his or her primary care provider regarding any findings in this examination (not limited to claimed condition(s))?"]'
  await waitForElement('div[aria-label*="Is there a need for the Veteran/Service member to follow up with his or her primary care provider regarding any findings in this examination (not limited to claimed condition(s))?"]').then((element) => {
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
  	console.log('phys1 done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
  	await phys2();
    console.log('phys2 done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
    await phys3();
    console.log('phys3 done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
  	await additional();
    console.log('additional done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
  	await diag_test();
  	console.log('diag_test done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
  	await diag(sleepAmount);
    console.log('diag done');
    await delay(sleepAmount);
    document.querySelector('#w-next').click();
  	await risk();
    console.log('risk done');
  
  
}



process();
