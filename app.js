angular.module('app', ['ui.router', 'oauth2', 'app.people', 'app.person', 'app.about', 'app.nav'])
  .config(function($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .constant('config', {
    apiUrl: 'https://localhost:44309/',
    loginUrl: 'https://localhost:44309/identity/connect/authorize',
    issuerUri: 'https://localhost:44309/identity'
  })
  .run(function(oauthService, $http, config) {
    oauthService.loginUrl = config.loginUrl
    oauthService.redirectUri = location.origin;
    oauthService.clientId = "sampleapiclient";
    oauthService.scope = "myWebApi openid profile email";
    oauthService.issuer = config.issuerUri;
    oauthService.oidc = true;

    oauthService.setup({
        loginState: 'login',
        onTokenReceived: function(context) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + context.accessToken;
        }
    });
  })
  