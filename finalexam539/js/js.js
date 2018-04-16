$(document).ready(function(){
    $("#removeimage").click(function(){
        $("#toremove").hide();
        $("#tocenter").css({'margin':'auto auto','width':'50%'})

    });


    $("#appendimage").click(function(){
        $("#toremove").show();
        $("#tocenter").css({'margin':'auto auto','height':'auto'})


    });

});
