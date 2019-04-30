//全局变量
//获取九宫格格子的数组
//注意，这个boxColor已经是一个包含所有盒子的数组，后面会用到，这是第一个关键
var boxColor = document.getElementsByClassName('box');

console.log(boxColor);





//------------------------知识点一 ——————随机取色  （1） 组成： 1. rgb  2.hsl  3. #f十六进制   4.给一个颜色库   
// -----------------------------------------------（2）取色的方法 1.math random   2.  洗牌算法可以吗？


//获取随机的颜色
function color() {

  r = Math.floor(Math.random() * 255);

  g = Math.floor(Math.random() * 255);

  b = Math.floor(Math.random() * 255);

  rgb = "rgb(" + r + "," + g + "," + b + ")";

  console.log(rgb);
  return rgb;
}



//------------------------知识点二 ——————随机取盒子  1.Math.random方法   2.洗牌算法如何运用   3.while  for  if 条件语句的使用



//当第一个盒子和第二个盒子相等的时候，会获取第三个
function box() {
  while (first == second || second == third || first == third) {
    var first = Math.floor(Math.random() * 9);
    var second = Math.floor(Math.random() * 9);
    var third = Math.floor(Math.random() * 9);

    console.log(first, second, third);
  }

  //调用前面的随机颜色，把它赋值给随机出来的三个盒子
  while (one == two || two == three || three == one) {
    var one = boxColor[first].style.backgroundColor = color()
    var two = boxColor[second].style.backgroundColor = color()
    var three = boxColor[third].style.backgroundColor = color()
  }
}



//------------------------知识点三 ——————定时器  1.如何设置    2.为何清除   3.如何清除  一、必须全局引用 二、for循环运用  三、button按键禁用   4.按钮的设置 click方法  onclick事件

//这是第一次试水，设置的方向错了
/*
setTimeout(start() {

}, 2000)
*/

//这是，点击开始后，2秒后触发一次， setTimeout只能触发一次
/*
function start() {

  setTimeout(function() {
  
    box()

  }, 2000)
}
*/

//这样设置后，变色的方块，无法回到正常颜色，需要加入变回橙色
/*
function start(){

  setInterval(function(){

    box()

  },1000)

}
*/

//因为清除定时器，只能引用全局变量，所以只能在头部给一个，不然后面的clearInterval无法引进
var myBox

function start() {

  //清除定时器，在每点击start开关后，清除一次，避免累加后造成“闪屏”
  clearInterval(myBox);

  myBox = setInterval(function(){

    //创建一个for循环0--9的范围，因为数组boxColor的数组就只有九个
    //假如我这里大于9了，会报错，如果设置2-9，会造成有时候有一个格子会无法回到原来的颜色
    //将变色后的盒子，恢复到橙色，用for循环可以遍历所有数组，保证没有疏漏

    for (j = 0; j < 9; j++) {
      boxColor[j].style.backgroundColor = "orange"
    };

    //执行被赋值了随机颜色的三个随机盒子
    box();      

  },1000);
};


function end() {
  //在点击end按钮后，清除定时器，结束循环。再触发for循环，将格子都恢复到橙色
  clearInterval(myBox)

  for (j = 0; j < 9; j++) {
    boxColor[j].style.backgroundColor = "orange"
  };

  // document.getElementsByClassName("button").disabled = true;  

};






/*
  左师兄的代码

var time;

function start() {

  //清除定时器
  clearInterval(time);
  time = setInterval(function () {

    //每次获取随机颜色后恢复颜色
    for (var i = 0; i < 9; i++) {
      boxColor[i].style.backgroundColor = "orange";
    }

    //调用被赋值了随机颜色的随机盒子
    box();

    //间隔一秒钟
  }, 1000)

  //禁止开始按钮
  document.getElementsByTagName("button")[0].disabled = true;
}

function end() {


  document.getElementsByClassName("button").disabled = false;
}



for (var j = 0; j < 3;  j++) {

  const num2 = Math.floor(Math.random() * giveColor.length + 1);

  giveColor[num2].style.backgroundColor = "orange";
}

randomColorOn(giveColor, color);


为什么写不出？  1.for循环不会，看不懂，写不出  2.数组的添加，删除运用不会
*/