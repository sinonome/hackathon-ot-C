'use strict';

let interval_time = 1000; // ミリ秒
let last_send = 0;
let isPost = false;

// 投稿メッセージをサーバに送信する
function publish() {
    let nowTime = Date.now();
    if (!isPost) {
        // 一度も投稿していない場合
        last_send = nowTime;
        isPost = true;
    } else {
        console.log(nowTime - last_send)
        if (nowTime - last_send < interval_time) {
            alert('投稿間隔が短すぎます');
            return false;
        } else {
            last_send = nowTime;
        }
    }

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
    }
    return false;
}

// サーバから受信した投稿メッセージを画面上に表示する
socket.on('getMessageEvent', function (data) {
    $('#thread').prepend('<p>' + data['time'] + ' : '+ data['userName'] + ' : ' + data['message'] + '</p>');

});
