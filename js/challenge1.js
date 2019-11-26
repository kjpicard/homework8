$('#subscribe').click(function(){
	console.log('Running')
	if (this.checked){
		console.log('selected');
		$('#emailField').css('display', 'block');
	}
	else{
		console.log('Not selected');
		$('#emailField').css('display', 'none');
	}
});