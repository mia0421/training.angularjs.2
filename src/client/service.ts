declare var angular: any;
namespace myApp {
    export class myService {
        static $inject = ['$http', '$q'];

        constructor(private $http: ng.IHttpService,
                    private $q: ng.IQService
        ) {
        }

        getTableFields() {
            // get http://localhost:3000/Fields
        }

        getTableData() {
            // get http://localhost:3000/Data
        }

        deleteTableData() {
            // delete http://localhost:3000/Data/{id}
        }

        addTableData() {
            // post http://localhost:3000/Data
        }

        updateTableData() {
            // put http://localhost:3000/Data/{id}
        }
    }

    angular.module("myApp")
        .service("myService", myService);
}