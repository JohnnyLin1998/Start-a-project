var closeBtn = document.getElementById('right-x'); //XX按钮

closeBtn.onclick = function () { //关闭--增加确认按钮
    var r = confirm("您确定离开页面吗？");
    if (r == true) {
        window.location = "../html/homePage.html"
    }
};

var log = console.log;

var gameMsgstr = sessionStorage.getItem('allMsg'); //打包所有数据，放在一个对象里面----提取页面一的数据
initialMsg = JSON.parse(gameMsgstr);

// log(initialMsg)



var skipBtn = document.getElementById('skipBtn'), //确定-跳转按钮
    boxContainer = document.getElementById('container'), //游戏大容器
    creatBox = "", //创建空字符串，存放游戏盒子
    pageTitle = document.getElementById('pageTitle'), // 抬头显示杀人or投票
    titleUp = document.getElementById('titleUp'), //大标题
    titleDown = document.getElementById('titleDown'); //小标题




//***注释掉下面这组声明，了解一下存在的意义

//声明一个变量，保存所有数据
var {
    playerArr: players, //玩家数组
    killerNum, //杀手人数
    manNum, //平民人数
    dayNum: days, //天数
    killed, //被杀的人
    voted, //被投死的人
    state, //当前页面状态
} = initialMsg;

// log(initialMsg.dayNum)

log('当前页面处于状态：', initialMsg.state)
log(initialMsg)
// log(days)
// log(killed)
// log(players)



//根据不同状态进入界面，判断显示不同抬头文字
if (state == 'kill') {
    pageTitle.innerHTML = "杀手杀人"
    titleUp.innerHTML = "杀手请睁眼，杀手请选择要杀的对象"
    titleDown.innerHTML = "点击下方玩家头像，对被杀玩家进行标记"


} else if (state == 'vote') {
    pageTitle.innerHTML = "投票投死"
    titleUp.innerHTML = "发言讨论结束，大家请投票"
    titleDown.innerHTML = "点击得票数最多人的头像"
}

for (var i = 0; i < players.length; i++) { // for循环的次数生成相应个数方块
    //加上alive状态
    creatBox +=
        `<div class="row">
        <div class="game">
        <span class="boxUp" state="alive">${players[i].id}</span>
        <span class="boxDown" >${players[i].index+1}号</span>
        </div>
        <div class="kill-pic"><img src="../pic/small1.png" alt=""></div>
    </div> 
    `
}

//jQuery-- boxContainer.html(creatbox);
boxContainer.innerHTML = creatBox; //容器内添加盒子



// var clickBox = document.querySelectorAll('row');
// var smallBox = document.getElementsByClassName('game')[0]; //盒子
let roleBox = $('.boxUp'); //角色


//点击盒子事件
$('.row').on('click', function () {

    for (let i = 0; i < roleBox.length; i++) {
        // if ($(roleBox[i]).attr('state') === 'alive') { //$ attr 添加属性的方法
        //     $(roleBox[i]).css('background-color', '#F5C97B') //保证处于活着的玩家是橙色
        // }

        if (players[i].state === 'alive') { //保证处于活着的玩家是橙色
            $(roleBox[i]).css('background-color', '#F5C97B')
        }
    }


    // for (var i = 0; i < players.length; i++) {
    //     if (players[i].state === "dead") {
    //         $(roleBox[i]).css('background-color', 'red')
    //     }
    // }


    $(this).find('.boxUp').css('background-color', 'red'); //当点击某个小盒子时，变色
    $('.kill-pic').hide(); //小刀全部隐藏
    // $('.kill-pic').show();  //小刀全部显示--显然不行
    $(this).find('.kill-pic').show(); //$ find()大法--点击选中


    //进入相应状态的页面，选中方块时，如何显示相应的下标？
    if (state == 'kill') { //杀手杀人
        killed[0] = $(this).index();
    }


    if (state == 'vote') { //投票投死
        killed[0] = $(this).index();
    }

    log('选中的被杀下标是：', killed[0])
})


//显示已经挂掉的玩家
for (var i = 0; i < players.length; i++) { 
    if (players[i].state === "dead") {
        $(roleBox[i]).css('background-color', 'red')
    }
}



//确定键，准备跳转+判断杀人是否有效
$('#skipBtn').on('click', function () {

    var index = killed[0]; //被杀的人的下标值

    // if (killed.length) {
        if (players[index].state == 'dead') {
            alert('此玩家已被杀，请选择别的玩家');
            return;
        }
    // }


    if (state == 'kill') { //杀手杀人

        if (!killed.length) { //判断是否杀人
            alert('杀手必须杀人');
            return;
        }
        if (players[index].id == '杀手') { //判断是否杀自己了
            alert('杀手不能杀自己');
            return;
        }


        players[index].deadReason = "killed";
        players[index].state = 'dead';
        players[index].deadDay = days
        initialMsg.manNum--;





    } else if (state == 'vote') { //投票投死

        if (!killed.length) { //判断是否投死
            alert('本轮必须投票');
            return;
        }
        if (players[index].id == '杀手') { //判断杀的角色
            initialMsg.killerNum--;

        } else {
            initialMsg.manNum--;

        }

        log(initialMsg.dayNum)
        log(days)

        players[index].deadReason = 'voted';
        players[index].state = 'dead';
        players[index].deadDay = days
        // initialMsg.manNum--;
        initialMsg.dayNum++; //天数加一


        log(initialMsg.dayNum)
        log(days)
    }




    log('平民人数：',manNum, '杀手人数：',killerNum)



    log('当前平民人数：',initialMsg.manNum, '当前杀手人数：',initialMsg.killerNum)

    if (initialMsg.killerNum === 0) { //平民胜利

        initialMsg.result = "manWin"
        sessionStorage.setItem('allMsg', JSON.stringify(initialMsg));
        alert("恭喜平民胜利！游戏结束")
        window.location = "../html/gameOver.html"
        return;



    } else if (initialMsg.killerNum >= initialMsg.manNum && initialMsg.manNum === 1) { //杀手胜利

        initialMsg.result = "killWin"
        sessionStorage.setItem('allMsg', JSON.stringify(initialMsg));
        alert("恭喜杀手胜利！游戏结束")
        window.location = "../html/gameOver.html"
        return;
    }



    initialMsg.dayNum;

    log('当前天数：',initialMsg.dayNum)
    log(days) //等价写法

    sessionStorage.setItem('allMsg', JSON.stringify(initialMsg));
    window.location.href = "../html/judgeRecord.html"
})