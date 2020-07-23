window.onload = () => {
    // contenedor Pieza
    let container = document.createElement("div");
    container.classList.add("container", "pt-5", "d-flex", "justify-content-center");
    // pieza
    let domino = document.createElement("div");
    domino.classList.add("d-flex", "flex-nowrap");
    domino.style.width = "20rem";
    domino.style.border = "solid 5px black";
    domino.style.position = "relative";
    let ball = document.createElement("div");
    ball.style.backgroundColor = "black";
    ball.classList.add("rounded-circle");
    ball.style.position = "absolute";
    ball.style.height = "1rem";
    ball.style.width = "1rem";
    ball.style.left = "50%";
    ball.style.top = "50%";
    ball.style.transform = "translate(-50%, -50%)";
    domino.innerHTML = `
        <div class="w-50 border-right border-dark justify-content-center d-flex align-items-center">
        </div>
        <div class="w-50 border-left border-dark justify-content-center d-flex align-items-center">
        </div>
    `;
    let numbers = [
        {
            number: 0,
            style: "zero"
        }, {
            number: 1,
            style: "one"
        }, {
            number: 2,
            style: "two"
        }, {
            number: 3,
            style: "three"
        }, {
            number: 4,
            style: "four"
        }, {
            number: 5,
            style: "five"
        }, {
            number: 6,
            style: "six"
        }
    ]
    for (child of domino.children) {
        let randomIndex = Math.floor(Math.random() * 7);
        child.style.height = "10rem";
        child.classList.add(`${numbers[randomIndex].style}`);
        child.innerHTML = `<p class="text-center">${numbers[randomIndex].number}</p>`;
    }
    domino.appendChild(ball);
    container.appendChild(domino);
    document.body.appendChild(container);
}