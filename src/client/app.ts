
namespace myAPP {
    angular.module("myApp",[]);

    export class myCtrl {
        static $inject = ['$scope'];
        private name:string;
        constructor($scope) {
            this.name = "mia";
        }
    }

    angular.module("myApp").controller("myCtrl", myCtrl);
}
