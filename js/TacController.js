angular
    .module("tacApp")
    .controller("TacController", TacController);

// 1 - inject either '$firebaseObject' or '$firebaseArray' into our controller using the $inject method:
TacController.$inject = ['$firebaseObject']


function TacController($firebaseObject){
    var self = this; 
    self.fbObject = getTest();
    self.clickMe = clickMe;

    function getTest(){
        var ref = new Firebase("https://tictacapp.firebaseio.com/");
        var fbObject = $firebaseObject(ref);
        return fbObject
    }

    function clickMe(){
    // self.fbObject.color = 'red';
        if(self.fbObject.color === 'red'){
            self.fbObject.color = 'green';
            self.fbObject.blueColor = 'blue';
            self.fbObject.purpleColor = 'purple';
            
            // 7 - Whenever we change the object in any way, we MUST save it if we want it to change on firebase. 
            self.fbObject.$save();
        } else {
            self.fbObject.color = 'red';
            self.fbObject.blueColor = 'yellow';
            self.fbObject.purpleColor = 'orange';
            self.fbObject.
            self.fbObject.$save();

        }


    }

}
