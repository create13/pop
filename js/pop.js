!function($){
	$.pop=function(options){
		var content ='<div class="popOut"><div class="popUp">'+
	   	'<span class="wz-title">Modal Window</span> <img src="img/img-icon.png" alt="" title="" class="imgMotiply" /></div>'+
		'<div class="popContent"><div class="wz-write"></div></div>'+
		'<div class="popEnd"><button class="sureBtn">OK</button> or<button class="cancel">cancle</button></div></div>'
		$(content).appendTo("body");
		var defaults = {
			popWidth:'550px',
			popHeight:'300px',
			background:'#E7F8FF',
			titleColor:'#ff0000',
			sureBack:'#7BC475',
			cancleBack:'lightgrey'
		}
		var opts = $.extend({},defaults,options);
		var $this = $(this);
		$(".imgMotiply").off('click').on('click',function(){
			$(".popOut").hide();
		})
		$(".sureBtn").off('click').on('click',function(){
		$(".popOut").hide();
		})
		$(".cancel").off('click').on('click',function(){
		$(".popOut").hide();
		})
		return{
			moveSet:function(){
				$(".popOut").bind('mousedown',function(e){
				//获取需要拖动元素的坐标
				var leftSet = $(this)[0].offsetLeft;
				var topSet = $(this)[0].offsetTop;
				var xSet = e.pageX;
				var ySet = e.pageY;
				$(document).bind('mousemove',function(event){
				//获取移动了的位置
				var moveSetx = event.pageX - xSet;
				var moveSety = event.pageY - ySet;
				var finalSetx = moveSetx + leftSet;
				var finalSety = moveSety + topSet;
				$(".popOut").css({left:finalSetx,top:finalSety})
			})
			
			})
			$(document).bind('mouseup',function(){
				$(this).unbind('mousemove');
			})
			},
			methodS:function(options){
				$(".wz-title").css('color',options.titleColor);
				$(".popOut").css({'width':options.popWidth,'height':options.popHeight,'backgroundColor':options.background});
				$(".sureBtn").css('backgroundColor', options.sureBack);
				$(".cancel").css('backgroundColor', options.cancleBack);
			},
			close:function(){
				$(".popOut").hide();
			},
			hided:function(){
				$(".cancel").hide();
			}
			
		}
	}


}(window.jQuery)