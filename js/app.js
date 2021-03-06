angular.module('storeApp', [])

  .controller('orderController', function($scope) {

  $scope.options = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
  ];
 
  $scope.litGripLimited = $scope.options[0];

  $scope.checkout = function() {  //when user clicks checkout trigger the paypal form
    var target = document.getElementById("paypal-submit");
    target.click();
  }

});

/*
$(document).ready(function() {
  var contactForm = $('#contact-form');      //get the form object

  var formMessages = $('#form-messages');    //get the form response message

  // Set up an event listener for the contact form.
  $(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

    // Serialize the form data.
    var formData = $(form).serialize();

    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: $(form).attr('action'),
        data: formData
    })
      .done(function(response) {
        // Make sure that the formMessages div has the 'success' class.
        $(formMessages).removeClass('error');
        $(formMessages).addClass('success');

        // Set the message text.
        $(formMessages).text(response);

        // Clear the form.
        $('#contact-name').val('');
        $('#contact-mail').val('');
        $('#contact-message').val('');
    })
      .fail(function(data) {
        // Make sure that the formMessages div has the 'error' class.
        $(formMessages).removeClass('success');
        $(formMessages).addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $(formMessages).text(data.responseText);
        } else {
          $(formMessages).text('Oops! An error occured and your message could not be sent.');
        }
    });

  });
  
}

*/