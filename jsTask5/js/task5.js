/* jshint esversion: 6 */

let user = document.getElementById('user'), //用户名
    pass = document.getElementById('password'), //密码
    logBtn = document.getElementById('logIn'), //登录按钮
    alertMsg = document.getElementsByClassName('alert')[0],
    xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft.XMLHTTP"); //新建XMLHttpRequest对象， 兼容IE5/IE6
// xhr = new XMLHttpRequest(),

// //兼容写法2
// var xhr;
// if (window.XMLHttpRequest) //检查是否有XMLHttpRequest对象
// {
//     // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//     xhr = new XMLHttpRequest();
// } else {
//     // IE6, IE5 浏览器执行代码
//     xhr = new ActiveXObject("Microsoft.XMLHTTP");
// }

//监听输入的账密
user.onchange = function () {
    username = user.value
}
pass.onchange = function () {
    password = pass.value
}


logBtn.onclick = function () {
    let data = `name=${username}&pwd=${password}`; //发送的值

    xhr.onreadystatechange = function () { //监听readyState属性变化

        if (xhr.readyState === 4) { //请求状态4 获取服务器响应成功

            // console.log(xhr.readyState) //4
            // console.log(xhr.status)

            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) { //状态码在200-300区间以及304表示通信成功，服务器返回的是正常状态
                // if (xhr.status == 200) {

                let dataStr = xhr.responseText; //获取服务器响应的数据，注意，这个是JSON文本格式（存储在字符串里）
                let responseMsg = JSON.parse(dataStr); //转化为数据结构

                console.log(dataStr)
                console.log(responseMsg)
                console.log(responseMsg.code)
                console.log(responseMsg.message)

                if (responseMsg.code === 0) {
                    location.href = "http://dev.admin.carrots.ptteng.com/";
                } else if (responseMsg.code === -5003) { //用户不存在
                    alertMsg.innerHTML = responseMsg.message;
                } else if (responseMsg.code === -5004) { //密码错误
                    alertMsg.innerHTML = responseMsg.message;
                }
            }
        }
    }

    // console.log(data);

    xhr.open('POST', '/carrots-admin-ajax/a/login', true); //open方法初始化请求（此时待发送） | POST请求方式 | 服务器地址 | true异步
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //请求头 设置"Content-type" 只有POST()请求方式 需要请求头
    xhr.send(data); //发送请求
}