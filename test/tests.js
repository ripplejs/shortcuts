var assert = require('assert');
var ripple = require('ripple');
var trigger = require('trigger-event');
var keys = require('shortcuts');

describe('shortcuts', function () {

  before(function () {
    this.View = ripple('<div></div>');
  });

  it('should create simple shortcuts', function (done) {
    var View = ripple('<input type="text" name="foo" on-enter="{{this.done}}"/>');
    View.use(keys('enter'));
    View.prototype.done = function(){
      done();
    };
    var view = new View();
    view.appendTo('body');
    trigger(view.el, 'keydown', { key: 'enter' });
    view.destroy();
  });

  it('should cache plugin functions', function () {
    assert(keys('enter') === keys('enter', 'enter'));
  });

});