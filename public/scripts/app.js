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

    if (!$wage) {
      $('.wage-alert').slideToggle(500);
      // alert("Please Enter a valid Wage");
    }
    if (!$hours) {
      $('.hours-alert').slideToggle(500);
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

  $('#email-submit').on('click', function(event) {
    event.preventDefault();

    let $email = $("#email-input").val();
    let $wage = $('#wage-input').val();
    let $hours = $('#hours-input').val();

    if (!$email){
      $('.email-alert').slideToggle(500);
    }

    if (!$wage || !$hours){
      // alert('Fill in your information first!');
    }

    if ($email && ($wage && $hours)) {

      let $weekRow = $(".weeklyTR");
      let $monthRow = $(".monthlyTR");
      let $yearRow = $(".yearlyTR");

      let $weekHours = $weekRow.find(".hours").text();
      let $monthlyHours = $monthRow.find(".hours").text();
      let $yearlyHours = $yearRow.find(".hours").text();

      let $weeklyEarnings = $weekRow.find(".earnings").text();
      let $monthlyEarnings = $monthRow.find(".earnings").text();
      let $yearlyEarnings = $yearRow.find(".earnings").text();

      let results = {
        week: {
          hours: $weekHours,
          earnings: $weeklyEarnings
        },
        month: {
          hours: $monthlyHours,
          earnings: $monthlyEarnings
        },
        year: {
          hours: $yearlyHours,
          earnings: $yearlyEarnings
        }
      }

      $.ajax({
        method: 'POST',
        url: '/',
        data: {
          email: $email,
          results: results
        }
      })
      alert($('#email-input').val());
      $('#email-input').val('');
    }
  });

});
