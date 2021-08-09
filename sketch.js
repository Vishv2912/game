const START =0;
const WAIT =1;
const PLAY=2;
const END=3 ;



var form,game,player;






var database;



function setup() {
  createCanvas(displayHeight-20,displayHeight-100);
   database=firebase.database();


  
}

function draw() {
  background("aqua");  






  drawSprites();

}