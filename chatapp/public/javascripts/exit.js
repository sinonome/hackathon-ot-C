'use strict';

// 退室メッセージをサーバに送信する
function exit() {
    // ユーザ名取得
    const userName = $('#userName').val();
    // 退室メッセージイベントを送信する
    socket.emit('sendExitEvent',userName);
    // 退室
    location.href = '/';

    //isisExist0を更新
    socket.emit("sendExitisExistEvent", userName);
}

// サーバから受信した退室メッセージを画面上に表示する
socket.on('receiveExitEvent', function (data) {
    $('#info-list').prepend('<p>' + data + "さんが退出しました。" + '</p>');
});


socket.on('receiveExitisExistEvent', function (data) {
    // alert(`${data}のis0を更新しました`);
});