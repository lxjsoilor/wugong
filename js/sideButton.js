$(function () {
	var topHtml = '<div id="izl_rmenu" class="izl-rmenu"><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=416596401&amp;site=http://www.estronger.cn/&amp;menu=yes" style="background-color:#ff8314;"title="279759361" target="blank" class="btn btn-qq"><i class="glyphicon glyphicon-comment" style="font-size:30px;line-height:1.5; "></i><p class="text-center congHidden" style="font-size:12px">在线客服</p></a>\
					<div class="btn btn-phone"><i class="glyphicon glyphicon-earphone" style="font-size:30px;line-height:1.5;"></i>\
						<p class="text-center congHidden" style="font-size:12px">咨询电话</p>\
						<div class="phone"><a target="_blank" href="tel:13925817311">13925817311</a></div>\
					</div>\
					<div class="btn btn-top" style="none: block;"><i class="glyphicon glyphicon-arrow-up"></i></div>\
					</div>';
	$('body').append(topHtml);

	$("#izl_rmenu").each(function () {
		$(this).find(".btn-phone").on('click', function () {
			$(this).find(".phone").fadeToggle("fast");
		});
		$(this).find(".btn-top").click(function () {
			$("html, body").animate({
				"scroll-top": 0
			}, "fast");
		});
	});
	var lastRmenuStatus = false;
	$(window).scroll(function () { //bug
		var _top = $(window).scrollTop();
		if (_top > 200) {
			$("#izl_rmenu").data("expanded", true);
		} else {
			$("#izl_rmenu").data("expanded", false);
		}
		if ($("#izl_rmenu").data("expanded") != lastRmenuStatus) {
			lastRmenuStatus = $("#izl_rmenu").data("expanded");
			if (lastRmenuStatus) {
				$("#izl_rmenu .btn-top").slideDown();
			} else {
				$("#izl_rmenu .btn-top").slideUp();
			}
		}
	});
});