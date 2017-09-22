// LOG IN COMPONENT

'use strict'

Vue.component('log-in', {
    template: `

            <div class="logC">
                <form class="logIn-cont">

                    <h1>Log In</h1>

                    <input id="userName" type="text" placeholder="User Name">

                    <input id="userPassword" type="password" placeholder="Password">
                        
                   

                    <input id="submitBtn" type="submit" value="Login">
                
                </form>
            </div>
              `,
});

var logIn = new Vue({
    el: '#logIn',
});

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',function(){
    
    checkPassword();
    
});

   function checkPassword() {
            
            event.preventDefault();
            
            
            let myUserName = "1";
            let myUserPassword = "2";
            let password = document.getElementById('userPassword').value;
            let username = document.getElementById('userName').value;
            
            if(password == myUserPassword && username == myUserName) {
              window.location.href ='dashboard.html';
            }else{
                alert("Invalid Username or/and Passowrd");
                document.getElementById('userName').value = "";
                document.getElementById('userPassword').value = "";
                document.getElementById('userName').focus();
                
            }
            
        };
    
