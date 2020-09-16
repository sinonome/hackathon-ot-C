'use strict';
let memoID = 0;
// メモを画面上に表示する
function memo() {
    var time = new Date();
    const memoData = {
        'userName': $('#userName').val(),
        'memo': $('#message').val(),
        'time': time.toLocaleString(),
        'idNum': memoID,
    }

    // メモの内容を表示
    if (!memoData['memo'].trim()) {
        alert('メモが未入力です。');
    }
    else {
        socket.emit("sendMemoEvent", memoData);
        memoID++;
        //$('#memo').prepend('<p>' + memoData['time'] + ' : ' + memoData['userName'] + "さんのメモ : " + memoData['memo'] + '</p>');
    }
    $('#message').val("");
    return false;
}

function shareMemo(id){//サーバーに送る
    //console.log(document.getElementById(num).outerHTML);
    const shareMemoData = {
        'memo':document.getElementById(id).outerHTML,
        'sendName':$('#userName').val(),
    }
    socket.emit("sendShareMemoEvent", shareMemoData);
    alert('メモの共有をしました');
    return false;
}

socket.on('getMemoEvent', function (data) {
    $('#memo').prepend(
                        '<tr>'+
                            '<td width=80%>'+
                                '<p id='+ data["idNum"] +'-'+ data["userName"] +'><input type="checkbox" >  : ' + data["memo"] +'</p>' +
                            '</td>'+
                            '<td>'+
                                '<input type="button" onClick=shareMemo("'+ data["idNum"] +'-'+ data["userName"] +'"); value="共有する">' +
                            '</td>'+
                        '</tr>');
});


socket.on('receiveShareMemoEvent', function (data){
    $('#memo').prepend('<div>'+data['memo']+'('+ data['sendName'] +'さんからの共有)</div>');
})