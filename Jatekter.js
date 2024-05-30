import Elem from "./Elem.js";

/* Létrehozzuk a játéktér adattagjait és tagfüggvényeit, amivel működtetjük a játékot */

export default class Jatekter{
    #MERET = 3;
    #jatekter;
    #jatekterLista;

    constructor(){
        this.#jatekter = $("#jatekter");
        this.#jatekterLista = [];
    }

    jatekterLetrehozas() {
        let txt = "";
        for(let i = 0; i<meret*meret; i++){
            txt += `<div class="gombok" id="${i}"></div>`;
        }
        return txt;
    }

    jatekterMegjelenites(ELEMEK){
        for (let i = 0; i < this.#jatekterLista.length; i++) {
            if (lista[i] == true) ELEMEK.eq(i).css("background-color", "yellow");
            else ELEMEK.eq(i).css("background-color", "green");
        }
    }

    gombKezelo(LISTA) {
        let meret = $(":root");
        const gombELEM = $(".gombok");
        gombELEM.on("click", function(event){
            const gombId = event.target.id;
            LISTA[gombId] = !LISTA[gombId];
            console.log(gombId);
            console.log(LISTA);
            jatekVege(LISTA);
        })
        jatekterMegjelenites(LISTA, jatekELEMEK);
    }


    get MERET(){ return this.#MERET; }
    get JATEKTER(){ return this.#jatekter; }
    get jatekterLISTA(){ return this.#jatekterLista; }
}