'use strict';

// メモを画面上に表示する
function memo() {
    var time = new Date();
    const memoData = {
        'userName': $('#userName').val(),
        'memo': $('#message').val(),
        'time': time.toLocaleString(),
        'idNum': (time.getTime()%100000).toLocaleString(),
    }

    // メモの内容を表示
    if (!memoData['memo'].trim()) {
        alert('メモが未入力です。');
    }
    else {
        socket.emit("sendMemoEvent", memoData);
        //$('#memo').prepend('<p>' + memoData['time'] + ' : ' + memoData['userName'] + "さんのメモ : " + memoData['memo'] + '</p>'); 
    }
    $('#message').val("");
    return false;
}

function shareMemo(num){//サーバーに送る
    //console.log(document.getElementById(num).outerHTML);
    const shareMemoData = {
        'memo':document.getElementById(num).outerHTML,
        'sendName':$('#userName').val(),
    }
    socket.emit("sendShareMemoEvent", shareMemoData);
    return false;
}

socket.on('getMemoEvent', function (data) {
    $('#memo').prepend(
                            '<tr>'+
                                '<td width=80%>'+
                                    '<p id='+ data["idNum"].replace(/,/g, '') +'><input type="checkbox" >  : ' + data["memo"] +'</p>' +
                                '</td>'+
                                '<td>'+
                                    '<input type="button" onClick=shareMemo('+ data["idNum"].replace(/,/g, '')  +'); value="共有する">' +
                                '</td>'+
                            '</tr>'); 
});


socket.on('receiveShareMemoEvent', function (data){
    $('#memo').prepend(data['memo']+'('+ data['sendName'] +'さんから共有されました)');
})