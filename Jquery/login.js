let emailNode,passNode;
let errorNode1,errorNode2;
$(document).ready(function(){
    emailNode=$('#mail');
    passNode=$('#pass');
    $("#btn-login").click(function(){
        email=emailNode.val();
        pass=passNode.val();
        if(email===''){
            alert("please enter email.");
        }
        else if(pass===''){
            alert("please enter password.");
        }
        else if(email === 'maurya' && pass === '123456')
          {
              window.open("booking.html")
          }
          
    });
});