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

    if (!$wage || (wage > 40)) {
      $('.wage-alert').slideDown(500);
    }
    if (!$hours || (hours > 80)) {
      $('.hours-alert').slideDown(500);
    }

    if ($wage && $hours) {

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
