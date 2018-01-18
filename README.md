# zhuanpan
PHP、Javascript、jQuery 实现转盘抽奖

//设置样式和重新设置定时器
function run(){
	//删除之前设置是cur类
	$('#'+step[current-1][0]).removeClass('cur');
	//为当前元素设置cur类
	$('#'+step[current][0]).addClass('cur');
	//判断step数组所有步骤是否已经走完
//	if(current == step.length - 1)
    if(step.length - current  + data == total)
	{
		alert(msg);
		window.location.reload();
	}else{
		//重置定时器
		setTimeout('run()',step[current][1]);
		current++;
	}
}

/*
 * 使用ajax与后端通信
 */
function start(){
	$.ajax({
		url:"../index.php",
		type:"GET",
		dataType:"json",
		success:function(m){
			msg = m[0];  //设置在转盘结束时弹窗显示的文字
	    data = m[1]; //设置需要停在的图片序号
	    run();
		}
	});
}

