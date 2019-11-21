'use strict';

export default class UniqueID {

    constructor() {

    }

    getUniqueID() {
        
        if(window.crypto.getRandomValues) {

            return this.newest();

        } else {

            return this.previous();

        }

    }

    newest() {

        let array = new Uint32Array(8);
        window.crypto.getRandomValues(array)
        let str = '';
        for (let i = 0; i < array.length; i++) {
            str += (i < 2 || i > 5 ? '' : '-') + array[i].toString(16).slice(-4)
        }
        return str;

    }

    previous() {

        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

    }

}