'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // 選択されたルーム番号を取得する
    const roomNumber = $('#roomNumber').val();
    // alert(userName + roomNumber);
    
    // ユーザ名が未入力でないかチェックする
    if (!userName.trim()) {
        alert("ユーザ名が未入力です。");
    } else {
        $('form').submit();
    }
}



// ログイン画面から新規登録画面に遷移
function enterSignUp() {
    document.enterSignUpForm.submit();
}
