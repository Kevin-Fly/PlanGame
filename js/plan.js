
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
var bulletSpeed = 20; //子弹的速度

var mapw = map.offsetWidth;
var maph = map.offsetHeight;

var Bullets = [];



// 开始游戏
playBtn.onclick = function(){
	startPage.style.display = 'none'
	gameState = 1;
}

// 重新玩
restartBtn.onclick = function(){
	gameState = 1;
	score = 0;
	gameScore.innerHTML = score;
	gameOverPage.style.display = 'none';
	//重新创建一个飞机,并设置位置
	hero = document.createElement('img');
	hero.src = 'img/hero.png';
	map.appendChild(hero);
	hero.style.height = '60px';
	hero.style.width = '80px';
	hero.style.left = '240px';
	hero.style.top = '500px';
	hero.style.position = 'absolute';

	fire = setInterval(addBullet , 200);
	updateTimer = setInterval(update , 30);

}
// 飞机随着鼠标移动
map.onmousemove = function (e) {
	var x = e.clientX;
	var y = e.clientY;

	//offsetWidth是指对象的可见宽度
	//offsetWidth = width + padding + border
	var w = hero.offsetWidth;
	var h = hero.offsetHeight;

	hero.style.left = x - w/2 +'px';
	hero.style.top = y - h/2 +'px';

	if(hero.offsetLeft < 0){
		hero.style.left = '0px';
	}
	if(hero.offsetLeft > (mapw - w)){
		hero.style.left = (mapw - w) +'px';
	}
	if(hero.offsetTop < 0){
		hero.style.top = '0px';
	}
	if(hero.offsetTop > (maph - h)){
		hero.style.right = (maph - h) + 'px';
	}

}

// 飞机的子弹
var fire = setInterval(addBullet , 200);
function addBullet() {
	if (gameState == 1){
		var bullet = document.createElement('img');
		bullet.src = 'img/bullet1.png';
		bullet.style.position = 'absolute';
		bullet.style.width = '20px';

		var bx = hero.offsetLeft;
		var by = hero.offsetTop;

		bullet.style.left = (bx + hero.offsetWidth / 2 - 10)+'px';
		bullet.style.top = by - 10 +'px';

		map.appendChild(bullet);
		Bullets.push(bullet);

	}
}

var updateTimer = setInterval(update , 30);
function update() {
	if (gameState == 1){

		for(var i = 0 ; i < Bullets.length ; i++){

			var b = Bullets[i];

			b.style.top = b.offsetTop - bulletSpeed +'px';

			if (b.offsetTop < 0){
				map.removeChild(b);
				// 从第i个位置开始删除一个元素
				Bullets.splice(i , 1);
			}

		}

	}
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

