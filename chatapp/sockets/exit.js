'use strict';
const {getRoomNumber} = require("./common.js");

module.exports = function (socket) {
    // 退室メッセージをクライアントに送信する
    socket.on('sendExitEvent', function (data) {
        let roomNumber = getRoomNumber(socket);
        socket.broadcast.in(roomNumber).emit('receiveExitEvent', data);
        // socket.broadcast.emit('receiveExitEvent', data);
    });

    socket.on('sendExitisExistEvent', function (data) {
        console.log(data);
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('db/users.sqlite');
        db.serialize(() => {
            // db.get(`select count(*) as count from users where username = '${data['signInUserName']}' and password = '${data['signInPassword']}' and isExist = 0;`, function (err, row) {
            //     console.log(row.count);
            //     if (row.count == 1) {
            //         console.log('成功');
            //         // db.run(`update users set isExist = 1 where username = '${data['signInUserName']}';`);
            //         socket.emit("receiveSignInEvent", data);
            //     }
            //     else {
            //         console.log('失敗');
            //         socket.emit("receiveSignInFailureEvent", data);

            //     }
            // });
            db.run(`update users set isExist = 0 where username = '${data}';`);
            socket.emit("receiveExitisExistEvent", data);

        });
        db.close();
    });
};
