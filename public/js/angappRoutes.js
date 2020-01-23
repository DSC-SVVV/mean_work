angular.module("angappRoutes", []).config([
  "$routeProvider",
  "$locationProvider",
  function($routeProvider, $locationProvider) {
    $routeProvider

      //home page
      .when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeController"
      })
      //About us page
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController"
      })

      //contact us page
      .when("/contact", {
        templateUrl: "views/contact.html",
        controller: "ContactController"
      });
    $locationProvider.html5Mode(true);
  }
]);
