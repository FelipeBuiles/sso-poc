var PeopleService = function($http) {
    this.all = function() {
        return $http.get('../data/people.json').then(function(resp) {
            return resp.data
        })
    }

    this.person = function(id) {    
        return this.all().then(function(people) {
            return people.find(function(p){return p.id === id})
        })
    }
}

angular.module('app.services.people', [])
    .service('peopleService', PeopleService)
    .name