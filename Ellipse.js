class Ellipse{
    constructor(x, y, an, al){
        this.x=x;
        this.y=y;
        this.an = an;
        this.al =al;
        this.agudos = 0;
        this.graves = 0;
        this.amp =0;
        this.paleta = new Paleta("1.jpg");
        this.paleta2 = new Paleta("2.jpg");
        this.paletaActual = this.paleta2;
    }

    mostrarEllipse(){
        push();
        stroke(255);
        fill(this.paletaActual.obtenerColor());
        ellipse(this.x, this.y, this.an +(this.graves-this.agudos)*this.amp*5, this.al+this.agudos*this.amp*5);
        this.agudos = 0;
        this.graves=0;
        pop();
    }

    modificarGraves(pitch, amp){
        this.graves = pitch;
        this.amp = amp;
    }

    modificarAgudos(pitch, amp){
        this.agudos = pitch;
        this.amp = amp;
    }
    
    cambiarPaleta(pitch){
        if(pitch>800 ){
            this.paletaActual=this.paleta2;
        }
        else{
            this.paletaActual = this.paleta;
        }
    }
}