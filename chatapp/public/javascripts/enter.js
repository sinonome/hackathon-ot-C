'use strict';

// 入室メッセージをサーバに送信する


// 部屋番号を取得する
const roomNumber = $("#roomNumber").val();
// 部屋番号の設定を行う
socket.emit("setRoomNumber", {roomNumber:roomNumber});

// 入力されたユーザ名を取得する
const userName = $("#userName").val();
// 入室メッセージイベントを送信する
socket.emit("sendUserNameEvent", userName);

//isisExist1を更新
socket.emit("sendEnterisExistEvent", userName);

// サーバから受信した入室メッセージを画面上に表示する
socket.on('receiveEnterEvent', function (data) {
    $('#info-list').prepend('<p>' + data + "が入室しました。" + '</p>');
});

socket.on('receiveEnterisExistEvent', function (data) {
    // alert(`${data}のis1を更新しました`);
});
