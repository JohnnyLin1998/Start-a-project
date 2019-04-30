//全局变量
//获取九宫格格子的数组
//注意，这个boxColor已经是一个包含所有盒子的数组，后面会用到，这是第一个关键
var boxColor = document.getElementsByClassName('box');

// console.log(boxColor);


//------------------------知识点一 ——————随机取色  （1） 组成： 1. rgb  2.hsl  3. #f十六进制   4.给一个颜色库   
// -----------------------------------------------（2）取色的方法 1.math random   2.  洗牌算法可以吗？


function color() {

  // r = Math.floor(Math.random() * 256);

  // g = Math.floor(Math.random() * 256);

  // b = Math.floor(Math.random() * 256);



  // r = parseInt(Math.random() * 256);

  // g = parseInt(Math.random() * 256);

  // b = parseInt(Math.random() * 256);



  // r = ~~(Math.random() * 256);

  // g = ~~(Math.random() * 256);

  // b = ~~(Math.random() * 256);



  //疑问：为什么不用round四舍五入来做？
  r = Math.round(Math.random() * 256);

  g = Math.round(Math.random() * 256);

  b = Math.round(Math.random() * 256);





  //rgb = "rgb(" + r + "," + g + "," + b + ")";


  rgb = `rgb(${r}, ${g}, ${b})`; //ES6写法 




  console.log(rgb);
  return rgb;
}


//Q1： ParseInt()函数   ----Number()  ParseFloat()  三个比较常用的非数值转化为数值的函数

// var num1 = parseInt(22.5);
// console.log(num1);

// var num2 = parseInt(070); // 0x 开头转化为8进制
// console.log(num2);

// var num3 = parseInt("70"); // 正常的可以非数值——>数值转化
// console.log(num3);

// var num4 = parseInt("AAA", 16); // 指定基数16在,之后
// console.log(num4);


// var num5 = parseFloat("22.555"); // 注意： ParseInt()函数  和   ParseFloat()函数的区别
// console.log(num5);




//Q2:  ~~ 是什么

// ~ JS按位非运算符， ~~双非运算符

// 位运算 NOT 由否定号（~）表示，它是 ECMAScript 中为数不多的与二进制算术有关的运算符之一。

// 位运算 NOT 是三步的处理过程：

// 把运算数转换成 32 位数字

// 把二进制数转换成它的二进制反码（0->1, 1->0）

// 把二进制数转换成浮点数

// 结论： ~ 操作就是 操作数的负值减1  -x-1    所以就得出 ~~  -(-x-1) -1 == x 并向下取整





//测试： 速度性能  ————  另附




// ---------------------HSL方法



// function color() {

//   // h = Math.floor(Math.random() * 360);

//   // s = Math.floor(Math.random() * 100);

//   // l = Math.floor(Math.random() * 100);


//   //parseInt

//   //~~ 


// //  hsl = "hsl( "+h+" , "+s+"%  , "+l+"% )"  //注意 % ， + 三个符号的摆放


//   hsl = `hsl(${h},  ${s}%, ${l}% )` //ES6写法——更简洁

//   console.log(hsl);
//   return hsl;
// }



//--------------十六进制颜色法


// function color() {

//   // var colorArr = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F);  It's doesn't work

//   //var colorArr = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]; //It's doesn't work

//   //var colorArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; // Both ok

//   var obj = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F";

//   var colorArr = obj.split(","); ////split在每个数之间添加逗号
//   var colorGet = "#";

//   for (var i = 0; i < 6; i++) { //for循环控制次数，6位数，随机六个
//     colorGet += colorArr[Math.floor(Math.random() * 16)]; // colorGet = colorGet + colorArr ————> # 666666

//     // console.log(colorArr);

//     // console.log(colorGet);
//   }

//  // console.log(colorArr)

//   console.log(colorGet);

//   return colorGet;
// }




//------------------【遗留】16进制转化问题----------
// var logo = "#";

// !function random(logo) {
//   for (var i = 0; i < 6; i++) {
//     var aaa = Math.floor(Math.random() * 17 ).toString(16)  //注意思考: 为什么(Math.random() * 16 + 1) 会出现七位数字？ 因为我一开始又犯了同样的错误 *16+1了 这是十六进制！ 怎么能有17位
//     logo += aaa;
//     console.log(logo)

//     // return logo
//   }
//  }()
//  console.log()


//-------------------------------------




//另一种更简洁的写法，不用给一个数组，直接进行16进制转化


// function color() {

//   var colorGet = "#";

//   for (var i = 0; i < 6; i++) {  

//     colorGet += (Math.floor(Math.random() * 16)).toString(16); //同样可以用 ParseInt  ~~
//   }

//   console.log(colorGet);

//   return colorGet;

// }



//更更加简洁 —— 设计到位运算符


// 按位或：位运算只对整数有效，遇到小数时，会将小数部分舍去，只保留整数部分。所以，将一个小数与0进行二进制或运算，等同于对该数去除小数部分，即取整数位。
// -2.9 | 0  // -2
//  2.9 | 0  //2


// function color() {

//   var colorGet = "#";

//   for (var i = 0; i < 6; i++) {
//     colorGet += (Math.random() * 16 | 0).toString(16);    // 按位或取整 + toString转化为16进制
//   }

//   console.log(colorGet);

//   return colorGet;
// }




//额外的思考： 六进制补零， 还有别的方法？









//------------------------知识点二 ——————随机取盒子  1.Math.random方法   2.洗牌算法如何运用   3.while  for  if 条件语句的使用


//随机出三个0--9的索引值

//如何避免数字重复？----逻辑或判断
//当第一个盒子和第二个盒子相等的时候，会获取第三个

function box() {
  while (first == second || second == third || first == third) {
    var first = Math.floor(Math.random() * 9);
    var second = Math.floor(Math.random() * 9);
    var third = Math.floor(Math.random() * 9);

    // console.log(first, second, third);
  }

  //调用上面函数随机的3个索引，赋给九个格子---随机出了3个盒子； 3个盒子分别对应一个color()函数，一轮触发3次
  while (one == two || two == three || three == one) {
    var one = boxColor[first].style.backgroundColor = color()
    var two = boxColor[second].style.backgroundColor = color()
    var three = boxColor[third].style.backgroundColor = color()
  }

  // console.log(boxColor)
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
var myBox;

function start() {

  clearInterval(myBox);

  myBox = setInterval(function () {
    //创建一个for循环0--9的范围，因为数组boxColor的数组就只有九个
    //假如我这里大于9了，会报错，如果设置2-9，会造成有时候有一个格子会无法回到原来的颜色
    //将变色后的盒子，恢复到橙色，用for循环可以遍历所有数组，保证没有疏漏

    for (j = 0; j < 9; j++) {
      boxColor[j].style.backgroundColor = "orange"
    };

    box(); //执行被赋值了随机颜色的三个随机盒子

  }, 1000);
};


function end() {

  clearInterval(myBox)

  for (j = 0; j < 9; j++) {
    boxColor[j].style.backgroundColor = "orange"
  };

  // document.getElementsByClassName("button").disabled = true;  
};



/*
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
*/



// for (var j = 0; j < 3;  j++) {

//   const num2 = Math.floor(Math.random() * giveColor.length + 1);

//   giveColor[num2].style.backgroundColor = ;
// }



// randomColorOn(giveColor, color);

//为什么写不出？  1.for循环不会，看不懂，写不出  2.数组的添加，删除运用不会