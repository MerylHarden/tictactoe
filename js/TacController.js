
angular
    .module("tacApp")
    .controller("TacController", TacController);

// 1 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
TacController.$inject = ['$firebaseObject']

function TacController($firebaseObject){
    var self = this; 

   
    function self.playTime(){
        var ref = new Firebase("https://tictacapp.firebaseio.com/");
        var playTime = $firebaseObject(ref);
        return playTime;
      })();

      self.alternate = alternate;
      self.pickSquare = pickSquare;
      self.showWinner = showWinner;
      self.resetTable = resetTable;
      self.resetScore = resetScore;
      self.myPlayer = null;
      self.getMyPlayer = getMyPlayer;
      self.playerCalled = ""
      self.50Cent = false;
      self.lilw = false;
      self.visualBoard = false;

      function getMyPlayer(){
        if (self.playTime.player1. isHere === false) {
          self.playTime.player1.isHere = true;
                    self.myPlayer = "player 1";
                    self.50Cent = true;
                    self.playTime.player1.myName = self.playerCalled;
        }
        else if (self.playTime.player2.isHere === false) {
                    self.playTime.player2.isHere = true;
                    self.myPlayer = "player 2";
                    self.lilw = true;
                    self.playTime.player2.myName = self.playerCalled;
        }
        else {
          self.myPlayer = "Sidelines";
        }
        self.playTime.$save();
        self.visualBoard = true;
      }

      function alternate() {
                self.playTime.turn++;
                if (self.playTime.turn % 2 === 0) {
                    return "o";
                }
                else {
                    return "x";
                }

       function pickSquare(index) {
                if (self.playTime.status === "Game already happening, Foo!") {
                    if ((self.playTime.boxes[index].isX === true) 
                        || (self.playTime.boxes[index].isO === true)) 
                    {
                        alert("Pick a new box, my ninja");
                        return;
                    }
                    var alternate1 = alternate();
                    if (alternate1 === "o") {
                        if (self.myPlayer === "player 2") {
                        self.playTime.boxes[index].isO = true;
                        }
                        else {
                           self.playTime.turn--;
                        } 

                    }
                    else if (alternate1 === "x") {
                        if (self.myPlayer === "player 1") {
                        self.playTime.boxes[index].isX = true;
                        }
                        else {
                           self.playTime.turn--; 
                        }
                    }
                    self.playTime.$save();
                    self.showWinner();
                }

            }
        function showWinner(){
        if (
            ((self.playTime.boxes[0].isX ===true)
              && (self.playTime.boxes[1].isX === true) 
                  && (self.playTime.boxes[2].isX === true)) 
              || ((self.playTime.boxes[3].isX === true) 
                  && (self.playTime.boxes[4].isX === true) 
                  && (self.playTime.boxes[5].isX === true)) 
              || ((self.playTime.boxes[6].isX === true) 
                  && (self.playTime.boxes[7].isX === true) 
                  && (self.playTime.boxes[8].isX === true)) 
              || ((self.playTime.boxes[0].isX === true) 
                  && (self.playTime.boxes[3].isX === true) 
                  && (self.playTime.boxes[6].isX === true)) 
              || ((self.playTime.boxes[1].isX === true) 
                  && (self.playTime.boxes[4].isX === true) 
                  && (self.playTime.boxes[7].isX === true)) 
              || ((self.playTime.boxes[2].isX === true) 
                  && (self.playTime.boxes[5].isX === true) 
                  && (self.playTime.boxes[8].isX === true)) 
              || ((self.playTime.boxes[0].isX === true) 
                  && (self.playTime.boxes[4].isX === true) 
                  && (self.playTime.boxes[8].isX === true)) 
              || ((self.playTime.boxes[2].isX === true) 
                  && (self.playTime.boxes[4].isX === true) 
                  && (self.playTime.boxes[6].isX === true))
          ){
              self.playTime.status = self.playTime.player1.myName + "You won, homie!";
                    self.playTime.p1++;
                    self.playTime.$save();
                    return;
          }
          if (
              ((self.playTime.boxes[0].isO === true) 
                  && (self.playTime.boxes[1].isO === true) 
                  && (self.playTime.boxes[2].isO === true)) 
              || ((self.playTime.boxes[3].isO === true) 
                  && (self.playTime.boxes[4].isO === true) 
                  && (self.playTime.boxes[5].isO === true)) 
              || ((self.playTime.boxes[6].isO === true) 
                  && (self.playTime.boxes[7].isO === true) 
                  && (self.playTime.boxes[8].isO === true)) 
              || ((self.playTime.boxes[0].isO === true) 
                  && (self.playTime.boxes[3].isO === true) 
                  && (self.playTime.boxes[6].isO === true)) 
              || ((self.playTime.boxes[1].isO === true) 
                  && (self.playTime.boxes[4].isO === true) 
                  && (self.playTime.boxes[7].isO === true)) 
              || ((self.playTime.boxes[2].isO === true) 
                  && (self.playTime.boxes[5].isO === true) 
                  && (self.playTime.boxes[8].isO === true)) 
              || ((self.playTime.boxes[0].isO === true) 
                  && (self.playTime.boxes[4].isO === true) 
                  && (self.playTime.boxes[8].isO === true)) 
              || ((self.playTime.boxes[2].isO === true) 
                  && (self.playTime.boxes[4].isO === true) 
                  && (self.playTime.boxes[6].isO === true))
          ){    
              
              self.playTime.status = self.playTime.player2.myName + "You won, homie!";
                    self.playTime.p2++;
                    self.playTime.$save();
                    return;
                }

                 var emptyBox = false;
                for (var i = 0; i < self.playTime.boxes.length; i++) {
                    if ((self.playTime.boxes[i].isX === false) && (self.playTime.boxes[i].isO === false)) {
                        emptyBox = true;
                    }
                }
                if (emptyBox === false) {
                   
                    self.playTime.status = "Y'all equal"
                    self.playTime.$save(self.playTime.status);
                    self.playTime.tie++;
                    self.playTime.$save();
                }

            function resetTable()
                if (self.playTime.status === "Game in progress") {
                    alert("Get up off this game. Wait your turn, homie!");
                    return;
                }
                //  new game
                else {
                    for (var i = 0; i < self.playTime.boxes.length; i++) {
                        self.playTime.boxes[i].isX = false;
                        self.playTime.boxes[i].isO = false;
                        self.playTime.$save();
                    }

                    //resets the game 
                    self.playTime.status = "Game in progress";
                    self.playTime.$save();
                }
                
            }
            function resetScore() {
                for (var i = 0; i < self.playTime.boxes.length; i++) {
                    self.playTime.boxes[i].isX = false;
                    self.playTime.boxes[i].isO = false;
                    self.playTime.$save();
                }

                self.playTime.status = "Game in progress";
                self.playTime.$save(self.playTime.status);
                self.playTime.p1 = 0;
                self.playTime.$save(self.playTime.p1);
                self.playTime.p2 = 0;
                self.playTime.$save(self.playTime.p2);
                self.playTime.tie = 0;
                self.playTime.$save(self.playTime.tie);
                self.playTime.turn = 0;
                self.playTime.$save(self.playTime.turn);
                self.playTime.player1.isHere = false;
                self.playTime.$save(self.playTime.player1.isHere);
                self.playTime.player1.myName = "50 Cent";
                self.playTime.$save(self.playTime.player1.myName);
                self.playTime.player2.isHere = false;
                self.playTime.$save(self.playTime.player2.isHere);
                self.playTime.player2.myName = "Lil' Wayne";
                self.playTime.$save(self.playTime.player2.myName);
                self.displayBoard = false;
                
            }

        }






   /* }

    function clickMe(){
    // self.fbObject.color = 'red';
        if(self.fbObject.color === 'red'){
            self.fbObject.color = 'green';
            self.fbObject.purpleColor = 'purple';
            self.fbObject.orangeColor = 'orange';
    

            
            // 7 - Whenever we change the object in any way, we MUST save it if we want it to change on firebase. 
            
        } else {
            self.fbObject.color = 'red';
            self.fbObject.purpleColor = 'orange';
            self.fbObject.orangeColor = 'green';
            
            

        }
        self.fbObject.$save();

    }

    function alternate() {     
   
           turn++;     
           if (turn % 2 === 0) {       
              return "o";     
           } else {        
               return "x";     
         }  
        self.fbObject.$save();

   }    


    function click2(){
        if(self.fbObject.blueColor ==='blue'){
            self.fbObject.blueColor = 'yellow';
        }else{
            self.fbObject.blueColor ='blue';


        }
        self.fbObject.$save();
    }

}