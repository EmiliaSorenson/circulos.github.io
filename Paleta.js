class Paleta{
    constructor(p1){
        this.imagen = loadImage(p1);
    }

    obtenerColor(){
        let x = random(this.imagen.width);
        let y = random(this.imagen.height);
        return this.imagen.get(x,y);
    }

    
}