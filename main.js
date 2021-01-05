const coordinate = document.querySelector(".coordinate");
const xline = document.querySelector(".xline");
const yline = document.querySelector(".yline");
const cursor = document.querySelector(".cursor");


document.addEventListener('mousemove',(e)=>{
    const x = e.clientX;
    const y = e.clientY;

    coordinate.textContent = `${x}px ${y}px`
    coordinate.style.transform = `translate(${x}px,${y}px)`
    cursor.style.transform = `translate(${x}px,${y}px)`

    xline.style.transform =`translateY(${y}px)`
    yline.style.transform = `translateX(${x}px)`
})