const section = document.querySelector('section');

function callMobile() {
  section.style.backgroundColor = 'yellowgreen';
  console.log('Mobile running');
}

function callDesktop() {
  section.style.backgroundColor = 'hotpink';
  console.log('Desktop running');
}

function getInfo(e) {
  if (window.innerWidth <= 430) {
    callMobile();
  } else {
    callDesktop();
  }
}

let resizeTimeout;
let dwidth = window.innerWidth;

window.addEventListener('resize', (e) => {
  e.preventDefault();
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(getInfo.bind(e), 100, 'Resized');
});

getInfo();

  // var cachedWidth = $(window).width();
  //   $(window).resize(function(){
  //       var newWidth = $(window).width();
  //       if(newWidth !== cachedWidth){
  //           //DO RESIZE HERE
  //           cachedWidth = newWidth;
  //       }
  //   });

// $(window).on('resize', function () {
//   if (screenwidth !== $(window).width()) {
//     //action performed while resize
//     location.reload();
//   }
// });

// window.onload = getInfo;
// window.onresize = getInfo;
