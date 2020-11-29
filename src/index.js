import Canvas from "./js/canvas.js";
import Mode from "./js/mode.js";
import Brush from "./js/brush.js";
import Clear from "./js/clear.js";
import Save from "./js/save.js";
import Color from "./js/color.js";
import './index.css';

const canvas = new Canvas(document.getElementById("canvas"));

const mode = new Mode(document.querySelectorAll("input[name=mode]"));

const brush = new Brush(document.getElementById("jsRange"));

const clear = new Clear(document.getElementById("jsClear"));
const save = new Save(document.getElementById("jsSave"));
     
const color = new Color(document.querySelectorAll(".control__color"));

const onMouseMove = (event) => {
    console.debug(`mouse move`);
    const x = event.offsetX;
    const y = event.offsetY;

    if(!canvas.paintingMode){
        canvas.ctx.beginPath();
        canvas.ctx.moveTo(x,y);
    }else{
        canvas.ctx.lineTo(x,y);
        canvas.ctx.stroke();
    }
}

const onMouseDown = (event) => {
    console.debug(`mouse down`);
    canvas.paintingMode = true;
}
const onMouseUp = (event) => {
    console.debug(`mouse up`);
    canvas.paintingMode = false;
}
const onMouseLeave = (event) => {
    console.debug(`mouse leave`);
    canvas.paintingMode = false;
}
const handleCanvasClilck = (event) => {
    console.debug(`canvas click`);
    if (canvas.fillingMode) {
        canvas.ctx.fillRect(0,0,canvas.dom.width, canvas.dom.height);
    }
}

const handleModeChange = (event) => {
    console.debug(`mode change`);
    if (event.target.value == "line") {
        canvas.fillingMode = false;
    } else if (event.target.value == "fill") {
        canvas.fillingMode = true;
    }
}

const brushSizeChange = (event) => {
    console.debug(`brush size change`);
    canvas.ctx.lineWidth = event.target.value;
}

const handleClearClick = (event) => {
    console.debug(`clear button click`);
    canvas.ctx.clearRect(0,0,canvas.dom.width, canvas.dom.width);
}

const handleSaveClick = (event) => {
    console.debug(`save button click`);
    const image = canvas.dom.toDataURL("");
    const link = document.createElement("a");
    link.href=image;
    link.download = "sample";
    link.click();
}

const changeColor = (event) => {
    console.debug(`change color`)
    console.log(event.target.style.backgroundColor);
    canvas.ctx.strokeStyle=event.target.style.backgroundColor;
    canvas.ctx.fillStyle=event.target.style.backgroundColor;
}

const handleCM = (event) => {
    event.preventDefault();
}

const init = () =>{
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", onMouseDown);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    
    canvas.addEventListener("click", handleCanvasClilck);
    
    // canvas 우클릭 드롭다운 메뉴 방지
    canvas.addEventListener("contextmenu", handleCM);
    
    // mode
    mode.domArr.map((m)=>{
        m.addEventListener("input", handleModeChange);
    })

    if (brush) {
        // brush size event
        brush.addEventListener("input", brushSizeChange);
    }

    if (clear) {
        clear.addEventListener("click", handleClearClick);
    }

    if (save) {
        save.addEventListener("click", handleSaveClick);
    }

    // color event
    color.domArr.map((c)=>{
        c.addEventListener("click", changeColor);
    })
};
init();