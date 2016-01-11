angular.module('starter.controllers', ['ui.bootstrap'])

.controller('DashCtrl', function($scope) {
})

// .controller('CatsCtrl', function($scope, Cats) {
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});

//   $scope.cats = Cats.all();
//   $scope.remove = function(cat) {
//     Cats.remove(cat);
//   };
// })

.controller('CatsCtrl', function($rootScope, $scope, $state, Categories) {
    $scope.showCategory = function(iteme) {
      //console.log(iteme.link);
      // $rootScope.fromWhereToProducts = 'category';
       $rootScope.categoryId = iteme.link;
       var ecid = iteme.link;
       console.log($rootScope.categoryId);

        $state.go('producers',{ecid:ecid});
      // $scope.menuShow = false;
       // Categories.getLists()
       //  .then(function(data){
       //    // var sorted_categories = _.sortBy(data.categories, function(category){ return category.title; });
       //     var sorted_categories2 = _.sortBy(data, function(category){ return category.name; });

       //    // //top nav
       //    // var parents = _.filter(sorted_categories2, function(category){ return category.parent===0; });
       //    // //sub nav
       //    // var sub_parents = _.filter(sorted_categories2, function(category){ return category.parent>0; });

       //    // var result = getItems(parents, sorted_categories2);
       //    //var result = _.sortBy(parents, sorted_categories2);
       //    //var result2 = getItems(sub_parents, sorted_categories);
          
       //    $scope.productList = {
       //      items:sorted_categories2
       //    };
       //    console.log($scope)
       //    // $scope.sub_parents = {
       //    //   items:sub_parents
       //    // };
       //    // $scope.menu = {
       //    //   //title: 'All Categories',
       //    //   id: '0',
       //    //   items: result
       //    // };
       //    //console.log($scope.sub_parents)
          
       //  });
    };
  
  var getItems = function(parents, categories){
    if(parents.length > 0){
      _.each(parents, function(parent){
       // parent.name = parent.name;
        parent.link = parent.slug;
        var items = _.filter(categories, function(category){ return category.parent===parent.id; });
        //console.log(items)
        if(items.length > 0){
          parent.menu = {
            title: parent.name,
            id: parent.id,
            items:items
          };
          getItems(parent.menu.items, categories);
        }
      });
    }else {
      console.log('error')
    }
    return parents;
  };
  Categories.getCategories()
  .then(function(data){
    var sorted_categories = _.sortBy(data.categories, function(category){ return category.title; });
    var sorted_categories2 = _.sortBy(data, function(category){ return category.name; });

    //top nav
    var parents = _.filter(sorted_categories2, function(category){ return category.parent===0; });
    //sub nav
    var sub_parents = _.filter(sorted_categories2, function(category){ return category.parent>0; });

    var result = getItems(parents, sorted_categories2);
    //var result2 = getItems(sub_parents, sorted_categories);
    console.log($scope)
    $scope.parents = {
      items:parents
    };
    $scope.sub_parents = {
      items:sub_parents
    };
    $scope.menu = {
      //title: 'All Categories',
      id: '0',
      items: result
    };
    //console.log($scope.sub_parents)
    
  });

})

.controller('productlistsCtrl', function($ionicHistory,$ionicLoading,$rootScope,$stateParams,$scope,Categories) {
  console.log($ionicHistory)

  $scope.goBack = function() {
    $ionicHistory.goBack();
  };
  var producerId = $stateParams.ecid;

  Categories.getLists()
    .then(function(data){
      $scope.productList = data;
      $scope.nimabi2 = 'sdjfhskjdf';
      console.log(data)
  })
  $ionicLoading.show({
    template: '数据加载中...'
  });

  Categories.getLists()
    .success(function (data) {
    $ionicLoading.hide();
  }).error(function (data) {
    //添加失败
    $ionicLoading.hide();
  });
  // $scope.doRefresh = function () {
  //   Websites.allTestSpeed($scope);
  //   //Stop the ion-refresher from spinning
  //   $scope.$broadcast('scroll.refreshComplete');
  // }
})

// .controller('CatsDetailCtrl', function($scope, $stateParams, Cats) {
//   $scope.cat = Cats.get($stateParams.catId);
// })
.controller('CatCtrl', function($scope, $stateParams) {
  //$scope.cat = Cats.get($stateParams.catId);
})
.controller('CartCtrl', function($scope,$rootScope, PostService) {

    PostService.getRecentPosts()
    .then(function(data){
      $scope.posts = data;
      console.log($scope.posts)
    })
  //console.log(posts)
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('tabDemo',function($scope,$window){  //我不想说了。。只要看过这一列系demo的都应该明白了
        $scope.tabs = [
            {title : 'jquery' ,content : '我是jquery内容'},
            {title : 'angular' ,content : '我是angular内容'}
        ];
    })

;
