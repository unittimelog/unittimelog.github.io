const defaultInterval = 5000; // 5 seconds
const slowInterval = 10000; // 10 seconds
let timeout = defaultInterval;
let interval;

function startAutoRotation() {
  interval = setInterval(() => {
    // const pos = Number(document.querySelector("#mainHeader").getAttribute("pox-x"));
    document.getElementById('rightArrow').click();
    if (timeout === slowInterval) {
      resetAutoRotation(defaultInterval);
    }
  }, timeout);
}

function resetAutoRotation(millsec) {
  clearInterval(interval);
  timeout = millsec;
  startAutoRotation();
}

document.getElementById('leftArrow').onclick = () => {
  const header = document.querySelector('#mainHeader'); 
  const frameNum = Number(header.getAttribute('pos-x'));
  const nextNum = (frameNum + 15 - 1) % 15;
  header.setAttribute('pos-x', nextNum);
  resetAutoRotation(slowInterval);
}

document.getElementById('rightArrow').onclick = () => {
  const header = document.querySelector('#mainHeader'); 
  const frameNum = Number(header.getAttribute('pos-x'));
  const nextNum = (frameNum + 1) % 15;
  header.setAttribute('pos-x', nextNum);
  resetAutoRotation(slowInterval);
}

document.getElementById('linkToAppStoreSection').onclick = () => {
  window.scroll({ top: 200, left: 0, behavior: 'smooth' });
}

startAutoRotation();
