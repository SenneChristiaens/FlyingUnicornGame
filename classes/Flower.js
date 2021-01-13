class Flower{
    constructor(xCoord, yCoord, speed, direction){
        this.x = xCoord;
        this.y = yCoord;
        this.r = 0
        this.speed = speed;
        this.direction = direction;
    }

    display(){
    fill(255, 220, 0)
    stroke(255)
    ellipse (this.x, this.y, 25)
    ellipse (this.x+15, this.y+15, 25)
    ellipse (this.x+15, this.y-15, 25)
    ellipse (this.x+30, this.y, 25)
    ellipse (this.x+15, this.y, 20)
    }
    // items laten vallen en wanneer deze beneden zijn, te laten verdwijnen
    move(){
        if (this.direction == "down"){
            this.y += this.speed
        }

        if(this.y > 800){
            item2.pop();
            score =  0;
            GameOver = true;
        }
    }
}
