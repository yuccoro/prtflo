window.contact = window.contact || {};

window.contact.checkValidation = function(){
    if(!$('input[id="name"]').val() || !$('input[id="email"]').val() || !$('textarea[id="message"]').val()){
        $('input[id="submit"]').attr('disabled', 'disabled');
        return false;
    }

    $('input[id="submit"]').removeAttr('disabled');
    return true;
}

window.contact.send = function(){
    var name = $('input[id="name"]').val() 
    var email = $('input[id="email"]').val() 
    var message = $('textarea[id="message"]').val()
    var today = new Date();
    var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    data = {
        date: date,
        name: name,
        email: email,
        message: message,
    }
    window.contact.ajax(data);
}

window.contact.ajax = function(data){
    var url = 'https://script.google.com/macros/s/AKfycbyizm4ijFa2Gftk8FBmecEoGww0TVcxlhlfeCKxzjQ133I96HAMXzMtbS81Ct9Z_t2s/exec';
    $.ajax({
        url: url,
        type:'POST',
        data: data
    }).done(function(res){
        if(res.response != "success") {
            console.log(JSON.stringify(res.error));
            alert('メッセージの送信に失敗しました。');
            return;
          }
          alert('メッセージを送信しました。ご入力いただいたメールアドレス宛にご返信いたします。');
        }).fail(function(){
          alert('メッセージの送信に失敗しました。'); 
    }).always(function(){
        location.href="./index.html";
    })
}