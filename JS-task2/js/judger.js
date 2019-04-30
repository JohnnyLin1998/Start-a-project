
function back_dealing() {
    alert('你确定要退出游戏吗？')
    window.location = "../html/dealing.html"
}

//打包所有数据，放在一个对象里面----提取页面一的数据
var allMsgstr = sessionStorage.getItem('allMsg'); //提取
var allMsg = JSON.parse(allMsgstr); //提取后，JSON.parse把数据从字符串格式转化回来

console.log(allMsg.playerArr) // 用.可以在Msg对象里获取相应的数据
console.log('总人数：', allMsg.playerNum)

var headNum = document.getElementById('id-num'); //头部数字编号
var showPic = document.getElementById('show-pic'); //封面图片
var hidePic = document.getElementById('hide-pic'); //身份图片
var playId = document.getElementById('role'); //玩家身份
var btn = document.getElementById('startBtn'); //开始游戏按钮
var boxContainer = document.getElementById('container'); //大容器--装角色方块
var players = allMsg.playerArr; //存放角色的数组
var creatBox = ""; //创建空字符串，用来存放for循环出来的值


//决定生成几个方块  方法1.用for循环的次数生成相应个数方块   方法2.用appendChild来添加相应个数方块
for (var i = 0; i < players.length; i++) {
    creatBox +=
    `<div class="row">
        <div class="game">
        <span class="box-1">${players[i]}</span>
        <span class="box-2">${i+1}号</span>
        </div>
    </div> 
    `
}
//jquery方法: boxContainer.html() 方法
//容器内添加盒子
boxContainer.innerHTML = creatBox;



//【添加】--需要在跳转回 法官日志的时候，显示被杀和存活的盒子，
//在--法官台本--按钮的位置，增加存储信息+location href跳转过来





//跳转至 法官台本页面
btn.onclick = function(){
    window.location = "../html/judgeRecord.html"
}









