var PeopleComponent = {
  bindings: {
    people: '<'
  },
  templateUrl: './components/people/people.html' 
}

function routes($stateProvider) {
  $stateProvider
    .state('people', {
      url: '/',
      name: 'people',
      component: 'people',
      resolve: {
        people: function(peopleService) {
          return peopleService.all()
        }
      }
    })
}

angular.module('app.people', ['app.services.people'])
  .component('people', PeopleComponent)
  .config(routes)
  .name