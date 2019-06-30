(function() {
    $.ajax({
        url:"header.html",
        success: function(result){
            $(result).replaceAll("header");
        }
    })
})()