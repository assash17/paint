export default class Color{
    constructor(domArr) {
        this._domArr = [...domArr];
    }

    get domArr() {
        return this._domArr;
    }

    set domArr(domArr) {
        this._domArr = domArr;
    }

    addEventListener(event, listener) {
        this._dom.addEventListener(event, listener);
    }
}