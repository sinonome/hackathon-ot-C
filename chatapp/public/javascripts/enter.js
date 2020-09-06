'use strict';

// 入室メッセージをサーバに送信する
// 入力されたユーザ名を取得する
const userName = $("#userName").val();
// 入室メッセージイベントを送信する

socket.emit("sendUserNameEvent", userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    $('#info-list').prepend('<p>' + data + "が入室しました" + '</p>');
});
