//---布尔值判断true or false

// var car = {
//   name = "benz"
// };


// var family = ["me", "dad", "mom"];


// function checkBoolean(car){
//   if(car){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(checkBoolean(''));   //flase
// console.log(checkBoolean(car));   //true



//不知道如何查看返回的是true 还是 false


/*
var car = "some bez and bmw";
var aaa = 9555;
var bbb = {name: "john" , age:20};
var ccc = [153,"john"];
var ddd = function(niubi){
  console.log(n)
};

var eee = true;
var fff = "";
var ggg = null;
*/


//方法一：用typeOf来判断  但是对于数组Array 空指针null 返回的类型就是Object，
//因此这个方法的弊端就是 无法检测出数组和对象 ， 只能检测出  string number object  function

/*
alert(typeof car);   //string
alert(typeof aaa);  //num
alert(typeof bbb);  //object
alert(typeof ccc); //object ---Array
alert(typeof ggg); //object ---null
alert (typeof ddd);  //function*/




//方法二： instanceof操作符    判断从属关系， A 是不是属于B，返回true or  false来告诉我们
//instanceof 左边操作数应该是一个 对象。 右操作数应该是一个函数

/*
alert(car instanceof Array);    //flase  数组不判断
alert(car instanceof String);    //还是flase  字符串也不判断
alert (bbb instanceof object);    //不做判断，因为Object小写了
alert (bbb instanceof Object);    //true  对象可以判断 
alert(ddd instanceof Function);   //true  函数可以判断  注意F大写
alert (ggg instanceof Null);      //  ？？？为什么不做判断？----因为null不是对象，也不是函数，null只有在typeof大哥那才勉强是个object
*/


//—————我现在理解为instanceof，可以检测出一个A是不是B的从属关系， 
//左边是对象，右边是函数（刚刚做出来，右边也可以是对象），左边属于右边就判断为true，反之就是flase


//instanceof可以判断对象是由哪个函数实例化出来的 
/*
var a = function(x){};
var b = function(y){};
var c = new a (1);
var d = new a (2);

alert(c instanceof a);  //true
alert(d instanceof b);  //false*/




//方法三：对象的 constructor属性  ————这个方法只能对Array进行判断
/*
var abcd = [1,5,8,3,5];
var strong = {name:"john", age:20};
var thinman = 205682;
var beauty = "I LOVE U"
var niuniu = function(xx){};
var kong = null;
var kkkong = "";
*/
/*
alert(abcd.constructor === Array);     // true
alert(niuniu.constructor === Function);  //同样是true啊！ 谁说只能判断为Array？
alert(thinman.constructor === Number);  //我尼玛！ 这个也是true！
alert(thinman.constructor === number);  //但是同样和 instanceof 一样，不能小写后面的类型
alert (beauty.constructor ===String);    //true
alert (kong.constructor === null);   //不判断
alert (kkkong.constructor === null);   //flase
*/


/*
TO SUM 总结方法二、三： constructor看似比 instanceof还要好用一点，
而且数组 对象 函数啥的都能判断，但是有一个很大的漏洞， 当我们在frame中来回
穿梭的时候，这两种方法就崩了。 由于每个iframe中都有自己的执行环境，跨frame的对象，
是不共享原型链的，因此会导致检测代码失效 （这是网上说的，我还没理解）————————————————————————————去查查

var iframe = document.createElement('iframe'); //创建iframe
document.body.appendChild(iframe); //添加到body中
xArray = window.frames[window.frames.length-1].Array;
var arr = new xArray(1,2,3); // 声明数组[1,2,3]
alert(arr instanceof Array); // false
alert(arr.constructor === Array); // false 
*/

/*
突然发现，这个问题，我其实两天前就在《JS高级  P88》看到了！！ 果然新知识是必须要反复刺激两次以上，
脑神经才会有反应，再刺激三四次，基本就会很敏感的记住了！ famne中来回穿梭，就是说如果存在两个以上不
同的全局执行环境，就是如果网页中存在多个框架了，那么这时候。就会出现两个以上的Array的构造函数，
如果从一个框架向另一个框架传入一组数组，那么传入的数组和第二个框架中原生的数据就具有各自不相同的构造函数了————所以，怎么解决？？

解决： 为了这个问题，在ES5中新增了Array.isArray() 方法 ————不管在哪个全局执行环境中，这个方法都可以确定某个值是不是数组。 
——————P88  继续探究学习*/





//方法四： 利用 toString()方法， 这才是最佳操作    P89 有探究说明 toLocalString() / toString() /  valueOf()方法的区别

var abcd = [1,5,8,3,5];
var strong = {name:"john", age:20};
var thinman = 205682;
var beauty = "I LOVE U"
var niuniu = function(xx){};
var kong = null;
var kkkong = "";























