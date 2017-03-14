(function () {

  angular
    .module('endtimes')
    .controller('contactCtrl', contactCtrl)
    .directive('contact', contact);
    
    function contactCtrl($scope) {
      // http://stackoverflow.com/questions/22962468/angularjs-display-current-date
      $scope.date = new Date();
    }

  function contact () {
    return {
      restrict: 'EA',
      scope: {
        date: '='
      },
      templateUrl: '/common/directives/contact/contact.template.html'
    };
  }

})();
