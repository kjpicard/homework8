$('#useBilling').click(function(){
	console.log('Running');
	if (this.checked){
		console.log('selected');
		$('#home').val($('#billing').val());
		$('#home').prop('disabled', true);
	}
	else{
		console.log('unselected');
		$('#home').val('');
		$('#home').prop('disabled', false);
	}
})