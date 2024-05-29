const section = document.querySelector('section');

function callMobile() {
  section.style.backgroundColor = 'yellowgreen';
  console.log('Mobile running');
}

function callDesktop() {
  section.style.backgroundColor = 'coral';
  console.log('Desktop running');
}

function getInfo() {
  if (window.innerWidth <= 430) {
    callMobile();
  } else {
    callDesktop();
  }
}

let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(getInfo, 100, 'Resized');
});

getInfo();

// window.onload = getInfo;
// window.onresize = getInfo;
