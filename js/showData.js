(function(){
	var t = null;
	t = setTimeout(time,1000)
	function time(){
		clearTimeout(t)
		var date = new Date();
		var y = date.getFullYear();
		var mt = date.getMonth() + 1;
		var day = date.getDate();
		var h = date.getHours(); //获取时
		var m = date.getMinutes(); //获取分
		var s = date.getSeconds(); //获取秒
		var timestr = "当前时间"+y+"年"+mt+"月"+day+"-"+h+"时"+m+"分"+s+"秒"
		document.querySelector(".showTime").innerHTML = timestr
		 t = setInterval(time,1000)
	}
	time()
})()