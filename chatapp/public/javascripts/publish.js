'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    const sendMessage = {
        'userName' : userName,
        'message' : message
    };
    // 投稿内容を送信
    // alert('OK' + userName + ":" + message);
    socket.emit("sendMessageEvent", sendMessage);
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('getMessageEvent', function (data) {
    console.log(data);
    console.log(typeof data);
    $('#thread').prepend('<p>' + data['userName'] + ' : ' + data['message'] + '</p>');
});
