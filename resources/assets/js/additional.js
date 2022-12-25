$(document).ready(function() {
	$('.submit-form').click(
		function(){
			$(this).parents('form').submit();
		}
	); 
})