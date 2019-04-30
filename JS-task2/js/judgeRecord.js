//获取需要的dom节点
var dayNum = document.getElementsByClassName('dayNum')[0], //抬头天数
    gameContainer = document.getElementsByClassName('gameStep')[0], //大容器
    murder = document.getElementsByClassName('murder')[0], //杀手杀人
    ghost = document.getElementsByClassName('ghost')[0], //亡灵发表遗言
    gamer = document.getElementsByClassName('gamer')[0], //玩家依次发言
    voter = document.getElementsByClassName('voter')[0], //投票
    gameOver = document.getElementById('game-over'), //游戏结束按钮
    skipJudger = document.getElementById('skip-judger'); //跳转法官日志按钮

//两个显示结果还未声明

var log = console.log;

var backBtn = document.getElementById('left-arrow'); //头部返回键
var closeBtn = document.getElementById('right-x'); //头部关闭键

var gameMsgstr = sessionStorage.getItem('allMsg'); //获取前面所有信息
var initialMsg = JSON.parse(gameMsgstr); //转化为原对象格式

//统一声明
let {
    dayNum: days = null,
    playerArr,
    killed,
    state,
    voted,

} = initialMsg;

//等于 let initialMsg.days,
//         initialMsg.players...  


log(initialMsg)
log(days)
log(killed)
log(playerArr)


//抬头返回和xx按键
backBtn.onclick = function () {
    window.location = "../html/view-id.html"
};

closeBtn.onclick = function () { //关闭--增加确认按钮
    var r = confirm("您确定离开页面吗？");
    if (r == true) {
        window.location = "../html/homePage.html"
    }
};


//抬头中文数字
function titleChinese(value) {
    var arr = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
    if (value < 10) {
        return arr[value];
    } else if (value == 10) {
        return "十";
    } else if (value > 10 && value < 20) {
        return arr[10] + arr[(value) - 10];
    }
}


//生成内部游戏步骤本本的个数

var main = document.getElementsByTagName('main')[0]; //[0]!!!
//log(main)

var str = "";

//根据天数循环出本本数量
//每次杀完人回来后，显示的信息
//playArr.deadReason 给数组内的值 再增加对象，保存状态属性

for (let i = 0; i < days; i++) {
    let killStr = '';
    let voteStr = '';
    for (var j = 0; j < playerArr.length; j++) {
        if (playerArr[j].deadDay == i + 1 && playerArr[j].deadReason == 'killed') {
            killStr = `<li class="kill-result">${playerArr[j].index+1}号被杀手杀死，真实身份是平民</li>`;
        }
        if (playerArr[j].deadDay == i + 1 && playerArr[j].deadReason == 'voted') {
            voteStr = `<li class="vote-result">${playerArr[j].index+1}号被投票投死，真实身份是${playerArr[j].id}</li>`; //有可能是狼和民
        }
    }
    str += `<div class="dayNum">第${titleChinese(i+1)}天</div>

    <div class="gameStep">
    <ul>
        <i class="sun"></i>
        <i class="moon"></i>
        <li class="murder">杀手杀人</li>
        ${killStr}
        <li class="ghost">亡灵发表遗言</li>
        <li class="gamer">玩家依次发言</li>
        <li class="voter">全民投票</li>
        ${voteStr}
    </ul>
</div>
    `;
}

main.innerHTML = str //插入以上生成所有






//有限状态机--杀手--亡灵-玩家-投票 点击顺序
var fsm = new StateMachine({

    init: 'initial',

    transitions: [{
            name: 'murder', //行为名称-杀人
            from: 'initial', // 状态--从哪来
            to: 'firstStep' //状态--去哪儿
        },
        {
            name: 'ghost',
            from: 'firstStep',
            to: 'secondStep'
        },
        {
            name: 'gamer',
            from: 'secondStep',
            to: 'thirdStep'
        },
        {
            name: 'voter',
            from: 'thirdStep',
            to: 'fourStep'
        }
    ],

    methods: {

        //有限状态机内的方法methods里面，可以自己创建方法+函数的啊！
        //onWords  onSpeak  Onvote

        //当不按正常顺序点击时的提醒
        //注意下面这个 switch from 说明这个case参数都是根据 from来的

        onInvalidTransition: function (transition, from, to) {
            switch (from) {
                case "initial":
                    alert("请杀手杀人");
                    break;

                case "firstStep":
                    alert("请亡灵发表遗言");
                    break;

                case "secondStep":
                    alert("请玩家依次发言");
                    break;

                case "thirdStep":
                    alert("请进行全民投票");
                    break;
            }
        },


        //未知步骤
        onMurder: function () {
            initialMsg.state = "kill";  //kill状态跳转进入杀人界面后， 根据state = kill来判断显示的抬头文字
            initialMsg.step = 1;
        },
        onGhost: function () {
            initialMsg.step = 2;
            // changeColor(ghost[days-1]);
        },
        onGamer: function () {
            initialMsg.step = 3;
            log(gamer);
            // changeColor(gamer[days-1]);
        },
        onVoter: function () {

            //点击跳入投票页面，天数加一，vote状态为true
            initialMsg.step = 4;
            initialMsg.state = "vote";
            log(initialMsg);
            var gameMsg = JSON.stringify(initialMsg);
            sessionStorage.setItem('allMsg', gameMsg);
            window.location.href = "../html/killerPage.html";
        }

    },

});


//fsm方法来判断顺序 顺序正true   顺序错false

//给四个按钮添加点击事件
$('.murder').on('click', function () {
    console.log(fsm.can('murder'));
    fsm.murder();


    //跳转杀人页面+数据传输
    var gameMsg = JSON.stringify(initialMsg);
    sessionStorage.setItem('allMsg', gameMsg);
    window.location.href = '../html/killerPage.html';
});


$('.ghost').on('click', function () {
    console.log(fsm.can('ghost'));
    fsm.ghost();



});


$('.gamer').on('click', function () {
    console.log(fsm.can('gamer'));
    fsm.gamer();


});


$('.voter').on('click', function () {
    console.log(fsm.can('voter'));
    fsm.voter();


});




/*
//带上数据进行跳转--放在methods里面
murder.onclick = function(){
    if(fsm.state == "murder"){
        sessionStorage.initial = fsm.state;
        sessionStorage.num = 

        location = "../html/killPage.html"
    }else{
        alert('请按顺序操作');
    }
}
*/














