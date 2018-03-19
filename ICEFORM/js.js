$(document).ready(function(){
  function validatePass(){
    if $('#password1') !== $('#password2') {
      $('.errormessage').show();
    }
  }



})
