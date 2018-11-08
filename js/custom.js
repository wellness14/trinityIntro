// 헤더 상담신청 show/hide
window.addEventListener('scroll',function (scrollY) {
	if ($('#header').hasClass('header-sticky')) {
		$('#header .toggle-item').removeClass('hide');
	}else {
		$('#header .toggle-item').addClass('hide');
	}
});

