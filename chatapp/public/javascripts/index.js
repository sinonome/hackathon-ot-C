'use strict';

// チャットルームに入室する
function enter() {
    // 入力されたユーザ名を取得する
    const userName = $('#userName').val();
    // ユーザ名が未入力でないかチェックする
    if (!userName.trim()) {
        alert("ユーザ名が未入力です。");
    } else {
        $('form').submit();
    }


}
