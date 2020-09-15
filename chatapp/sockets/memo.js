'use strict';
const {getRoomNumber} = require("./common.js");
module.exports = function (socket) {
    socket.on('sendMemoEvent', function (data) {
        socket.emit('getMemoEvent', data);
    });

    socket.on('sendShareMemoEvent', function(data){
        let roomNumber = getRoomNumber(socket);
        socket.broadcast.in(roomNumber).emit('receiveShareMemoEvent',data);
    });
};