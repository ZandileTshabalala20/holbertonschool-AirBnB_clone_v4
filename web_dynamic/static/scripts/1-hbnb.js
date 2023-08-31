$(document).ready(function () {
    $("input[type=checkbox]").change(function () {
    if ($(this).prop("checked")) {
        // KEY VALUE
        idAmenity[$(this).attr("data-id")] = $(this).attr("data-name");
        // console.log("aaaayuda", idAmenity)
      } else {
        
        delete idAmenity[$(this).attr('data-id')];
      }
        
      if (idAmenity.length === 0)
          $('div.amenities h4').html("&nbsp;");
        
      else {
        $("div.amenities h4").text(Object.values(idAmenity).join(', '));
      }
    });
  });
