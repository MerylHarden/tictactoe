angular
    .module("tacApp")
    .controller("TacController", TacController);

// 1 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
TacController.$inject = ['$firebaseObject']


function TacController($firebaseObject){
    var self = this; 
    self.fbObject = getTest();
    self.clickMe = clickMe;
    self.click2 = click2

    function getTest(){
        var ref = new Firebase("https://tictacapp.firebaseio.com/");
        var fbObject = $firebaseObject(ref);
        return fbObject
    }

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


    function click2(){
        if(self.fbObject.blueColor ==='blue'){
            self.fbObject.blueColor = 'yellow';
        }else{
            self.fbObject.blueColor ='blue';


        }
        self.fbObject.$save();
    }

}




