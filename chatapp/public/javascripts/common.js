let DefaultLen = 10000;
let eventDOM = null;


class Member {
    constructor(maxLen = DefaultLen) {
        this.memberList = []
        this.maxLen = maxLen
        this.len = 0
    }

    add(user) {
        if (this.len < this.maxLen) {
            this.memberList.push(user);
            this.len ++;
            return true;
        } else {
            console.log("入場者数が最大に達しているため入場を拒否しました");
            return false;
        }
    }

    exit(user) {
        for (let ind in this.memberList) {
            if (this.memberList[ind] === user) {
                this.memberList = this.memberList.filter((_, i) => i != ind);
                this.len --;
                return true;
            }
        }
        return false;
    }

    isExist(user) {
        // 同じユーザー名が存在するかどうか。
        for (let otherUsr of this.memberList) {
            if (otherUsr === user) {
                return true;
            }
        }
        return false;
    }

    get getMem() {
        return this.memberList;
    }
}

class Publish {
    static viewMessage(isOwn, data) {
        if (data === null) {
            console.log("データがありません");
            return "";
        }
        let layoutClass= (isOwn?"own-message":"another-message");
        let userName = data["userName"];
        let postDate = data["time"];
        let message = document.createElement("p");
        message.append(data["message"]);

        // let postDiv = (
        //     `<div class='chat-outline' id='${layoutClass}'>` +
        //     `<div class='${layoutClass}'>` +
        //     `<div class='chat-frame'>` +
        //     // infomation
        //     `<div class='chat-info'>` +
        //     `<div class='chat-item__name'>` +
        //     userName +
        //     "</div>"+
        //     `<div class='chat-item__date'>` +
        //     postDate +
        //     "</div>" +
        //     "</div>" +
        //     // message
        //     `<div class='chat-message'>` +
        //     message +
        //     "</div>" +
        //     "</div>" +
        //     "</div>" +
        //     "</div>"
        // );
        // let postDiv = document.createElement('div');
        // postDiv.className = "chat-outline";
        // let chatAlign = document.createElement('div');
        // chatAlign.className = layoutClass;
        // let chatFrame = document.createElement('div');
        // chatFrame.className = "chat-frame";

        // let userinfo = document.createElement('div');
        // userinfo.className = 'chat-info';
        // let userDiv = document.createElement('div');
        // userDiv.className = 'chat-item__name'
        // let dateDiv = document.createElement('div');
        // dateDiv.className = "chat-item__date"

        let postDiv = this.makeDiv('div', "chat-outline", layoutClass);
        let chatAlign = this.makeDiv('div', layoutClass);
        let chatFrame = this.makeDiv('div', "chat-frame");
        let userinfo = this.makeDiv('div', 'chat-info');
        let userDiv = this.makeDiv('div', 'chat-item__name');
        let dateDiv = this.makeDiv('div', 'chat-item__date');
        let chat = this.makeDiv('div', 'chat-message');

        // 右クリック時の操作を付与
        if (isOwn) {
            chat.addEventListener('contextmenu', Click.view)
        }

        userDiv.append(data["userName"]);
        dateDiv.append(data["time"]);
        chat.append(message);

        userinfo.append(userDiv);
        userinfo.append(dateDiv);
        chatFrame.append(userinfo);
        chatFrame.append(chat);
        chatAlign.append(chatFrame);
        postDiv.append(chatAlign);

        return postDiv;
    }

    static makeDiv(tag, className="", idName="") {
        let resTag = document.createElement(tag);
        resTag.className = className;
        resTag.id = idName;
        return resTag;
    }
}

function scroll_end(isOrder) {
    let textElement = document.getElementById("thread");
    textElement.scrollTop = textElement.scrollHeight * !isOrder;
}

class Click {
    static view(e) {
        // マウスの位置を style へ設定
        eventDOM = e.target;
        let cnt = 10;
        while (eventDOM.className !== "chat-outline" && cnt--) {
            // console.log(eventDOM.className)
            eventDOM = eventDOM.parentNode;
        }
        if (cnt === 0) {
            console.log("クリックされた要素の親タグに chat-outline クラスであるものが存在しませんでした");
            return;
        }
        // console.log(eventDOM.className);
        document.getElementById('contextmenu').style.left = e.clientX+"px";
        document.getElementById('contextmenu').style.top = (
            e.clientY
            - parseInt(($("div").css("margin-top")))
            + "px"
        );
        document.getElementById('contextmenu').style.display = "block";
    }
    static close(e) {
        // メニューを非表示
        document.getElementById('contextmenu').style.display = "none";
        eventDOM = null;
    }
}