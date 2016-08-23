
var map = document.getElementById('map');

var hero = document.getElementById('hero');

var gameOverPage = document.getElementById('gameOverPage');

var gameScore = document.getElementById('gameScore');

var panelScore = document.getElementById('panelScore');

var restartBtn = document.getElementById('restartBtn');

var startPage = document.getElementById('startPage');

var playBtn = document.getElementById('playBtn');

//var bgm = document.getElementById('bgm');

//var bomb = document.getElementById('bomb');



var gameState = 0; 	// 0:游戏未开始或游戏结束     1：正在游戏
var score = 0; 	// 分数


// 开始游戏
playBtn.onclick = function(){
	startPage.style.display = 'none'
	gameState = 1;
}

// 重新玩
restartBtn.onclick = function(){
	gameState = 1;
	gameScore.innerHTML = score;
	gameOverPage.style.display = 'none';
	hero = document.createElement('img');
	hero.src = 'img/hero.png';
	map.appendChild(hero);
	hero.style.height = '60px'
	hero.style.width = '80px'
	hero.style.left = '240px'
	hero.style.top = '500px'
	hero.style.position = 'absolute'
	
	
	
}





//////////////  地图的滚动  ///////////////////
var scrollMap1 = document.getElementById('scrollmap1');
var scrollMap2 = document.getElementById('scrollmap2');
// setTimeOut(表达式,延时时间)在执行时,是在载入后延迟指定时间后,去执行一次表达式,记住,次数是一次
// setInterval(表达式,交互时间)则不一样,它从载入后,每隔指定的时间就执行一次表达式 
var scrollTimer = setInterval(function(){
	scrollMap1.style.top = scrollMap1.offsetTop + 1 + 'px';
	scrollMap2.style.top = scrollMap2.offsetTop + 1 + 'px';
	
	if(scrollMap1.offsetTop > 766){
		scrollMap1.style.top = '-768px';
	}
	if(scrollMap2.offsetTop > 766){
		scrollMap2.style.top = '-768px';
	}
	
} ,20);

