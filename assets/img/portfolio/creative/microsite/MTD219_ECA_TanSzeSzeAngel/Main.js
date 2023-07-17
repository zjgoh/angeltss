var canvas;
var stage;


var bgImg = new Image();
var bg;
var bg2Img = new Image();
var bg2;


var sImg = new Image();
var ship;


var eImg = new Image();


var bImg = new Image();
var boss;


var lImg = new Image();


var bltImg = new Image();
var food2 = new Image();
var food3 = new Image();
var food4 = new Image();
var food5 = new Image();
var food6 = new Image();
var food7 = new Image();
var food8 = new Image();
var food9 = new Image();
var food10 = new Image();
var food11 = new Image();


var winImg = new Image();
var loseImg = new Image();
var win;
var lose;

var lives = new Container();
var bullets = new Container();
var enemies = new Container();
var bossHealth = 20;
var score;
var time;
var gfxLoaded = 0;
var centerX = 160;
var centerY = 240;
var tkr = new Object();
var timerSource;



function Main()
{
	/* Link Canvas */
	canvas = document.getElementById('Shooter');
  	stage = new Stage(canvas);
  		
  	stage.mouseEventsEnabled = true;
  	
  	/* Sound */

	SoundJS.addBatch([
		{name:'get', src:'get.mp3', instances:15},
		{name:'end', src:'end.mp3', instances:1}
		]);
  		
  	/* Load GFX */
  		
  	bgImg.src = 'bg.jpg';
  	bgImg.name = 'bg';
  	bgImg.onload = loadGfx;
  	
  	bg2Img.src = 'bg2.jpg';
  	bg2Img.name = 'bg2';
  	bg2Img.onload = loadGfx;
  	
  	sImg.src = 'ship.png';
  	sImg.name = 'ship';
  	sImg.onload = loadGfx;
	
	eImg.src = 'enemy1.png';
	eImg.name = 'enemy';
	eImg.onload = loadGfx;

	food2.src = 'food2.png';
	food2.name = 'bullet';
	food2.onload = loadGfx;
	
	food3.src = 'food3.png';
	food3.name = 'food3';
	food3.onload = loadGfx;
	
	food4.src = 'food4.png';
	food4.name = 'food4';
	food4.onload = loadGfx;
	
	food5.src = 'food5.png';
	food5.name = 'food5';
	food5.onload = loadGfx;
	
	food6.src = 'food6.png';
	food6.name = 'food6';
	food6.onload = loadGfx;
	
	food7.src = 'food7.png';
	food7.name = 'food7';
	food7.onload = loadGfx;
	
	food8.src = 'food8.png';
	food8.name = 'food8';
	food8.onload = loadGfx;
	
	food9.src = 'food9.png';
	food9.name = 'food9';
	food9.onload = loadGfx;
	
	food10.src = 'food10.png';
	food10.name = 'food10';
	food10.onload = loadGfx;
	
	food11.src = 'food11.png';
	food11.name = 'food11';
	food11.onload = loadGfx;

	winImg.src = 'win.png';
	winImg.name = 'win';
	winImg.onload = loadGfx;
	
	loseImg.src = 'lose.png';
	loseImg.name = 'lose';
	loseImg.onload = loadGfx;
	
	/* Ticker */
	
	Ticker.setFPS(60);
	Ticker.addListener(stage);
	
}

function loadGfx(e)
{
	if(e.target.name = 'bg'){bg = new Bitmap(bgImg);}
	if(e.target.name = 'bg2'){bg2 = new Bitmap(bg2Img);}
	if(e.target.name = 'ship'){ship = new Bitmap(sImg);}
		start = 0;
	gfxLoaded++;
	
	if(gfxLoaded == 16)
	{
		addGameView();	
		
	}
}

function addGameView()
{
	ship.x = centerX - 18.5;
	ship.y = 480 + 34;
	
	
	for(var i = 0; i < 1000; i++)
	{
		var l = new Bitmap(lImg);
		
		l.x = -20 + (1000 * i);
		l.y = 463;
		
		lives.addChild(l);
		stage.update();
	}
	
	/* Score Text */
	
	score = new Text('0', 'bold 14px Courier New', '#ffffff');
	score.maxWidth = 1000;	//fix for Chrome 17
	score.x = 280;
	score.y = 20;
	
	highscore = new Text('Your Score -', 'bold 14px Courier New', '#ffffff');
	highscore.maxWidth = 1000;	//fix for Chrome 17
	highscore.x = 170;
	highscore.y = 20;
	
	
	time = new Text('-', 'bold 14px Courier New', '#ffffff');
	time.maxWidth = 1000;	//fix for Chrome 17
	time.x = 200;
	time.y = 476;
	
	/* Second Background */
	
	bg2.y = -480;
	
	/* Add gfx to stage and Tween Ship */
	
	stage.addChild(bg, bg2, ship, enemies, lives, score ,highscore,time);
	Tween.get(ship).to({y:420}, 1000).call(startGame);// set basket
}

function moveShip(e)
{
	ship.x = e.stageX - 43.5;
}


function addEnemy()
{
	var e = new Bitmap(eImg);
	e.x = Math.floor(Math.random() * (320 - 50))
	e.y = -50
	enemies.addChild(e);
	stage.update();
}

function addEnemy1() 
{ 
    var e = new Bitmap(food2); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy2() 
{ 
    var e = new Bitmap(food3); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy3() 
{ 
    var e = new Bitmap(food4); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy4() 
{ 
    var e = new Bitmap(food5); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy5() 
{ 
    var e = new Bitmap(food5); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy6() 
{ 
    var e = new Bitmap(food6); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}
function addEnemy7() 
{ 
    var e = new Bitmap(food7); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}

function addEnemy8() 
{ 
    var e = new Bitmap(food8); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}

function addEnemy9() 
{ 
    var e = new Bitmap(food9); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}

function addEnemy10() 
{ 
    var e = new Bitmap(food10); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}

function addEnemy11() 
{ 
    var e = new Bitmap(food11); 
      
    e.x = Math.floor(Math.random() * (320 - 50)) 
    e.y = -50 
      
    enemies.addChild(e); 
    stage.update(); 
}

function countdown(minutes) {
    var seconds = 31;
    var mins = minutes
    function tick() {
        //This script expects an element with an ID = "counter". You can change that to what ever you want. 
        var current_minutes = mins-1
        seconds--;
        if( seconds > 0 ) 
		{	
            setTimeout(tick, 1000);
        } 
		else 
		{
            if(mins > 1){
                countdown(mins-1);           
            }
			alert('win');
        }
		time.text = "Time Left: "+ seconds;
    }
    tick();
}

function startGame()
{	
					SoundJS.play('end');
					stage.onMouseMove = moveShip;
					//bg.onPress = shoot;
					//bg2.onPress = shoot;	
					Ticker.addListener(tkr, false);
					tkr.tick = update;
					var ran1 = Math.floor(Math.random() * 10000);
					var ran = 5000; 
					timerSource = setInterval('addEnemy()', ran+1000);
					timerSource = setInterval('addEnemy1()', ran+2000);
					timerSource = setInterval('addEnemy2()', ran+3000);
					timerSource = setInterval('addEnemy3()', ran+4000);
					timerSource = setInterval('addEnemy4()', ran+5000);
					timerSource = setInterval('addEnemy5()', ran+6000);
					timerSource = setInterval('addEnemy6()', ran+1500);
					timerSource = setInterval('addEnemy10()', ran-500);
					timerSource = setInterval('addEnemy11()', ran+7000);
					countdown(1);
				
			
		
			
	
}

function update()
{
	/* Move Background */
	
	bg.y += 5;
	bg2.y += 5;
	
	if(bg.y >= 480)
	{
		bg.y = -480;
	}
	else if(bg2.y >= 480)
	{
		bg2.y = -480;
	}
	
	/* Move Bullets */
	
	for(var i = 0; i < bullets.children.length; i++)
	{
		bullets.children[i].y -= 10;
		
		/* Remove Offstage Bullets */
		
		if(bullets.children[i].y < - 20)
		{
			bullets.removeChildAt(i);
		}
	}
	
	/* Show Boss */
	
	/* Move Enemies */
	
	for(var j = 0; j < enemies.children.length; j++)
	{
		enemies.children[j].y += 5;
		
		/* Remove Offstage Enemies */
		
		if(enemies.children[j].y > 480 + 50)
		{
			enemies.removeChildAt(j);
		}
		
		for(var k = 0; k < bullets.children.length; k++)
		{
			/* Bullet - Enemy Collision */
	
			if(bullets.children[k].x >= enemies.children[j].x && bullets.children[k].x + 11 < enemies.children[j].x + 49 && bullets.children[k].y < enemies.children[j].y + 40)
			{
				bullets.removeChildAt(k);
				enemies.removeChildAt(j);
				stage.update();
				//SoundJS.play('explo');
				score.text = parseFloat(score.text + 0);
			}
			
			/* Bullet - Boss Collision */
			
			if(boss != null && bullets.children[k].x >= boss.x && bullets.children[k].x + 11 < boss.x + 183 && bullets.children[k].y < boss.y + 162)
			{
				bullets.removeChildAt(k);
				bossHealth--;
				stage.update();
				//SoundJS.play('explo');
				score.text = parseInt(score.text + 0);
			}
		}
		
		/* Ship - Enemy Collision */
		
		if(enemies.hitTest(ship.x, ship.y) || enemies.hitTest(ship.x + 50, ship.y))
		{
			enemies.removeChildAt(j);
			lives.removeChildAt(lives.length);
			ship.y = 450 + 1;
			Tween.get(ship).to({y:420}, 300)
			score.text = parseInt(score.text + 100);
			SoundJS.play('get');
		}
		
		
	}
	
	/* Check for win */
	
	if(boss != null && bossHealth <= 0)
	{
		alert('win');
	}
	
	/* Check for lose */
	
	if(lives.children.length <= 0)
	{
		alert('lose');
	}
}

function alert(e)
{
	/* Remove Listeners */
		
	stage.onMouseMove = null;
	bg.onPress = null;
	bg2.onPress = null;
	//SoundJS.play('end');
	Ticker.removeListener(tkr);
	tkr = null;
	
	timerSource = null;
	
	/* Display Correct Message */
	
	if(e == 'win')
	{
		
		win = new Bitmap(winImg);
		win.x = centerX - 95;
		win.y = centerY - 35;
		stage.addChild(win);
		
	}
	else
	{
		lose = new Bitmap(loseImg);
		lose.x = centerX - 64;
		lose.y = centerY - 23;
		stage.addChild(lose);
		stage.removeChild(enemies, ship);
		
	}
	
	bg.onPress = function(){window.location.reload();};
	bg2.onPress = function(){window.location.reload();};
	stage.update();
	
}