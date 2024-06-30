const subscription = document.getElementById("subscription");
const linepay= document.getElementById("linepay");
const creditcard = document.getElementById("creditcard");
const wechatpay = document.getElementById("wechatpay");

const subscriptionInfo = document.getElementById("subscriptionInfo");
const paymentInfo = document.getElementById("paymentInfo");

const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function(){
    if(subscription.checked){
        subscriptionInfo.textContent = "you've subscribed!";
    }
    else{
        subscriptionInfo.textContent = "you haven't subscribed!";
    }
}