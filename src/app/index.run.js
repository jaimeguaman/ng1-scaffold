(function () {
  'use strict';
  angular
    .module('exampleApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($rootScope) {

    var stateChangeStart  = $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {

    });

    var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams, options) {

    });

  }

})();
