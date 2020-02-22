barba.init({
  transitions: [{
    name: 'legacy-example',
    sync:true,
    leave: function(data) {
      var done = this.async();
      $(data.current.container).css('margin-left',0).transition({marginLeft: '-100vw'}, 700, done)
    },
    enter: function(data) {
      var done = this.async();
      if (data.next.url.path == '/') {
        $('header').removeClass('closed')
      } else {$('header').addClass('closed')}
      $(data.next.container).css('opacity',0).transition({opacity:1}, 700, done)
    }
  }]
});