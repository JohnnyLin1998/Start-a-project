var closeBtn = document.getElementById('right-x'); //XX按钮

closeBtn.onclick = function () { //关闭--增加确认按钮
    var r = confirm("您确定离开页面吗？");
    if (r == true) {
        window.location = "../html/homePage.html"
    }
};

//打包所有数据，放在一个对象里面----提取页面一的数据

var log = console.log;

var allMsgstr = sessionStorage.getItem('allMsg'), //提取
    initialMsg = JSON.parse(allMsgstr); //转化


var btn = document.getElementsByClassName('startBtn'), //开始游戏按钮
    boxContainer = document.getElementById('container'), //游戏容器
    creatBox = "", //创建空字符串，存放游戏盒子
    pageTitle = document.getElementById('pageTitle'), // 抬头显示杀人or投票
    titleUp = document.getElementById('titleUp'),  //大标题
    titleDown = document.getElementById('titleDown');  //小标题



// var players = initialMsg.playerArr; //存放角色的数组----可以用对象字面量 方法简写
var {
    playerArr: players, //玩家数组
    dayNum: days, //天数
    killed, //被杀的人
    voted, //被投死的人
    state, //当前状态
} = initialMsg

log(initialMsg)
log(days)
log(killed)
log(players)



//--------------任务大概思路--------------
//不同状态 杀人-投死 进来后显示的抬头文字不同
//点击盒子变色 + 显示下标
//选中的盒子加入一个“被杀”的数组内
//阻止杀手 杀自己 “弹窗提醒”
//被杀和存活的数组，进行sessionStorage 跳转数据保存



//根据不同状态进入界面，判断显示不同抬头文字
if(state == 'kill'){
    pageTitle.innerHTML = "杀手杀人"
    titleUp.innerHTML = "杀手请睁眼，杀手请选择要杀的对象"
    titleDown.innerHTML = "点击下方玩家头像，对被杀玩家进行标记"


}else if(state == 'vote'){
    pageTitle.innerHTML = "投票投死"
    titleUp.innerHTML = "发言讨论结束，大家请投票"
    titleDown.innerHTML = "点击得票数最多人的头像"
}



// for循环的次数生成相应个数方块
for (var i = 0; i < players.length; i++) {
    //加上alive状态
    creatBox +=
        `<div class="row">
        <div class="game">
        <span class="box-1" state="alive">${players[i]}</span>
        <span class="box-2">${i+1}号</span>
        </div>
        <div class="kill-pic"><img src="../pic/small1.png" alt=""></div>
    </div> 
    `
}

//jQuery-- boxContainer.html(creatbox);
boxContainer.innerHTML = creatBox; //容器内添加盒子





//获取所有 平民+杀手的数组（取class值）
let gamerId = document.getElementsByClassName('box-1');
for (let i = 0; i < players.length; i++) {
    //判断玩家状态是否死亡
    if (players[i].state === 'dead') {
        $(gamerId[players[i].index]).attr('state', 'dead');
        $(gamerId[players[i].index]).css('background-color', 'red');
    }
}















