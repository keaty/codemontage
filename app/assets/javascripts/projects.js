$(document).ready(function () {

  $("input:radio").click(function() {

    var selectedTech = $('#technology_filter input:checked').val();
    var selectedCause = $('#causes_filter input:checked').val();
    var selectedProjectIds = [];

    for( var i = 0; i < projects_json.length; i++) {
      var hasTech = false;
      var hasCause = false;

      if (selectedTech === "All") { hasTech = true };
      if (selectedCause === "All") { hasCause = true };

      for( var j = 0; j < projects_json[i].technologies.length; j++) {
        if( projects_json[i].technologies[j].name === selectedTech ) { hasTech = true };
      };

      for( var k = 0; k < projects_json[i].causes.length; k++) {
        if( projects_json[i].causes[k].name === selectedCause ) { hasCause = true };
      };

      if (hasTech === true && hasCause === true) { selectedProjectIds.push(projects_json[i].id) };
    };

    $( "div.projects" ).children( ".row" ).each( function() {
      if (selectedProjectIds.indexOf($(this).data('id')) !== -1) {
        $( this ).removeClass('hidden');
      } else {
        $( this ).addClass('hidden');
      };

    });

  });

});
