/* To show song list for each album */
$(document).ready(function(){
$(".album-detail1").show();
$(".album-detail2").hide();
$(".album-detail3").hide();


$(".album-cover1").click(function(){
    $(".album-detail1").fadeIn();
    $(".album-detail2").hide();
    $(".album-detail3").hide();
});

$(".album-cover2").click(function(){
    $(".album-detail2").fadeIn();
    $(".album-detail1").hide();
    $(".album-detail3").hide();
});

$(".album-cover3").click(function(){
    $(".album-detail3").fadeIn();
    $(".album-detail1").hide();
    $(".album-detail2").hide();
});
});

/* Video mute icon */

$("video").prop('muted', true);

  $(".mute-video").click( function (){
    if( $("video").prop('muted') ) {
          $("video").prop('muted', false);
    } else {
      $("video").prop('muted', true);
    }
  });
