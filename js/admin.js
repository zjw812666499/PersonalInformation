// JavaScript source code
$(document).ready(function () {
    $("#admin").click(function () {
        self.location = 'admin.html';
    });

    $("#user").click(function () {
        self.location = 'user.html';
    });
    $("#airect").click(function () {
        console.log("待开发");
        alert("待开发")
    });
    $(".pagination").click(function () {
        console.log("没有更多了");
        alert("没有更多了")
    });
    $("#set").click(function () {
        console.log("没有更多了");
        alert("待开发")
    });
    $("#home").click(function () {
        self.location = 'index.html';
    });
    $("#exit").click(function () {
        self.location = 'index.html';
    });
});


