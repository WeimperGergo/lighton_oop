import Lampa from "./Lampa.js";

export default class Palya{
    #szuloElem;
    #lista = [];
    constructor(lista, szuloElem){
        this.#szuloElem = szuloElem;
        this.#lista = lista;
        this.jatekter = this.jatekterLetrehozas();
    }
  
    jatekterLetrehozas() {
        for(let i = 0; i < 9; i++){
            new Lampa(this.#szuloElem, i, this.#lista[i]);
        }
    }
    
}