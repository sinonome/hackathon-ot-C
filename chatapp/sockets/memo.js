'use strict';
module.exports = function (socket) {
    socket.on('sendMemoEvent', function (data) {
        socket.emit('getMemoEvent', data);
    });
};