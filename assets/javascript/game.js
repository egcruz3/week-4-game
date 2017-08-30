$(document).ready(function(){

// Make our variables global to the runtime of our application
//      var redGem;
//      var whiteGem;
//      var blueGem;
//      var ltblueGem;


        
        
      

          $(".btn").on("click", function(startGame){
           var myArr = Array(120).join().split(',').map(function(a){return this.i++},{i:1});
         
          var gameNumber = myArr[Math.floor(Math.random () * myArr.length)];
          $(".getNumber").html(gameNumber)
        alert(gameNumber)
      });
              
////  DO THIS FOR NEW GAME NUMBER
//          var myArr = Array(120).join().split(',').map(function(a){return this.i++},{i:1});
//          var gameNumber = myArr[Math.floor(Math.random () * myArr.length)];
//          
//
//   
////  GENERATE NEW NUMBER FOR EACH DIAMOND
//          var myArr = Array(12).join().split(',').map(function(a){return this.i++},{i:1});
//          var gemNumber = myArr[Math.floor(Math.random() * myArr.length)];
//          
//          
//    
//    var counter = 0;
//    $(".whiteGem", ".blueGem", ".redGem", ".skyGem").on("click", function(){
//        $("#getNumber").html(NNEDSOMETHINGINHERE);
//        
//        if (getNumber === gamenumber){
//            wins++;
//        } if else {
//            (getNumber >+ gamenumber)
//            losses++;
//        }
//    });
     }
      
