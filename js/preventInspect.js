 // © Copyright 2022 www.cph101.com
 // This file was originally made by cph101
 // Do not rebrand if you are distributing it
 // © Copyright 2022 www.cph101.com

document.addEventListener('keydown', function() {
  if (event.keyCode == 123) {
    return false;
  } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
    return false;
  } else if (event.ctrlKey && event.keyCode == 85) {
    return false;
  }
}, false);

if (document.addEventListener) {
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  }, false);
} else {
  document.attachEvent('oncontextmenu', function() {
    window.event.returnValue = false;
  });
}
