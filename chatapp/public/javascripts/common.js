let DefaultLen = 10000;

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
        let message = "<p>" + data["message"] + "</p>";

        let postDiv = (
            "<div class='chat-outline'>" +
            `<div class='${layoutClass}'>` +
            `<div class='chat-frame'>` +
            // infomation
            `<div class='chat-info'>` +
            `<div class='chat-item__name'>` +
            userName +
            "</div>"+
            `<div class='chat-item__date'>` +
            postDate +
            "</div>" +
            "</div>" +
            // message
            `<div class='chat-message'>` +
            message +
            "</div>" +
            "</div>" +
            "</div>" +
            "</div>"
        );
        return postDiv;
    }
}

function scroll_end() {
    let textElement = document.getElementById("thread");
    textElement.scrollTop = textElement.scrollHeight;
}