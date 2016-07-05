$(function(){

		$('.tab').each(function(index){
			
		var $tab_menu_n = $(this).find('.tab_ul').children('li');

		var $tab_box = $(this).find('.tab_div');

		$tab_menu_n.eq(0).addClass('title_on').siblings().removeClass('title_on');

		$tab_box.children('div').eq(0).show().siblings().hide();

		$tab_menu_n.hover(function(){

			$(this).addClass('title_on').siblings().removeClass('title_on');

			$tab_box.children('div').eq( $tab_menu_n.index(this) ).show().siblings().hide();
		});

	}); //each
});

