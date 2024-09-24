export default class Modell{
    #db = 0;
    #allapotLista = [];
    #index = 0;
    
    constructor(){
        this.#allapotLista = [false, false, false, false, false, false, false, false, false];
    }

    getDb(){
        return this.#db;
    }

    getAllapotLista(){
        return this.#allapotLista;
    }

}