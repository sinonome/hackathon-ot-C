'use strict';

// // チャットルームに入室する
// function enter() {
//     // 入力されたユーザ名を取得する
//     const userName = $('#userName').val();
//     // 選択されたルーム番号を取得する
//     const roomNumber = $('#roomNumber').val();
//     // alert(userName + roomNumber);

//     // ユーザ名が未入力でないかチェックする
//     if (!userName.trim()) {
//         alert("ユーザ名が未入力です。");
//     } else {
//         document.enterRoomForm.submit();
//     }
// }

function signIn() {
    let signInData = {
        'signInUserName': $('#userName').val(),
        'signInPassword': $('#password').val(),
        'signInRoomNumber': $('#roomNumber').val(),

    }
    socket.emit("sendSignInEvent", signInData);
}

// socket.on('receiveSignInEvent', function (data) {

//     alert(data['signInUserName']);
//     const roomNumber = data['signInRoomNumber'];
//     // 部屋番号の設定を行う
//     socket.emit("setRoomNumber", { roomNumber: roomNumber });

//     // 入力されたユーザ名を取得する
//     const userName = data['signInUserName'];
//     // 入室メッセージイベントを送信する
//     socket.emit("sendUserNameEvent", userName);
//     // location.href = '/';
// });


socket.on('receiveSignInEvent', function (data) {

    alert(`ユーザ名 : ${data['signInUserName']}さんが${data['signInRoomNumber']}に入室します`);
    document.enterRoomForm.submit();

    // location.href = '/';
});

socket.on('receiveSignInFailureEvent', function (data) {

    alert('ログインに失敗しました');
});
