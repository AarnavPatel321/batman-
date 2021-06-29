class Drops
 {
    constuctor(x,y)
    {
        var options = {
            restitution:0.1,
            friction:0.001
        }
this.rain=Bodies.circle(x,y,5,options)
this.r=5
World.add(world,this.rain)
    }
updateY()
{
    if (this.rain.position.y>height)
    {
    matter.Body.setPositon(this.rain,{x:random(0,500),y:random(0,500)})
    }
    
}



    

    display()
    {
ellipseMode(Center)
ellipse(this.rain.position.x,this.rain.poistion.y,this.r,this.r)
    }
}