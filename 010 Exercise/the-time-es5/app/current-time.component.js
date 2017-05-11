(function(app) {
  var Component = ng.core.Component;
  var TimeService = app.TimeService;

  app.CurrentTimeComponent = Component({
    selector: 'current-time',
    template: '<strong>{{time}}</strong>'
  })
  .Class({
    constructor: [TimeService, function TimeComponent(timeService) {
      var self = this;
      timeService.subscribe(function(time) {
        self.time = time.toLocaleTimeString();
      });
    }]
  });

})(window.app || (window.app = {}));
