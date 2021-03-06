// REST Service
movieswApp.factory('rest', function($http){
  var rest = {};

  // POST change password
  rest.postPassword = function(user) {
    var promise = $http.post('/api/users/password', user)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // POST user profile
  rest.postUser = function(user) {
    var promise = $http.post('/api/users', user)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // POST movie user
  rest.postMovie = function(movie) {
    var promise = $http.post('/api/movies', movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // DELETE movie user
  rest.delMovie = function(movie) {
    var promise = $http.delete('/api/movies/' + movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // GET movies user
  rest.getUserMovies = function(user) {
    var promise = $http.get('/api/movies/user')
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // GET Search
  rest.getSearch = function(search) {
    var promise = $http.get('/api/search/' + search)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // GET All Movies
  rest.getAllMovies = function() {
    var promise = $http.get('/api/movies')
      .then(function(response) {
        return response.data;
      });
    return promise;
  };

  // PUT Add Trade Movie
  rest.putTrade = function(movie) {
    var promise = $http.put('/api/trades/add/' + movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // PUT Cancel/Delete Trade Movie
  rest.delTrade = function(movie) {
    var promise = $http.put('/api/trades/del/' + movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // PUT Accept Trade Movie
  rest.acceptTrade = function(movie) {
    var promise = $http.put('/api/trades/accept/' + movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // PUT Like Movie
  rest.putLike = function(movie) {
    var promise = $http.put('/api/likes/' + movie)
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // GET Trade In
  rest.getTradeIn = function() {
    var promise = $http.get('/api/trades/in')
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  // GET Trade Out
  rest.getTradeOut = function() {
    var promise = $http.get('/api/trades/out')
      .then(function(response) {
        return response.data;
      });
    return promise;
  }

  return rest;
});
