$(document).ready(function(){
	
    
    
    

   
        
        $('#char').attr('src','images/gar.png');
        $('#sideBarMenu1').css('background-image', 'url(images/red_vel.jpg)');
        
        $('#skBar').attr('style', 'background: #d14b4b; height: 20px;');
        $('#skBarP').attr('data-percent', '55%');
        
          $(".TextGlow").hover(function(){
        $(this).css("text-shadow", "0px 0px 25px rgb(255, 61, 61)");
        }, function(){
        $(this).css("text-shadow", "0px 0px 25px transparent");
    });
        
         
        
        $('#exp').html('550/1000');
        $('#Cname').html('Warrior');
        
       if (($('#chartM').hasClass('show')) || ($('#chartD').hasClass('show'))){

                     
                   
                    
                    $('#chartM').addClass('hide');
                    $('#chartM').removeClass('show');
            
                    $('#chartD').addClass('hide');
                    $('#chartD').removeClass('show');
           
                    $('#chart').addClass('show');

                }else{
                      $('#chart').addClass('show');
                    
                }
        
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},500);
	});
        
   

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var warrior_i = document.getElementById('warrior_icon');
    
    warrior_i.addEventListener('click', function(){
        
        $('#char').attr('src','images/gar.png');
        $('#sideBarMenu1').css('background-image', 'url(images/red_vel.jpg)');
        
        $('#skBar').attr('style', 'background: #d14b4b; height: 20px;');
        $('#skBarP').attr('data-percent', '55%');
        
          $(".TextGlow").hover(function(){
        $(this).css("text-shadow", "0px 0px 25px rgb(255, 61, 61)");
        }, function(){
        $(this).css("text-shadow", "0px 0px 25px transparent");
    });
        
         
        
        $('#exp').html('550/1000');
        $('#Cname').html('Warrior');
        
       if (($('#chartM').hasClass('show')) || ($('#chartD').hasClass('show'))){

                     
                   
                    
                    $('#chartM').addClass('hide');
                    $('#chartM').removeClass('show');
            
                    $('#chartD').addClass('hide');
                    $('#chartD').removeClass('show');
           
                    $('#chart').addClass('show');

                }else{
                      $('#chart').addClass('show');
                    
                }
        
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},500);
	});
        
   

        
    });
    
    
    
    
    
    
    
    var mage_i = document.getElementById('mage_icon');
    
    mage_i.addEventListener('click', function(){
        
        $('#char').attr('src','images/jan.png');
         $('#sideBarMenu1').css('background-image', 'url(images/blue_vel.jpg)');
        
             $('#skBar').attr('style', 'background: #4050ce; height: 20px;');
        
         $('#skBarP').attr('data-percent', '82%');
        
         $(".TextGlow").hover(function(){
        $(this).css("text-shadow", "0px 0px 25px rgb(48, 111, 255)");
        }, function(){
        $(this).css("text-shadow", "0px 0px 25px transparent");
    });
        
        
        
         $('#exp').html('825/1000');
        $('#Cname').html('Mage');
        
        if (($('#chart').hasClass('show')) || ($('#chartD').hasClass('show'))){


                    
                    $('#sideList').addClass('TextGlowM');
                
                    $('#chart').addClass('hide');
                    $('#chart').removeClass('show');
            
                    $('#chartD').addClass('hide');
                    $('#chartD').removeClass('show');
            
            
                    $('#chartM').addClass('show');
            
           
                }else{
                    
                     $('#chartM').addClass('show');
                }
        
        $('.skillbar').each(function(){
		$(this).find('.skillbar-bar').animate({
			width:$(this).attr('data-percent')
		},500);
	});
        
    });
    
    
    
    
    
    
    
    
//    var druid_i = document.getElementById('druid_icon');
//    
//        druid_i.addEventListener('click', function(){
//        
//        $('#char').attr('src','images/mal.png');
//        
//        
//    });
    
 
    
});

