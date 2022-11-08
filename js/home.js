if(localStorage.getItem('userlogin')== null){
    $(location).attr('href','login.html');

}
var fullname;
var id;
var age;
var bio;
var city;
ready();
function exit(){
    localStorage.clear();
    $(location).attr('href','login.html');
}
function show()
{
    document.getElementById('pop').style.height="400px"
    document.getElementById('pop').style.display="block"
}

function cancel()
{
    document.getElementById('pop').style.height="0"
    document.getElementById('pop').style.display="none"
}
function ready(){
    var data = localStorage.getItem("userlogin");
    var res = JSON.parse(data);
    id = res[0].id;
    fullname = res[0].name;
    // console.log(fullname);
    $.ajax({
        type: "POST",
        url: "php/home.php",
        data: {
            "homeload": 1,
            "id": id
            
        },
        success: function (response) {
            
            if(response === "Invalid"){
                alert("Something's wrong");
                $(location).attr('href','login.html');
            }
            else{
                localStorage.setItem('userdata',response);

            }

        }
    });
    
    
}
function ready2(){

    var data2 = localStorage.getItem('userdata');

    var res = null;
    res = JSON.parse(data2);
    age = res[0].age;
    bio = res[0].bio;
    city = res[0].city;
    
}
function setValues(){
    $("#titlename").text("Welcome "+fullname);
    $("#titlecard").text(fullname+"'s Bio");
    if(bio === null){
        $("#titlebio").text("No Bio");
    }else{
        $("#titlebio").text(bio);
    }
    if(age != null){
        $("#agetb").val(age);
    }
    if(bio != null){
        $("#biotb").val(bio);
    }
    if(city != null){
        $("#citytb").val(city);
    }
}
$(document).ready(function (){
    ready2();
    setValues(); 
    
    $(document).on("submit","#profileupdate",function (e){
        e.preventDefault();
        var age = $('#agetb').val();
        var bio = $('#biotb').val();
        var city = $('#citytb').val();
        $.ajax({
            type: "POST",
            url: "php/profileupdate.php",
            data: {
                "profileupdate": 1,
                "age": age,
                "bio": bio,
                "city": city,
                "id": id
            },
            success: function (response) {
                
                // console.log(response);
                if(response === "Invalid"){
                    alert("Invalid");
                }
                else{
                    alert("Profile updated");
                    
                }
                $(location).attr('href','home.html');


            }
        });
    });

});