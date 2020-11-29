export default class Brush{
    constructor(dom) {
        this._dom = dom;
    }

    get dom(){
        return this._dom;
    }

    set dom(dom){
        this._dom = dom;
    }

    addEventListener(event, listener) {
        this._dom.addEventListener(event, listener);
    }
}