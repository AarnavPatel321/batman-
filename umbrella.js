class Umbrella
 {
    constuctor(x,y)
    {
        var options = {
          isStatic:true
        }
this.um=Bodies.circle(x,y,50,options)
this.r=50
World.add(world,this.um)
this.image=loadImage("Walking Frame/walking_1.png")



    }

    display()
    {
imageMode(Center)
image(this.image,this.um.position.x,this.um.poistion.y,300,300)
    }
}