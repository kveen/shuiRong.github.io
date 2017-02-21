function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
function install() {
    if (aType == 'ios') {
        if (!isMobileRequest) {
            alert(askBrowserAlert);
            return;
        } 
    }

    if (aType == 'ios' && browseType == 'android') {
        alert(forIosAlert);
        return;
    } else if (aType == 'android' && browseType == 'ios') {
//        alert(forAndroidAlert);
//        return;
    }

//    if ( isWechatRequest && aType == 'android') {
    if ( isWechatRequest) {
        alert(reminderWechatContent);
        return;
    }

    if (isQQRequest && aType == 'android') {
        alert(reminderQQContent);
        return ;
    }

    //  url = "/app/install/" + aKey;
    url = "xlgl.apk";
    window.location.href = url;
}

function saveData() {
    $.ajax({
        type : "POST",
        data : $('#form').serialize(),
        dataType: 'json',
        beforeSend: function( xhr ) {
            if (isMobileRequest) {
                $('#submitButton').text( submiting ).attr('disabled', 'disabled');
            } else {
                $('#submitButton').text( submiting ).addClass('btn-u-default').attr('disabled', 'disabled');
            }
        },
        success : function(result, textStatus, jqXHR) {
            code = result.code;
            if (code == 0) {
                window.location.reload();
            } else {
                alert(result.message);
                $('#submitButton').text( submitText ).removeClass('btn-u-default').removeAttr('disabled');
            }
        },
        error : function(jqXHR, textStatus, errorThrown) {
            $('#submitButton').text( submitText ).removeClass('btn-u-default').removeAttr('disabled');
        }
    });
}
    
function initView() {
    $('.history_row').click(function() {
       appkey = $(this).attr('appkey');
       window.location.href = '/' + appkey;
    });

    $('.history_show_more').click(function() {
       $('.history_row').show();
       $(this).hide();
    });
}


