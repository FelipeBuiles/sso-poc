var PersonComponent = {
    bindings: {
        person: '<'
    },
    templateUrl: './components/person/person.html'
}

function routes($stateProvider) {
    $stateProvider
        .state('person', {
            url: '/people/:personId',
            name: 'person',
            component: 'person',
            resolve: {
                access: $q => {
                    if(!localStorage.getItem('access_token')) {
                        Materialize.toast('Unauthorized')
                        return $q.reject('Unauthorized')
                    }
                },
                person: (peopleService, $stateParams) => peopleService.person($stateParams.personId)
            }
        })
}

angular.module('app.person', ['app.services.people'])
    .component('person', PersonComponent)
    .config(routes)