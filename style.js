function validate(){
var error1=document.getElementById("error1")
var error2=document.getElementById("error2")
var error3=document.getElementById("error3")
var name=document.getElementById("Name").value
var phone=document.getElementById("Phone").value
var email=document.getElementById("Email").value
var number=/^[0-9]+$/
var em=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
if(name=="")
{
error1.textContent="Please enter Name"
error1.style.color="red"
}
else
{
error1.textContent=""
}
if(phone.match(number)&&phone.length==10)
{
error2.textContent=""
}
else
{
error2.textContent="Enter valid phone number"
error2.style.color="red"
}
if(em.test(email)==false)
{
error3.textContent="Please enter Email ID"
error3.style.color="red"
}
else
{
error3.textContent=""
}
}