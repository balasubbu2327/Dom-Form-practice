var div=document.createElement("div")
div.classname="Form"
var label1=document.createElement("label");
label1.setAttribute("for","fname");
label1.innerHTML="First Name";
var inp1=document.createElement("input");
inp1.setAttribute("type","text");
inp1.setAttribute("id","fname");
inp1.setAttribute("placeholder","First name")
var br1=document.createElement("br");

var label2=document.createElement("label");
label2.setAttribute("for","lname");
label2.innerHTML="Last Name";
var inp2=document.createElement("input");
inp2.setAttribute("type","text");
inp2.setAttribute("id","lname");
inp2.setAttribute("placeholder","Last name")
var br2=document.createElement("br");

var label3=document.createElement("label");
label3.setAttribute("for","email");
label3.innerHTML="Email";
var inp3=document.createElement("input");
inp3.setAttribute("type","email");
inp3.setAttribute("id","email");
inp3.setAttribute("placeholder","E-mail")
var br3=document.createElement("br");

var label4=document.createElement("label");
label4.setAttribute("for","pwd");
label4.innerHTML="Password";
var inp4=document.createElement("input");
inp4.setAttribute("type","password");
inp4.setAttribute("id","pwd");
inp4.setAttribute("placeholder","Password")
var br4=document.createElement("br");

div.append(label1,inp1,br1,label2,inp2,br2,label3,inp3,br3,label4,inp4,br4);
document.body.append(div);
var button=document.createElement("button");
button.setAttribute("type","button");
button.className="btn btn-primary";
button.innerHTML="click me";
button.addEventListener("click",foo);
document.body.append(button);

function foo(){
    var res1=document.getElementById("fname").value;
    var res2=document.getElementById("lname").value;
    var res3=document.getElementById("email").value;
    var res4=document.getElementById("pwd").value;
    console.log(`fname:${res1} lname:${res2} Email:${res3} pwd:${res4}`);
}

