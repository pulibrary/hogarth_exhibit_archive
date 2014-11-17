// helper javascript functions
(function ($) {
  $(document).ready(function() {
    $('#full-checklist').hide();
    $('#show-checklist').click(function() {
      // show checklist and toggle message to "Hide All"
      $('#full-checklist').toggle( function() {
        var current_message = $('#show-checklist').text();
        $('#show-checklist').text(
          current_message == "See More" ? "Hide All" : "See More");
       });
     });
  });  
}(jQuery));
