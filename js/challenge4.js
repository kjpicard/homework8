$('#ch4form').submit(function(){
    console.log('Running');
    var validInput = true;
    var name = $('#fullname');
    var addr = $('#streetaddr');
    
    console.log(name);
    console.log(addr);
    
    if ($(name).val() == ''){
        $('#nameerrormsg').css('display', 'block')
        validInput = false;
    }
    else{
        $('#nameerrormsg').css('display', 'none');
    }
    if ($(addr).val() == ''){
        $('#addrerrormsg').css('display', 'block');
        validInput = false;
    }
    else{
        $('#addrerrormsg').css('display', 'none');
    }
    return validInput;
})