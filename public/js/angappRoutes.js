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
      })

      .when("/register", {
        templateUrl: "views/register.html",
        controller: "RegisterController"
      })

      .when("/show", {
        templateUrl: "views/show.html",
        controller: "ShowController"
      })

      .when("/update", {
        templateUrl: "views/update.html",
        controller: "UpdateController"
      })
      .when("/update/:id", {
        templateUrl: "views/edit_update.html",
        controller: "UpdateController"
      });
    $locationProvider.html5Mode(true);
  }
]);
