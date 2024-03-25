$(document).ready(function(){
    paymentStep03();

});



function paymentStep03(){
    
    var creditRadio = document.getElementById("credit");
    var afterPayRadio = document.getElementById("afterPay");

    creditRadio.addEventListener("change",function(){
        if (this.checked){
            document.getElementById("afterPayOpen").classList.remove("active");
            document.getElementById("creditOpen").classList.add("active");
        }
    });
    afterPayRadio.addEventListener("change",function(){
        if (this.checked){
            document.getElementById("creditOpen").classList.remove("active");
            document.getElementById("afterPayOpen").classList.add("active");
        }
    });


    var sameAddrRadio = document.getElementById("sameAddr");
    var newAddrRadio = document.getElementById("newAddr");
    var newAddrDiv = document.getElementById("newAddrOpen");

    newAddrRadio.addEventListener("change",function(){
        if (this.checked){
            newAddrDiv.classList.add("active");
        }
    });
    sameAddrRadio.addEventListener("change",function(){
        if (this.checked){
            newAddrDiv.classList.remove("active");
        }
    });
}