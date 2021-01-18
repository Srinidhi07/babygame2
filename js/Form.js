class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Baby Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.reset.position(displayWidth-100,20);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      baby.name = this.input.value();
      babyCount+=1;
      baby.index = babyCount;
      baby.update();
      baby.updateCount(babyCount);
      this.greeting.html("Welcome " + baby.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

    this.reset.mousePressed(()=>{
      baby.updateCount(0);
      game.update(0);
    });

  }
}
