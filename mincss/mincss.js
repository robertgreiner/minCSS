$(document).ready(function () {

    var defaultString = 'Enter your CSS code here.';
    $('#userInput').val(defaultString);

    $('#userInput').click(function () {
        if ($(this).val() == defaultString) {
            $(this).val('');
        }
    });

});