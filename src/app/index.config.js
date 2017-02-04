(function () {
  'use strict';

  angular
    .module('exampleApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider) {
    $logProvider.debugEnabled(true);
  }


})();
