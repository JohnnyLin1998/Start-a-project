
function back_dealing() {
    alert('你确定要退出游戏吗？')
    window.location = "../html/dealing.html"
}

//打包所有数据，放在一个对象里面----提取页面一的数据
var allMsgstr = sessionStorage.getItem('allMsg'); //提取
var allMsg = JSON.parse(allMsgstr); //提取后，JSON.parse把数据从字符串格式转化回来


console.log(allMsg.playerArr) // 用.可以在Msg对象里获取相应的数据
console.log('总人数：', allMsg.playerNum)
// console.log(allMsg.dayNum)
// console.log(allMsg.killed)

var headNum = document.getElementById('id-num'); //头部数字编号
var showPic = document.getElementById('show-pic'); //封面图片
var hidePic = document.getElementById('hide-pic'); //身份图片
var playId = document.getElementById('role'); //玩家身份
var skipBtn = document.getElementById('checkBtn'); //按钮
var index = 1; //初始化数值


//初始化起始值
headNum.innerHTML = index; //用index替换头部数字--控制for循环的关键
skipBtn.innerHTML = "查看1号身份";

//底部按钮添加事件
skipBtn.onclick = function () {
    var players = allMsg.playerArr; //存放角色的数组


    //控制隐藏切换---可用jQuery-toggle()方法
    if (showPic.style.visibility === "visible" && hidePic.style.visibility === "hidden") {
        showPic.style.visibility = "hidden", hidePic.style.visibility = "visible"
    } else {
        showPic.style.visibility = "visible", hidePic.style.visibility = "hidden"
    }

    //判断是否为整数
    if (index % 1 === 0) {
        headNum.innerHTML = index; //头部数字
        this.innerHTML = `查看${index}号身份`; //底部文字
        index += 0.5; //进入非整数执行


    } else {

        if (index === players.length + 0.5) { //当索引值 = 玩家总数数组，则发牌完毕，进入法官查看
            this.innerHTML = "法官查看"

            index += 0.5;

            if (index === players.length + 1) { //进入法官查看后再点击一次，跳转页面
                window.location = "../html/judger.html"
            }
        }

        playId.innerHTML = (players[index - 0.5].id); //显示玩家身份--身份为索引第一位的值
        this.innerHTML = `隐藏并传递给${index + 0.5}号`;

        index += 0.5; //循环进入整数执行

    }
}


