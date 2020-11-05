$(window).on('load', function() {
    setTimeout(removeLoader, 2000); //wait for page load PLUS two seconds.
});
function removeLoader(){
$( "#loading" ).fadeOut(1000, function() { // fadeOut complete. Remove the loading div
	$( "#loading" )
.remove(); //makes page more lightweight 
});  
}