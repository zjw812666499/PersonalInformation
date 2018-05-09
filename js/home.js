
$().ready(function () {
   
    $("#messageMe").validate({
        rules: {
            username: {
                required: true,
                minlength: 2
            },
            message: {
                required: true,
                minlength: 2,
                maxlength: 60

            }

        },
        messages: {

            username: {
                required: "昵称不能为空",
                minlength: "昵称至少两个字母"
            },
            message: {
                required: "留言不能为空",
                minlength: "留言不能低于两个字"

            }

        }
    });
});
var list = [];
$(document).ready(function () {
    $("#send").click(function () {
        username = $("#username").val();
        message = $("#message").val();
        if (username =="" || message =="") {
            alert("用户名和留言不能为空");
            return;
        }

        var params = getParams();
        console.log(params);
       
     
        list.push(params)
        console.log(list);
        if (list.length >= 0) {
            $("#contectme").modal("hide");
            setMessageToPage(list);
        } else if (result.state == 2) {
            alert(result.message);
        }
    });

    $(".pagination").click(function () {
    
        alert("待开发")
    });
});

function getParams() {
    var params = {
        "username": $("#username").val(),
        "message": $("#message").val()
        
    }
    return params;
}



function setMessageToPage(list) {
    var body = $("#messageID");
    console.log(body);
    console.log(list);
   
    for (var i in list) {
        console.log(list[i].username);
        console.log(list[i].message);
        var div = $('<div class="media well"><div class="media-left"><a href="#"><img class="media-object" src="images/' + getRandom(1) + '.jpg" style="width:64px;height:64px;border-radius:' + getRandom(2) + '%;" alt=""></a></div><div class="media-body"><h4 class="media-heading">' + list[i].username + '</h4>' + list[i].message + '</div></div>');
        body.append(div);
        console.log(getRandom(1))
    }

}

function getRandom(n) {
    var rnd = "";
    for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
    return rnd;
}


