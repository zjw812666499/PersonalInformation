$(document).ready(function () {
   


});


var id="";
var username="";
var email="";
var phone="";
var beizhu="";
var date = ""; 



function exitinfo(id){
    console.log("eixtinfo");
    var time1 = new Date().format("yyyy-MM-dd hh:mm:ss");
    console.log(time1);
    $(id).parent().parent().children().eq(5).text(time1);
    
}

function delinfo(id){    
    console.log(id);
    console.log("delinfo");
    $(id).parent().parent().remove();
}


//vue的应用
new Vue({
    el:'#vueid',
    data:{
        id: '1',
        username: 'admin',
        email: '812666499@qq.com',
        phone: '15365178412',
        beizhu: '测试vue',
        date: '2018-5-9',

    }

})

Date.prototype.format = function(fmt) { 
    var o = { 
       "M+" : this.getMonth()+1,                 //月份 
       "d+" : this.getDate(),                    //日 
       "h+" : this.getHours(),                   //小时 
       "m+" : this.getMinutes(),                 //分 
       "s+" : this.getSeconds(),                 //秒 
       "q+" : Math.floor((this.getMonth()+3)/3), //季度 
       "S"  : this.getMilliseconds()             //毫秒 
   }; 
   if(/(y+)/.test(fmt)) {
           fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
   }
    for(var k in o) {
       if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
   return fmt; 
}  