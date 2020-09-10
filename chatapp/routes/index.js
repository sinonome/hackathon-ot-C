'use strict';

const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    console.log('ユーザ名：' + request.body.userName);
    response.render('room', { userName: request.body.userName });
});

// 新規ユーザ登録画面の表示
router.post('/sign_up', function (request, response, next) {
    response.render('sign_up',{ title: 'こんにちは!', message: 'Rakus' });
});

module.exports = router;
