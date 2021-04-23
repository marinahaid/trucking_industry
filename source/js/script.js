"use strict";
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}




function myFunction1() {
  document.getElementById("myDropdown1").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn1')) {

  var dropdowns = document.getElementsByClassName("content1");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn2')) {

  var dropdowns = document.getElementsByClassName("content2");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}

function myFunction3() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn3')) {

  var dropdowns = document.getElementsByClassName("content3");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}


function myFunction4() {
  document.getElementById("myDropdown4").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn4')) {

    var dropdowns = document.getElementsByClassName("content4");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  }

  function myFunction5() {
    document.getElementById("myDropdown5").classList.toggle("show");
  }
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn5')) {

      var dropdowns = document.getElementsByClassName("content5");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
    }

    function myFunction6() {
      document.getElementById("myDropdown6").classList.toggle("show");
    }
    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn6')) {

        var dropdowns = document.getElementsByClassName("content6");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
      }
