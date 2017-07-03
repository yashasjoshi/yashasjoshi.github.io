var request;

$("#foo").submit(function(event){

    if (request) {
        request.abort();
    }

    var $form = $(this);

    var $inputs = $form.find("input, select, button, textarea");

    var serializedData = $form.serialize();

    $inputs.prop("disabled", true);

    request = $.ajax({
        url: "https://script.google.com/macros/s/AKfycby7kN_t86Ep_Sv3C9bxe4yxyvyPG9jDJQeVZM4lxBnsaXOHpVQc/exec",
        type: "post",
        data: serializedData
    });

    request.done(function (response, textStatus, jqXHR){
        console.log("Yesssss, it worked!");
        console.log(response);
        console.log(textStatus);
        console.log(jqXHR);
    });

    request.fail(function (jqXHR, textStatus, errorThrown){
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });

    request.always(function () {
        $inputs.prop("disabled", false);
    });

    event.preventDefault();
});