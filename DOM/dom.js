let tasks = [];

// DOM Elemendid ulsisend=ülesande sisend ulnimekiri=ülesannete nimekiri
const ulSisend = document.getElementById("ulSisend");
const lisaNupp = document.getElementById("lisaNupp");
const ulNimekiri = document.getElementById("ulNimekiri");
const koikNupp = document.getElementById("koikNupp");
const tehtudNupp = document.getElementById("tehtudNupp");
const tegemataNupp = document.getElementById("tegemataNupp");
const sorteeriNupp = document.getElementById("sorteeriNupp");

// Event Listenerid
lisaNupp.addEventListener("click", lisaUlesanne);
koikNupp.addEventListener("click", () => filterUl('all'));
tehtudNupp.addEventListener("click", () => filterUl('completed'));
tegemataNupp.addEventListener("click", () => filterUl('incomplete'));
sorteeriNupp.addEventListener("click", sorteeriUl);

// Ülesande lisamise funktsioon  ultekst= ülesande tekst task=ülesanne
function lisaUlesanne() {
    const ulTekst = ulSisend.value.trim();
    if (ulTekst !== "") {
        const task = {
            text: ulTekst,
            completed: false
        };
        tasks.push(task);
        ulSisend.value = "";  // tühjendab sisu
        annaUl();
    }
}

// Funktsioon dom-ile ülesannete andmiseks annaul= anna ülesanne
function annaUl(filter = 'all') {
    ulNimekiri.innerHTML = "";
    // tühjendab nimekirja

    tasks
        .filter(task => {
            if (filter === 'completed') return task.completed;
            if (filter === 'incomplete') return !task.completed;
            return true;
            // kõik ül näitab kõiki ülesandeid
        })
        .forEach((task, index) => {
            const loendiElement = document.createElement("li");

            // Markeruut=märkeruut ehk checkbox, sellega saab ülesande tehtuks märkida
            const markeruut = document.createElement("input");
            markeruut.type = "checkbox";
            markeruut.checked = task.completed;
            markeruut.addEventListener("change", () => ulTehtud(index));

            // Ülesande tekst
            const ulTekst = document.createElement("span");
            if (task.completed) {
                ulTekst.style.textDecoration = "line-through";
            }
            ulTekst.textContent = task.text;

            // Muutmise nupp
            const muudaNupp = document.createElement("button");
            muudaNupp.textContent = "Muuda";
            muudaNupp.addEventListener("click", () => muudaUl(index, ulTekst, muudaNupp));
            // Kustutamise nupp
            const kustutaNupp = document.createElement("button");
            kustutaNupp.textContent = "Kustuta";
            kustutaNupp.addEventListener("click", () => kustutaUl(index));

            loendiElement.appendChild(markeruut);
            loendiElement.appendChild(ulTekst);
            loendiElement.appendChild(muudaNupp);
            loendiElement.appendChild(kustutaNupp);
            ulNimekiri.appendChild(loendiElement);
        });
}

// Funktsioon, et märkida ülesanne tehtuks
function ulTehtud(index) {
    tasks[index].completed = !tasks[index].completed;
    annaUl();
}

// Ülesande muutmise funktsioon
function muudaUl(index, ulTekst, muudaNupp) {

    // Sisendiväli, et teksti muuta
    const sisendiVäli = document.createElement("input");
    sisendiVäli.type = "text";
    sisendiVäli.value = tasks[index].text;

    // Salvestusnupp et muudatused talletada
    const salvestaNupp = document.createElement("button");
    salvestaNupp.textContent = "Salvesta";

    // Salvestusnuppu vajutades ülesanne muutub
    salvestaNupp.addEventListener("click", () => {
        const newUlText = sisendiVäli.value.trim();
        if (newUlText !== "") {
            tasks[index].text = newUlText;  // Uuendab ülesande teksti
            annaUl();  // Annab nimekirjale uuendatud ülesande nime
        }
    });

    // Asenda muuda nupp sisendiväljaga ja salvestamise nupuga
    ulTekst.replaceWith(sisendiVäli);  // Asenda tekst sisestusväljaga
    muudaNupp.replaceWith(salvestaNupp);  // Asenda muuda nupp  salvestamise nupuga
}

// Ülesande kustutamise funktsioon
function kustutaUl(index) {
    tasks.splice(index, 1);
    annaUl();
}

// Ülesannete sorteerimise funktsioon
function sorteeriUl() {
    tasks.sort((a, b) => a.completed - b.completed);
    annaUl();
}

// Filtreerimise funktsioon( kõik ül, tehtud, tegemata)
function filterUl(filter) {
    annaUl(filter);
}
