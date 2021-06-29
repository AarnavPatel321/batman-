  const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine,world
var drops=[]
var random
var maxdrop=100
function preload(){
    t1=loadImage("thunderbolt/a.png")
    t2=loadImage("thunderbolt/b.png")
    t3=loadImage("thunderbolt/c.png")
    t4=loadImage("thunderbolt/d.png")
}

function setup(){
   engine=Engine.create()
   world=engine.world
   umbrella=new Umbrella(250,300)
   createCanvas(500,500)
    
}

function draw(){
    umbrella.display()
}   

