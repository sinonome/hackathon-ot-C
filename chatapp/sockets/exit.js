'use strict';
const {getRoomNumber} = require("./common.js");

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        let roomNumber = getRoomNumber(socket);
        socket.broadcast.in(roomNumber).emit('receiveExitEvent', data);
        // socket.broadcast.emit('receiveExitEvent', data);
    });
};
