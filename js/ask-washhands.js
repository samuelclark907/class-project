var washhands = confirm('This site might be infected with CV');
var txt;
if (washhands === true)  {
    txt = "Use some hand sanitizer";
  } else {
    txt = "Im just a website I cant have CV";
  }

document.write(txt);