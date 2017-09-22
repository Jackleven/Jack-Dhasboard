// LOG IN COMPONENT

'use strict'

Vue.component('pro-cont', {
    template: `      

                <div class="pro-style">


                    <div id="borderT" class="border"></div>
                    <div id="borderR" class="border"></div>
                    <div id="borderL" class="border"></div>
                    <div id="borderB" class="border"></div>

                            <h3><a href="index.html">Logout</a></h3>
                            <div>
                                   
                                    <h1>Jack Username</h1>
                                    

                            </div>
                            <div class="flex_sm">
                            <img src="images/rank5.png">
                            <h2>Rank 5</h2>
                            
                            </div>
                           
                </div>

              `,
});

var logIn = new Vue({
    el: '#proID'
})