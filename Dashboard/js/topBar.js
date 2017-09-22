// LOG IN COMPONENT

'use strict'

Vue.component('top-bar', {
    template: `      

                <div class="topBar">
                
                    

                    <div id="borderT" class="border"></div>
                    <div id="borderR" class="border"></div>
                    <div id="borderL" class="border"></div>
                    <div id="borderB" class="border"></div>
                    <div id="topR" class="corner"></div>
                    <div id="topL" class="corner"></div>
                    <div id="botR" class="corner"></div>
                    <div id="botL" class="corner"></div>

                   
                        <h1>Select your class</h1>
                  

                    <div class="hoz_list">
                        <ul class="Top_icons">

                            <li><div class="metalw"><a href="#"><img id="warrior_icon" src="images/warrior_i.png"></a></div></li>

                            <li><div class="metalm"><a href="#"><img id="mage_icon" src="images/mage_i.png"></a></div></li>

                            <li><div class="metald"><a href="#"><img id="druid_icon" src="images/druid_i.png"></a></div></li>

                        </ul>
                    </div>

                </div>

              `,
});

var logIn = new Vue({
    el: '#topBar'
})