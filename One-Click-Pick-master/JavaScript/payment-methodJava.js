    let cost = localStorage.getItem('cost');
    if (cost) {
        let name = localStorage.getItem('name');
        let dis_name = name.substr(0, 26) + "...";
        let costContainer = document.querySelector('.sub-total');
        let quantity = localStorage.getItem('quantity');
        costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "payment-name">${dis_name}</span>
    <span class = "total-item">(Qty : ${quantity}) </span>
    <span class = "total-cost">&#8377; ${cost}.00</span>
    <span class="payment"><a href="confirm.html" onclick="payment_method(event)">Proceed to Pay</a></span>
  </div>
  `
    } else {
        let costContainer = document.querySelector('.sub-total');
        let numbers = localStorage.getItem('cartnumbers');
        let cartCost = localStorage.getItem('totalCost');
        costContainer.innerHTML += `
  <div class="sub">
    <span class = "heading">SUB - TOTAL</span>
    <span class = "total-item">(${numbers} items) :</span>
    <span class = "total-cost">&#8377; ${cartCost}.00</span>
    <span class="payment"><a href="confirm.html" onclick="payment_method(event)">Proceed to Pay</a></span>
  </div>
  `
    }

    function numberLink(elem) {
        let number1 = document.getElementById('phonepe-number').value;
        let number2 = document.getElementById('paytm-number-field').value;
        if (number2.length == 10) {
            document.getElementById('link-button').style.display = 'block';
            document.getElementById('number-check').style.display = 'block';
        }
        if (number1.length == 10) {
            document.getElementById('number-check-phonepe').style.display = 'block';
        }
    }

    function numberlinkExit(elem) {
        document.getElementById('link-button').style.display = 'none';
        document.getElementById('number-check').style.display = 'none';
        document.getElementById('number-check-phonepe').style.display = 'none';
        document.getElementById('number-checked').style.display = 'none';
    }

    function check_display() {
        document.getElementById('number-checked').style.display = 'block';
    }

    let help = document.getElementById('cvv-icon');
    help.addEventListener('click', function () {
        document.getElementById('cvv-help').style.display = 'block';
        document.getElementById('help-head').style.display = 'block';
    })

    let close = document.getElementById('close');
    close.addEventListener('click', function () {
        document.getElementById('cvv-help').style.display = 'none';
        document.getElementById('help-head').style.display = 'none';
    })


    let r1 = document.getElementById('r1');
    let r2 = document.getElementById('r2');
    let r3 = document.getElementById('r3');
    let r4 = document.getElementById('r4');
    let r5 = document.getElementById('r5');
    let br1 = document.getElementById('br1');
    let br2 = document.getElementById('br2');
    let br3 = document.getElementById('br3');
    let br4 = document.getElementById('br4');
    let br5 = document.getElementById('br5');
    r1.addEventListener('click', function () {
        document.getElementById('card').style.display = 'block';
        document.getElementById('options').style.display = 'none';
        document.getElementById('phonepe-number').style.display = 'none';
        document.getElementById('upi-id-field').style.display = 'none';
        document.getElementById('paytm-wallet').style.display = 'none';
        document.getElementById('net-banking').style.display = 'none';
        r2.checked = false;
        r3.checked = false;
        r4.checked = false;
        r5.checked = false;
        r2innera.checked = false;
        r2innerb.checked = false;
        br1.checked = false;
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        document.getElementById('link-button').style.display = 'none';
        document.getElementById('number-check').style.display = 'none';
        document.getElementById('number-check-phonepe').style.display = 'none';
        document.getElementById('number-checked').style.display = 'none';
        if (document.getElementById('phonepe-number') != null) {
            document.getElementById('phonepe-number').value = "";
            document.getElementById('phonepe-number').placeholder = "Enter PhonePe Number";
        }
        if (document.getElementById('paytm-number-field') != null) {
            document.getElementById('paytm-number-field').value = "";
            document.getElementById('paytm-number-field').placeholder = "Enter Linked Paytm Number";
        }
        if (document.getElementById('upi-payment-field') != null) {
            document.getElementById('upi-payment-field').value = "";
            document.getElementById('upi-payment-field').placeholder = "Enter UPI ID";
        }
        if (localStorage.getItem('Net Banking')) {
            localStorage.removeItem('Net Banking');
        }
        localStorage.removeItem('PhonePe Number');
        localStorage.removeItem('UPI Id');
        localStorage.removeItem('Paytm Number');
        localStorage.removeItem('Net Banking');
    })

    r2.addEventListener('click', function () {
        document.getElementById('options').style.display = 'block';
        document.getElementById('card').style.display = 'none';
        document.getElementById('paytm-wallet').style.display = 'none';
        document.getElementById('net-banking').style.display = 'none';
        r1.checked = false;
        r3.checked = false;
        r4.checked = false;
        r5.checked = false;
        br1.checked = false;
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        document.getElementById('link-button').style.display = 'none';
        document.getElementById('number-check').style.display = 'none';
        document.getElementById('number-checked').style.display = 'none';
        if (document.getElementById('paytm-number-field') != null) {
            document.getElementById('paytm-number-field').value = "";
            document.getElementById('paytm-number-field').placeholder = "Enter Linked Paytm Number";
        }
        if ((document.getElementById('num1') != null) || (document.getElementById('num2') != null) || (document.getElementById('num3') != null) || (document.getElementById('num4') != null)) {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('num3').value = "";
            document.getElementById('num4').value = "";
        }
        if (document.getElementById('name-field') != null) {
            document.getElementById('name-field').value = "";
        }
        var select_item = document.querySelector('select.expiry-month');
        select_item.selectedIndex = 0;
        var select_item = document.querySelector('select.expiry-year');
        select_item.selectedIndex = 0;
        if (document.querySelector('.cvv-field') != null) {
            document.querySelector('.cvv-field').value = "";
        }
        if (localStorage.getItem('Net Banking')) {
            localStorage.removeItem('Net Banking');
        }
        localStorage.removeItem('Card Number');
        localStorage.removeItem('Card Holder Name');
        localStorage.removeItem('Paytm Number');
        localStorage.removeItem('Net Banking');
    })

    let r2innera = document.getElementById('r2-inner-a');
    r2innera.addEventListener('click', function () {
        document.getElementById('phonepe-number').style.display = 'block';
        document.getElementById('upi-id-field').style.display = 'none';
        r2innerb.checked = false;
        if (document.getElementById('upi-id-field') != null) {
            document.getElementById('upi-id-field').value = "";
            document.getElementById('upi-id-field').placeholder = "Enter UPI ID";
        }
        localStorage.removeItem('UPI Id');
    })

    let r2innerb = document.getElementById('r2-inner-b');
    r2innerb.addEventListener('click', function () {
        r2innera.checked = false;
        document.getElementById('number-check-phonepe').style.display = 'none';
        document.getElementById('phonepe-number').style.display = 'none';
        document.getElementById('upi-id-field').style.display = 'block';
        if (document.getElementById('phonepe-number') != null) {
            document.getElementById('phonepe-number').value = "";
            document.getElementById('phonepe-number').placeholder = "Enter PhonePe Number";
        }
        localStorage.removeItem('PhonePe Number');
    })

    r3.addEventListener('click', function () {
        document.getElementById('card').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        document.getElementById('paytm-wallet').style.display = 'block';
        document.getElementById('upi-id-field').style.display = 'none';
        document.getElementById('phonepe-number').style.display = 'none';
        document.getElementById('net-banking').style.display = 'none';
        if ((document.getElementById('num1') != null) || (document.getElementById('num2') != null) || (document.getElementById('num3') != null) || (document.getElementById('num4') != null)) {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('num3').value = "";
            document.getElementById('num4').value = "";
        }
        if (document.getElementById('name-field') != null) {
            document.getElementById('name-field').value = "";
        }
        var select_item = document.querySelector('select.expiry-month');
        select_item.selectedIndex = 0;
        var select_item = document.querySelector('select.expiry-year');
        select_item.selectedIndex = 0;
        if (document.querySelector('.cvv-field') != null) {
            document.querySelector('.cvv-field').value = "";
        }
        r1.checked = false;
        r2.checked = false;
        r4.checked = false;
        r5.checked = false;
        r2innera.checked = false;
        r2innerb.checked = false;
        br1.checked = false;
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        document.getElementById('number-check-phonepe').style.display = 'none';
        if (document.getElementById('phonepe-number') != null) {
            document.getElementById('phonepe-number').value = "";
            document.getElementById('phonepe-number').placeholder = "Enter PhonePe Number";
        }
        if (document.getElementById('upi-payment-field') != null) {
            document.getElementById('upi-payment-field').value = "";
            document.getElementById('upi-payment-field').placeholder = "Enter UPI ID";
        }
        if (localStorage.getItem('Net Banking')) {
            localStorage.removeItem('Net Banking');
        }
        localStorage.removeItem('Card Number');
        localStorage.removeItem('Card Holder Name');
        localStorage.removeItem('PhonePe Number');
        localStorage.removeItem('UPI Id');
        localStorage.removeItem('Net Banking');
    })

    r4.addEventListener('click', function () {
        document.getElementById('net-banking').style.display = 'block';
        document.getElementById('card').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        document.getElementById('phonepe-number').style.display = 'none';
        document.getElementById('upi-id-field').style.display = 'none';
        document.getElementById('paytm-wallet').style.display = 'none';
        r1.checked = false;
        r2.checked = false;
        r3.checked = false;
        r5.checked = false;
        r2innera.checked = false;
        r2innerb.checked = false;
        document.getElementById('link-button').style.display = 'none';
        document.getElementById('number-check').style.display = 'none';
        document.getElementById('number-check-phonepe').style.display = 'none';
        document.getElementById('number-checked').style.display = 'none';
        if (document.getElementById('phonepe-number') != null) {
            document.getElementById('phonepe-number').value = "";
            document.getElementById('phonepe-number').placeholder = "Enter PhonePe Number";
        }
        if (document.getElementById('paytm-number-field') != null) {
            document.getElementById('paytm-number-field').value = "";
            document.getElementById('paytm-number-field').placeholder = "Enter Linked Paytm Number";
        }
        if (document.getElementById('upi-payment-field') != null) {
            document.getElementById('upi-payment-field').value = "";
            document.getElementById('upi-payment-field').placeholder = "Enter UPI ID";
        }
        if ((document.getElementById('num1') != null) || (document.getElementById('num2') != null) || (document.getElementById('num3') != null) || (document.getElementById('num4') != null)) {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('num3').value = "";
            document.getElementById('num4').value = "";
        }
        if (document.getElementById('name-field') != null) {
            document.getElementById('name-field').value = "";
        }
        var select_item = document.querySelector('select.expiry-month');
        select_item.selectedIndex = 0;
        var select_item = document.querySelector('select.expiry-year');
        select_item.selectedIndex = 0;
        if (document.querySelector('.cvv-field') != null) {
            document.querySelector('.cvv-field').value = "";
        }
        localStorage.removeItem('Card Number');
        localStorage.removeItem('Card Holder Name');
        localStorage.removeItem('PhonePe Number');
        localStorage.removeItem('UPI Id');
        localStorage.removeItem('Paytm Number');
    })

    r5.addEventListener('click', function () {
        document.getElementById('card').style.display = 'none';
        document.getElementById('options').style.display = 'none';
        document.getElementById('phonepe-number').style.display = 'none';
        document.getElementById('upi-id-field').style.display = 'none';
        document.getElementById('paytm-wallet').style.display = 'none';
        document.getElementById('net-banking').style.display = 'none';
        r1.checked = false;
        r2.checked = false;
        r3.checked = false;
        r4.checked = false;
        r2innera.checked = false;
        r2innerb.checked = false;
        br1.checked = false;
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        document.getElementById('link-button').style.display = 'none';
        document.getElementById('number-check').style.display = 'none';
        document.getElementById('number-check-phonepe').style.display = 'none';
        document.getElementById('number-checked').style.display = 'none';
        if (document.getElementById('phonepe-number') != null) {
            document.getElementById('phonepe-number').value = "";
            document.getElementById('phonepe-number').placeholder = "Enter PhonePe Number";
        }
        if (document.getElementById('paytm-number-field') != null) {
            document.getElementById('paytm-number-field').value = "";
            document.getElementById('paytm-number-field').placeholder = "Enter Linked Paytm Number";
        }
        if (document.getElementById('upi-payment-field') != null) {
            document.getElementById('upi-payment-field').value = "";
            document.getElementById('upi-payment-field').placeholder = "Enter UPI ID";
        }
        if ((document.getElementById('num1') != null) || (document.getElementById('num2') != null) || (document.getElementById('num3') != null) || (document.getElementById('num4') != null)) {
            document.getElementById('num1').value = "";
            document.getElementById('num2').value = "";
            document.getElementById('num3').value = "";
            document.getElementById('num4').value = "";
        }
        if (document.getElementById('name-field') != null) {
            document.getElementById('name-field').value = "";
            var select_item = document.querySelector('select.expiry-month');
            select_item.selectedIndex = 0;
            var select_item = document.querySelector('select.expiry-year');
            select_item.selectedIndex = 0;
        }
        if (document.querySelector('.cvv-field') != null) {
            document.querySelector('.cvv-field').value = "";
        }
        if (localStorage.getItem('Net Banking')) {
            localStorage.removeItem('Net Banking');
        }
        localStorage.setItem('Payment Method', 'Cash On Delivery');
        localStorage.removeItem('Card Number');
        localStorage.removeItem('Card Holder Name');
        localStorage.removeItem('PhonePe Number');
        localStorage.removeItem('UPI Id');
        localStorage.removeItem('Paytm Number');
        localStorage.removeItem('Net Banking');

    })

    br1.addEventListener('click', function () {
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        localStorage.setItem('Net Banking', br1.value);
        localStorage.setItem('Payment Method', 'Net Banking');
    })

    br2.addEventListener('click', function () {
        br1.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        localStorage.setItem('Net Banking', br2.value);
        localStorage.setItem('Payment Method', 'Net Banking');
    })

    br3.addEventListener('click', function () {
        br2.checked = false;
        br1.checked = false;
        br4.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        localStorage.setItem('Net Banking', br3.value);
        localStorage.setItem('Payment Method', 'Net Banking');
    })

    br4.addEventListener('click', function () {
        br2.checked = false;
        br3.checked = false;
        br1.checked = false;
        br5.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        localStorage.setItem('Net Banking', br4.value);
        localStorage.setItem('Payment Method', 'Net Banking');
    })

    br5.addEventListener('click', function () {
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br1.checked = false;
        var select_item = document.querySelector('select.other-banks-select');
        select_item.selectedIndex = 0;
        localStorage.setItem('Net Banking', br5.value);
        localStorage.setItem('Payment Method', 'Net Banking');
    })

    function other_banks() {
        br1.checked = false;
        br2.checked = false;
        br3.checked = false;
        br4.checked = false;
        br5.checked = false;
    }

    function card_number_check() {
        let num1 = document.getElementById('num1');
        let num2 = document.getElementById('num2');
        let num3 = document.getElementById('num3');
        let num4 = document.getElementById('num4');
        if (num1.value.length != 4) {
            num1.style.boxShadow = '0 0 0.8rem 0 red';
        }
        if (num2.value.length != 4) {
            num2.style.boxShadow = '0 0 0.8rem 0 red';
        }
        if (num3.value.length != 4) {
            num3.style.boxShadow = '0 0 0.8rem 0 red';
        }
        if (num4.value.length != 4) {
            num4.style.boxShadow = '0 0 0.8rem 0 red';
        }
    }

    function payment_method(e) {
        let card_num = document.getElementById('num4').value;
        let card_name = document.getElementById('name-field').value;
        if (card_num != "" && card_num.length == 4 && card_name != "") {
            localStorage.setItem('Card Number', card_num);
            localStorage.setItem('Card Holder Name', card_name);
            localStorage.setItem('Payment Method', 'Debit Card or Credit Card');
        }
        let phonepe_num = document.getElementById('phonepe-number').value;
        if (phonepe_num != "" && phonepe_num.length == 10) {
            localStorage.setItem('PhonePe Number', phonepe_num);
            localStorage.setItem('Payment Method', 'PhonePe Account');
        }
        let upi_id = document.getElementById('upi-id-field').value;
        if (upi_id != "" && upi_id.includes('@upi')) {
            localStorage.setItem('UPI Id', upi_id);
            localStorage.setItem('Payment Method', 'Upi Payment');
        }
        let paytm_number = document.getElementById('paytm-number-field').value;
        let visible = document.getElementById('number-checked');
        if (paytm_number != "" && paytm_number.length == 10) {
            if (window.getComputedStyle(visible).display === "block") {
                localStorage.setItem('Paytm Number', paytm_number);
                localStorage.setItem('Payment Method', 'Paytm Wallet')
            }
        }
        var select_item = document.querySelector('select.other-banks-select');
        var index_select_item = select_item.selectedIndex;
        var bank_value = select_item.options[index_select_item].value;
        if (bank_value != 'Select-Bank') {
            localStorage.setItem('Net Banking', bank_value);
            localStorage.setItem('Payment Method', 'Net Banking');
        }
        if (localStorage.getItem('Payment Method')) {
            console.log('All Good');
        } else {
            e.preventDefault();
            alert('Please Select One of the below Given Payment Methods.');
        }
    }
