document.addEventListener("DOMContentLoaded", () => {
  createGomb();
});

function createGomb() {
  const btn = document.createElement("button");
  btn.textContent = "Gomb";
  const randSzin = "#" + Math.floor((Math.random() * (2 ** 24))).toString(16);
  btn.style.backgroundColor = randSzin;
  document.getElementById("app")!.appendChild(btn);
  btn.addEventListener('click', createGomb);
}