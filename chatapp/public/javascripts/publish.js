'use strict';

// 投稿メッセージをサーバに送信する
function publish() {
    // ユーザ名を取得
    const userName = $('#userName').val();
    // 入力されたメッセージを取得
    const message = $('#message').val();
    const sendMessage = {
        'userName' : userName,
        'message' : message,
        'time': new Date().toLocaleString(),
    };
    if (!sendMessage['message'].trim()) {
        alert('投稿文が未入力です');
    }
    else {
        socket.emit("sendMessageEvent", sendMessage);
        $('#message').val("");
        return false;
    }
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('getMessageEvent', function (data) {
    console.log(data);
    console.log(typeof data);
    $('#thread').prepend('<p>' + data['time'] + ' : '+ data['userName'] + ' : ' + data['message'] + '</p>');
});
