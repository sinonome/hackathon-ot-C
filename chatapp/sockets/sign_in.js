// 'use strict';

// module.exports = function (socket, io) {
//     // 入室メッセージをクライアントに送信する
//     socket.on('sendSignInEvent', function (data) {
//         var sqlite3 = require('sqlite3').verbose();
//         var db = new sqlite3.Database('db/users.sqlite');

//         db.serialize(function () {
//             db.get(`select count(*) as count from users where username = '${data['signInUserName']}' and password = '${data['signInPassword']}';`, function (err, row) {
//                 console.log(row.count);
//                 if (row.count == 1) {
//                     console.log('成功');
//                 }
//                 else {
//                     console.log('失敗');

//                 }
//             }
//             );
//             stmt.finalize();
//         });
//         db.close();



//         socket.emit("receiveSignInEvent", data['signInUserName']);
//     });
// };


'use strict';

const { getRoomNumber } = require("./common.js");
module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendSignInEvent', function (data) {
        console.log(data);
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('db/users.sqlite');

        db.serialize(function () {
            // const stmt = db.prepare("SELECT count(*) AS count FROM users WHERE username = ? AND password = ?");
            const stmt = db.prepare("SELECT count(*) AS count FROM users WHERE username = ? AND password = ?");
            // db.get(stmt, data['createUserName'], data['createUserPassword'],function (err, row) {
            // db.get(`select count(*) as count from users where username = '${data['createUserName']}';`, function (err, row) {
            db.get(`select count(*) as count from users where username = '${data['signInUserName']}' and password = '${data['signInPassword']}';`, function (err, row) {
                console.log(row.count);
                if (row.count == 1) {
                    console.log('成功');
                    socket.emit("receiveSignInEvent", data);
                }
                else {
                    console.log('失敗');
                    socket.emit("receiveSignInFailureEvent", data);

                }
                }
            );
            stmt.finalize();
        });
        db.close();
        // socket.emit("receiveSignInEvent", data);
    });

//     socket.on("setRoomNumber", function (data) {
//         let roomNumber = data.roomNumber;
//         socket.join(roomNumber);
//     });

//     // 入室メッセージをクライアントに送信する
//     socket.on('sendUserNameEvent', function (data) {
//         let roomNumber = getRoomNumber(socket);
//         socket.broadcast.in(roomNumber).emit("receiveEnterEvent", data);
//         // socket.broadcast.emit("receiveEnterEvent", data);
//     });
};