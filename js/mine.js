var Name = document.getElementById("name");
var num = document.getElementById("num");
var email = document.getElementById("email");
var sendBtn = document.getElementById("send");

//declarations for status
var nameStatus = document.getElementById("nameStatus");
var emailStatus = document.getElementById("emailStatus");
var phoneStatus = document.getElementById("phoneStatus");


//for validate form 
var validNum = /^(011||012||010||015)[0-9]{8}$/;

var validName = /^[A-Za-z ]{3,10}$/;

var validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validUserEmail(){
    if(validEmail.test(email.value)){
        emailStatus.innerHTML = '<p style="color:green;"> correct </p> ';
    }
    else{
        emailStatus.innerHTML = '<p style="color:red;"> in correct email </p> ';
    }
}

function validUserName(){

    if(validName.test(Name.value)==true){

        nameStatus.innerHTML = '<p style="color:green;"> correct </p> ';

    }
    else{
         nameStatus.innerHTML = '<p style="color:red;">in correct name </p> ';

    }

}

function validNumber(){
    if(validNum.test(num.value)==true){
    
        phoneStatus.innerHTML = '<p style="color:green;"> correct </p> ';
       
    
    }
    else{
        phoneStatus.innerHTML = '<p style="color:red;"> in Correct number </p> ';
    }
    }



// add events in btn
sendBtn.addEventListener("click",validNumber);

sendBtn.addEventListener("click",validUserName);

sendBtn.addEventListener("click",validUserEmail);






