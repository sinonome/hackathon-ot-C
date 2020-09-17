// 'use strict';

// module.exports = function (socket, io) {
//     // 入室メッセージをクライアントに送信する
//     socket.on('sendInitCreateUserEvent', function (data) {
//         var sqlite3 = require('sqlite3').verbose();
//         var db = new sqlite3.Database('db/users.sqlite');

//         db.serialize(function () {
//             db.run('CREATE TABLE IF NOT EXISTS users (username text UNIQUE, password text)');

//             const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
//             stmt.run([data['initUserName'], data['initUserPassword']]);
//             // console.log(data);
//             stmt.finalize();
//         });
//         db.close();
//         socket.emit("receiveInitCreateUserEvent", data['createUserName']);
//     });
// };


module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendInitCreateUserEvent', function (data) {
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('db/users.sqlite');

        db.serialize(function () {
            db.run('CREATE TABLE IF NOT EXISTS users (username text UNIQUE, password text,isExist int)');
        });
        db.close();
        socket.emit("receiveInitCreateUserEvent", data['createUserName']);
    });
};