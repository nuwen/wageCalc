function validWage(wage){
  if(wage <= 0){
    return false;
  }
  if (wage > 40){
    return false;
  }
  if(!wage){
    return false;
  }
  return true;
}

function validHours(hours){
  if(hours <= 0){
    return false;
  }
  if (hours > 80){
    return false;
  }
  if(!hours){
    return false;
  }
  return true;
}

$(document).ready(function() {



  $('#calculate-submit').on('click', function(event) {
    event.preventDefault();

    let $wage = $('#wage-input').val();
    let $hours = $('#hours-input').val();
    let $weeklyEarnings = $wage * $hours;
    let $monthlyEarnings = $weeklyEarnings * 4;
    let $yearlyEarnings = $weeklyEarnings * 52;

    let $weekRow = $(".weeklyTR");
    let $monthRow = $(".monthlyTR");
    let $yearRow = $(".yearlyTR");

    if (!validWage($wage)) {
      $('.wage-alert').slideDown(500);
    } else {
      $('.wage-alert').slideUp(500);
    }
    if (!validHours($hours)) {
      $('.hours-alert').slideDown(500);
    } else {
      $('.hours-alert').slideUp(500);
    }

    if (validWage($wage) && validHours($hours)) {
      $('.wage-alert').slideUp(500);
      $('.hours-alert').slideUp(500);


      $weekRow.find(".hours").text($hours);
      $monthRow.find(".hours").text($hours * 4);
      $yearRow.find(".hours").text($hours * 52);

      $weekRow.find(".earnings").text(`$${$weeklyEarnings.toFixed(2)}`);
      $monthRow.find(".earnings").text(`$${$monthlyEarnings.toFixed(2)}`);
      $yearRow.find(".earnings").text(`$${$yearlyEarnings.toFixed(2)}`);
    }
  });

  $('div.alert').on('click', function(){
    $(this).slideToggle(500);
  });

});
