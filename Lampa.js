import Jatekter from "./Jatekter.js";

/* 
Ez lesz egy lámpa, aminek különböző tulajdonságai lesznek
pl: bekapcsolva: logikai ; szín: string ...
*/

export default class Lampa{
    #allapot = false; // False = lekapcsolva ; True = felkapcsolva
    #id = 0;
    #divElem;
    #szuloElem;

    

    constructor(allapot, id, szuloElem){
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloElem = szuloElem;
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child");
        this.#szinBeallit();
        this.#divElem.on("click", ()=>{
            this.#trigger("kapcsolas");
            this.setAllapot();
        });
    }

    #megjelenit(){
        let txt = ` <div></div> `;
        this.#szuloElem.append(txt);
    }

    setAllapot(){
        this.#allapot = !this.#allapot;
        this.#szinBeallit();
    }

    #szinBeallit(){
        if(this.#allapot) this.#divElem.addClass("felkapcs");
        else this.#divElem.removeClass("felkapcs");
    }

    #trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail:this.#id});
        window.dispatchEvent(e); // Ezen a 2 soron nincs mit megjegyezni, így kell megírni.
    }


    // HERE

    jatekterLetrehozas() {
        let txt = "";
        for(let i = 0; i<meret*meret; i++){
            txt += `<div class="gombok" id="${i}"></div>`;
        }
        return txt;
    }
/*
    jatekterMegjelenites(ELEMEK){
        for (let i = 0; i < this.#jatekterLista.length; i++) {
            if (lista[i] == true) ELEMEK.eq(i).css("background-color", "yellow");
            else ELEMEK.eq(i).css("background-color", "green");
        }
    }
*/
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

/*
    get MERET(){ return this.#MERET; }
    get JATEKTER(){ return this.#jatekter; }
    get jatekterLISTA(){ return this.#jatekterLista; }
*/
}