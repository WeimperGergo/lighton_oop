export default class EredmenyMegjelenit{
    #db
    #szuloElem

    constructor(db, szuloElem){
        this.#db = db;
        this.#szuloElem = szuloElem;
        this.#megjelenit();

    }

    #megjelenit(){
        let txt = `
        A lekapcsolt lámpák száma: ${this.#db} db
        `;
        this.#szuloElem.html(txt);
    }

    ujJatekGomb(){
        UJJATEK.on("click", function(){
            location.reload()
        })
    }


}