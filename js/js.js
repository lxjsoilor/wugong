//地图加载
var h1=$('#contactInfo').height();
$('#mapWrap').height(h1);
$('#mapWrap').children().css({
	'height':h1+50,
	'margin-top':'-50px'
});

var map = new AMap.Map('container', {
    resizeEnable: true,
    zoom:17,
});
map.setCenter([113.730411,23.003329]);

//标注点
var marker = new AMap.Marker({
    position: [113.730411,23.003329]
});
marker.setMap(map);