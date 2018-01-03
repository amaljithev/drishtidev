$(window).on('load',function(){$('.another-cont').velocity('fadeOut',300,"swing")
$width_image=150
$height_image=150
if(window.matchMedia('(max-width: 764px)').matches){$('.event-image').attr({height:100,width:100})
$width_image=100
$height_image=100}$('.event-one-container').hide()
var elem=$('.event-tag')
$imgFlag=0
$hamFlag=0
$readFlag=0
mainText=[{header:"DRISHTI 18'",image:'images/logoblacktransp.png',sub:'January 19,20,21',color:'black'},{header:"Competitions",image:'images/cup.png',sub:'',color:'white'},{header:"Workshops",image:'images/workshopswhite.png',sub:'',color:'white'},{header:"Informals",image:'images/informals.png',sub:'',color:'white'},{header:"Projects",image:'images/ideawhite.png',sub:'',color:'white'},{header:"Sponsors",image:'images/hand-shake.png',sub:'',color:'white'},{header:"Contact",image:'images/emailwhite.png',sub:'',color:'white'},]
$('.ham-btn').click(function(){$mediaFlag='25px'
if(window.matchMedia('(max-width: 768px)').matches)$mediaFlag=0
if($hamFlag===0){$('.insta-fab, .fb-fab').velocity({scale:0},100,"swing")
$('.insta-fab2, .fb-fab2').velocity({scale:1.1})
$hamFlag=1}else{$('.insta-fab, .fb-fab').velocity({scale:1},100,"swing")
$('.insta-fab2, .fb-fab2').velocity({scale:0})
$hamFlag=0}if($imgFlag===0){$('.ham-container').velocity('fadeIn',{duration:200,easing:"linear",complete:function(){$('.img').velocity({right:0,left:0,'-webkit-filter':'invert(100%)'},200,"swing")
$('.ham-text-container').velocity({translateY:'0%'},200,"swing")
$('#menu_button').removeClass('fa-bars').addClass('fa-times')}})
$imgFlag=1}else if($imgFlag===1){$('.ham-container').velocity('fadeOut',{duration:400,easing:"linear",begin:function(){$('.ham-text-container').velocity({translateY:'200%'},200,"swing")
$('.img').css({left:$mediaFlag,right:''})
$('#menu_button').removeClass('fa-times').addClass('fa-bars')}})
$imgFlag=0}})
function mailBtnClick(){if(window.matchMedia('(max-width: 764px)').matches){$('.event-one-container').velocity({height:'50%'})
$('.drawer-right').velocity({translateY:'100%'},{duration:400,easing:'swing',begin:function(){$('.mail-fab, .ham-fab, .close-fab').velocity({scale:0},200,"linear")},complete:function(){$('.close-fab-drawer').velocity({scale:1},200,"linear")}})}else{$('.event-one-container').velocity({width:'50%'})
$('.drawer-right').velocity({translateX:['0%','100%']},{duration:400,easing:'swing',begin:function(){$('.mail-fab, .ham-fab, .close-fab').velocity({scale:0},100,"linear")},complete:function(){$('.close-fab-drawer').velocity({scale:1},100,"linear")}})}}$('.mail-btn').click(function(){mailBtnClick()})
$('.close-btn-drawer').click(function(){if(window.matchMedia('(max-width: 764px)').matches){$('.drawer-right').velocity({translateY:'200%'},{duration:400,easing:'swing',begin:function(){$('.event-one-container').velocity({height:'100%'})
$('.close-fab-drawer').velocity({scale:0},100,"linear")},complete:function(){$('.mail-fab, .ham-fab , .close-fab').velocity({scale:1},100,"linear")}})}else{$('.drawer-right').velocity({translateX:['100%','0%']},{duration:400,easing:'swing',begin:function(){$('.event-one-container').velocity({width:'100%'})
$('.close-fab-drawer').velocity({scale:0},100,"linear")},complete:function(){$('.mail-fab, .ham-fab , .close-fab').velocity({scale:1},100,"linear")}})}})
$('.event-button').click(function(){$('.circle'+$count).velocity({scale:100},{easing:'linear',duration:500,begin:function(){$('.circle-content').velocity({opacity:0,display:'none'})},complete:function(){if($count===1)window.location='drishti.html'
else if($count===2)window.location='events.html'
else if($count===3)window.location='workshops.html'
else if($count===4)window.location='informals.html'
else if($count===5)window.location='projects.html'
else if($count===6)window.location='sponsors.html'
else if($count===7)window.location='contact.html'}})})
$('.close-btn').click(function(){$('.close-fab').velocity({scale:0})
$('.event-page-container').fadeOut("slow")
$('.front-page-container').fadeIn("slow")})
var eventText=['DRISHTI  18','Drishti  Night','Workshops  CET','Rise  Again','CET  Life','Cryptex  CET','Amazing  VR  Race']
for(i=8;i<=19;i++)$('.circle'+i).hide()
var scale={'.circle1':6.2,'.circle2':8.3,'.circle3':10.3,'.circle4':12.3,'.circle5':14.3,'.circle6':16.3,'.circle7':18.3,'.circle8':20.3,'.circle9':22.3,'.circle10':24.3,'.circle11':26.3,'.circle12':28.3,'.circle13':30.3,'.circle14':32.3,'.circle15':34.3,'.circle16':36.3,'.circle17':38.3,'.circle18':40.3,'.circle19':42.3}
scaleOffset2=4.4
scaleOffset3=3.8
scale1=scale
scale2={'.circle1':4.4,'.circle2':6.4,'.circle3':8.3,'.circle4':10.4,'.circle5':12.4,'.circle6':14.4,'.circle7':16.4,'.circle8':18.4,'.circle9':20.4,'.circle10':22.4,'.circle11':24.4,'.circle12':26.4,'.circle13':28.4,'.circle14':30.4,'.circle15':32.4,'.circle16':34.4,'.circle17':36.4,'.circle18':38.4,'.circle19':40.4}
scale3={'.circle1':3.8,'.circle2':5.1,'.circle3':6.4,'.circle4':7.6,'.circle5':8.9,'.circle6':10.1,'.circle7':11.4,'.circle8':12.6,'.circle9':13.9,'.circle10':15.1,'.circle11':16.4,'.circle12':17.6,'.circle13':18.9,'.circle14':20.1,'.circle15':21.4,'.circle16':22.6,'.circle17':23.9,'.circle18':25.1,'.circle19':26.4}
$scalValue1=1.4
$scalValue2=1.6
$scrolloffset=0
$count=1;$('#prev').hide()
$scalValue=1
$flag=1000
scale=scale1
$offset=6
$anotherOffset=6.2
$diffOffset=2
if(window.matchMedia('(max-width: 768px) and (min-width: 480px)').matches){$scaleValue=$scalValue1
$flag=2000
scale=scale2
$offset=4
$anotherOffset=4.4}else if(window.matchMedia('(max-width: 480px)').matches){$scaleValue=$scalValue2
$flag=3000
scale=scale3
$offset=3
$anotherOffset=3.8
$diffOffset=1.3}function scaleDown(){if($count>=7){$count=7}else{$count++
$('.event-image, .event-sub, .event-header, .event-button').velocity({opacity:0,display:'none'},{duration:100,easing:'linear',begin:function(){$('.event-image').attr({src:mainText[$count-1].image,width:$width_image,height:$height_image})},complete:function(){if(mainText[$count-1].color==='white'){$('.event-sub, .event-header').removeClass('text-dark').addClass('text-light')
$('.event-button').removeClass('btn-outline-dark').addClass('btn-outline-light')}else{$('.event-sub, .event-header').removeClass('text-light').addClass('text-dark')
$('.event-button').removeClass('btn-outline-light').addClass('btn-outline-dark')}$('.event-header').html(mainText[$count-1].header)
$('.event-sub').html(mainText[$count-1].sub)}}).velocity({opacity:1,display:'block'},{duration:200,easing:'linear'})
hideCount=$count+6
for(i=hideCount;i<=19;i++)$('.circle'+i).hide()
foo=hideCount
$('.circle'+foo).show()
if($count===2)$('#prev').fadeIn('slow')
if($count===7)$('#next').fadeOut('slow')
for(key in scale){val=Math.floor(scale[key])
if(Math.floor(scale[key])===$offset){scale[key]=0
$(key).velocity({'scale':scale[key],opacity:0},{'easing':'linear',duration:200})}else if(Math.floor(scale[key])<=0){scale[key]=scale[key]-$diffOffset
$(key).velocity({'scale':0},{'easing':'linear',duration:200})}else{scale[key]=scale[key]-$diffOffset
$(key).velocity({'scale':scale[key]/$scalValue},{'easing':'linear',duration:200})}}}}function scaleUp(){var $scalValue=1
if(window.matchMedia('(max-width: 768px) and (min-width: 480px)').matches)$scaleValue=$scalValue1
else if(window.matchMedia('(max-width: 480px)').matches)$scaleValue=$scalValue2
if($count<=1){$count=1}else{$count--
$('.event-image, .event-sub, .event-header, .event-button').velocity({opacity:0,display:'none'},{duration:300,easing:'linear',begin:function(){$('.event-image').attr({src:mainText[$count-1].image,width:$width_image,height:$height_image})},complete:function(){if(mainText[$count-1].color==='white'){$('.event-sub, .event-header').removeClass('text-dark').addClass('text-light')
$('.event-button').removeClass('btn-outline-dark').addClass('btn-outline-light')}else{$('.event-sub, .event-header').removeClass('text-light').addClass('text-dark')
$('.event-button').removeClass('btn-outline-light').addClass('btn-outline-dark')}$('.event-header').html(mainText[$count-1].header)
$('.event-sub').html(mainText[$count-1].sub)}}).velocity({opacity:1,display:'block'},{duration:200,easing:'linear'})
hideCount=$count+6
for(i=hideCount;i<=19;i++)$('.circle'+i).hide()
foo=hideCount
$('.circle'+foo).show()
if($count===1)$('#prev').fadeOut('slow')
if($count===6)$('#next').fadeIn('slow')
for(key in scale){val=Math.floor(scale[key])
if(Math.floor(scale[key])===0){scale[key]=$anotherOffset
$(key).velocity({'scale':scale[key],opacity:1},{easing:'linear',duration:200})}else if(Math.floor(scale[key])<0){scale[key]=scale[key]+$diffOffset}else{scale[key]=scale[key]+$diffOffset
$(key).velocity({'scale':scale[key]},{easing:'linear',duration:200})}}}}var elem=document.getElementById("elem")
hammer=new Hammer(elem)
hammer.get('swipe').set({direction:Hammer.DIRECTION_ALL,threshold:5,velocity:0.1});hammer.on("swipeup swipedown",function(event){if(event.type==="swipeup"){scaleDown()}else if(event.type==="swipedown"){scaleUp()}})
$(document).keydown(_.debounce(function(e){switch(e.which){case 40:scaleDown()
break;case 38:scaleUp()
break;}},350))
$('#bt').on('click',_.debounce(function(){scaleDown()},400))
$('#bt2').on('click',_.debounce(function(){scaleUp()},400))
$('body').on('wheel',_.debounce(function(event){if(event.originalEvent.deltaY<0){scaleUp()}else if(event.originalEvent.deltaY>0){scaleDown()}},150))})