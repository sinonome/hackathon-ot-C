'use strict';



function createUser() {

    const createUserData = {
        'createUserName': $('#createUserName').val(),
        'createUserPassword': $('#createUserPassword').val(),
    }

    if (!createUserData['createUserName'].trim() || !createUserData['createUserPassword'].trim()) {
        alert("ユーザ名もしくはパスワードを入力してください");
    } else {
        socket.emit("sendCreateUserEvent", createUserData);
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