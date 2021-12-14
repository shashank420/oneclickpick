let cost = localStorage.getItem('cost');

if(cost){
    let name = localStorage.getItem('name');
let dis_name = name.substr(0,26) + "...";
  let costContainer = document.querySelector('.sub-total');
  let quantity = localStorage.getItem('quantity');
  costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "payment-name">${dis_name}</span>
    <span class = "total-item">(Qty : ${quantity}) </span>
    <span class = "total-cost">&#8377; ${cost}.00</span>
    <span class="payment"><a href="placed.html" id="payment-mthod" onclick="confirm()">Proceed to Pay</a></span>
  </div>
  `
}else{
  let costContainer = document.querySelector('.sub-total');
  let numbers = localStorage.getItem('cartnumbers');
  let cartCost = localStorage.getItem('totalCost');
  costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "total-item">(${numbers} items) :</span>
    <span class = "total-cost">&#8377; ${cartCost}.00</span>
    <span class="payment"><a href="placed.html" id="payment-mthod" onclick="confirm()">Proceed to Pay</a></span>
  </div>
  `
}
function shipping_change(){
  window.history.go(-2);
}

function payment_change(){
  window.history.go(-1);
  localStorage.removeItem('Payment Method');
}


let shipping_address = document.querySelector('.shipping-address-inner');
let fn = localStorage.getItem('first name');
let ln = localStorage.getItem('last name');
let state = localStorage.getItem('State');
let address1 = localStorage.getItem('address-1');
let address2 = localStorage.getItem('address-2');
let city = localStorage.getItem('city');
let pincode = localStorage.getItem('pincode');
let phone = localStorage.getItem('phone');
let email = localStorage.getItem('email');
let fullname = fn + " " + ln;
shipping_address.innerHTML += `
  <span class="shipping-name">${fullname}</span>
  <span class="address-1">${address1}</span>
  <span class="address-2">${address2}</span>
  <span class="city">${city}</span>
  <span class="state">${state}</span>
  <span class="pincode"> - ${pincode}</span>
  <span class="india">India</span>
  <span class="phone">Phone : ${phone}</span>
  <span class="email">Email : ${email}</span>
`

let payment_method = document.querySelector('.payment-method-inner');
if(localStorage.getItem('Payment Method')=='Debit Card or Credit Card'){
  let card_number = localStorage.getItem('Card Number');
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying By Debit Card or Credit Card <b>ending with ${card_number}</b>.</span>
  `
}
if(localStorage.getItem('Payment Method')=='PhonePe Account'){
  let phonepe_number = localStorage.getItem('PhonePe Number');
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying By PhonePe Account Linked with ${phonepe_number}</span>
  `
}
if(localStorage.getItem('Payment Method')=='Upi Payment'){
  let upi_id = localStorage.getItem('UPI ID');
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying using UPI Payment with UPI Id as ${upi_id}</span>
  `
}
if(localStorage.getItem('Payment Method')=='Paytm Wallet'){
  let paytm_number = localStorage.getItem('Paytm Number');
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying using Paytm Wallet Linked to ${paytm_number}</span>
  `
}
if(localStorage.getItem('Payment Method')=='Net Banking'){
  let net_account = localStorage.getItem('Net Banking');
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying Using Net Banking services provided by ${net_account}</span>
  `
}
if(localStorage.getItem('Payment Method')=='Cash On Delivery'){
  payment_method.innerHTML += `
    <span class="payment-m-head">Paying By Cash On Delivery</span>
    <span class="payment-tip">* Keep distance with the delivery person and wear mask while taking the product.</span>
  `
}

var delivery = document.querySelector('.delivery-inner');
var date_seven = new Date(Date.now() + (7 * 24 * 60 * 60 * 1000));
var date_ten = new Date(Date.now() + (10 * 24 * 60 * 60 * 1000));
var seven_day = date_seven.getDay();
var ten_day = date_ten.getDay();
var seven_date = date_seven.getDate();
var ten_date = date_ten.getDate();
var seven_month = date_seven.toLocaleString('default',{month:'long'});
var ten_month = date_ten.toLocaleString('default',{month:'long'});
var week = new Array(7);
week[0] = 'Mon';
week[1] = 'Tue';
week[2] = 'Wed';
week[3] = 'Thu';
week[4] = 'Fri';
week[5] = 'Sat';
week[6] = 'Sun';
var day_seven = week[seven_day];
var day_ten = week[ten_day];
delivery.innerHTML += `
  <span class="date-head">The Product is Expected to be delivered between :</span>
  <span class="date">${day_seven}, ${seven_date} ${seven_month}<br> to<br> ${day_ten}, ${ten_date} ${ten_month}</span>
`
function confirm(){
  localStorage.setItem('delivery',day_seven+', '+seven_date+' '+seven_month+' to '+day_ten+', '+ten_date+' '+ten_month);
}

if(cost){
  var delivery_info = document.querySelector('.bottom-half-content');
  let quantity = localStorage.getItem('quantity');
  delivery_info.innerHTML += `
  <div class="sub-head"><span>Estimated Delivery : ${day_seven}, ${seven_date} ${seven_month} - ${day_ten}, ${ten_date} ${ten_month}</span></div>
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "payment-name">${dis_name}</span>
    <span class = "total-item">(Qty : ${quantity}) </span>
    <span class = "total-cost">&#8377; ${cost}.00</span>
  </div>
  `
}else{
  var delivery_info = document.querySelector('.bottom-half-content');
  let numbers = localStorage.getItem('cartnumbers');
  let cartCost = localStorage.getItem('totalCost');
  delivery_info.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "total-item">(${numbers} items) :</span>
    <span class = "total-cost">&#8377; ${cartCost}.00</span>

  </div>
  `
}
