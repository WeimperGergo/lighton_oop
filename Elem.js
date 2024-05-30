import Jatekter from "./Jatekter.js";

/* 
Ez lesz egy lámpa, aminek különböző tulajdonságai lesznek
pl: bekapcsolva: logikai ; szín: string ...
*/

export default class Elem{
    #bekapcsolva;
    #szin;
    #sor;
    #oszlop;

    constructor(bekapcsolva, szin, sor, oszlop){
        this.#bekapcsolva = bekapcsolva;
        this.#szin = szin;
        this.#sor = sor;
        this.#oszlop = oszlop;
       
    }


    kapcsol(){
        if(this.#bekapcsolva) this.#bekapcsolva = false;
        else this.#bekapcsolva = true;
    }



    set bekapcsolva(bekapcsolva){ 
        this.#bekapcsolva = bekapcsolva;
    }

    set szin(szin){
        this.#szin = szin;
    }

    get bekapcsolva(){ 
        return this.#bekapcsolva;
    }

    get szin(){
        return this.#szin;
    }

    get oszlop(){
        return this.#oszlop;      
    }

    get sor(){
        return this.#sor;
    }
}