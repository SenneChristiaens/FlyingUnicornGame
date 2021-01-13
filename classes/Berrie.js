class Berrie{
    constructor(xCoord, yCoord, speed, direction){
        this.x = xCoord;
        this.y = yCoord;
        this.speed = speed;
        this.direction = direction;
    }

    display(){
        fill(239, 64, 155);
        stroke(255);
        ellipse(this.x, this.y, 10);
        ellipse(this.x-5, this.y-5, 10);
        ellipse(this.x-10, this.y-10, 10);
        ellipse(this.x+5, this.y-5, 10);
        ellipse(this.x+10, this.y-10, 10);
        ellipse(this.x, this.y-10, 10);
        ellipse(this.x-15, this.y-15, 10);
        ellipse(this.x+15, this.y-15, 10);
        ellipse(this.x-5,this.y-15, 10);
        ellipse(this.x+5,this.y-15, 10);
        ellipse(this.x-10, this.y-20, 10);
        ellipse(this.x, this.y-20, 10);
        ellipse(this.x+10, this.y-20, 10);
        ellipse(this.x+5, this.y-25, 10);
        ellipse(this.x-5, this.y-25, 10);
        stroke(32, 79, 44)
        line(this.x, this.y-40, this.x, this.y-25);
    }

    move(){
        if (this.direction == "down"){
            this.y += this.speed
        }
         // items laten vallen en wanneer deze beneden zijn, te laten verdwijnen
        if(this.y > 800){
            item1.pop();
            score = 0;
            GameOver = true;
        }
    }
}


