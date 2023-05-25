var monster_colors = "50514f-f25f5c-ffe066-247ba0-70c1b3".split("-").map(a=>"#"+a)
class Monster{ //宣告一個類別，一個物件/圖案就是一個類別，針對所畫的圖，設定的基本條件
    constructor(args){
        this.r=args.r||(50,80)
        this.p = args.p|| createVector(random(width),random(height))
        this.v = args.v||createVector(random(-1,1),random(-1,1))
        this.color = args.color||random(monster_colors)
        this.mode=random(["happy","bad"])
        this.IsDead= false//代表還活著
        this.timenum=0
    }
    draw(){

        push()
            translate(this.p.x,this.p.y)
            fill(255,0,0)
            noStroke()
            rotate(10)
            ellipse(20,0,20,30)
            rotate(-10)
            ellipse(-20,0,20,30)
            
            
            
            
        pop()
    }
    update(){
this.p.add(this.v)
if (this.p.x<=0||this.p.x>=width)
{
  this.v.x=-this.v.x
}
if (this.p.y<=0||this.p.y>=height)
{
  this.v.y=-this.v.y
}
    }
    //碰撞函數
    isBallInRanger(mouseX,mouseY){
        let d =dist(mouseX,mouseY,this.p.x,this.p.y)
        if (d<this.r/2){//非辦與怪物間的距離如果小於半徑(this.r/2)
        return true//代表距離有再範圍
        }else{
        return false//代表去離沒有在範圍
        }
        }
}