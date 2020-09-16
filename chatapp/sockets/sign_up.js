'use strict';

module.exports = function (socket, io) {
    // 入室メッセージをクライアントに送信する
    socket.on('sendCreateUserEvent', function (data) {
        var sqlite3 = require('sqlite3').verbose();
        var db = new sqlite3.Database('db/users.sqlite');

        db.serialize(function () {
            db.run('CREATE TABLE IF NOT EXISTS users (username text UNIQUE, password text)');
            const stmt = db.prepare('INSERT INTO users VALUES (?, ?)');
            stmt.run([data['createUserName'], data['createUserPassword']]);
            console.log(data);
            stmt.finalize();
        });
        db.close();
        
        // io.sockets.emit('receiveCreateUserEvent', data['createUserName']);
        socket.emit("receiveCreateUserEvent", data['createUserName']);
    });
};

