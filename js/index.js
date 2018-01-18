var data = 2;//要停留的图片的序号
var total = 8;//图片总数 （不包括按钮）
var msg = '';
var current = 1;//记录当前步数，即step数组的下标
var step = [
['c1',0],['c1',500],['c2',400],['c3',300],['c4',200],['c5',200],['c6',200],['c7',200],['c8',200],
['c1',100],['c2',100],['c3',100],['c4',100],['c5',100],['c6',100],['c7',100],['c8',100],
['c1',100],['c2',100],['c3',100],['c4',100],['c5',100],['c6',100],['c7',100],['c8',100],
['c1',100],['c2',100],['c3',100],['c4',100],['c5',100],['c6',100],['c7',100],['c8',100],
['c1',100],['c2',200],['c3',300],['c4',300],['c5',300],['c6',300],['c7',300],['c8',300],
['c1',400],['c2',400],['c3',400],['c4',400],['c5',400],['c6',400],['c7',400],['c8',400]
];

//设置样式和重新设置定时器
function run(m){
	msg = m[0];  //设置在转盘结束时弹窗显示的文字
        data = m[1]; //设置需要停在的图片序号
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
		setTimeout(function(){
			run(m)
		},step[current][1]);
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
		success:run

	});
}

