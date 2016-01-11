// Ionic Starter App
angular.module('underscore', [])
.factory('_', function() {
  return window._; // assumes underscore has already been loaded on the page
});
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic', 
  'starter.controllers', 
  'starter.services',
  'starter.config',
  'starter.directives',
  'starter.factories',
  'underscore'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    document.addEventListener("deviceready", function () {

                //var type = $cordovaNetwork.getNetwork()
                //
                //var isOnline = $cordovaNetwork.isOnline()
                //
                //var isOffline = $cordovaNetwork.isOffline()

                // listen for Online event
                $rootScope.$on('$cordovaNetwork:online', function (event, networkState) {
                    var onlineState = networkState;
                    console.log("device online...");
                })

                // listen for Offline event
                $rootScope.$on('$cordovaNetwork:offline', function (event, networkState) {
                    var offlineState = networkState;
                    //提醒用户的网络异常
                    $ionicLoading.show({
                        template: '网络异常，不能连接到服务器！'
                    });
                })

            }, false);
  });
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider,$provide,$httpProvider){
        //解决android下tabs置顶
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');

        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');

        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');        

        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');

        $ionicConfigProvider.navBar.alignTitle('center');
        $ionicConfigProvider.backButton.icon('ion-chevron-left');
        $ionicConfigProvider.backButton.text('');
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })
  .state('producers', {
      url: '/producers',
      templateUrl: 'templates/app/xx.html',
      controller: 'productlistsCtrl'
  })
  .state('producer', {
      url: '/producer/:ecid',
      templateUrl: 'templates/app/xx2.html',
      controller: 'ProducerCtrl'
  })
  .state('tab.cats', {
      url: '/cats',
      views: {
        'tab-cats': {
          templateUrl: 'templates/tab-cats.html',
          controller: 'CatsCtrl'
        }
      }
    })
    // .state('tab.cats.productlists', {
    //   url: '/productlists/:ecid',
    //   views: {
    //     'tab-productlists': {
    //     templateUrl: "templates/app/xx.html",
    //     controller: 'productlistsCtrl'
    //     }
    //   }
    // })
  // .state('tab.list', {
  //     url: '/list/:listID',
  //     views: {
  //       'tab-list': {
  //         templateUrl: 'templates/tab-cat.html',
  //         controller: 'CatCtrl'
  //       }
  //     }
  //   })
//   .state('catlist', {
//         url: '/list/:listID',
// //      cache: false,
//         templateUrl: 'templates/tab-cat.html',
//         controller: 'CatCtrl'
//       })
  // .state('tab.cats-detail', {
  //     url: '/cats/:catsId',
  //     views: {
  //       'tab-cats': {
  //         templateUrl: 'templates/cats-detail.html',
  //         controller: 'CatCtrl'
  //       }
  //     }
  //   })
  .state('tab.cart', {
    url: '/cart',
    views: {
      'tab-cart': {
        templateUrl: 'templates/tab-cart.html',
        controller: 'CartCtrl'
      }
    }
  })
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });
    // register the interceptor as a service

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
