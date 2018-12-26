declare var angular: any;
namespace myAPP {
    import myService = myApp.myService;
    angular.module("myApp", []);

    export class myCtrl {
        static $inject = ['$scope', '$q', 'myService'];


        constructor(private $scope: any,
                    private $q: ng.IQService,
                    private myService: any
        ) {
        }

    }

    angular.module("myApp").controller("myCtrl", myCtrl);
}
