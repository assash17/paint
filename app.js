const DEFAULT_STROKE_STYLE="black";
const DEFAULT_LINE_WIDTH=1;

const canvas = document.getElementById("canvas");
// canvas tag에서 설정
// canvas.width = 500;
// canvas.height = 500;
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".control__color");
let painting = false;

const setPainting = (isPaint) => {
    painting = isPaint;
}
const onMouseMove = (event) => {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
        console.log("create move",x,y);
    }else{
        ctx.lineTo(x,y);
        ctx.stroke();
        console.log("create line",x,y);
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

const changeColor = (event) => {
    console.log(event.target.style.backgroundColor);
    ctx.strokeStyle=event.target.style.backgroundColor;
}

const init = () =>{
    if (canvas) {
        canvas.addEventListener("mousemove", onMouseMove);
        canvas.addEventListener("mousedown", onMouseDown);
        canvas.addEventListener("mouseup", onMouseUp);
        canvas.addEventListener("mouseleave", onMouseLeave);

        ctx.strokeStyle=DEFAULT_STROKE_STYLE;
        ctx.lineWidth=DEFAULT_LINE_WIDTH;
    }

    // console.log(colors)
    [...colors].map((c)=>{
        c.addEventListener("click", changeColor)
    })
};
init();