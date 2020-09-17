window.onload = function() {
    document.body.addEventListener("click", Click.close);
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
    eventDOM.remove();
    return false;
};