
function show(){
  let pswrd = document.getElementById('pswrd');
  let icon = document.querySelector('.fa')
  if (pswrd.type ===  "password") {
    pswrd.type = "text";
    icon.style.color = "#CD5C5C";
  }else{
    pswrd.type = "password";
    icon.style.color = "grey";
  }
}

function show1(){
  let confirm_password = document.getElementById('confirm_password');
  let icon = document.querySelector('.fa')
  if (confirm_password.type ===  "password") {
    confirm_password.type = "text";
    icon.style.color = "#CD5C5C";
  }else{
    confirm_password.type = "password";
    icon.style.color = "grey";
  }
}

  
