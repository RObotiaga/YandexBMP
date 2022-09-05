
const inputMain = document.getElementById('page-color');
inputMain.addEventListener('change', saveAndSendMainColor);

const inputSecond = document.getElementById('stroke-color');
inputSecond.addEventListener('change', saveAndSendMainColor);

const settingsReset = document.getElementsByClassName('reset-settings')[0];
settingsReset.addEventListener('click', resetColor);
function resetColor() {
  inputMain.value = '#141414';
  inputSecond.value = '#222222';
  console.log('kk');
  let pageColor = inputMain.value
  let secondColor = inputSecond.value
  localStorage.setItem('page-color',[pageColor,secondColor]);
  chrome.tabs.getSelected(null, function(tab){ //выбирается ид открытого таба, выполняется коллбек с ним
    chrome.tabs.sendRequest(tab.id,{msg:[pageColor,secondColor]}); //запрос  на сообщение
  }); 
};

function saveAndSendMainColor() {
  console.log('qq');
  let pageColor = inputMain.value
  let secondColor = inputSecond.value
  localStorage.setItem('page-color',[pageColor,secondColor]);
  chrome.tabs.getSelected(null, function(tab){ //выбирается ид открытого таба, выполняется коллбек с ним
    chrome.tabs.sendRequest(tab.id,{msg:[pageColor,secondColor]}); //запрос  на сообщение
  }); 
};
 
window.addEventListener('DOMContentLoaded', ()=> {
  let pageColor = localStorage.getItem('page-color');
  let mainColor = pageColor.slice(0,7);
  let secondColor = pageColor.slice(8);
  inputMain.value = mainColor;
  inputSecond.value = secondColor;
  console.log(inputMain.value,inputSecond.value)
  chrome.tabs.getSelected(null, function(tab){ //выбирается ид открытого таба, выполняется коллбек с ним
    chrome.tabs.sendRequest(tab.id,{msg:[mainColor,secondColor]}); //запрос  на сообщение
  }); 
})

