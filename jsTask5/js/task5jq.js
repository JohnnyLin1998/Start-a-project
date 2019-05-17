let user = $('#user'),
    pass = $('#password'),
    logBtn = $('#logIn'),
    alertMsg = $('.alert');



user.onchange = function(){
    username = user.val();
}
pass.onchange = function(){
    password = pass.val();
}



logBtn.on('click',function(){

    let data = `name=${username}&pwd=${password}`;








})


// $.ajax{

// }




























