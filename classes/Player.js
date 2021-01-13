class Player {
    constructor(mouseX, mouseY){
        this.x = mouseX;
        this.y = mouseY;
    }

    display(){
        noStroke();
        fill(255, 217, 0)

        //hoorn
        triangle(mouseX-10, mouseY+2, mouseX, mouseY-63, mouseX+10, mouseY+2);
        noStroke();
        //oren
        fill(235)
        triangle(mouseX-21, mouseY+7, mouseX-21, mouseY-8, mouseX-15, mouseY+2);
        triangle(mouseX+15, mouseY+2, mouseX+22, mouseY-8, mouseX+22, mouseY+7);

        //vertex
        fill(220)
        beginShape();
        vertex(mouseX, mouseY);
        vertex(mouseX-20, mouseY+2);
        vertex(mouseX-22,mouseY+5)
        vertex(mouseX-10, mouseY+47);
        vertex(mouseX-5, mouseY+57);
        vertex(mouseX-0.5, mouseY+59)
        vertex(mouseX+6,mouseY+57);
        vertex(mouseX+12,mouseY+47);
        vertex(mouseX+23,mouseY+5)
        vertex(mouseX+21, mouseY+2)
        vertex(mouseX,mouseY);
        endShape();

        //Ogen
        fill(255);
        ellipse(mouseX-10,mouseY+11,7);
        ellipse(mouseX+10,mouseY+11,7);
        fill(255, 0, 242);
        ellipse(mouseX-10,mouseY+11,5);
        ellipse(mouseX+10,mouseY+11,5);
        //wit deel gezicht
        fill(255);
        beginShape();
        vertex(mouseX-10, mouseY+47);
        vertex(mouseX-5, mouseY+57);
        vertex(mouseX+0.5, mouseY+59)
        vertex(mouseX+6,mouseY+57);
        vertex(mouseX+12,mouseY+47);
        endShape();

        //neusgaten
        fill(0);
        ellipse(mouseX+4, mouseY+54, 1.5)
        ellipse(mouseX-3, mouseY+54, 1.5)
    }

}