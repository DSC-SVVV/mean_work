angular.module("AboutService", []).factory("About", [
  "$http",
  function($http) {
    return {
      //call to get all the data
      get: function() {
        return $http.get("/api/abouts");
      },

      //call to delete the data
      delete: function() {
        return $http.delete("/api/abouts" + id);
      }
    };
  }
]);
