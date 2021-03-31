var logo,logoImg,text;
var login,loginImg,login2;
var student,StudentIMG;
var teacher,teacherImg;
var background1,bgIMG;
var hw,hwIMG,tit,titIMG,exam,examIMG,time,timeIMG;



function preload() {
    logoImg = loadImage("200x200bb.png")
    loginImg = loadImage("login-button-png-5.png")
   StudentIMG = loadImage("student-png-pollpath-27.png")
   teacherImg = loadImage("teacher.png")
   hwIMG = loadImage("hw.png")
   titIMG = loadImage("tit.png")
   examIMG = loadImage("exam por.png")
   timeIMG = loadImage("tm.png")
  
}
function setup() {
    createCanvas(displayWidth,displayHeight);
    

    logo = createSprite(displayWidth - 600, displayHeight-525);
    logo.addAnimation("logo",logoImg);
    logo.scale = 0.5

    login = createSprite(displayWidth - 950, displayHeight-295,50,50);
    login.addAnimation("login",loginImg);
    login.scale = 0.2

    student = createSprite(displayWidth - 800, displayHeight-350,50,50)
    student.addAnimation("student",StudentIMG);
    student.scale = 0.15

    login2 = createSprite(displayWidth - 335, displayHeight-295);
    login2.addAnimation("login",loginImg);
    login2.scale = 0.2

    teacher = createSprite(displayWidth - 200, displayHeight-325,50,50);
    teacher.addAnimation("teacher",teacherImg);
    teacher.scale = 0.25;

    background1 = createSprite(displayWidth,displayHeight,10000,10000);
    background1.shapeColor = rgb(173,216,230);
    background1.visible = false;

    hw = createSprite(displayWidth - 1075,displayHeight - 200);
    hw.addAnimation("hw",hwIMG);
    hw.visible = false;
    hw.scale = 0.6;

    tit = createSprite(displayWidth - 975,displayHeight - 250)
    tit.addAnimation("tit",titIMG)
    tit.scale = 0.8;
    tit.visible = false;

    exam = createSprite(displayWidth - 175,displayHeight - 250);
    exam.addAnimation("exam",examIMG)
    exam.scale = 0.8;
    exam.visible = false;

    time = createSprite(displayWidth /3.5,displayHeight /2.2);
    time.addAnimation("time",timeIMG)
    time.scale = 0.55;
    time.visible = false;
   
   

    

    
    

    //text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650);

    //tex("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 800, displayHeight-650)


}

function draw() {
    background(173,216,230);

    
    text("CARMEL MATRIC HR.SEC SCHOOL",displayWidth - 700, displayHeight-600);
   
    text("Students login here",displayWidth - 1000, displayHeight-400);

    text("Teachers login here",displayWidth - 400, displayHeight-375);

    text("SCHOOL DIARY",displayWidth/2, displayHeight-450)

    

   
   

    if(mousePressedOver(login)) {
      background("white")
      
      background1.visible = true;

          
         

      this.input = createInput("Username");
        this.input1 = createInput("Password");
        
      this.button = createButton('Login');
      this.greeting = createElement('h2');
  
      this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);

  
      this.input1.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
      this.button.position(displayWidth/2 + 30, displayHeight/2);

    

      this.button.mousePressed(()=>{

        hw.visible = true;
        tit.visible = true;
        exam.visible = true;
        
        
        this.value = this.input.value();
        this.greeting.html("Hello " + this.value)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);

        
      
       

      
      

      
    });
      
      }

      if(mousePressedOver(login2)) {
        background("white")
        background1.visible = true;
   
        this.input2 = createInput("Username")
        this.input3 = createInput("password")
        this.Teacherbutton = createButton('Login');

        this.input2.position(displayWidth/2 - 40 , displayHeight/2 - 80);

  
        this.input3.position(displayWidth/2 - 40 , displayHeight/2 - 50);
  
        this.Teacherbutton.position(displayWidth/2 + 30, displayHeight/2);

        this.Teacherbutton.mousePressed(()=>{

          this.input2.hide();
          this.input3.hide();
          this.Teacherbutton.hide();

          time.visible = true;
          
          text("Hello teacher,",displayWidth - 1200, displayHeight-600);

    this.button = createButton('Give homework');
    this.button2 = createButton('Publish mark');

    this.button.position(displayWidth - 1150,displayHeight / 1.35);
    this.button2.position(displayWidth - 850,displayHeight / 1.35);

    this.button.mousePressed(()=>{

        this.input = createInput("Class")
        this.input2 = createInput("Subject")
        this.input3 = createInput("Homework")
        this.greeting = createElement('h2')
        this.SButton = createButton("Submit")
        //this.Sgreeting.hide();

        this.greeting.html("Student homework")
        this.greeting.position(displayWidth/1 - 500, displayHeight/4)

        this.input.position(displayWidth/1 - 500,displayHeight / 2.7)
        this.input2.position(displayWidth/1 - 500,displayHeight / 2.4)
        this.input3.position(displayWidth/1 - 500,displayHeight / 2.15)
        this.SButton.position(displayWidth/1 - 450,displayHeight / 1.90)

        this.SButton.mousePressed(()=>{
            this.greeting.hide();
            this.input.hide();
            this.input2.hide();
            this.input3.hide();
            this.SButton.hide();
            this.button.hide();

            this.Sgreeting = createElement('h2')
            this.Sgreeting.html("Homework assigned");
            this.Sgreeting.position(displayWidth/1 - 500, displayHeight/4)
            

        });


        

        
      });

      this.button2.mousePressed(()=>{
          this.Mgreet = createElement('h2');
          this.Mgreet.html("Publish marks")
          this.Mgreet.position(displayWidth/1 - 500, displayHeight/4)

          this.Minput = createInput("Class")
          this.Minput2 = createInput("Student roll no")
          this.Minput3 = createInput("Exam")
          this.Minput4 = createInput("Subject")
          this.Minput5 = createInput("Mark")
          this.Minput6 = createInput("Comments")
          this.Mbutton = createButton("Submit")

          this.Minput.position(displayWidth/1 - 500,displayHeight / 2.7)
          this.Minput2.position(displayWidth/1 - 500,displayHeight / 2.4)
          this.Minput3.position(displayWidth/1 - 500,displayHeight / 2.15)
          this.Minput4.position(displayWidth/1 - 500,displayHeight / 1.95)
          this.Minput5.position(displayWidth/1 - 500,displayHeight / 1.78)
          this.Minput6.position(displayWidth/1 - 500,displayHeight / 1.64)
          this.Mbutton.position(displayWidth/1 - 450,displayHeight / 1.52)

          this.Mbutton.mousePressed(()=>{
            this.Mgreet.hide();
            this.Minput.hide();
            this.Minput2.hide();
            this.Minput3.hide();
            this.Minput4.hide();
            this.Minput5.hide();
            this.Minput6.hide();
            this.Mbutton.hide();

            this.Mgreet2 = createElement('h2');
            this.Mgreet2.html("Mark published")
            this.Mgreet2.position(displayWidth/1 - 500, displayHeight/4)

          });

          

      });


        });







}

drawSprites();
}