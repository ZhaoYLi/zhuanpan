<?php
$category = 3;//设置奖品种数
$lucknum = 0;//设置幸运数字

/*
 * 设置每个奖品依次中奖的概率
 */
$probability = array(
    10, //三等奖
    20,//二等奖
    30,//一等奖
);

/*
 * 奖品名称
 */
$prizename = array(
    'third prize',
    'second prize',
    'first prize',
);

/*
 * 奖品图片在页面上的序号，返回给前端需要
 */
$prizecode = array(
  3, // 三等奖图片，也可以是6
  2, // 二等奖图片，也可以是7
  1, // 一等奖图片，也可以是4
);

/*
 * 随机选择对哪个奖品种类进行抽奖 
 */
$caterandom = mt_rand(0,$category - 1);

/*
 * 对所选择的奖品种类进行抽奖
 */
$random = mt_rand(0,$probability[$caterandom]);

if($random == $lucknum){
	/*如果抽中，则返回奖品名称和奖品在页面上的序号*/
	$data = array(
	     $prizename[$caterandom],
	     $prizecode[$caterandom],
	);
	/*
	 * 以json格式返回给前端js
	 */
	echo json_encode($data);
}else{
	/*如果未抽中，返回谢谢参与文字和图片序号*/
	$data = array(
	  'Thank you !',
	  5,
	);
	echo json_encode($data);
}

?>