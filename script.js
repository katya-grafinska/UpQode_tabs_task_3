$('.tabs-header li').on('click', function () {
  var $currentHeaderItem = $(this);
	var $parent = $currentHeaderItem.closest('.tabs');
	var $currentItem = $parent.find('.tabs-content .tabs-item').eq($currentHeaderItem.index());
	var $activeItem = $parent.find('.tabs-item.active');

	$activeItem.removeClass($activeItem.data('class'));
	$parent.find('li, .tabs-item').removeClass('active');

	$currentHeaderItem.addClass('active');
	$currentItem.addClass('active');
	$currentItem.addClass($currentItem.data('class'));
});