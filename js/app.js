// 这是我们的玩家要躲避的敌人
var Enemy = function(y) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = 1;
    this.y = y;
    //虫子的速度定义
    this.speed = getRandomInt(1,50);
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += this.speed*dt;
    //Enemy 越界，就再来一次
    if (this.x>=505){
        this.x = 1;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
/**
 * Constructor function
 * @param {[type]} x [x pixels on this canvas]
 * @param {[type]} y [y pixels on this canvas]
 */
var Player = function(x, y){
    this.x = x;
    this.y= y;
    this.score = 0;
    this.speed = 30;
    this.sprite = 'images/char-boy.png';
};

/**
 * 盘点是否成功越过河
 */
Player.prototype.update = function(){
    // it successfully arrived at the other side of this river.
    if (this.y<1){
        this.score +=100;
        /**
        ctx.font = "20pt Arial";
        ctx.textAlign="center";
        ctx.strokeStyle = "green";
        ctx.lineWidth = 3;
        ctx.fillStyle = "white";
        ctx.fillText("Your Score:"+this.score, 202, 30);
        ctx.strokeText("Your Score:"+this.score, 202, 30);
        */
        document.getElementById("score").innerHTML = this.score;
        alert("You Win! Your score is "+ this.score);
        this.x = 202;
        this.y =430;   
    }
    // player can't go down the bottom line of this canvas.
    if (this.y>430){
        this.y = 430;
    }

    //player can't move out of the left and right border.
    if (this.x<1){
        this.x = 1;
    }

    if (this.x>460){
        this.x = 460;
    }
};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
 * 处理键盘事件，主要是上下左右
 * @param  {[int]} keyCode [键盘事件]
 * @return {[void]} 
 */
Player.prototype.handleInput = function(keyCode){
    switch(keyCode){
        case 'left':
            this.x -= this.speed;
            break;
        case 'up':
            this.y -= this.speed;
            break;
        case 'right':
            this.x += this.speed;
            break;
        case 'down':
            this.y += this.speed;
            break;
    }
};

/**
 * 对Player实现碰撞函数
 * @return {[void]} 
 */
Player.prototype.checkCollisions = function(){
    for (var i=0; i<allEnemies.length; i++) {
        //首先判断player和enemy是否在同一行
        if(Math.abs(this.y-allEnemies[i].y)<50){
            if (Math.abs(this.x - allEnemies[i].x)<50){
                this.score =0;
                this.x = 202;
                this.y = 430;
                //计划用画笔来显示分数，但是消除和刷新比较困难，因此放弃，该用HTML来显示
                //ctx.fillText("Your Score:"+this.score, 202, 30);
                //ctx.strokeText("Your Score:"+this.score, 202, 30);
                document.getElementById("score").innerHTML = this.score;
            }
        }
    }
};


// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [];
for (var i = 0; i <5; i++) {
    var bug = new Enemy(i*83+55);
    allEnemies.push(bug);
    //console.log("so this item in allEnemies, x is  "+ allEnemies[i].x + "; y is " + allEnemies[i].y + ". The image file is "
    //    + allEnemies[i].sprite+ ". The speed is "+allEnemies[i].speed);
};

//the First player should be in the 6th row, the 2nd col
var player = new Player(202, 430);

// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
};
