var backBtn = document.getElementById('left-arrow'), //头部返回键
    closeBtn = document.getElementById('right-x'), //头部关闭键
    gameMsgstr = sessionStorage.getItem('allMsg'), //获取前面所有信息
    initialMsg = JSON.parse(gameMsgstr); //转化为原对象格式

var log = console.log;


//统一字面量声明
let {
    dayNum: days = null,
    playerArr: players,
    killed,
    state,
    voted,
} = initialMsg;

log('所有信息：', initialMsg)
log('当前被杀：', killed)
log('所有玩家：', players)


//生成内部游戏步骤台本的个数
var main = document.getElementsByTagName('main')[0]; 
var str = "";


//抬头中文数字--先给一个参数value，后面调用的时候，随时替换掉然后进行函数
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


//根据天数循环出本本数量
for (let i = 0; i < days; i++) {
    let killStr = '';
    let voteStr = '';


    for (let j = 0; j < players.length; j++) {

        if (players[j].deadDay == i + 1 && players[j].deadReason == 'killed') { // *** players[j].deadDay == i + 1 &&
            killStr = `<li class="kill-result">${players[j].index+1}号被杀手杀死，真实身份是平民</li>`;
        }

        if (players[j].deadDay == i + 1 && players[j].deadReason == 'voted') {
            voteStr = `<li class="vote-result">${players[j].index+1}号被投票投死，真实身份是${players[j].id}</li>`; //有可能是狼和民
        }
    }


    log('当前玩家总人数：', players.length)

    str += `<div class="dayNum" id = "dayclick">第${titleChinese(i+1)}天</div>

    <div class="gameStep" style="display: block">
    <ul>
        <li class="murder"><i class="arrow"></i>杀手杀人</li>
        ${killStr}
        <li class="ghost"><i class="arrow"></i>亡灵发表遗言</li>
        <li class="gamer"><i class="arrow"></i>玩家依次发言</li>
        <li class="voter"><i class="arrow"></i>全民投票</li>
        ${voteStr}
    </ul>
</div>
    `;
}

main.innerHTML = str //插入HTML


var dayNum = document.getElementsByClassName('dayNum'), //抬头天数
    gameContainer = document.getElementsByClassName('gameStep'), //大容器
    murder = document.getElementsByClassName('murder'), //杀手杀人
    ghost = document.getElementsByClassName('ghost'), //亡灵发表遗言
    gamer = document.getElementsByClassName('gamer'), //玩家依次发言
    voter = document.getElementsByClassName('voter'), //投票
    gameOver = document.getElementById('game-over'), //游戏结束按钮
    skipJudger = document.getElementById('skip-judger'); //跳转法官日志按钮

//抬头返回和xx按键
backBtn.onclick = function () {
    window.location = "../html/view-id.html"
};

closeBtn.onclick = function () { //关闭--增加确认按钮
    var answer = confirm("您确定离开页面吗？");
    if (answer == true) {
        window.location = "../html/gameOver.html"
    }
};


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

        //当不按正常顺序点击时
        //根据 from状态条件，创建switch语句
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


        //触发"行为"的点击事件
        onMurder: function () {
            initialMsg.state = "kill"; //kill状态跳转进入杀人界面后， 根据state = kill来判断显示的抬头文字
            initialMsg.step = 1;
            changeColor(murder[days - 1]);
            //changeColor的函数置后，在switch里
        },
        onGhost: function () {
            initialMsg.step = 2;
            changeColor(ghost[days - 1]);
        },
        onGamer: function () {
            initialMsg.step = 3;
            changeColor(gamer[days - 1]);
            // log(gamer);
        },
        onVoter: function () {
            initialMsg.step = 4;
            initialMsg.state = "vote"; //点击跳入投票页面，天数加一，vote状态为true
            changeColor(voter[days - 1]);
            sessionStorage.setItem('allMsg', JSON.stringify(initialMsg))
            window.location.href = "../html/killerPage.html";
        }
    },
});


for (let i = 0; i < days; i++) { 

    // log('当前循环次数：', i, '当前天数：', days)

    dayNum[i].onclick = function () {

        if (gameContainer[i].style.display === 'block') {
            gameContainer[i].style.display = 'none'
        } else {
            gameContainer[i].style.display = 'block'
        }
    }

    if (i < days - 1) { //小于当前天数的

        if (gameContainer[i].style.display === 'block') {
            gameContainer[i].style.display = 'none'
        }


        gameContainer[i].onclick = function () { //事件委托--提醒
            var ev = ev || window.event;
            var target = ev.target || ev.srcElement;

            if (target.nodeName.toLowerCase() == 'li') {
                alert(`今天是第${days}天,请按照游戏步奏进行游戏`)

            }
        }

        //改变当前天数之前的颜色
        changeColor(murder[i])
        changeColor(ghost[i])
        changeColor(gamer[i])
        changeColor(voter[i])
    }


    //在当前天数
    if (i === days - 1) {

        switch (initialMsg.step) {
            case 1:
                changeColor(murder[days - 1]); //杀手杀人点击变色放这里
                fsm.murder();
                break;

            case 2:
                fsm.murder();
                fsm.ghost();
                break;

            case 3:
                fsm.murder();
                fsm.ghost();
                fsm.gamer();
                break;
        }



        //杀手杀人
        $('.murder').eq(i).on('click', function () { //给四个按钮添加点击事件

            fsm.murder(); 

            if (state == 'kill') {
                return;
            }
            sessionStorage.setItem('allMsg', JSON.stringify(initialMsg));
            window.location = "../html/killerPage.html"
        });



        //亡灵发言
        $('.ghost').eq(i).on('click', function () {
            if (fsm.state === 'firstStep') {
                alert('请亡灵发表遗言')
            }

            fsm.ghost();
        });

        //玩家发言
        $('.gamer').eq(i).on('click', function () {
            if (fsm.state == 'secondStep') {
                alert('请玩家依次发言')
            }
            fsm.gamer();

        });

        //全民投票
        $('.voter').eq(i).on('click', function () {
            fsm.voter();

        });
    }
}

//改变颜色
function changeColor(aaa) {
    let target = aaa;

    $(target).css('background-color', '#808080');
    $(target).find('.arrow').css('border-color', "transparent #808080 transparent transparent")
}

skipJudger.onclick = function () {
    initialMsg.judgeShow; //创建新的initialMsg数据， judgeShow就是在法官日志页面显示
    sessionStorage.setItem('allMsg', JSON.stringify(initialMsg))
    location.href = "../html/judger.html"
}


gameOver.onclick = function () {
    var answer = confirm('是否确定结束游戏？')

    if (answer) {
        window.location = "../html/homePage.html"
    }
}