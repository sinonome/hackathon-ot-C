'use strict';

const interval_time = 1000; // ミリ秒
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
    const userName = $("#userName").val();
    const isown = userName === data["userName"];
    let post = Publish.viewMessage(isown, data);
    $('#thread-asc').prepend(post);
    $('#thread-des').append(post);
    scroll_end(isOrder);
});

socket.on('ContinuousPostError', function(data) {
    alert("最大連続投稿回数を超えました");
})


//エンターキーの処理
var textbox = document.getElementById('message');
textbox.addEventListener('keypress', onKeyPress)
function onKeyPress(e) {
    if (e.ctrlKey && e.keyCode===10) {
        // 投稿処理
        publish();
        e.preventDefault();
    } else if (e.shiftKey==true && e.keyCode==13) {
        // メモ処理
        memo();
        e.preventDefault();
    }
}



