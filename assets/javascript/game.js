    $(document).ready(function(){
        var gameNumber = " ";
        var gemNumber = " ";
            
            
        
    $(".btn").on("click", function() {
     var myArr = Array(120).join().split(',').map(function(a){return  this.i++},{i:1});
     var gameNumber = myArr[Math.floor(Math.random () * myArr.length)];
     $("#getNumber").html(gameNumber);
            
    });
        
        
     $(".whiteGem").on("click", function(){
       var myArr = Array(12).join().split(',').map(function(a){return this.i++},{i:1});
       var gemNumber = myArr[Math.floor(Math.random() * myArr.length)];
       $("#userNum").html(gemNumber)
     });
          
    $(".blueGem").on("click", function(){
       var myArr = Array(12).join().split(',').map(function(a){return this.i++},{i:1});
       var gemNumber = myArr[Math.floor(Math.random() * myArr.length)];
       $("#userNum").html(gemNumber) 
     });
            
     $(".redGem").on("click", function(){
       var myArr = Array(12).join().split(',').map(function(a){return this.i++},{i:1});
       var gemNumber = myArr[Math.floor(Math.random() * myArr.length)];
       $("#userNum").html(gemNumber)  
     });
            
    $(".skyGem").on("click", function(){
       var myArr = Array(12).join().split(',').map(function(a){return this.i++},{i:1});
       var gemNumber = myArr[Math.floor(Math.random() * myArr.length)];
       $("#userNum").html(gemNumber)  
     });

//     UNSOLVED: This is supposed to add current user answer to gem value pressed::::::::
            
//     var currentValue = $(".s2").text();
//     var newValue = (currentValue + gemNumber);
//     $(".s2").text(newValue);                     
            
            
            
//      UNSOLVED - This is supposed to determine whether user wins or loses, then restarts the game:::::
            
            
        if (gemNumber === gameNumber){
            wins++;
            alert("You Won!")
    } else {
            (gemNumber >= gameNumber)
            losses++;
            alert("You loss, try again")
        }
    });
        
// UNSOLVED: need to restart game
     
        
        
                  
      
