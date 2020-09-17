'use strict';



function createUser() {

    const createUserData = {
        'createUserName': $('#createUserName').val(),
        'createUserPassword': $('#createUserPassword').val(),
        'createUserPassword2': $('#createUserPassword2').val(),

    }

    if (!createUserData['createUserName'].trim() || !createUserData['createUserPassword'].trim() ) {
            alert("usernameとpasswordを入力してください");
    } else {
        if (createUserData['createUserPassword'] != createUserData['createUserPassword2']) {
            alert("パスワードが異なっています");
        }
        else {
            socket.emit("sendCreateUserEvent", createUserData);
        }
    }
    
}


socket.on('receiveCreateUserEvent', function (data) {

    alert(data + "さんのユーザが作成されました");
    location.href = '/';
});


socket.on('receiveErrorCreateUserEvent', function (data) {
    alert(`ユーザ名 : ${data} はすでに存在しています`);
});




// ログイン画面から新規登録画面に遷移
function enterSignUp() {
    document.enterSignUpForm.submit();

}

// 新規登録画面からログイン画面に遷移
function exitSignUp() {
    location.href = '/';
}