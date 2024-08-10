export function ujJatek(){
        UJJATEK.on("click", function(){
            location.reload()            
        })
}

export function rndGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
} 