$(document).ready(function() {

  $('#email-submit').on('click', function(event) {
    event.preventDefault();

    let $email = $("#email-input").val();
    let $wage = $('#wage-input').val();
    let $hours = $('#hours-input').val();

    if (!$email){
      $('.email-alert').slideDown(500);
    }

    if (!$wage){
      $('.wage-alert').slideDown(500);
    }

    if (!$hours){
      $('.hours-alert').slideDown(500);
    }

    if ($email && ($wage && $hours)) {

      $('.email-alert').slideUp(500);

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
      };

      $.ajax({
        method: 'POST',
        url: '/',
        data: {
          email: $email,
          wage: $wage,
          hours: $hours,
          results: results
        }
      });

      $(".modal-dialog").fadeToggle("slow", "linear")
      .delay(500).fadeToggle("slow", "linear");
      $('#email-input').val('');
    }
  });

});
