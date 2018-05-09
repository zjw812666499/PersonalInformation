var lineChartData = {
    //X坐标数据
    labels : ["4.31","5.1","5.3","5.4","5.6","5.7","5.8"],
    datasets : [
        {
            //统计表的背景颜色
            fillColor : "rgba(233,230,230,0.4)",
            //统计表画笔颜色
            strokeColor : "#f60",
            //点的颜色
            pointColor : "#000;",
            //点边框的颜色
            pointStrokeColor : "green",
            //鼠标触发时点的颜色
            pointHighlightFill : "red",
            //鼠标触发时点边框的颜色
            pointHighlightStroke : "#fff",
            //Y坐标数据
            data : [1,5,5,3,9,4,10]
        },
      
    ]

}

window.onload = function(){
    var ctx = document.getElementById("canvas").getContext("2d");
    window.myLine = new Chart(ctx).Line(lineChartData, {
        responsive: true
    });
}