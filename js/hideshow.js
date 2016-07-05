$(function(){
$('.ggsy_img1').click(function(){
			$('.gg_u2').toggle();
		});

		$('.gg_l4').click(function(){
			$(this).parents().children('.gg_u2').toggle();
		})
});