export default class Clear{
    constructor(dom) {
        this._dom = dom;
    }
    
    addEventListener(event, listener) {
        this._dom.addEventListener(event, listener);
    }
}