'use strict';

// module.exports = class {
class PostLog {
    constructor(maxLength) {
        this.len = maxLength;
        this.postarr = [];
        this.now = 0;
        this.NumOfPost = 0;
    }
    
    post(name) {
        this.postarr[this.now] = name;
        this.now = (this.now + 1) % this.len;
        this.NumOfPost ++;
    }

    lastPost(num) {
        if (this.isPost) {
            return this.postarr[(9 + this.now) % 10];
        } else {
            return -1;
        }
    }
    
    isContinuous(name) {
        if (this.NumOfPost < this.len) {
            return false;
        }
        for (let othername of this.postarr) {
            if (name !== othername) {
                return false;
            }
        }
        return true;
    }
    
    get isPost() {
        return NumOfPost === 0;
    }
}

function getRoomNumber (socket) {
    let pattern = /^room\d+$/ // room数字の文字列にマッチする
    let roomKeys = Object.keys(socket.rooms);
    for (let i = 0; i < roomKeys.length; ++i) {
        if (key.match(pattern)) {
            return key;
        }
    }
}

exports.PostLog = PostLog;
exports.getRoomNumber = getRoomNumber;