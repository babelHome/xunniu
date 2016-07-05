	$(function(){
		var i = 0;
		var timer;
		var $ul = $(".photos");
		var $li = $(".photos li");
		var $Button = $(".BanBt span");
		var len = $(".photos li").length;
		
		function init(){
			i++;
			if(i >= len)
				i = 0;
			slider(i);
		}
		
		$Button.hover(function(){
			var index = $(this).index();
			i = index;
			slider(index);
			if(index+1 >= len)
				i = -1;
		})

		function slider(i){
			$ul.animate({left:'-330'*i+'px'},'slow');
			$Button.eq(i).addClass("ban_on").siblings().removeClass("ban_on");
		}

		
		$(".banner").hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(init,2000);
		})
		
		timer = setInterval(init,2000);
	})