function back_home() {
    window.location = "homePage.html"
}




//获取杀手 平民 总人数的值value
var player = document.getElementById("player"), //输入框--总人数
    killer = document.getElementById("killer"), //杀手
    man = document.getElementById("man"), //平民
    slider = document.getElementsByName("slider")[0], //获取滑动块
    playerArr = []; //创建一个玩家数组




slider.oninput = function startSlider() { //监听滑动条
    player.value = slider.value;
}


document.addEventListener("input", startInput)

function startInput() { //监听Input内的数值变化
    // player.value == 8;
    destribute();
    playerNum = Number(player.value); //将字符串类型的值转化为数值类型
    killerNum = Number(killer.innerHTML);
    manNum = Number(man.innerHTML);
    newArr();
    shuffle(playerArr); //洗牌生成的数组
}

startInput(); //立即执行函数，在刚进入页面的时候，立即执行分配


//分配玩家
function destribute() {
    // console.log(player.value)
    if (player.value < 4 || player.value > 18) {
        killer.innerHTML = "";
        man.innerHTML = "";
    } else if (player.value == 15 || player.value == 18) {
        killer.innerHTML = Math.floor((player.value) / 3 - 1);
        man.innerHTML = player.value - killer.innerHTML;
    } else {
        killer.innerHTML = Math.floor((player.value) / 3);
        man.innerHTML = player.value - killer.innerHTML;
    }

    console.log(player.value);
}


function newArr() {
    //  console.log(playerArr.length); //找bug的时候，这里才发现，每次for循环后的数组值只会增加，不会减少

    playerArr = []; //重点！ 数组清空--没有清空的情况，每次循环后，值只增不减

    for (var i = 0; i < manNum; i++) {
        playerArr[i] = "平民";
    }
    for (var j = manNum; j < (killerNum + manNum); j++) {
        playerArr[j] = "杀手"; //直接在i的基础上增加到j，之间的范围就是“杀手”的数量
    }

    // console.log(playerArr);
}


// 数组乱序
function shuffle(arr) { //新赋值的参数arr，在监听内与playerArr交接

    var randomIndex, //随机索引值
        temp; //临时存储

    for (i = arr.length; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * i); //随机一个数，随机索引值
        //console.log(randomIndex);
        //Fisher-Yates的核心---遍历每一个+随机索引互换
        temp = arr[i - 1];
        arr[i - 1] = arr[randomIndex];
        arr[randomIndex] = temp;
    }

    console.log('随机打乱后的数组:',arr) //随机打乱后的数组

    var playerSave = [],
        i,
        index = 0;

    //用for循环遍历插入对象
    for (i = 0; i < arr.length; i++) {
        var add = { //创建新的声明 来存放对象和数组
            id: arr[i],
            index: index++,
            state: 'alive', //显示当前玩家状态（注意区分initialMsg下面的state表示当前页面状态）
            deadReason: null,
            deadDay: null,
        }
        playerSave.push(add)

        // console.log(playerSave[0].id) //平民/杀手
    }


    // //while--for循环的简化版
    // while (i < arr.length) {
    //     var add = {
    //         id: arr[i],
    //         index: index++,
    //         state: 'alive',
    //         deadReason: null,
    //         deadDay: null
    //     }
    //     i++;
    //     playerSave.push(arr)
    // }

    //    //  ES6迭代器 of写法
    //     for (var i of arr) {
    //         var arr = {
    //             id: i,
    //             index: index++,
    //             state: 'alive',
    //             deadReason: null,
    //             deadDay: null
    //         }
    //         playerSave.push(arr);
    //     }


    console.log(playerSave);
    return playerSave; //把值传给函数的参数 arr ——> playerArr
}

// console.log(arr)



//按钮跳转页面--把上面的数据进行储存
document.getElementById('go').onclick = function () {
    var playerNum = player.value,
        killerNum = killer.innerHTML,
        manNum = man.innerHTML;

    if (playerNum < 4 || playerNum > 18) {
        alert("请输入正确的玩家数")
    } else {
        // sessionStorage.setItem("playerArr", JSON.stringify(playerArr)); //数组转化为字符串JSON格式
        // sessionStorage.setItem("player", player);

        //打包所有数据，放在一个对象里面,之后的页面方便调用

        //对象-字面量表示法 (相比下面的写法更简洁)
        //playerArr --直接把shuffle函数传进来，而不是光playerArr一个参数
        let allMsg = {
            playerArr: shuffle(playerArr),
            // playerArr:arr,//报错
            playerNum: playerNum,
            killerNum: killerNum,
            manNum: manNum,
            killed: [],
            dayNum: 1,
        };

        console.log(allMsg.playerArr)

        /*
                allMsg.playerArr = playerArr; //随机后的数组
                allMsg.playerNum = playerNum; //玩家总人数
                allMsg.killerNum = killerNum; //杀手人数
                allMsg.manNum = manNum; //平民人数
                //又回来了，在--法官台本--页面进行杀人-亡灵-玩家-投票四步骤的时候，需要用到天数、被杀的人的数据
                allMsg.killed = [];
                allMsg.dayNum = 1;
        */

        var allMsgstr = JSON.stringify(allMsg); //把allMsg转化成字符串格式，存入allMsgstr
        sessionStorage.setItem('allMsg', allMsgstr); //把字符串格式的allMsgstr转化成allMsg进行存储
        window.location.href = "view-id.html"; //跳转
    }
}
// player.value = slider.value;
// console.log(player.value);
// console.log(slider.value);
// startInput();