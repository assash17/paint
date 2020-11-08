const DEFAULT_STYLE="black";
const DEFAULT_LINE_WIDTH=1;

const canvas = document.getElementById("canvas");
// canvas tag에서 설정
// canvas.width = 500;
// canvas.height = 500;
const ctx = canvas.getContext("2d");
let painting = false;

const modeRadio = document.querySelectorAll("input[name=mode]");
let filling = false;

const brushSize = document.getElementById("jsRange")

const clearBtn = document.getElementById("jsClear");
const saveBtn = document.getElementById("jsSave");

const colors = document.querySelectorAll(".control__color");

const setPainting = (isPaint) => {
    painting = isPaint;
}
const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        // console.log("create move",x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
        // console.log("create line",x,y);
    }
}

const onMouseDown = (event) => {
    setPainting(true);
}
const onMouseUp = (event) => {
    setPainting(false);
}
const onMouseLeave = (event) => {
    setPainting(false);
}
const handleCanvasClilck = (event) => {
    if (filling) {
        ctx.fillRect(0,0,canvas.width, canvas.height);
    }
}

const handleModeChange = (event) => {
    if (event.target.value == "line") {
        filling = false;
    } else if (event.target.value == "fill") {
        filling = true;
    }
}

const brushSizeChange = (event) => {
    ctx.lineWidth = event.target.value;
}

const handleClearClick = (event) => {
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

const handleSaveClick = (event) => {
    const image = canvas.toDataURL("");
    const link = document.createElement("a");
    link.href=image;
    link.download = "sample";
    link.click();
}

const changeColor = (event) => {
    console.log(event.target.style.backgroundColor);
    ctx.strokeStyle=event.target.style.backgroundColor;
    ctx.fillStyle=event.target.style.backgroundColor;
}

const handleCM = (event) => {
    event.preventDefault();
}

const init = () =>{
    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseleave", onMouseLeave);
        
        canvas.addEventListener("click", handleCanvasClilck)
        
        // canvas 우클릭 드롭다운 메뉴 방지
        canvas.addEventListener("contextmenu", handleCM)

        // 흰 바탕으로 한번 초기화 해줌
        ctx.fillStyle="white";
        ctx.fillRect(0,0,canvas.width, canvas.height);

        ctx.strokeStyle=DEFAULT_STYLE;
        ctx.fillStyle=DEFAULT_STYLE;
        ctx.lineWidth=DEFAULT_LINE_WIDTH;
    }
    
    // mode
    [...modeRadio].map((m)=>{
        m.addEventListener("input", handleModeChange);
    })

    if (brushSize) {
        // brush size event
        brushSize.addEventListener("input", brushSizeChange);
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", handleClearClick)
    }

    if (saveBtn) {
        saveBtn.addEventListener("click", handleSaveClick)
    }

    // color event
    [...colors].map((c)=>{
        c.addEventListener("click", changeColor)
    })
};
init();