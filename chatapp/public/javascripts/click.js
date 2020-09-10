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