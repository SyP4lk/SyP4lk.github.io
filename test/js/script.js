(function($) {
    $(function() {
      
      $('ul.tabs__caption').on('click', 'li:not(.nav-item_actives)', function() {
        $(this)
          .addClass('nav-item_actives').siblings().removeClass('nav-item_actives')
          .closest('div.container').find('div.tabs__content').removeClass('actives').eq($(this).index()).addClass('actives');
      });
      
    });
    })(jQuery);