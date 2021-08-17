// login button
document.getElementById("login-submit").addEventListener('click', function(){
    const userField =document.getElementById('user-email');
    const userEmail= userField.value;
    console.log(userEmail);

    const passwordField =document.getElementById('user-password');
    const userPassword= passwordField.value;
    console.log(userPassword);

    if(userEmail=='abc@gmail.com' && userPassword=="secret"){
        window.location.href='banking.html';
    }
});


