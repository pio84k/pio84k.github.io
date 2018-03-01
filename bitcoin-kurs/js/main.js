//function ajax(method, url) {
// 
//    var httpReq = new XMLHttpRequest();
//    
//    httpReq.open(method, url);
//    
//    httpReq.onreadystatechange = function () {
//        
//    if (httpReq.readyState == 4) {
//            
//        if (httpReq.status == 200) {
//                
//            var returnData = httpReq.responseText;
//                
//            httpReq.onsuccess(returnData);
//                
//            httpReq = null;
//            
//            }
//        }
//    }
//    
//    interval()

$(document).ready(function(){
    
    setInterval(refresh, 5000);
    
});

function refresh(){
    var currentBuyPrice = parseFloat($('#buy').html());
    var currentSellPrice = parseFloat($('#sell').html());
    
    $.getJSON('https://blockchain.info/pl/ticker', function(data){
    $('#sell').html(data.PLN.sell);
    $('#buy').html(data.PLN.buy);
    })
    
   
    
    if(currentBuyPrice>parseFloat(data.PLN.buy)){
        $('#buy-arrow').removeAttr('class').addClass('fa fa-arrow-down');
        
    }else if (currentBuyPrice< parseFloat(data.PLN.buy)){
         $('#buy-arrow').removeAttr('class').addClass('fa fa-arrow-up');    
    }
    else {
         $('#buy-arrow').removeAttr('class').addClass('fa fa-minus-square-o');

    }
    if(currentSellPrice>parseFloat(data.PLN.sell)){
        $('#sell-arrow').removeAttr('class').addClass('fa fa-arrow-down');
        
    }else if (currentSellPrice< parseFloat(data.PLN.buy)){
         $('#sell-arrow').removeAttr('class').addClass('fa fa-arrow-up');    
    }
    else {
         $('#sell-arrow').removeAttr('class').addClass('fa fa-minus-square-o');

    }
};
