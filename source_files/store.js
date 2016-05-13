$(function(){
	//鼠标移上二维码图标显示二维码
	$appList = $('body');
	$appList.on('mouseover','.item-bottom .icon-qr',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow .item-top p').css('top','0');
	}).on('mouseout','.item-bottom .icon-qr',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow .item-top p').css('top','100%');
	});
	//鼠标移上item-top显示二维码
	$appList.on('mouseover','.item-top',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow .item-top p').css('top','0');
	}).on('mouseout','.item-top',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow .item-top p').css('top','100%');
	});
	//鼠标移上item去掉边框阴影
	$appList.on('mouseover','.u-listShow',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow').removeClass('f-card');
	}).on('mouseout','.u-listShow',function(){
		var $parents = $(this).parents('li.item');
		$parents.find('.u-listShow').addClass('f-card');
	});	
});


