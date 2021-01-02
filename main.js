const coordinate = document.querySelector(".coordinate");
const xline = document.querySelector(".xline");
const yline = document.querySelector(".yline");
const cursor = document.querySelector(".cursor");


document.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    coordinate.textContent = `${x}px ${y}px`
    coordinate.style.left=`${x}px`
    coordinate.style.top=`${y}px`
    xline.style.top =`${y}px`
    yline.style.left = `${x}px`

    cursor.style.top = `${y}px`
    cursor.style.left = `${x}px`
})