// JavaScript source code
$(document).ready(function () {
    $("#admin").click(function () {
        self.location = 'admin.html';
    });

    $("#user").click(function () {
        self.location = 'user.html';
    });
    $("#airect").click(function () {
        console.log("������");
        alert("������")
    });
    $(".pagination").click(function () {
        console.log("û�и�����");
        alert("û�и�����")
    });
    $("#set").click(function () {
        console.log("û�и�����");
        alert("������")
    });
    $("#home").click(function () {
        self.location = 'index.html';
    });
    $("#exit").click(function () {
        self.location = 'index.html';
    });
});


