let mic;
let fondo;
let fondo2;
let tam = 15;
let circ = [];
let aMostrar;
let fAux;
let cambioFondo;
let frecuencia;
let audioContext;
let amp;
const pichModel = 'https://cdn.jsdelivr.net/gh/ml5js/ml5-data-and-models/models/pitch-detection/crepe/';

function setup() {
  createCanvas(windowWidth, windowHeight);  
  audioContext = getAudioContext();
  mic = new p5.AudioIn();
  mic.start(startPitch);
  userStartAudio();
  let p = new Paleta("5.png");
  for (let i = 1; i<=tam; i++) {
    circ.push(new Ellipse(width/2, height/2, i*30, i*30));
  }
  fondo = new Fondo(1,8,width,height,p);
  p = new Paleta("4.png");
  fondo2 = new Fondo(2, 2, width, height, p);
   aMostrar = fondo;
   fAux;
   cambioFondo = fondo2;
}


function draw() {
  print ("pitch: ");
  print (frecuencia);
  if(mic.getLevel()>0.15){
    fAux = aMostrar;
    aMostrar = cambioFondo;
    cambioFondo = fAux;
    cambioFondo.setColores();
  }
  aMostrar.mostrar();
  print(mic.getLevel());
  let graves = map (frecuencia, 900, 1200, 0, width/(tam/2));
  let agudos = map (frecuencia, 1200, 1600, 0, height/(tam/4));
  for(let i = tam-1; i>=0 ;i--){
    circ[i].modificarAgudos(agudos, mic.getLevel());
    circ[i].modificarGraves(graves, mic.getLevel());
    circ[i].cambiarPaleta(frecuencia);
    circ[i].mostrarEllipse();
  }
  
}
    function startPitch(){
      pitch = ml5.pitchDetection(pichModel, audioContext , mic.stream, modelLoaded);
    }


function modelLoaded() {
  getPitch();
}

function getPitch() {
  pitch.getPitch(function(err, frequency) {
    if (frequency) {
      frecuencia = frequency;
    } else {
    }
    getPitch();
  })

}