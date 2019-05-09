//跳转链接
function deal() {
    window.location = "../html/go-dealing.html"
}

function back_home() {
    window.location = "../html/taskjs1-1.html"
}



//关于在头部声明的问题 :（1）innerHTML的写法，我在声明的时候，给一个变量保存，但是后期调用的时候会无效，为什么？---因为后期没有把字符串转为数值

//先声明，后面要用到再取值---还是采取直接声明+取值的形式比较Ok
// var player, killer, man;


//获取杀手 平民 总人数的值value
var player = document.getElementById("player"), //输入框--总人数
    killer = document.getElementById("killer"), //杀手
    man = document.getElementById("man"), //平民
    slider = document.getElementsByName("slider")[0]; //获取滑动块

var playerArr = []; //创建一个玩家数组


//-----jQuery获取ID属性
// var player = $('#player'),
//     killer = $('#killer'),
//     man = $('#man');

// //将值转化为数值类型
// player = Number(player);
// killer = Number(killer);
// man = Number(man);

// console.log(player)





//分配玩家
function destribute() {

    //问题: 为什么这样赋值后 计算结果有问题？ 
    //解决：肯定就是 String类型没转化为Number类型惹的祸啦！

    // var people = player.value - killer.innerHTML;

    // 如果不在 4--18的范围内，就为空，不显示内容
    console.log(player.value)
    if (player.value < 4 || player.value > 18) {
        killer.innerHTML = "";
        man.innerHTML = "";
    }

    // if (playerNum < 4 || playerNum > 18) {
    //     killerNum = "";
    //     manNum = "";
    // }


    // 计算每次杀手和平民的人数，用math.floor向下取整，先算出每次杀手的人数

    //问题就在，下面 player.value - killer.innerHTML的操作，这两个根本就不是Number类型的，无法进行加减！

    //针对上面的疑问，又出现了一个问题，其实player.value - killer.innerHTML 完全有效，但是为什么这两个能进行加减？？ 
    //我换成Number之后反而不正常，不正常在杀手 平民的人数不能实时更新，应该是String ----> Number之后数据类型不匹配导致
    else if (player.value == 15 || player.value == 18) {
        killer.innerHTML = Math.floor((player.value) / 3 - 1);
        man.innerHTML = player.value - killer.innerHTML;
    } else {
        killer.innerHTML = Math.floor((player.value) / 3);
        man.innerHTML = player.value - killer.innerHTML;
    }


    // 问题： 不会实时更新的 number类型！！
    // 解决： 把字符串——>数字 的转化加入start()函数，实时更新

    // if (playerNum == 15 || playerNum == 18) {
    //     killerNum = Math.floor((playerNum) / 3 - 1);
    //     manNum = playerNum - killerNum;
    // } else if (playerNum >= 4 && playerNum <= 18) {
    //     killerNum = Math.floor((playerNum) / 3);
    //     manNum = playerNum - killerNum;
    // }


    // player = toString(playerNum);
    // killer = toString(killerNum);
    // man = toString(manNum);

    // console.log(playerNum)
    // console.log(manNum)
    // console.log(killerNum)

    // return (playerNum, manNum)


    //---------------jQuery写法---------------------

    // 用jQuery的text()写，给函数destribute函数加上参数 value  ----- 目前也是失败状态
    //失败原因找到了，是因为下面用的value值没有传参，也就是空的，我在头部把player.val()的值传入value，下面就可以正常运作

    // if (value < 4 || value > 18) {
    //     killer.text("");
    //     man.text("");
    // }

    // if (value == 15 || value == 18) {
    //     var num = ~~((value) / 3 - 1);
    //     killer.text(num);
    //     man.text(value - num);
    // } else if (value >= 4 && value < 18) {
    //     var num = ~~((value) / 3);
    //     killer.text(num);
    //     man.text(value - num);
    // }
}



//需求增加----左右添加按钮 + -
//控制加减
// document.getElementsByClassName("minus").onclick = function (){
//     slider.value--;
//     player.value = slider.value;
//     destribute();
// }

// document.getElementsByClassName("add").onclick = function (){
//     slider.value++;
//     player.value = slider.value;
//     destribute();
// }








//提示功能
//优化建议: 在‘去发牌’的时候提醒人数输入错误，不然每次修改数量都会弹框，不符合用户体验要求
// player.oninput = function(){
//     if(player.value < 4 || player.value > 18){
//         alert("请输入正确的玩家数量")
//         player.value = "";
//     }
// }


//正则表达式学习，用正则限制数字的输入，如果输入不是数字就为空
// player.oninput = function(){
//     var x = /\D/g; //定义正则表达--非数字
//     this.value = this.value.replace(x , ""); //非数字时替换为空
// }

//我把正则表达式，显示输入框只能输数字，放在了html内部

// player.oninput = function(){
//     var pattern = /[^0-9]/g;
//     if(pattern.test(player.value)){
//         player.value = player.value.replace(pattern, "");
//     }
//     destribute();
// }







//生成一个玩家的数组   ---然后进行洗牌乱序

function newArr() {

    // for (var i = 0; i < man; i++) {
    //     for (var j = 0; j < killer; j++) {
    //         playerArr[j] = "杀手";
    //     }
    //     playerArr[killer + i] = "平民";
    // }
    // shuffle()


    //把双循拆分
    console.log(playerArr.length); //找bug的时候，这里才发现，每次for循环后的数组值只会增加，不会减少

    playerArr = []; //重点！ 数组清空--没有清空的情况，这个循环内的值 只增不减

    for (var i = 0; i < manNum; i++) {
        playerArr[i] = "平民";
    }
    for (var j = manNum; j < (killerNum + manNum); j++) {
        //playerArr.push("杀手");// 方法一:  .push() 方法
        playerArr[j] = "杀手"; //方法二： 直接在i的基础上增加到j，之间的范围就是“杀手”的数量
    }

    console.log(playerArr);

    return playerArr;
}



// 疑问？：我下面 shuffle(arr)，然后在监听里面shuffle(playerArr) 进行的移花接木，是不是在这里可以声明一个变量，提前进行对换？

//把上面函数得到的 playerArr总人数的值 赋给一个新的变量声明arr，然后进行乱序

// var arr = newArr(playerArr);





// 数组乱序
function shuffle(arr) { // !注意： 这里arr是新给的参数，我们把上面数组生成的playerArr拿过来，
    //在监听里面进行替换这里从新参数arr--移花接木。而在这里面乱序，我们就暂且用arr来代替playerArr

    var i; //循环控制器
    var randomIndex; //随机索引值
    var temp; //临时存储

    for (i = arr.length; i > 0; i--) {
        randomIndex = Math.floor(Math.random() * i); //随机一个数，随机索引值

        //把下面的“原理”合在一起写---fisher-yates的核心---遍历每一个--1到底 + 随机索引互换
        temp = arr[i - 1];
        arr[i - 1] = arr[randomIndex];
        arr[randomIndex] = temp;

        // swap(arr, i - 1, randomIndex); //【乱序方法二】提前封装好的交换函数
    }

    //封装一个交换位置函数 swap，方便上面使用
    // function swap(arr, indexA, indexB) {
    //     var temp;

    //     temp = arr[indexA];
    //     arr[indexA] = arr[indexB];
    //     arr[indexB] = temp;
    // }

    console.log(arr);
    console.log(randomIndex);
}



/*

//优化建议： 可以把所有要“调用”的函数都放在start()一个函数，然后再放入一个监听事件里
function start() {
    // //获取杀手 平民 总人数的值value
    // player = document.getElementById("player").value; //输入框--总人数
    // killer = document.getElementById("killer").innerHTML; //杀手
    // man = document.getElementById("man").innerHTML; //平民

    // //将值转化为数值类型
    // playerNum = Number(player);
    // killerNum = Number(killer);
    // manNum = Number(man);

    // newArr(killerNum, manNum, playerArr);

    destribute();

    //存储玩家数据
    // sessionStorage.setItem("playerArr", JSON.stringify(playerArr));
    // sessionStorage.setItem("playerNum", playerNum);
    // sessionStorage.setItem("killerNum", killerNum);
    // sessionStorage.setItem("manNum", manNum);
}

*/







//事件监听方法（一）---输入框内的数据实时更新
// document.addEventListener("input", function () {
//     start();
// })

//事件监听方法（二）
// player.oninput = function () {
// }



//监听Input内的数值变化
document.addEventListener("input", function () {

    destribute(); //实时监听人数分配

    // //将值转化为数值类型
    playerNum = Number(player.value);
    killerNum = Number(killer.innerHTML);
    manNum = Number(man.innerHTML);

    newArr() //生成数组 - --- 注意这个顺序肯定是在 洗牌shuffle之前的！ 不能反了
    shuffle(playerArr) // 这里就是移花接木的交接之地---上面乱序的时候，我用arr代替了playerArr
})

//滑动条的监听
slider.oninput = function () {
    player.value = slider.value;

    //这个监听里可以不加destribute，只要保证滑动条的值相等于player总人数input内的值，那么我们只要控制input内的人数值就够了
    //所以同理，newArr shuffle生成数组和洗牌也不需要加在这里，只要input内
    // destribute();   
    // newArr();
    // shuffle(playerArr);
}








//按钮跳转页面--把上面的数据进行储存
document.getElementById('go').onclick = function () {
    // if(playerNum >=4 && playerNum <= 18  ){
    //     window.location = "../html/view-id.html"
    // }else{
    //     alert("请输入正确的玩家数")
    // }

    //验证在这一步，为什么用player.value 可以做出数量正确与否判断-- playerNum的值在没有加进start()函数的时候，并不会同步更新，因为变更的是player.value killer.inner的字符串
    // console.log(playerNum)
    // console.log(player.value)


    if (player.value < 4 || player.value > 18) {
        // window.location = "../html/view-id.html"
        alert("请输入正确的玩家数")
    } else {
        // window.location = "../html/view-id.html"; //两种跳转页面的写法
        location.href = "view-id.html";
    }
}





//  jQuery 写法
// $("#go").click(function () {
//     start();
//     if (playerNum >= 4 && playerNum <= 18) {
//         location.href = "view-id.html";
//     } else {
//         alert("请输入正确的玩家数量");
//     }
// })