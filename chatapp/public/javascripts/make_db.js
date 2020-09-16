'use strict';

    const createDataBaseData = {
        'initUserName': 'test',
        'initUserPassword': 'testpassword',
    }
socket.emit("sendInitCreateUserEvent", createDataBaseData);

socket.on('receiveInitCreateUserEvent', function (data) {

});