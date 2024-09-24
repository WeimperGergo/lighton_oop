import Modell from "../model/Modell.js";
import Palya from "../view/Palya.js";


export default class Controller{

    constructor(){
        this.model = new Modell();
        this.szuloElem = $('.jatekter');
        this.lista = this.model.getAllapotLista();
        this.jatekTerulet = new Palya(this.lista, this.szuloElem);  
        
    }


}