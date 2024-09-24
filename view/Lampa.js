export default class Lampa{
    #allapot;
    #index;
    constructor(szuloElem, index, allapot){
        this.#allapot = allapot;
        this.szuloElem = szuloElem;
        this.#index = index;
        this.lampaLetrehozas();
        this.gombElem = $('.gombok:last-child');
        this.#szinBeallit();
        this.gombElem.on("click", () => {
            this.#trigger("kapcsolas");
            
        });
    }


 

    #szinBeallit(){
        if(this.#allapot) this.gombElem.addClass("felkapcs");
        else this.gombElem.removeClass("felkapcs");
    }

    lampaLetrehozas(){
        this.szuloElem.append(`<div class="gombok" ></div>`);
    }

    #trigger(esemenyNev){
        const e = new CustomEvent(esemenyNev, {detail:this.#id});
        window.dispatchEvent(e); // Ezen a 2 soron nincs mit megjegyezni, így kell megírni.
    }

    setAllapot(){
        this.#allapot = !this.#allapot;
        this.#szinBeallit();
    }



}