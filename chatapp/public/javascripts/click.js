window.onload = function() {
    document.getElementById("thread").addEventListener('contextmenu', function(e){
        // マウスの位置を style へ設定
        document.getElementById('contextmenu').style.left = e.clientX+"px";
        document.getElementById('contextmenu').style.top = (
            e.clientY
            - parseInt(($("div").css("margin-top")))
            + "px"
        );
        document.getElementById('contextmenu').style.display = "block";
    });
    document.body.addEventListener("click", function(e) {
        // メニューを非表示
        document.getElementById('contextmenu').style.display = "none";
    })
};

// 対象の投稿をデリート
function deleteMessage() {
    /*
        TODO: 右クリックした投稿を削除
            1. クリックした投稿がどれなのかを把握する
            2. その投稿が自分のものであれば削除リクエストを送る
            3. 削除リクエストが通ったらその投稿を削除
            4. その際何かアクションを起こしていいかもしれない？
    */
    console.log("click: delete");
    return false;
};