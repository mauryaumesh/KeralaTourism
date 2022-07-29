let nameNode=document.getElementById("name");
let mobileNode=document.getElementById("contact");
let emailNode=document.getElementById("mail");
let passNode=document.getElementById("pass");
let c_passNode=document.getElementById("confirmpass");
let unameNode=document.getElementById("uname");
let errorNode1=document.getElementById("error1");
let errorNode2=document.getElementById("error2");
let errorNode3=document.getElementById("error3");
let errorNode4=document.getElementById("error4");
let errorNode5=document.getElementById("error5");
let errorNode6=document.getElementById("error6");

let array=[errorNode1,errorNode2,errorNode3,errorNode4,errorNode5,errorNode6];
for(let node of array){
  node.style.color="red";
}

function validate1(){
    let name=nameNode.value;
    let regex=new RegExp("^[A-Za-z]*$");
    errorNode1.innerHTML="";
    if(name===''){
        errorNode1.innerHTML="<small>Name is required</small>";
        nameNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(name)==false){
        errorNode1.innerHTML="<small>Name must have only letters</small>";
        nameNode.style.border="2px solid red";
        return false;
    }
    else{
        nameNode.style.border="2px solid green";
        return true;
    }
}
function validate2(){
    let mobile=mobileNode.value;
    errorNode2.innerHTML="";
    let regex=new RegExp("^[0-9]{10}$");
    console.log(mobile);
    console.log(regex.test("mobile"));
    if(mobile===''){
        errorNode2.innerHTML="<small>Mobile number is required</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else if(regex.test(mobile)===false){
        errorNode2.innerHTML="<small>Mobile number must be 10 digits number</small>";
        mobileNode.style.border="2px solid red";
        return false;
    }
    else{
        mobileNode.style.border="2px solid green";
        return true;
    }

}
function validate3(){
    let email=emailNode.value;
    errorNode3.innerHTML="";
    if(email===''){
        errorNode3.innerHTML="<small>Email is required</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else if(!email.includes('@') || email.endsWith('@')){
        errorNode3.innerHTML="<small>Please enter valid email</small>";
        emailNode.style.border="2px solid red";
        return false;
    }
    else{
        emailNode.style.border="2px solid green";
        return true;
    }
}
function validate4(){
    let uname=unameNode.value;
    errorNode4.innerHTML="";
    if(uname===''){
        errorNode4.innerHTML="<small>username is required</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else if(uname.length<3 || uname.length>10){
        errorNode4.innerHTML="<small>username must be 3 to 10 characters long</small>";
        unameNode.style.border="2px solid red";
        return false;
    }
    else{
        unameNode.style.border="2px solid green";
        return true;
    }
}
function validate5(){
    let pass=passNode.value;
    errorNode5.innerHTML="";
    let regx=new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,12}$");
    if(pass===''){
        errorNode5.innerHTML="<small>Password is required</small>";
        passNode.style.border="2px solid red";
        return false;
    }
    else if(regx.test(pass)==false){
        errorNode5.innerHTML="<small>Password should be 6 to 12 characters long Password should have atleast</small>";
        let ulNode=document.createElement('ul');
        errorNode5.append(ulNode);
        ulNode.style.fontSize="10px";
        let ar=['Capital Letter','Small Letter','Digit','Special Symbol'];
        for(let val of ar){
            let liNode=document.createElement('li');
            liNode.textContent=val;
            ulNode.append(liNode);
        }
        passNode.style.border="2px solid red";
        return false;
    }
    else{
        passNode.style.border="2px solid green";
        return true;
    }
}
function validate6(){
    let cpass=c_passNode.value;
    let pass=passNode.value;
    errorNode6.innerHTML="";
    if(cpass===''){
        errorNode6.innerHTML="<small>Password is required</small>";
        c_passNode.style.border="2px solid red";
        return false;
    }
    else if(cpass!=pass){
        errorNode6.innerHTML="<small>Both passwords should match</small>";
        c_passNode.style.border="2px solid red";
        return false;
    }
    else{
        c_passNode.style.border="2px solid green";
        return true;
    }
}
function validateForm(){
    let v1=validate1();
    let v2=validate2();
    let v3=validate3();
    let v4=validate4();
    let v5=validate5();
    let v6=validate6();
    return (v1 && v2 && v3 && v4 && v5 && v6); 
}