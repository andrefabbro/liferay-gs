(function(Liferay, angular) {

  var portletName = "com_rafoli_liferay_bundle_angular_example_multiple_views_web_portlet_MultipleViewsPortlet";
	
  angular.portlet.add(portletName,
    function(portletId) {

      var mymodule = angular.module(portletId + '.submodule', ['ui.router', 'sharedService']);

      mymodule
        .config(function ($stateProvider) {
          
          console.log(portletId);

          $stateProvider.   
              state('main', {
                  url: '/',
                  templateUrl: '/o/multiple-views-web/partial/dashboard.tpl.html',
                  controller: 'MainCtrl'
              }).
              state(portletId + 'dashboard', {
                  url: '/'+ portletId + 'dashboard',
                  views: {
                    'projects': {
                      templateUrl: '/o/multiple-views-web/partial/dashboard.tpl.html'
                    }
                  },
              });        
        })
        .controller('MainCtrl', function($scope, SharedService) {
          $scope.portletId = portletId;
          $scope.sharedVar = function (value) {
            if (angular.isDefined(value)) {
              SharedService.change('sharedVar', value)
            } else {        
              return SharedService.get().sharedVar
            }
          }
        });   
        

      return [ mymodule.name ];
    });  

})(Liferay, angular);        