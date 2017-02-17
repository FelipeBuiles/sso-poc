var AboutComponent = {
    template: `<p>this is an about page<p>
                <p style="font-size:4px">don't judge me</p>`
}

function routes($stateProvider) {
    $stateProvider
        .state('about', {
            url: '/about',
            name: 'about',
            component: 'about',
            resolve: {
                access: $q => {
                    if(!localStorage.getItem('access_token')) {
                        Materialize.toast('Unauthorized')
                        return $q.reject('Unauthorized')
                    }
                }
            }
        })
}

angular.module('app.about', [])
    .component('about', AboutComponent)
    .config(routes)
    .name