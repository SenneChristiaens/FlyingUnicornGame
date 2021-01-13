const b1 = new Berrie (550, 0, 4, "down");
const f1 = new Flower (420, 0, 5, "down");

let item1;
let item2;
let player;
let score = 0;
let GameOver;

function setup(){
    frameRate(60);
    createCanvas(600,800);
    noCursor();
    player = new Player;
    item1 = [b1];
    item2 = [f1];
    setInterval(nieuwItem, 1000);
    setInterval(nieuwItem2, 3000);
    GameOver = false;

}

function draw(){
    TekenLucht();
    if(GameOver == false){
        player.display();
        //Dit zorgt ervoor dat je mijn items kan zien en deze bewegen
        for(let h = 0; h < item1.length; h++){
            item1[h].display();
            item1[h].move();
        }
        //Dit zorgt ervoor dat je mijn items kan zien en deze bewegen
        for(let k = 0; k < item2.length; k++){
            item2[k].display();
            item2[k].move();
        }
        //Dit zorgt ervoor dat de score met 1 verhoogt (bloem) en dat ik deze kan vangen met mijn muis
        for(let i = 0; i < item1.length; i++){
            if (item1[i].x >= mouseX-40 && item1[i].x <= mouseX+40 && item1[i].y >= mouseY-40 && item1[i].y <= mouseY+40 ){
                item1.splice(i, 1);
                score += 1;
            }
        }
        //Dit zorgt ervoor dat de score met 1 verhoogt (bloem) en dat ik deze kan vangen met mijn muis
        for (let j = 0; j < item2.length; j++){
            if (item2[j].x >= mouseX-40 && item2[j].x <= mouseX+40 && item2[j].y >= mouseY-40 && item2[j].y <= mouseY+40 ){
                item2.splice(j, 1);
                score += 5;
            }
        }
    }
        //gameover tekst
        else{
            textAlign(CENTER, CENTER)
            textSize(20);
            fill(255);
            text("AUW!! THE ITEM HIT SOMEONES HEAD :(",width/2, height/2);
            textSize(28);
            text("PRESS SPACEBAR TO RESTART!" , width/2, 440)
        }

            textSize(24);
            textAlign(LEFT, TOP);
            fill(0);
            stroke(0)
            textFont("verdana");
            text("score: " + score, 20, 20);
        }

// dit tekent de bes op een willekeurige positie en met een random snelheid
function nieuwItem(){
    let xPos = round(random(0,width));
    let yPos = 0;
    let snelheid = round(random(4,7));
    let richting = "down";

    if(score>=20){
        snelheid = round(random(10,11));
        setInterval(500);
    }
    if(score>=40){
        snelheid = round(random(10,11));
        setInterval(450);
    }

    if(score>=60){
        snelheid = round(random(13,14));
        setInterval(300);
    }

    if(score>=80){
        snelheid = round(random(16,17));
        setInterval(250);
    }
    if(score>=200){
        snelheid = round(random(20,21));
        setInterval(200);
    }

    const object1 = new Berrie(xPos, yPos, snelheid, richting);
    item1.push(object1);
} 

// dit tekent de bloem op een willekeurige positie en met een random snelheid
function nieuwItem2(){
    let xPos = round(random(0,width));
    let yPos = 0;
    let snelheid = round(random(4,7));
    let richting = "down";
    if(score>=20){
        snelheid = round(random(10,11));
        setInterval(500);
    }
    if(score>=40){
        snelheid = round(random(10,11));
        setInterval(450);
    }

    if(score>=60){
        snelheid = round(random(13,14));
        setInterval(300);
    }

    if(score>=80){
        snelheid = round(random(16,17));
        setInterval(250);
    }
    if(score>=200){
        snelheid = round(random(20,21));
        setInterval(200);
    }

    const object2 = new Flower(xPos, yPos, snelheid, richting);
    item2.push(object2);
}





function TekenLucht(){
    stroke(0, 200, 255); //blauwe lucht
      fill(0, 200, 255); //blauwe lucht
      rect(0,0,600,800); //blauwe lucht

       //witte wolken en zon
       fill(255, 255, 255);
       noStroke();
       circle(465, 100, 60);
       circle(545, 100, 60);
       circle(505, 100, 60);
        
       fill(255, 255, 255);
       noStroke();
       circle(325, 50, 47);
       circle(385, 50, 47);
       circle(355, 50, 47);
        
       fill(255, 255, 0);
       stroke(255, 255, 0);
       circle(80, 80, 100);
}
//spel herstarten door middel van spatiebalk
function keyPressed(e) {
    e.preventDefault();
    if(e.keyCode == 32){
        item1 = [];
        item2 = [];
        player = new Player;
        GameOver = false;
}
}