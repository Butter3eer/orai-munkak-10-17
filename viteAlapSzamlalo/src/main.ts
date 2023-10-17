document.addEventListener("DOMContentLoaded", () => {
  let click = 1;
  const p = document.createElement("p");
  const btn = document.createElement("button");
  btn.innerText = "Gomb";
  btn.addEventListener('click', () => {
    p.innerHTML = (click++).toString();
  });
  document.getElementById("app")!.appendChild(btn);
  document.getElementById("app")!.appendChild(p);
})