'use strict';



function createUser(){

    const createUserData = {
        'createUserName': $('#createUserName').val(),
        'createUserPassword': $('#createUserPassword').val(),
    }
    var sqlite3 = require('sqlite3').verbose();
    var db = new sqlite3.Database('sample.sqlite');

    alert('ユーザ名:' + createUserData['createUserName'] + '  パスワード : ' + createUserData['createUserPassword']);
    db.serialize(function () {
        // db.run('CREATE TABLE IF NOT EXISTS lorem (info TEXT)');
        db.run('CREATE TABLE IF NOT EXISTS users (username text primary key, password text)');
        const stmt = db.prepare('INSERT INTO user VALUES (?, ?)');
        stmt.run([createUserData['createUserName'], createUserData['createUserPassword']]);
        stmt.finalize();
    });
    db.close();

}
    // var sqlite3 = require('sqlite3').verbose();
    // const db = new sqlite.Database('../../db/sample.sqlite');  // SQLite の DB ファイル名

    // alert('ユーザ名:' + createUserData['createUserName'] + '  パスワード : ' + createUserData['createUserPassword']);

    // db.serialize(() => {
    //     // テーブルがなければ作成する
    //     // db.run('CREATE TABLE IF NOT EXISTS user (name TEXT, age INTEGER)');

    //     // Prepared Statement でデータを挿入する
    //     const stmt = db.prepare('INSERT INTO user VALUES (?, ?)');
    //     stmt.run([createUserData['createUserName'], createUserData['createUserPassword']]);
    //     // stmt.run(['Bar', 39]);

    //     // prepare() で取得した Prepared Statement オブジェクトをクローズする。これをコールしないとエラーになる
    //     stmt.finalize();
    // });
    // db.close();



// ログイン画面から新規登録画面に遷移
function enterSignUp() {
    document.enterSignUpForm.submit();
}

// 新規登録画面からログイン画面に遷移
function exitSignUp() {
    location.href = '/';
}


