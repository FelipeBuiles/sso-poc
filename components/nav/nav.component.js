var NavComponent = {
    templateUrl: './components/nav/nav.html',
    controller: NavController
}

function NavController(oauthService) {
    var ctrl = this

    ctrl.loggedIn = oauthService.getIsLoggedIn()

    ctrl.handleSession = function() {
        if(ctrl.loggedIn) {
            oauthService.logOut()
            ctrl.loggedIn = false
        } else {
            oauthService.initImplicitFlow('people')
        }
    }
}

angular.module('app.nav', [])
    .component('navigation', NavComponent)
