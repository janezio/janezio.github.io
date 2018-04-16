$(document).ready(function(){
    $("#removeimage").click(function(){
        $("#toremove").hide();
        $("#tocenter").css({'margin':'0 auto','width':'40%'})
    });


    $("#appendimage").click(function(){
        $("#toremove").show();
        $("#tocenter").css({'margin':'auto auto','width':'50%', 'margin':'0'})

    });

});
