(function() {
  'use strict';

  angular
    .module('exampleApp')
    .factory('detectDevice', constructor);

  /** @ngInject */
  function constructor($window){
    function _detectDevice(callback){
      var _windowWidth = $window.innerWidth;
      var device = 'desktop';

      if(_windowWidth <= 768){
        device = 'mobile'
      }

      callback && callback(device);
    }

    return {
      get: _detectDevice
    }
  }
})();
