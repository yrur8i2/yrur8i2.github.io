$(document).ready(function(){

    $( "#payment_success" ).show();
    $( "#payment_pending" ).hide();
    $( "#payment_remaining" ).hide();

    $("#yug_btn_success").click(function(){
        //alert("The paragraph was clicked.");
        $( "#payment_success" ).show();
        $( "#payment_pending" ).hide();
        $( "#payment_remaining" ).hide();

    });

    $("#yug_btn_pending").click(function(){
        //alert("The paragraph was clicked.");
        $( "#payment_success" ).hide();
        $( "#payment_pending" ).show();
        $( "#payment_remaining" ).hide();

    });

    $("#yug_btn_remaining").click(function(){
        //alert("The paragraph was clicked.");
        $( "#payment_success" ).hide();
        $( "#payment_pending" ).hide();
        $( "#payment_remaining" ).show();

    });



});
