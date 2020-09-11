'use strict';

const express = require('express');
const router = express.Router();

// ログイン画面の表示
router.get('/', function(request, response, next) {
    response.render('index');
});

// チャット画面の表示
router.post('/room', function(request, response, next) {
    const userName = request.body.userName;
    const roomNumber = request.body.roomNumber;
    console.log('ユーザ名：' + userName);
    console.log('部屋番号：' + roomNumber);
    response.render('room', {userName: userName,
                             roomNumber: roomNumber});
});

module.exports = router;
