
$(document).ready(function () {
  $('#calculate-submit').on('click', function(event) {
    event.preventDefault();


    let $wage = $('#wage-input').val();
    let $hours = $('#hours-input').val();

    if(!$wage){
      alert("Please Enter a valid Wage");
    }
    if(!$hours){
      alert("Please Enter a valid number of Hours");
    }

    if( $wage && $hours){
      let $weeklyEarnings = $wage * $hours;
      let $monthlyEarnings = $weeklyEarnings * 4;
      let $yearlyEarnings = $weeklyEarnings * 52;

      let $weekRow = $(".weeklyTR");
      let $monthRow = $(".monthlyTR");
      let $yearRow = $(".yearlyTR");

      $weekRow.find(".hours").text($hours);
      $monthRow.find(".hours").text($hours * 4);
      $yearRow.find(".hours").text($hours * 52);

      $weekRow.find(".earnings").text(`$${$weeklyEarnings.toFixed(2)}`);
      $monthRow.find(".earnings").text(`$${$monthlyEarnings.toFixed(2)}`);
      $yearRow.find(".earnings").text(`$${$yearlyEarnings.toFixed(2)}`);
    }
  });

  $('#email-submit').on('click', function(event){
    event.preventDefault();
    alert($('#email-input').val());
    $('#email-input').val('');
    // alert('Clicked!');
  });

});
