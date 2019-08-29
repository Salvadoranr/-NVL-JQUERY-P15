jQuery(document).ready(function(){
    $( "#image_hide" ).hide();
    $("#button").on("click",changePhoto)


function changePhoto(){
    if($("#image_hide:first")[0].style[0]){
        $( "img" ).toggle( "fast" );

    }else{
        $( "img" ).toggle( 2000 );
    }
}
});