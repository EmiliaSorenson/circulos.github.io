class Fondo{
    constructor(x,y,anchoP,altoP,p){
      this.paleta = p;
      this.cantX=x;
      this.cantY=y;
      this.posX = [];
      this.posY = [];
      this.colores = [];
      this.sepAn = anchoP/this.cantX;
      this.sepAl = altoP/this.cantY;
      this.cargados = false;  
      this.iteracionesAntesDeCambio = 30;
      this.iteracionesAux = 0;
      for(let i=0;i<this.cantX;i++){
        this.posX.push(this.sepAn*i);
      }
      for(let i=0;i<this.cantY;i++){
        this.posY.push(this.sepAl*i);
      }
    
       
    }
    mostrar(){ 
      //Cargo aca los colores porque si los cargo en el constructor no se carga correctamente la paleta
      if(!this.cargados){
        for(let i=0;i<this.cantX;i++)
              for(let j=0;j<this.cantY;j++)
                this.colores.push(this.paleta.obtenerColor());
        this.cargados = true;
      }
  
      
      for(let i=0; i< this.cantX; i++)
        for(let j=0; j<this.cantY;j++){
          fill(this.colores[i*j+j]);
          rect(this.posX[i],this.posY[j],this.sepAn,this.sepAl);
        }
    }
    setColores(){
      
        this.colores = [];
        for(let i=0;i<this.cantX;i++)
          for(let j=0;j<this.cantY;j++){
            this.colores.push(this.paleta.obtenerColor());
          }
        
        }
    }