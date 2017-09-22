
'use strict'

Vue.component('vids', {
    template: `


<div>
                
            <img src="images/login.png">
                <div id="backBtn">
                    <button id="stats">Back to stats</button>
                </div>

            <div class="Flex">
            
                    <div class="Flex_bg">
                        <div class="vidCont">
                            <iframe class="actVid" src="https://www.youtube.com/embed/vPguoeYTvMI" frameborder="0" allowfullscreen></iframe>
                        </div>
                    <div class="metal m_border">
                        <button class="g_border" id="bnet">Play now for free</button>
                    </div>
                </div>
            </div>

</div>

              `,
});

var chart = new Vue({
    el: '#videos',
});



let game = document.getElementById('bnet');

game.addEventListener('click',function(){
    
    window.location.href = 'https://us.battle.net/hearthstone/en/';
    
});

   
let statsP = document.getElementById('backBtn');

statsP.addEventListener('click',function(){
    
    window.location.href = 'dashboard.html';
    
});

