'use strict';

const {getRoomNumber} = require("./common.js");

module.exports = function (socket) {
    // 部屋の設定を行う
    socket.on("setRoomNumber", function(data) {
        let roomNumber = data.roomNumber;
        socket.join(roomNumber);
    });
    
    // 入室メッセージをクライアントに送信する
    socket.on('sendUserNameEvent', function (data) {
        socket.broadcast.emit("receiveEnterEvent", data);
    });
};
