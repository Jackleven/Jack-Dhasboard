// LOG IN COMPONENT

'use strict'

Vue.component('side-bar', {
    template: `      
                <div id="sideBarMenu1" class="sideBarMenu">

                    <div id="borderT" class="border"></div>
                    <div id="borderR" class="border"></div>
                    <div id="borderL" class="border"></div>
                    <div id="borderB" class="border"></div>
                    <div id="topR" class="corner"></div>
                    <div id="topL" class="corner"></div>
                    <div id="botR" class="corner"></div>
                    <div id="botL" class="corner"></div>
                        <div class="fflex">

                        <h2 id="Cname">Warrior</h2>



                        <img id="char" src="images/gar.png">



   
                       <div id="skBarP" class="skillbar clearfix" data-percent="60%">


		<div class="skillbar-title" style="background: transparent;">
			<span>Level</span><span class="level">30</span>
		</div>


		<div id="skBar" class="skillbar-bar" style="background: #d14b4b; height: 20px;">
		</div>


		<div id="exp" class="skill-bar-percent">
			550/1000 
		</div>
	</div> 

                        <div>




                            <ul id="sideList">

                                <li class="TextGlow"><a href="#">Stats</a></li>

                                <li class="TextGlow"><a href="#">Decks</a></li>

                                <li class="buyh TextGlow"><a href="buy_page.html">Buy HearthStone</a></li>


                            </ul>
                        </div>

                    </div>
        
                </div>

              `,
});

var logIn = new Vue({
    el: '#sideBarMenu'
})