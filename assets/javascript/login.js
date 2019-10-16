console.log('Login.js');


$("#register").hide();
$("#registerBtn").on('click', function(){
    $("#register").show();
    $("#login").hide();
})

$('#login').on('submit', function(event) {
    event.preventDefault();

    var usernameLogin = $("#username-login").val().trim();
    var passwordLogin = $("#password-login").val().trim();

    $.ajax({
        url: '/auth/user/login',
        method: 'POST',
        data: {
            username: usernameLogin,
            password: passwordLogin
        }
    }).then(function(response){
        console.log(response)
        window.location.replace("/index.html")
    })

});

$(`#register`).submit(function(event){
    event.preventDefault();

    var usernameRegister = $("#username-register").val().trim()
    var passwordRegisterOne = $("#password-register-one").val().trim()
    var passwordRegisterTwo = $("#password-register-two").val().trim()
 
    if(passwordRegisterOne === passwordRegisterTwo){

  
    $.ajax({
        url: '/auth/user/register',
        method: 'POST',
        data: {
            username: usernameRegister,
            password: passwordRegisterOne
        }
    }).then(function(response){
        console.log(response)
        window.location.replace("/index.html")
    })
  }else {
      alert("your passwords do not match")
  }
  

})