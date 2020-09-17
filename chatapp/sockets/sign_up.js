'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendCreateUserEvent', function (data) {
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('db/users.sqlite');

        db.serialize(function () {
            // db.run('CREATE TABLE IF NOT EXISTS users (username text UNIQUE, password text)');

            const stmt = db.prepare('INSERT INTO users VALUES (?, ?, ?)');
            stmt.run([data['createUserName'], data['createUserPassword'], 0], function (err) {
                if (err) {
                    console.log('error');
                    socket.emit("receiveErrorCreateUserEvent", data['createUserName']);
                }
                else{
                    socket.emit("receiveCreateUserEvent", data['createUserName']);
                }
            });
            // console.log(data);



            stmt.finalize();
        });
        db.close();
        

        
    });
};



// 'use strict';

// module.exports = function (socket, io) {
//     // 入室メッセージをクライアントに送信する
//     socket.on('sendCreateUserEvent', function (data) {
//         var sqlite3 = require('sqlite3').verbose();
//         var db = new sqlite3.Database('db/users.sqlite');

//         db.serialize(function () {
//             // const stmt = db.prepare("SELECT count(*) AS count FROM users WHERE username = ? AND password = ?");
//             const stmt = db.prepare("SELECT count(*) AS count FROM users WHERE username = ? AND password = ?");
//             // db.get(stmt, data['createUserName'], data['createUserPassword'],function (err, row) {
//             // db.get(`select count(*) as count from users where username = '${data['createUserName']}';`, function (err, row) {
//             db.get(`select count(*) as count from users where username = '${data['createUserName']}' and password = '${data['createUserPassword']}';`, function (err, row) {
//                 console.log(row.count);
//                 if (row.count == 1) {
//                     console.log('成功');
//                 }
//                 else {
//                     console.log('失敗');

//                 }
//                 }
//             );
//             stmt.finalize();
//         });
//         db.close();
//         socket.emit("receiveCreateUserEvent", data['createUserName']);
//     });
// };
