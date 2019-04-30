function showPic(whichpic) {
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", source);
}



var person = new Object();
person.name = "John";
person.age = 21;

var person ={
    "name" : "John",
    "age" : 21,
};