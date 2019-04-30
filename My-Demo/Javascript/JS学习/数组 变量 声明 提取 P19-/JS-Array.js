// mood = "happy";
// alert(mood);


// var mood = "happy";


// var mood , age;
// mood = "happy";
// age = 33 ;
// alert(mood);
// alert(age);

// var my_mood = 22233333;
// alert (my_mood);

// var mood = 'don\'t stop talking';
// alert (mood);

// var age = 33.25555;
// var temperature = -20.222222222;

// alert (temperature);

//布尔值
// var sleeping = true;
// var married = true;

// var married = "true"; 字符串true

//---------------------------------------------------------------------P15 DOM之前，声明变量的小练习



//数组的表达  《高级P86》




//数组写法（1）：
//注意！！！！！！！！ 注意！！！！！ 
//我这是第一次尝试声明数组的属性，后来我想查看数组的length的时候，就是出不来，看看我第一次错在哪？？
/*
var beatles = Array(3);
beatles[0] = john;
beatles[1] = sabrina;
beatles[2] = dora;
beatles[3] = hank;

alert (beatles.length)   //无法检测出长度，想想为什么！
*/

/*
var beatles = Array(2);
beatles[0] = "john";
beatles[1] = "mary";
beatles[2] = "knogh";*/






//数组写法（2）：
/*
var beatles = Array("john", "sabrina", "dora", "hank");*/

/*
alert (beatles.length)  //可以正常检测哟
*/


//下面这个是length的一个属性特点————移除数组的末尾项（小于数组项的数量） P87
/*
beatles.length = 3;
alert(beatles[3]);*/



/*
//length的属性————添加末尾项(只要大于数组项的数量)
beatles[beatles.length] = "mark";
alert(beatles);
*/


//数组写法（3）更简洁的写法————直接上方括号表示数组，可以去掉Array
/*
var beatles = ["john", "sabrina", "dora", "hank"];

var year = [1973, 1998, 2018, 2023]; //数字不用引号

var mix = ["john", 1998, true];   //可以混合写*/






//var family = ["car", 1998, true, "mom" ];
/*
family.length = 5;  //给数组family末尾添加一个undefined

family[family.length] = "baby";  //给数组family后面添加一项baby

alert(family[4]);*/


/*
var notrue = "flase";
family[2] = notrue;   //我想把family的第三项替换成false，然后alert第三项，但是出不来，看看问题出在哪————————声明只有[2]

alert([2]);*/





//--接上上面的

//数组的值可以被替换，john已经被换成了link。 数组的值也可以是变量，
//这里的beatles的第一个数值，赋给name，而name已经被声明成了link，所以beatles 现在是 link sabrina dora hank
/*
var name = "link";
beatles[0] = name;


//beatles[1] = "link";我这样写也可以正常使用，就是不知道是否符合规则呀？ 

alert(beatles);*/




//数组还可以包含另一个数组,并且可以精确获取到某个数组的第一个值

/*
var niuniu = [1970, "johnny", true];
var hehe = [];
hehe [0] = niuniu;*/

/*
alert(hehe); //直接从hehe获取niuniu整个数组
alert (hehe[0][0]); //更精确的获取niuniu数组里的第一个值
alert(hehe[0][2]);*/





//下面这样的叫做——关联数组，但是不推荐书上说，是因为我们不应该修改Array对象的属性，而应该使用通用的对象（Object）  why?????不理解

//在Javascript中，所有的变量实际上都是某种类型的对象，一个布尔值就是一个Boolean类型的对象，一个数组就是Array类型的对象 《DOM P18》

/*

var lennon = Array();

lennon["name"] = "john";
lennon["age"] =20;
lennon["hobby"] = "car";
*/



//对象：与数组类似，对象也是使用一个名字表示一组值。对象的每个值  都是对象的一个属性

//继续上面这个栗子，我们用“对象”来表示  看看两者区别！

//注意注意！！ 下面这个栗子有个很初级，但是很难发现的错误！！
/*
var lennon = Object();

lennon.name = "john";
lennon.age = 20;
lennon.hobby = car;*/


/*
var family = Object();
family.father = "sheng";
family.me = "john";
family.sister = "meng";

var family = {father:"sheng", me:"john", sister:"meng"}

alert(family.me);*/






//注意了！ 我自己脱离书本，在这里想提取name的值，但是怎么用都出来！！ 是因为上面的car没有加"""  直接整个对象无效了！
/*
var prac ={};
prac.play = lennon;

alert(prac.play.name);*/



//创建Object对象，也有简写   注意： 对象这里，用的是 { }大括号，不是方括号，方括号是数组专用的
//这种方法，高级P84也提到了，更专业的说法—— 对象字面量表示法
/*
var lennon = {name:"john", age:20, hobby:"car"};*/


//数组和对象的一二事： 可以看到数组有个东西，叫下标，还分0 1 2 3，比较繁琐。
//所以对象就是来代替传统的数组，直接通过元素的名字来引用它们，而不是数字，大大提高了脚本的可读性


//我们创建一个新的数组，然后用上面这个lenon对象来填充，作为第一个元素

/*
var beatles = Array();
beatles[0] = lennon;

alert(beatles[0].age);   //注意，现在获取beatles[0]这样不够，还得后面加.age   DOM P18
*/

// ————————————————》》》再次改进升级 把beatles数组 也声明为对象,而不是传统数组

/*
var family = {
    sister:"meng", 
    father:"sheng", 
    son:"me"
};

*/
//注意，上面的对象family现在是简写状态
/*/

一般写法是
var family = Object();
family.sister = "meng";
family.father= "sheng";
family.son = "me";*/

//访问对象属性，也有两种方法（1）用方括号语法   （2）用.点表示法  --高级P85

/*
alert (family["sister"]);

alert(family.sister);
*/


//现在我又（声明）创建一个新的对象，名字叫wonderful，并且给新的对象一个新的属性叫newnew，然后赋值给了family，
//现在newnew和family等价了，然后我就可以从wonderful.newnew中，调取family的属性对应的值  DOM P18 好好体会一下


//现在这种 = {} 留空括号的方法，可以定义只包含默认属性和方法的对象  高级P84
/*
var wonderful = {};
wonderful.newnew = family;
wonderful.oldold = family;

alert(wonderful.newnew.sister);

alert(wonderful.newnew.son);

alert(wonderful.oldold.father); //前面两个alert不会被替换掉，此时会有三个alert一起显示
*/




//----------------------------------3.25  P90. 数组专题




//var benz = ["g63", "c43", "s65"];

//alert(benz.toString());   //用这三个方式来获取整个数组
//alert(benz.valueOf());
//alert(benz);



//练习如何用“栈zhan方法”来  推入Push  弹出pop 新的数组项  P91

/*
var car = new Array();

var family = car.push("g63", "c43", "a45");   //利用push直接推入三项数组

//alert(family);   //这样直接会返回，这个数组里面的数量 3

family = car.push("gtr");   //还可以再添加（推入）


var newcar = car.pop();  //pop可以移除（弹出）最后一项数组，然后取得这个值（注意：这是两步工作）
//alert(newcar);

alert(newcar.length);   //可以看到我前面push之后的数组数量变成4，现在pop()减一后，又回到了3
*/


//栈方法的push后推入  pop后弹出 --结合--   unshift前推入   shift前弹出   来形成队列   P91
/*
var bmw = new Array();
var newcar = bmw.push("red", "black");
//alert(newcar);  //返回数值2，代表数组里有两项

newcar = bmw.push("luxury");
//alert(newcar);  //push增加了一项

var whole = bmw.shift();

alert(whole); //shift取走了bmw数组里的第一位 “red”

alert(bmw.length); //现在取走了red，只有两项，返回2
*/




//--------------------3.25  重排序方法  比较函数   P92

//var values = [0, 1, 5, 10, 15, 20];
/*values.reverse();
alert(values);  //取得了相反的数组排列*/

/*
values.sort();
alert(values);*/

//这就是一个 比较函数 了，有了它，现在的sort后的顺序不会是 5在10的后面————虽然现在还没搞懂为什么5会跑到最后

//这是正常的升序，从小到大———— 通过调整return，可以改为降序 P93
/*
function compare(values1, values2){
  if (values1 < values2) {
    return -1;
  } else if (values1 > values2){
    return 1;
  } else {
    return 0;
  }
}



values.sort(compare);

alert(values);*/

//另一种更为简单的比较函数————但只适用于 数值类型 或者 ValuesOf()返回数值类型的对象类型-----不理解！！！！！


/*

function conpare (values1, values2 ){
  return values2 - values1;
}

values.sort(compare);
//values.sort();

alert(values);
*/






//----------------------------3.25 下面是是关于函数--传递参数的知识   --暂存在这里


//创建函数addTen(),  并且有一个参数num，参数在这里是局部变量，只在函数内起作用
/*
function addTen (num){
  num += 10;               //注意！:  + = 不能分开
  return num;
}

var me = 20;
var result = addTen(me);
//alert(me);
alert(result); */

//why? 等于30？？ 为啥子——书上的解释：　在调用函数时，变量me作为参数被传递给函数，这个me变量的值是２０
//于是20被复制给参数num，以便在addTen()中使用。 参数num与变量me互不相识，它们仅仅是具有相同的值。
//在函数内部参数被加上了10，但这个变化不会影响函数外部的count变量，因为参数在这里是函数的局部变量



//下面这个栗子，需要好好体会，有深度   关于——————按值传递参数 & 按引用传递参数    P 69/71  

/*
function setName(obj){
  obj.name = "john";
}

var person = new Object();
setName(person);
alert(person.name);*/


//3.27关于循环 if  do while循环


//------------------------------while

// var count = 1;
// while(count < 11){
//   alert(count);
//   count++;
// }



// var num = 10;
// while(num < 15){
//   alert(num);
//   num++;
// }


//注意，下面这个是 -- 的情况， num < xx 这个数字，必须大于num本身的数值，不然无效
// var num = 15;
// while(num < 13){
//   alert(num);
//   num--;
// }

//注意： 下面这个栗子，区分num的初始值和范围的区别 ——  alert的数值是从20开始的，并且无限循环下去，因为已经脱离结界15
// var num = 20;
// while(num > 15){
//   alert(num);
//   num++;
// }



// 问题： 怎么做到两个两个想加上去？  
// var num = 25;
// while(num > 15){
//   alert(num);
//   num +2;
// }

//---解答：

// var num = 25;
// while(num < 28){
//   alert(num);
//   num += 2
// }

//---------------感受一下alert在内在外的区别

// var i = 0;
// while (i < 10){
//   i += 2;
// }  
// alert(i);


// var i = 0;
// while (i < 10){
//   i += 2;
//   alert(i);
// }  





//---------------do while 语句

// var num = 1;
// do{
//   alert(num);
//   num++;
// }while(num < 5);


// var num = 30;
// do{
//   alert(num);
//   num--;
// }while(num > 20);

//---------------- 对比do while / while的写法

//var num = 100;              //do while --后测试讯循环语句 while( num > 94)写在后面
// do{
//   alert(num);
//   num--;
// }while(num > 94)


//var num = 100 ;             //while--前测试循环语句 while( num > 94)写在前面
// while( num > 94){
//   alert (num);
//   num--;
// }
//-------------------------

//-------------------------注意下面这两个do while函数 alert的值不同！ 位置！
// var num = 50;
// do{
//   num ++ ;
//   alert(num );
// }while( num < 56)



// var num = 50;
// do{
//   alert(num );
//   num ++ ;
// }while( num < 56)
//---------------------------------------

// var num = 100;
// while( num <106){
//   alert(num);
//   num ++ ;
// }


// var num = 100;
// do{
//   alert(num);
//   num ++
// }while(num < 106)



//---------------if 循环语句

// var num = -5;

// if (num > 25){
//   alert("I LOVE U");
// }else if (num < 0){
//   alert("I DON\'T LIKE U")
// }else {
//   alert("Hi! go away!")
// }
 

//----------for语句


var num = 10;
for (var i = 0; i < num; i++){
  alert(i);
}














