'use strict';

let {PostLog, getRoomNumber} = require("./common.js");
// let PostLog = require('./common.js');
let maxLen = 10;
let postlog = new PostLog(maxLen);

module.exports = function (socket, io) {
    // 投稿メッセージを送信する
    socket.on('sendMessageEvent', function (data) {
        if (postlog.isContinuous(data['userName'])) {
            socket.emit('ContinuousPostError', '');
        } else {
            postlog.post(data['userName']);
            let roomNumber = getRoomNumber(socket);
            io.sockets.in(roomNumber).emit('getMessageEvent', data);
            // io.sockets.emit('getMessageEvent', data);
        }
    });
};
