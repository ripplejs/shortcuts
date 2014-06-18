var dispatcher = require('k');
var cache = {};

function keys(name, keys) {
  if (keys == null) keys = name;

  if (cache[name] && cache[name][keys]) {
    return cache[name][keys];
  }

  function plugin(View) {
    View.directive('on-' + name, {
      bind: function(el) {
        this.k = dispatcher(el);
        this.k.ignore = false;
      },
      update: function(fn, el, view) {
        this.k(keys, fn.bind(view));
      },
      unbind: function() {
        this.k.destroy();
      }
    });
  }

  if (!cache[name]) cache[name] = {};
  cache[name][keys] = plugin;
  return plugin;
};

module.exports = keys;