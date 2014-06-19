$(document).ready(function () {

  $("input:radio").click(function() {

    var selectedLanguage = $(this).val();
    var filteredProjectIds = [];

    for( var i = 0; i < projects_json.length; i++) {
      var hasLanguage = false;

      for( var j = 0; j < projects_json[i].technologies.length; j++) {
        if( projects_json[i].technologies[j].name === selectedLanguage ) { hasLanguage = true };
      };

      if (hasLanguage === true || selectedLanguage === "All") { filteredProjectIds.push(projects_json[i].id) };
    };

    $( "div.projects" ).children( ".row" ).each( function() {
      if (filteredProjectIds.indexOf($(this).data('id')) !== -1) {
        $( this ).removeClass('hidden');
      } else {
        $( this ).addClass('hidden');
      };
    });

  });

});
