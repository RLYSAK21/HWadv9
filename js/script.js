function randomColor() {
    const symbols = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += symbols[Math.floor(Math.random() * 16)];
    }
    return color;
};

const setBg = () => {
    const boxes = document.getElementsByTagName("div");
    for (let box of boxes) {
        box.style.backgroundColor = randomColor();
    }
};

genNew.addEventListener("click", setBg);
setInterval(setBg, 1000);