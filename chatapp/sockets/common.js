'use strict';

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