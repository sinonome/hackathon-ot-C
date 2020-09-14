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

// class Publish {
//     PostMessage(message);
// }