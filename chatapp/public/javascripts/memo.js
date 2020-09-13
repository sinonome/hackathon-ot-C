'use strict';

// メモを画面上に表示する
function memo() {
    const memoData = {
        'userName': $('#userName').val(),
        'memo': $('#message').val(),
        'time': new Date().toLocaleString(),
    }

    // メモの内容を表示
    if (!memoData['memo'].trim()) {
        alert('メモが未入力です。');
    }
    else {
        socket.emit("sendMemoEvent", memoData);
        //$('#memo').prepend('<p>' + memoData['time'] + ' : ' + memoData['userName'] + "さんのメモ : " + memoData['memo'] + '</p>'); 
    }
    $('#message').val("");
    return false;
}

socket.on('getMemoEvent', function (data) {
    $('#memo').prepend('<p>' + data["time"] + ' : ' + data["memo"] + '</p>'); 
});