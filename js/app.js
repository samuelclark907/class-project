function offerGreeting() {
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

function askName() {
    var userName = prompt('What is your name?');
    return document.write('<h3>' + 'Nice to meet you ' + userName + '</h3>');


}


function getProduct() {
    var response = prompt('Would you like to buy some Corona Virus?');
    var item;
}
    while (response !== 'yes' && response !== 'no') {
        response = prompt('Yes or No question. Do you want some CV?');
      }

      if (response === 'yes') {
          item = '<img src ="class-project-corona.jpg">';
      } else if (response === 'no') {
          response = prompt('Are you sure? It/s some good CV.');
      }
      return item;

     
      
      function getCount() {
          var count = prompt('Perfect, how many would you like?');
          
      } while (isNaN(count) || count === '') {
          count = prompt('Put in a number, how many CV/s you want?');
      }
        return count;
      
    
      function showOrder() {
          var result = '';
          var itemType = getProduct();
          var total = getCount();
      }
          for (var i = 0; i < total; i++) {
            result = result +'<p>' + itemType + '</p>'
          }
      return document.write(result)