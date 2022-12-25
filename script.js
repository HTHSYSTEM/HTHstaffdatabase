/*
   DHTML Snowstorm! OO-style Jascript-based Snow effect
   ----------------------------------------------------
   Version 1.4.20091115 (Previous rev: v1.3.20081215)
   Code by Scott Schiller - http://schillmania.com
   ----------------------------------------------------
  
   Initializes after body onload() by default (via addEventHandler() call at bottom.)
   To customize properties, edit below or override configuration after this script
   has run (but before body.onload), eg. snowStorm.snowStick = false;

*/


/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
if (btn) {
  btn.onclick = function () {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
}

