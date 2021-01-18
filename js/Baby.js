class Baby {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    //this.rank = null;
  }

  getCount(){
    var babyCountRef = database.ref('babyCount');
    babyCountRef.on("value",(data)=>{
      babyCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      babyCount: count
    });
  }

  update(){
    var babyIndex = "babies/baby" + this.index;
    database.ref(babyIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  /* getCarsAtEnd(){
    var playerRankRef = database.ref('carsAtEnd');
    playerRankRef.on("value",(data)=>{
      this.rank = data.val();
    });
  } */

/*   static updateCarsAtEnd(rank){
    database.ref('/').update({
      carsAtEnd: rank
    });
  } */

  static getbabyInfo(){
    var babyInfoRef = database.ref('babies');
    babyInfoRef.on("value",(data)=>{
      allBabies = data.val();
    })
   }
} 
