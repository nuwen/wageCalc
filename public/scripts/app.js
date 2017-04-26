
$(document).ready(function () {
  $('#calculate-submit').on('click', function(event) {
    event.preventDefault();

    let wage = $('#wage-input').val();
    let hours = $('#hours-input').val();
    alert(`clicked! ${wage} ${hours}`);
  });
});
