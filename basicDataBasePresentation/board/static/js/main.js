// csrf token
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

var csrftoken = getCookie('csrftoken');


function myAjax() {
    let value = $("#value").val();
    $.ajax({
            type: 'post',
            url: 'ajax',

            data: {
                'value': value,
                'csrfmiddlewaretoken': csrftoken,
            },
            dataType: 'JSON',
            success: function (data) {
                alert(data.returnValue );
            }
        }
    );
}
