import Lampa from "./Lampa.js";
import { rndGen } from "./fuggvenyek.js";
import EredmenyMegjelenit from "./EredmenyMegjelenit.js";

/* Létrehozzuk a játéktér adattagjait és tagfüggvényeit, amivel működtetjük a játékot */

export default class Jatekter{
    #db = 0;
    #allapotLista = [false, false, false, false, false, false, false, false, false];
    #lepes;

    constructor(db, allapotLista, meret, lepes){
        this.#setAllapotLista();
        this.#init();
        const UJJATEK = $('#ujJatekGomb');
            UJJATEK.on("click", function(){
                location.reload();
                //this.#init();            
            });
        $(window).on("kapcsolas", (event)=>{
            //console.log(event.detail);

            let id = event.detail;
            //this.#lepes += 1;
            this.#szomszedokKeresese(id);
            let dbOff = 0;
            this.#allapotLista.forEach(elem => {
                if(elem === false) dbOff++;
            });
            new EredmenyMegjelenit(dbOff, $('.eredmeny h3'));

            if(dbOff === 9) alert("Gratulálunk! Sikerült leoltanod az összes lámpát!");
        })
        /*      
        this.#db = db;
        this.#allapotLista = allapotLista;
        this.#lepes = lepes;
        */
       
    }

    #setAllapotLista(){ 
        for (let i = 0; i < this.#allapotLista.length; i++) {
            let vel = rndGen(1, 100);
            if(vel <= 80) this.#allapotLista[i] = true;
            else this.#allapotLista[i] = false;
        }

        this.#allapotLista.forEach((elem, index) => {
            
        });
    }

    #szomszedokKeresese(id){
        this.#allapotLista[id] = !this.#allapotLista[id];

        // szomszédok:
        if(id % 3 !== 2) this.#allapotLista[id+1] = !this.#allapotLista[id+1];
        if(id % 3 !== 0) this.#allapotLista[id-1] = !this.#allapotLista[id-1];        
        if(id < 6) this.#allapotLista[id+3] = !this.#allapotLista[id+3];
        if(id > 2) this.#allapotLista[id-3] = !this.#allapotLista[id-3];
        this.#init();
        /*
            id. elem szomszédok
            id - 1
            id + 1
            id - 3
            id + 3
        */
    }

    #init(){
        $(".jatekter").empty();
        this.#allapotLista.forEach((elem, index) => {
            new Lampa(elem, index, $(".jatekter"));            
        });
    }

    #ellenorzes(){
        this.#allapotLista.forEach((elem, index) => {
            if(!elem){
                /* lekapcsolt false állapotokat számolja */
                this.#db++;
            }
        });
    }

    get db(){ 
        return this.#db;
    }

    get (allapotLista){
        return this.#allapotLista;
    }

    get lepes(){
        return this.#lepes;
    }
    
}