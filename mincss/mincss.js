$(document).ready(function () {


    //Right now, I am only going to clear out the user text area when the 
    //default text is present.  This may not be preferred in the future.
    //I'm going to try it out for now and see what happens.
    var defaultString = 'Enter your CSS code here.';
    $('#userInput').val(defaultString);


    $('#userInput').click(function () {
        if ($(this).val() == defaultString) {
            $(this).val('');
        }
    });

    $('#userInput').keyup(function () {
        var result = minifyCSS($(this).val());
        $('#result').html(result);
    });

    function minifyCSS(css) {
        var result = css;
        result = removeLineComments(result);
        result = removeTabs(result);
        result = removeExtraSpaces(result);
        result = removeLineBreaks(result);
        result = removeBlockComments(result);
        return result;
    }

    function removeLineComments(css) {
        var result = css;
        result = result.replace(/\/\/(.*?)/g, '');
        return result;
    }

    function removeTabs(css) {
        var result = css;
        result = result.replace(/\t+/g, ' ');
        return result;
    }

    function removeExtraSpaces(css) {
        var result = css;
        result = result.replace(/\s{2,}/g, ' ');
        return result;
    }

    function removeLineBreaks(css) {
        var result = css;
        result = result.replace(/\n/g, '');
        return result;
    }

    function removeBlockComments(css) {
        var result = css;
        result = result.replace(/\/\*(.*?)\*\//g, '');
        return result;
    }

});