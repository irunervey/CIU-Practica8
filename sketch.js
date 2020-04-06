var margenX,margenY,sizeX,sizeY;

var tamañoPin;
let colorPin;
let coloresR=[];
let coloresG=[];
let coloresB=[];

function setup() {  
  sizeX=600;
  sizeY=600;
  createCanvas(sizeX, sizeY);
  background(220);
  margenX=0;
  margenY=50;
  tamañoPin=10;
  colorPin=color(255,0,0);
  coloresR = [0, 255, 255, 255, 255, 255, 255, 130, 76,128,0,255];
  coloresG = [0, 255, 255, 0, 128, 255, 255, 13, 76,255,255,0];
  coloresB = [0, 255, 0, 128, 128, 128, 0, 25, 76,0,255,0];
  rect(margenX,margenY,sizeX-margenX,sizeY-margenY);

  
  botones();
  
}

function draw() {
  pincel();
  
}

function pincel(){
  stroke(colorPin);
  if (mouseIsPressed === true) {
    if(mouseX>margenX && mouseY>margenY&& pmouseX>margenX && pmouseY>margenY) {
      strokeWeight(tamañoPin);
      line(mouseX, mouseY, pmouseX, pmouseY);
      strokeWeight(1);
    }
    
    if(mouseY<margenY/2){
        
      switch((int)(mouseX/(margenY/2))){
        case 1:
          tamañoPin--;
          if(tamañoPin<1)tamañoPin=1;
          break;
        case 0:
          tamañoPin++;
          if(tamañoPin>20)tamañoPin=20;
          break;
        case 2:
          fill(255);
          stroke(0);
          rect(margenX,margenY,sizeX-margenX,sizeY-margenY);
          break;
        case 3:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 4:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 5:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 6:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 7:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 8:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 9:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 10:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 11:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 12:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 13:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
          case 14:
          colorPin=color(coloresR[(int)(mouseX/(margenY/2))-3],coloresG[(int)(mouseX/(margenY/2))-3],coloresB[(int)(mouseX/(margenY/2))-3]);
          break;
      }
    }
  }
}

function botones(){
  rect(0,0,margenY/2,margenY/2);
  circle(margenY/6,margenY/4,10);
  circle(margenY*2/6,margenY/4,15);
  rect(margenY/2,0,margenY/2,margenY/2);
  circle(margenY/6+margenY/2,margenY/4,15);
  circle(margenY*2/6+margenY/2,margenY/4,10);
  rect(margenY/2*2,0,margenY/2,margenY/2);
  text("new",margenY/2*2+2,margenY/4);
  for(var i = 3;i<15;i++){//24
    fill(coloresR[i-3],coloresG[i-3],coloresB[i-3]);
    rect(margenY/2*i,0,margenY/2,margenY/2);
    
  }
}

