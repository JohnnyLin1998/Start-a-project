var log = console.log;

var gameMsgstr = sessionStorage.getItem('allMsg'),
    initialMsg = JSON.parse(gameMsgstr);


let {
    killerNum,
    manNum,
    playerArr: players,
    state,
    dayNum: days
} = initialMsg


log(initialMsg)
log(days)

var killCount = document.getElementById('killNum'),
    manCount = document.getElementById('manNum');
againBtn = document.getElementById('again');


//插入剩余玩家结果
killCount.innerHTML = `<span id="killNum">杀 手${killerNum}人</span>`
manCount.innerHTML = `<span id="manNum">平 民${manNum}人</span>`

var gameDetail = document.getElementsByClassName('gameDetail')[0];
var str = "";


//根据天数循环出相应结果
for (var i = 0; i < days - 1; i++) {

    let night = "";
    let daytime = "";


    for (var j = 0; j < players.length; j++) {

        if (players[j].deadDay == i + 1 && players[j].deadReason == 'killed') { //死亡天数和死亡原因相同的玩家，确定唯一
            night = `<p>晚上： ${players[j].index+1}号被杀手杀死，${players[j].index+1}号是水民</p>`;
        }

        if (players[j].deadDay == i + 1 && players[j].deadReason == 'voted') {
            daytime = `<p>白天： ${players[j].index+1}号被全民投票投死，${players[j].index+1}号是${players[j].id}</p>`;
        }
    }
    str +=
        `<div class="content">
            <h3>第${titleChinese(i + 1)}天</h3>
            ${night}
            ${daytime}
        </div>`
}
gameDetail.innerHTML = str;

// 根据天数显示出相应的中文数值
function titleChinese(value) {

    var arr = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']

    if (value < 10) {
        return arr[value]
    } else if (value == 10) {
        return ('十')
    } else if (value > 10 && value < 20) {
        return arr[10] + arr[(value) - 10];
    }
}

againBtn.onclick = function () {
    var answer = confirm('再来一局，GO！')

    if (answer === true) {
        window.location = "../html/homePage.html"
    }
}