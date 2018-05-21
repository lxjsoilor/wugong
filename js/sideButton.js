$(function () {

	var topHtml = '<div id="izl_rmenu" class="izl-rmenu">\
					<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=416596401&amp;site=http://www.estronger.cn/&amp;menu=yes" style="background-color:#ff8314;"\
						title="279759361" target="blank" class="btn btn-qq">\
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlCMTdGQkRBNUNBMzExRTg5MUY4QUE1NjQzMzBBQ0FCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlCMTdGQkRCNUNBMzExRTg5MUY4QUE1NjQzMzBBQ0FCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUIxN0ZCRDg1Q0EzMTFFODkxRjhBQTU2NDMzMEFDQUIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUIxN0ZCRDk1Q0EzMTFFODkxRjhBQTU2NDMzMEFDQUIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5jB3qnAAACCElEQVR42rTWzUtUURjH8ZnJUHJKCXI0Ssz3fIlA/BskMDdCEbgR3GWbKHe+LBTElS36B0TEjWshoRYJLtwoogatREFtMhhf83X6nvhdO1zOZcyrFz7MnONznmfuPS/XaDqdjlznFc1QoACv8Ax1SKh/AwuYxBi2AjOYAg5xDOEg/e9KYUlSVr+JGUSuK5creRW+afAmevHYEfcUfVhXrBlTkalANZIa8BG3A+7QZn75B41J+ovYgSbZdwW+vkBivw7rTuKuAsMK6L9Eck+Pcgz5CxThSBN4M0SBLMxr4hN2gS5VbguR3PNCud7aBT5jHzlXUCBbuabsAlv46giuwyPfEq6y2uWocYyb1vI9L2CuUcc69zZSoZbfKU5QhoeaN9NX7xs7rrGRLGtTn/k2+TFO1W/OkxOr7X03nzF92teN8z5V/IkvjlstwX2rbX71A6tt/lbsGDeDDfsRmQnZCblEPWah/Makacd0S+ZUjKP5Ck7oVmRjyn5ECU3mLGIhN9ocDnHPf1QMaubfhyjQqRwDrrPoFha17F5eskCfCjQEHdelWFORbt3y/xRo9D+FSMDSnFPgMtqR74grwBus4AdGdJaldPT8jQt6J+fgneRpcy1jVZuoGJXmnY5tJFFmjT/CXexleunf0bJrwhMUagdvYh6fMIFdVKMFz1GOWvyKXve/LX8EGABmW07cZPq2PwAAAABJRU5ErkJggg==" alt="" style="display:inline-block;padding:10px;">\
						<p class="text-center congHidden" style="font-size:12px">在线客服</p>\
					</a>\
					<div class="btn btn-phone">\
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlDMDNFNUVGNUNBMzExRTg5RjAwRTcxRjBBQkE3NjJFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlDMDNFNUYwNUNBMzExRTg5RjAwRTcxRjBBQkE3NjJFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUMwM0U1RUQ1Q0EzMTFFODlGMDBFNzFGMEFCQTc2MkUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUMwM0U1RUU1Q0EzMTFFODlGMDBFNzFGMEFCQTc2MkUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5/eKc0AAACaElEQVR42qyVT0hUURTG7zihTFRIokYJBWlTiOJOdOEioogBEbNEpNoWJAQiBLlQKHAhgmK0alPRploIQ0XYGEUtalFYRBC2MBuaoCwps7Sm79h34XR5d95MdOE3f+479333fu+c8yLZbNZwFIMO0AiKwASYNH+PMjALSsAMuA+ugJTxDREAdWAm+2csge/8neB1SxE4CUbATfCVcQ9BgxO7inxsAu/BO9AO1oAYeA2mghYp1lHwAzd1NEhgHKwE7OA0d7c9RMRu8h7jD7sCc2AiYNEW8BOczUNAWAse0OJaLSBjyLMoCd6CKP9vpB0ydxHsdOI3g3mQ0gJpcMkj0M4N7Od/EeoH1/iAxfeDzppermmyArfAc49AnMEnPBY+oki9mi8Fy2DMCpyh16XODVrAK7AIajwbqACfeCI9fwc8tQK7ucsOFWAzIgP2hjzc89xERM2d48lWK1aqcR50qfpL8rsT3Da5xzSIgQ1qbo6dwWjFH8wC6+NHFlok5ATrVRIYlW17rEXCLloyrIJ6OHcszzowvlZhuQq+ga2q79xl4TT/D4Fq3uyGskVawCz4DBpVbCd4AR6DA/kKCKdoS48jLO3kCzgEjjPmperAU04teAWizOFlJz3FtmnebIWtoAQUgz6wwHlJ2bJcAoYBtsBanGY2yhu5PagSXAC/wBu2ca+AsI22yDPpcq7tyOF5gqfsDhMQqsAzLhjlCcKyJl6IgH1jXeYisa0tpPAGGFudr4CllZbJeAKOaJ+VPUvuy6uQoonx/ZumkCTBddpnm6O0/fJ/FdCpvI9vtAxbvdg3GHAq81uAAQDWzcDjAyjc4AAAAABJRU5ErkJggg==" alt="" style="display:inline-block;padding:10px;">\
						<p class="text-center congHidden" style="font-size:12px">咨询电话</p>\
						<div class="phone"><a target="_blank" href="tel:13925817311">13925817311</a></div>\
					</div>\
					<div class="btn btn-top" style="display:none;">\
						<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBNjEwNTNDNUNBMzExRThCQkY4REFGRkI3OEYzMzk2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBNjEwNTNENUNBMzExRThCQkY4REFGRkI3OEYzMzk2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE2MTA1M0E1Q0EzMTFFOEJCRjhEQUZGQjc4RjMzOTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE2MTA1M0I1Q0EzMTFFOEJCRjhEQUZGQjc4RjMzOTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7zcjNUAAAA+klEQVR42mL8//8/g2jS2ZsMDAxqDNQF11/PM9ZigXLuADE7lS24DyIYQT6gJWAiRTEwKI2A2JAmFgANjgZSp4H4DJAdSKw+ooIIaKAfkFqP5KDfQBwCjMRNFPsAavgaJLUgF7GCxKBy5FuAZDjIwCyo8CcomyhLmIg1HBgc02FyUHYpMZYwkWo4kiU9QKqSkCVMBAwvwmY4kiUdhCxhQjPcEsnwSqAB/YQiEYslZvh8IAgVK4dqJApA1ZZD9QqjSILyATIWSTzDhC6GJPcfiD/gkWdGF2PC4pp/5JY7QL1/KSqLaF7YjVowasHAWMBCovqT0PqAaAAQYADFwaDm15FjngAAAABJRU5ErkJggg==" alt="" style="display:inline-block;padding-top:24px;">\
					</div>\
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