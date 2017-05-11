(function(app) {
  var Component = ng.core.Component;

  app.AppComponent = Component({
    selector: 'time-app',
    template:
      '<h1>The Time</h1>' +
      '<p>It\'s <current-time></current-time> and all is well.</p>'
  })
  .Class({
    constructor: function AppComponent() { }
  });

})(window.app || (window.app = {}));
