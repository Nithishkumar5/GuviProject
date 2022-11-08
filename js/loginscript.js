
$(document).ready(function (){

    $(document).on("submit","#loginform",function (e){
        e.preventDefault();
        var email = $('#emailId').val();
        var password = $('#password').val();
        $.ajax({
            type: "POST",
            url: "php/login.php",
            data: {
                "loginuser": 1,
                "email": email,
                "password": password,
            },
            success: function (response) {
                
                // console.log(response);
                if(response === "Invalid Credentials"){
                    alert("Invalid Credentials");
                }
                else{
                    alert("Logging in");
                    localStorage.setItem('userlogin',response);
                    $(location).attr('href','home.html');
                }

            }
        });
        
    });


});