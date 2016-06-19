// Dashboard Controller
movieswApp.controller('myController', function myController($scope, $http, session) {
  $scope.images = [1, 2, 3, 4, 5, 6, 7, 8];
  $scope.results = [];
  $scope.collection = [];
  // Search movies
  $scope.getSearch = function() {
    $('#btn_search').addClass('loading');
    if (this.search) {
      $http.get('/api/search/' + this.search)
        .success(function(data) {
          if (data.length) {
            $scope.results = data;
          }
          $('#btn_search').removeClass('loading');
        });
    }
  }
  // Add movie
  $scope.addMovie = function(movie) {
    $.ajax({
      url: '/api/movies',
      type: 'POST',
      data: movie,
      dataType: 'json'
    }).done(function(json){
      if (json.error) {
        console.log('error');
      } else {
        $scope.collection.unshift(json);
        $scope.$apply();
      }
    });
  }
  // Remove movie
  $scope.removeMovie = function(movie) {
    // Position movie
    function thatMovie(element, index) {
      return element._id === movie._id;
    }
    // Call API
    $.ajax({
      url: '/api/movies',
      type: 'DELETE',
      data: movie,
      dataType: 'json'
    }).done(function(json){
      if (json.error) {
        console.log('error');
      } else {
        var pos = $scope.collection.findIndex(thatMovie);
        if (pos) {
          $scope.collection.splice(pos, 1);
          $scope.$apply();
        }
      }
    });
  }
  // Load collection
  $http.get('/api/movies/user')
    .success(function(data) {
      if (!data.error) {
        $scope.collection = data;
      }
    });
});
