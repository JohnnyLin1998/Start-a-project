

//selectFrom方法无法识别？？？
// var colors = ["red", "blue", "green", "pink"];
// var color = colors[selectFrom(0 , colors.length-1)];
// alert(color);



//《高程P120》

//这是Boolean类型的实例，重写了valueOf()方法和String()方法，返回的基本类型只有true和false 还有 "true" 和 "false"俩
var falseObject = new Boolean(false);//引用类型 —— Boolean类型是与布尔值对应的引用类型  《高程120》
var result = falseObject && true;
console.log(result);


var falseValue = false; //基本类型 ——
var result = falseValue && true;
console.log(result);




console.log(typeof falseObject); //typeof对引用类型，返回的是object

console.log(typeof falseValue);