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

/*
//注意！！！！！！！！ 注意！！！！！ 
//我这是第一次尝试声明数组的属性，后来我想查看数组的length的时候，就是出不来，看看我第一次错在哪？？
var beatles = Array(3);
beatles[0] = john;
beatles[1] = sabrina;
beatles[2] = dora;
beatles[3] = hank;

alert (beatles.length)   //出不来哦！
*/


//数组另一种简单写法：
/*
var beatles = Array("john", "sabrina", "dora", "hank");

alert (beatles.length)  //可以正常检测哟
*/



//再另一种，更简洁的写法————直接上方括号表示数组，可以去掉Array
/*
var beatles = ["john", "sabrina", "dora", "hank"];

var year = [1973, 1998, 2018, 2023]; //数字不用引号

var mix = ["john", 1998, true];   //可以混合写*/


//--接上面的

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















