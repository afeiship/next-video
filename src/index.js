(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var defaults = { element: null };

  var NxVideo = nx.declare('nx.Video', {
    properties: {
      playing: function () {
        var el = this.element;
        return !!(el.currentTime > 0 && !el.paused && !el.ended && el.readyState > 2);
      }
    },
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, defaults, inOptions);
        this.element = this.options.element;
      },
      'play,pause,stop': function (inName) {
        return function () {
          var el = this.element;
          return el[inName].apply(el, arguments);
        };
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxVideo;
  }
})();
