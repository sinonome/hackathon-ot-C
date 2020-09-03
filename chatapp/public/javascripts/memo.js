'use strict';

// メモを画面上に表示する
function memo() {
    // ユーザ名を取得
    // const userName = $('#userName').val();
    // 入力されたメッセージを取得
    // const message = $('#message').val();

    const memoData = {
        'userName': $('#userName').val(),
        'memo': $('#message').val(),
        'time': new Date().toLocaleString(),
    }

    // メモの内容を表示
    // $('#thread').prepend('<p>' +userName+'さんのメモ：'+message+ '</p>');
    if (!memoData['memo'].trim()) {
        alert('メモが未入力です。');
    }
    else {
        $('#thread').prepend('<p>' + memoData['time'] + ' : ' + memoData['userName'] + "さんのメモ : " + memoData['memo'] + '</p>');
    }
    $('#message').val("");
    return false;
}