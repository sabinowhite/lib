$(document).ready(function () {

    $(".redirectApp").each(function() {



        var elementType = $(this).prev().prop('nodeName');
        alert(elementType);

    });

});