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
    <span class="payment"><a href="payment-method.html" id="payment-mthod" onclick="form_store(event)">Proceed to Pay</a></span>
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
    <span class="payment"><a href="payment-method.html" id="payment-mthod" onclick="form_store(event)">Proceed to Pay</a></span>
  </div>
  `
}

function form_store(e) {
    let fn = document.querySelector('.name1').value;
    let ln = document.querySelector('.name2').value;
    let company = document.querySelector('input.c-name').value;
    let add1 = document.querySelector('.add1').value;
    let add2 = document.querySelector('.add2').value;
    let landmark = document.querySelector('input.landmark').value;
    let city = document.querySelector('input.city').value;
    let pincode = document.querySelector('input.pincode').value;
    let phone = document.querySelector('input.phone').value;
    let email = document.querySelector('input.email').value;
    var select_item = document.querySelector('select.state');
    var index_select_item = select_item.selectedIndex;
    var state = select_item.options[index_select_item].value;
    if (fn.length > 0) {
        localStorage.setItem('first name', fn);
    } else {
        document.querySelector('.name1').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('.name1').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
    if (ln.length > 0) {
        localStorage.setItem('last name', ln);
    } else {
        document.querySelector('.name2').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('.name2').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
    if (company.length > 0) {
        localStorage.setItem('company name', company);
    } else {
        console.log('not posted');
    }
    if (state == 'Select State') {
        document.querySelector('select.state').style.boxShadow = '0 0 0.8rem 0 red';
        e.preventDefault();
    } else {
        localStorage.setItem('State', state);
    }
    if (add1.length > 0) {
        localStorage.setItem('address-1', add1);
    } else {
        document.querySelector('.add1').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('.add1').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
    if (add2.length > 0) {
        localStorage.setItem('address-2', add2);
    } else {
        document.querySelector('.add2').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('.add2').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
    if (landmark.length > 0) {
        localStorage.setItem('landmark', landmark);
    } else {
        console.log('not posted');
    }
    if (pincode.length == 6) {
        localStorage.setItem('pincode', pincode);
    } else {
        document.querySelector('input.pincode').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('input.pincode').value = "";
        document.querySelector('input.pincode').placeholder = "Fill in the Field or Pincode is short.";
        e.preventDefault();
    }
    if (city.length > 0) {
        localStorage.setItem('city', city);
    } else {
        document.querySelector('input.city').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('input.city').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
    if (phone.length == 10) {
        localStorage.setItem('phone', phone);
    } else {
        document.querySelector('input.phone').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('input.phone').value = "";
        document.querySelector('input.phone').placeholder = "Fill in the Field or Number is short";
        e.preventDefault();
    }
    if (email.length > 0) {
        localStorage.setItem('email', email);
    } else {
        document.querySelector('input.email').style.boxShadow = '0 0 0.8rem 0 red';
        document.querySelector('input.email').placeholder = "Fill in the Field.";
        e.preventDefault();
    }
}
