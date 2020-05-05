function offerGreeting(){
var today = new Date(); 
var hourNow = today.getHours(); 
var greeting; 

if (hourNow > 18) { 
    greeting = 'Good evening!';
}else if (hourNow > 12) { 
    greeting = 'Good afternoon!';
}else if (hourNow > 0) { 
    greeting = 'Good morning!';
}else { 
    greeting = 'Welcome!'; 
}
return document.write('<h3>' + greeting + '</h3>'); 
}

function askName(){
    var userName = prompt('What is your name?');
    return document.write('<h3>' + 'Nice to meet you' + userName + '</h3>');
}

function askWashhands(){
    var washhands = confirm('This site might be infected with CV');
    var txt;
    if (washhands === true)  {
        txt = "Use some hand sanitizer";
      } else {
        txt = "Im just a website I cant have CV";
      }
    
    return document.write(txt);
}