var boxGet = document.getElementsByClassName('box'); //获取九个格子class属性，取九个节点，变成数组

console.log(boxGet);


//随机颜色——16进制法
function color() {
    var colorGet = "#";
    for (var i = 0; i < 6; i++) {
        colorGet += (~~(Math.random() * 15 + 1)).toString(16); //从1开始，16个数字内随机，向下取整+转化为16进制数
    }

    return colorGet;
}

console.log(color());



//随机盒子
function box() {
    //为避免三个盒子重复，使用逻辑或||
    while (first === second || second === third || third === first) {
        var first = ~~(Math.random() * 9);
        var second = ~~(Math.random() * 9);
        var third = ~~(Math.random() * 8 + 1); //等价写法
    }

    console.log(first, second, third);


    //将随机出来的盒子，赋值color函数出来的随机颜色
    while (one == two || two == three || three == one) {
        var one = boxGet[first].style.backgroundColor = color();
        var two = boxGet[second].style.backgroundColor = color();
        var three = boxGet[third].style.backgroundColor = color();
    }
    //return one, two ,three 
};
//console.log(box())  // 这里不能返回值，不然页面打开，还没等开关，直接就变色了，


//声明一个全局变量，进行定时器之间的参数传输
var time

function start() {
    clearInterval(time); //点击按钮之前清除定时器，避免多次点击出现堆积
    time = setInterval(function () {
        for (var j = 0; j < 9; j++) {
            boxGet[j].style.backgroundColor = "orange"
        };

        box() //在定时器内执行box函数，进行随机盒子+随机颜色工作

    }, 1000) //延时1秒
};


function end() {
    clearInterval(time) //点击end关闭后，定时器被清除，停止工作
    for (var j = 0; j < 9; j++) {
        boxGet[j].style.backgroundColor = "orange"
    };
};