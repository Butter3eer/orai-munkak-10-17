import { Kutya } from './kutya';

document.addEventListener("DOMContentLoaded", init);

function init() {
    const form = document.getElementById("allatForm");
    const lista : Kutya[] = [];
    let id = 0;

    form!.addEventListener("submit", (e) => {
        e.preventDefault();
        const nev = (document.getElementById("allatNev") as HTMLInputElement).value;
        const kedvEtel = (document.getElementById("kedvEtel") as HTMLInputElement).value;
        const tBody = document.getElementById("allatok");
        const row = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        lista.push(new Kutya(id, nev, kedvEtel));
        id++;

        lista.forEach((kutya) => {
            td1.innerHTML = kutya.nev;
            td2.innerHTML = kutya.etel;
            td3.innerHTML = '🗑️';
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            tBody!.appendChild(row);
        });
        
        td3.addEventListener('click', () => {
            row.remove();
        })
    })
    
}

