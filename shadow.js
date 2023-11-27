$(document).ready(function() {

    //Get the position of a span around a H1
    var positionBoth = $("#innerSpan").position();
    var textPosX = positionBoth.left;
    var textPosY = positionBoth.top;
  
    //Get the width of the document
    var docWidth = $(document).width();
    var docHeight = $(document).height();
    //Get the width of text by getting the width of the span around the text
    var spanH1Width = $("#innerSpan").width();
    var spanH1Height = $("#innerSpan").height();
  
    var horizontalCenter = textPosX + (spanH1Width / 2); //The center position of the text, which is also the max distance away to the left of the text
    var verticalCenter = textPosY + (spanH1Height / 2);
  
    var txtShadow1DistanceY = 1,
      txtShadow2DistanceY = 2,
      txtShadow3DistanceY = 3,
      txtShadow4DistanceY = 4,
      txtShadow5DistanceY = 5,
      txtShadow6DistanceY = 6;
  
    var txtShadow1DistanceX = 1,
      txtShadow2DistanceX = 2,
      txtShadow3DistanceX = 3,
      txtShadow4DistanceX = 4,
      txtShadow5DistanceX = 5,
      txtShadow6DistanceX = 6;
  
    var percentHeight = 0,
      percentWidth = 0;
  
    //Try to change the text-shadow
  
    //Write out the results
    $("#spanWidth").text("span width: " + spanH1Width);
    $("#docHeight").text("document height: " + docHeight);
    $("#docWidth").text("document width: " + docWidth);
  
    /*
    (nuvarandePos600/bredden600)*100 = 100
    (nuvarandePos300/bredden600)*100 = 50
    Ett annat alternativ att räkna ut det på är 600/6 = 100 (Dvs nuvarande position/(bredden/100)
    */
  
    $("#two").html("X pos: " + textPosX + "<br>" + "Y pos: " + textPosY);
  
    $(document).mousemove(function(event) {
  
      //This is used to calculate the mouse Height % of the screen, which controls the 100% position of the gradient.
      percentHeight = (event.pageY / docHeight) * 100;
      percentWidth = (event.pageX / docWidth) * 100;
  
      txtShadow1DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 1); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow1DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 1); //(documentHeight/2)/thenumber of the shade+1?
  
      txtShadow2DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 2); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow2DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 2); //(documentHeight/2)/thenumber of the shade+1?
  
      txtShadow3DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 3); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow3DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 3); //(documentHeight/2)/thenumber of the shade+1?
  
      txtShadow4DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 4); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow4DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 4); //(documentHeight/2)/thenumber of the shade+1?
  
      txtShadow5DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 5); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow5DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 5); //(documentHeight/2)/thenumber of the shade+1?
  
      txtShadow6DistanceY = (verticalCenter - event.pageY) / ((docHeight / 2) / 6); //(documentHeight/2)/thenumber of the shade+1?
      txtShadow6DistanceX = (horizontalCenter - event.pageX) / ((docWidth / 2) / 6); //(documentHeight/2)/thenumber of the shade+1?
  
      $('#innerSpan').css({
        "text-shadow": "" + txtShadow1DistanceX + "px " + txtShadow1DistanceY + "px 1px rgba(5,57,91,1), " + txtShadow2DistanceX + "px " + txtShadow2DistanceY + "px 2px rgba(5,57,91,1), " + txtShadow3DistanceX + "px " + txtShadow3DistanceY + "px 3px rgba(5,57,91,1), " + txtShadow4DistanceX + "px " + txtShadow4DistanceY + "px 4px rgba(5,57,91,1), " + txtShadow6DistanceX + "px " + txtShadow5DistanceY + "px 5px rgba(5,57,91,1),    " + txtShadow6DistanceX + "px " + txtShadow6DistanceY + "px 6px rgba(5,57,91,1)"
  
      });
  
      $("#main").css({
        background: "-webkit-radial-gradient(" + percentWidth + "% " + percentHeight + "%, circle, rgba(175,225,255,1) 0, rgba(43,116,165,1) 27%, rgba(5,57,91,1) 100%)"
      });
  
      $("h1").css({
        color: "-webkit-radial-gradient(" + percentWidth + "% " + percentHeight + "%, circle, rgba(255,255,255,1) 0, rgba(43,116,165,1) 57%, rgba(5,57,91,1) 100%)"
      });
  
      $("#one").text((horizontalCenter - event.pageX) + " " + (verticalCenter - event.pageY));
    });
  
  });