$('.tabs-header li').on('click', function () {

	var $parent = $(this).closest('.tabs');

	$parent.find('li, .tabs-item').removeClass('active');
	$(this).addClass('active');
	$parent.find('.tabs-content .tabs-item').eq($(this).index()).addClass('active');
});