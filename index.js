function onReady(callback) {
    var intervalId = window.setInterval(function() {
      if (document.getElementsByTagName('body')[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 3000);
  }
  
  function setVisible(selector, visible) {
    document.querySelector(selector).style.display = visible ? 'block' : 'none';
  }
  
  onReady(function() {
    setVisible('.page', true);
    setVisible('#loading', false);
  });

function validateLogin(){
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    let savedName = 'Felipe';
    let savePassword = '0106';

    if(name === savedName && password === savePassword){
      window.location.href = 'teste.html';
    } else {
      alert('User not found, please try again!');
    }
}