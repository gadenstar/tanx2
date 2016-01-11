angular.module('starter.services', [])
.service('PostService', function ($rootScope, $http, $q, WP_API){

  this.getRecentPosts = function(posts) {
    var deferred = $q.defer();

    $http.get(WP_API + 'categories/')
    .success(function(data) {
      deferred.resolve(data);
    })
    .error(function(data) {
      deferred.reject(data);
    });

    return deferred.promise;
    //console.log(deferred.promise)
  };
  
})

// .factory('CatsLists', function($http,WP_API,$q) {
//   var deferred = $q.defer();
//   $http.get(WP_API + 'pages/')
//     .success(function(response) {
//       this.names = response;
//       deferred.resolve(response);
//       //console.log(this.names)
//     });
//   //console.log(posts)
//   return deferred.promise;

// })
.factory('Cats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var cats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 5,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 6,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 7,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 8,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  },{
    id: 9,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return cats;
    },
    remove: function(cat) {
      cats.splice(cats.indexOf(cat), 1);
    },
    get: function(catId) {
      for (var i = 0; i < cats.length; i++) {
        if (cats[i].id === parseInt(catId)) {
          return cats[i];
        }
      }
      return null;
    }
  };
});
