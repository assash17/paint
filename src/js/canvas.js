const DEFAULT_STYLE="black";
const DEFAULT_LINE_WIDTH=1;

export default class Canvas {
    constructor(dom) {
        this._dom = dom;
        this._ctx = dom.getContext("2d");

        // 흰 바탕으로 한번 초기화 해줌
        this._ctx.fillStyle="white";
        this._ctx.fillRect(0,0,canvas.width, canvas.height);

        this._ctx.strokeStyle=DEFAULT_STYLE;
        this._ctx.fillStyle=DEFAULT_STYLE;
        this._ctx.lineWidth=DEFAULT_LINE_WIDTH;

        this._paintingMode = false;
        this._fillingMode = false;
    }

    get dom() {
        return this._dom;
    }

    set dom(dom) {
        this._dom = dom;
    }

    get fillingMode() {
        return this._fillingMode;
    }

    set fillingMode(fillingMode) {
        this._fillingMode = fillingMode;
    }

    get paintingMode() {
        return this._paintingMode;
    }

    set paintingMode(paintingMode) {
        this._paintingMode = paintingMode;
    }

    get ctx() {
        return this._ctx;
    }

    set ctx(ctx) {
        this._ctx = ctx;
    }

    addEventListener(event, listener) {
        this._dom.addEventListener(event, listener);
    }
}