
'use strict'

Vue.component('charts', {
    template: `

                <div class="pos_chart">
               

                 
                    <div class="chart1">
                        
                        <div class="centerC">
                            <h2>Wins/Losses</h2>
                            <canvas id="myChart"></canvas>
                        </div>
                    </div>
                    


                    <div class="chart2">
                        
                        <div class="centerC">
                            <h2>Deck Play Count</h2>
                            <canvas id="myChartW"></canvas>
                        </div>
                    </div>



                </div>


              `,
});

var chart = new Vue({
    el: '#chart',
});





var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Wins", "Losses"],
        datasets: [{
            
            data: [75, 25],
            backgroundColor: [
                'rgb(255, 99, 99)',
                'rgb(218,165,32)'
            ],
            borderColor: [
                'rgb(255, 0, 0)',
                'rgb(255,215,0)'
            ],
            borderWidth: 1,
            hoverBorderColor: [
                
                 'rgb(255, 0, 0)',
                'rgb(255,215,0)'
            ],
            hoverBorderWidth: 2
        }]
    },
    options: {
        
    }
});





var ctxW2 = document.getElementById("myChartW").getContext('2d');
var myChartW2 = new Chart(ctxW2, {
    type: 'bar',
    data: {
        labels: ["Pirate", "Agro", "Control", "Patron", "Murloc"],
        datasets: [{
           
            data: [12, 28, 42, 23, 15],
            backgroundColor: [
                'rgb(255, 99, 99)',
                'rgb(255, 99, 99)',
                'rgb(255, 99, 99)',
                'rgb(255, 99, 99)',
                'rgb(255, 99, 99)'
            ],
            borderColor: [
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)'
            ],
            borderWidth: 1,
            hoverBorderColor: [
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)',
                'rgb(255, 0, 0)'
            ],
            hoverBorderWidth: 2
        }]
    },
    options: {
        legend: {
        display: false
    },
    }
});

















Vue.component('charts', {
    template: `

                 <div class="pos_chart">
               

                 
                    <div class="chart1">
                        
                        <div class="centerC">
                            <h2>Wins/Losses</h2>
                            <canvas id="myChartM"></canvas>
                        </div>
                    </div>
                    


                    <div class="chart2">
                        
                        <div class="centerC">
                            <h2>Deck Play Count</h2>
                            <canvas id="myChartM2"></canvas>
                        </div>
                    </div>



                </div>


              `,
});



var chartM = new Vue({
    el: '#chartM',
});


var ctxM = document.getElementById("myChartM").getContext('2d');
var myChartM = new Chart(ctxM, {
   type: 'doughnut',
    data: {
        labels: ["Wins", "Losses"],
        datasets: [{
            
            data: [62, 38],
            backgroundColor: [
                'rgb(60, 107, 214)',
                'rgb(218,165,32)'
            ],
            borderColor: [
                'rgb(117, 159, 255)',
                'rgb(255,215,0)'
            ],
            borderWidth: 1,
            hoverBorderColor: [
                
                 'rgb(76, 131, 255)',
                'rgb(255,215,0)'
            ],
            hoverBorderWidth: 2
        }]
    },
    options: {
        
    }
});




var ctxM2 = document.getElementById("myChartM2").getContext('2d');
var myChartM2 = new Chart(ctxM2, {
    type: 'bar',
    data: {
        labels: ["Ice block", "Control", "Tempo", "Agro", "Secret"],
        datasets: [{
           
            data: [19, 43, 29, 37, 22],
            backgroundColor: [
                 'rgb(60, 107, 214)',
                 'rgb(60, 107, 214)',
                 'rgb(60, 107, 214)',
                 'rgb(60, 107, 214)',
                 'rgb(60, 107, 214)',
                
            ],
            borderColor: [
               'rgb(117, 159, 255)',
                'rgb(117, 159, 255)',
                'rgb(117, 159, 255)',
                'rgb(117, 159, 255)',
                'rgb(117, 159, 255)',
            ],
            borderWidth: 1,
            hoverBorderColor: [
                'rgb(76, 131, 255)',
                'rgb(76, 131, 255)',
                'rgb(76, 131, 255)',
                'rgb(76, 131, 255)',
                'rgb(76, 131, 255)',
            ],
            hoverBorderWidth: 2
        }]
    },
    options: {
        legend: {
        display: false
    },
    }
});