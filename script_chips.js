function myFunction() {
  var str = $( "p.first" ).text();
  var res = str.charAt(0);
  var rest = str.substring(1);

  $( "p.first" ).text(rest);
  $( "<span class='firstLetter'>" + res +"</span>" ).prependTo( ".first" );

}

$( document ).ready(function() {
    myFunction();
    console.log( "ready!" );
});



 {
  var str = $( "p.second" ).text();
  var res = str.charAt(0);
  var rest = str.substring(1);

  $( "p.secondt" ).text(rest);
  $( "<span class='firstLetter'>" + res +"</span>" ).prependTo( ".second" );

}

$( document ).ready(function() {
    myFunction();
    console.log( "ready!" );
});
