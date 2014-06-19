$(document).ready(function () {

  $("input:radio").click(function() {

    var selected = $(this).val();

    $( "div.projects" ).children( ".row" ).each( function() {

      if($(this).data('id') === selected) {
        $( this ).removeClass('hidden');
      } else {
        $( this ).addClass('hidden');
      };

    });

  });

});
