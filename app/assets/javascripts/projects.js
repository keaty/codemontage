$(document).ready(function () {

  $("input:radio").click(function() {

    var selectedTech = $('#technology_filter input:checked').val();
    var selectedCause = $('#causes_filter input:checked').val();
    var selectedProjectIds = [];

    for( var i = 0; i < projects_json.length; i++) {
      var hasTech = matchFilter(i, selectedTech, 'technologies');
      var hasCause = matchFilter(i, selectedCause, 'causes');

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

  function matchFilter (i, selected, filter) {
    var match = false;
    for( var j = 0; j < projects_json[i][filter].length; j++) {
      if( projects_json[i][filter][j].name === selected || selected === 'All' ) { match = true };
    };
    return match;
  };
});
