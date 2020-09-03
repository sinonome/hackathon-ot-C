'use strict';

module.exports = function (socket) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendUserNameEvent', function (data) {
        socket.broadcast.emit("receiveEnterEvent", data);
    });
};
