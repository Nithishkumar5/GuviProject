function validate(){
    var name = $('fullName').val();
    var email = $('emailId').val();
    var pass = $('password').val();
    var cpass = $('confirmpassword').val();
    
    if(name === ""){
        $('#error_email').text("Enter Your Name");
        return false;
    }
    if(email === ""){
        
    }
}

$(document).ready(function (){
    
    $('#emailId').keyup(function (e){
        var email = $('#emailId').val();
        if(email === ""){
            $("#error_email").text("");
        }
        else{
 
            // console.log(email);
            $.ajax({
                type: "POST",
                url: "php/ajax-emailcheck.php",
                data: {
                    "emailcheck": 1,
                    "email_id": email,
                },
                success: function (response) {
                    // alert(response);
                    $('#error_email').text(response);
                }
            });
        }
    });
    
    $(document).on("submit","#registerform",function (e){
        e.preventDefault();
        var name = $('#fullName').val();
        var email = $('#emailId').val();
        var password = $('#password').val();
        $.ajax({
            type: "POST",
            url: "php/register.php",
            data: {
                "registeruser": 1,
                "name": name,
                "email": email,
                "password": password,
            },
            success: function (response) {
                alert("Registered Successfully");
                $("#error_email").text("");
                $("#registerform")[0].reset();
                $(location).attr('href','login.html');

            }
        });
        
    });

});