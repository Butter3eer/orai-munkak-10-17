document.addEventListener("DOMContentLoaded", () => {
  for (let i = 0; i < 5; i++) {
    const btn = document.createElement("button");
    document.getElementById("app")!.appendChild(btn);
    btn.textContent = "Gomb";
    btn.addEventListener('click', () => {
      //console.log(`A(z) ${i + 1}. gombra kattintottál.`);
      const randSzin = "#" + Math.floor((Math.random() * (2 ** 24))).toString(16);
      btn.style.backgroundColor = randSzin;
    })
  }
});