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
    const userName = $("#userName").val();

    // 投稿内容
    let post = "<p>" + data["message"] + "</p>" + 
               "<p>" + data["time"] + " : " + data["userName"] + "</p>";

    // 投稿を左右どちらかに寄せる(背景色はとりあえず)
    if (userName == data["userName"]) {
        // 自分の投稿(右寄せ)
        post = "<div class='clearfix'>" +
                    "<div class='float-right bg-success'>" + 
                        post + 
                     "</div>" + 
                "</div>";
    }
    else {
        // 他人の投稿(左寄せ)
        post = "<div class='clearfix'>" +
                    "<div class='float-left bg-secondary'>" + 
                        post + 
                     "</div>" + 
                "</div>";
    }
    $('#thread-asc').prepend(post);
    $('#thread-des').append(post);
    // $('#thread-asc').prepend('<p>' + data['time'] + ' : '+ data['userName'] + ' : ' + data['message'] + '</p>');
    // $('#thread-des').append('<p>' + data['time'] + ' : '+ data['userName'] + ' : ' + data['message'] + '</p>');
});

socket.on('ContinuousPostError', function(data) {
    alert("最大連続投稿回数を超えました");
})


//エンターキーの処理
var textbox = document.getElementById('message');
textbox.addEventListener('keypress', onKeyPress)
function onKeyPress(e) {
    // if (e.keyCode==13) {
    if (event.ctrlKey && e.keyCode===10) {
        // 投稿処理
        publish();
        e.preventDefault();
    } else if (event.shiftKey && e.keyCode===13) {
        // メモ処理
        memo();
        e.preventDefault();
    }
}



