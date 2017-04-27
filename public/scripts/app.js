
$(document).ready(function () {
  $('#calculate-submit').on('click', function(event) {
    event.preventDefault();

    let $wage = $('#wage-input').val();
    let $hours = $('#hours-input').val();

    let $weeklyEarnings = $wage * $hours;
    let $monthlyEarnings = $weeklyEarnings * 4;
    let $yearlyEarnings = $weeklyEarnings * 52;

    let $weekRow = $(".weeklyTR")
    let $monthRow = $(".monthlyTR")
    let $yearRow = $(".yearlyTR")

    $weekRow.find(".hours").text($hours);
    $monthRow.find(".hours").text($hours * 4);
    $yearRow.find(".hours").text($hours * 52);

    $weekRow.find(".earnings").text($weeklyEarnings);
    $monthRow.find(".earnings").text($monthlyEarnings);
    $yearRow.find(".earnings").text($yearlyEarnings);


    alert(`clicked! ${$wage} ${$hours} ${$weeklyEarnings}`);
  });
});
