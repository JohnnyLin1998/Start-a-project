var headNum = document.getElementById('id-num'), //头部数字编号
    showPic = document.getElementById('show-pic'), //封面图片
    hidePic = document.getElementById('hide-pic'), //身份图片
    playId = document.getElementById('role'), //玩家身份
    btn = document.getElementById('startBtn'), //开始游戏按钮
    boxContainer = document.getElementById('container'), //大容器--装角色方块
    backBtn = document.getElementById('backBtn'),
    creatBox = ""; //创建空字符串，用来存放for循环出来的值


backBtn.onclick = function () {
    var answer = confirm("是否确定离开页面？");
    if (answer)
        window.location = "../html/dealing.html"
}




var allMsgstr = sessionStorage.getItem('allMsg'), //打包所有数据，放在一个对象里面----提取页面一的数据
    allMsg = JSON.parse(allMsgstr); //提取后，JSON.parse把数据从字符串格式转化回来

let {
    killed,
    playerArr: players
} = allMsg



console.log(allMsg.killed)
console.log(allMsg.playerArr) // 用.可以在Msg对象里获取相应的数据
console.log('总人数：', allMsg.playerNum)


//决定生成几个方块  方法1.用for循环的次数生成相应个数方块   方法2.用appendChild来添加相应个数方块
for (let i = 0; i < players.length; i++) {
    creatBox +=
        `<div class="row">
        <div class="game">
        <span class="box1">${players[i].id}</span>
        <span class="box2">${players[i].index+1}号</span>
        </div>
    </div> 
    `
}


//jquery方法: boxContainer.html() 方法
boxContainer.innerHTML = creatBox; //容器内添加盒子


//【添加】--需要在跳转回 法官日志的时候，显示被杀和存活的盒子，
//在--法官台本--按钮的位置，增加存储信息+location href跳转过来

// var playerId = $('.box1')

var playerId = document.getElementsByClassName('box1')

// console.log(playerId)


if (allMsg.judgeShow = true) { //如果有judgeShow数据了，就执行语句

    for (var i = 0; i < players.length; i++) {
        if (players[i].state === "dead") {
            $(playerId[i]).css('background-color', 'red')
        }
    }
}

if (allMsg.killed.length == 0) {//查看法官页面下方按钮的内容-游戏前和游戏中的显示
    btn.innerHTML = "开始游戏"
} else {
    btn.innerHTML = "返回游戏"
}

btn.onclick = function () { //跳转至法官台本页面
    window.location = "../html/judgeRecord.html"
}





