(function(app) {
  var Class = ng.core.Class;

  app.TimeService = Class({

    constructor: function TimeService() { },

    subscribe: function(callback) {
      callback(new Date());
      setInterval(function() {
        callback(new Date());
      }, 1000);
    }

  });

})(window.app || (window.app = {}));
