let fn = localStorage.getItem('first name');
let ln = localStorage.getItem('last name');
let fullname = fn + " " + ln;
let state = localStorage.getItem('State');
let address1 = localStorage.getItem('address-1');
let address2 = localStorage.getItem('address-2');
let city = localStorage.getItem('city');
let date = localStorage.getItem('delivery');
let message = document.querySelector('.message');
message.innerHTML += `
  <span class="address"><b>Shipping to ${fullname} </b>${address1}, ${address2}, ${city}, ${state}</span>
  <span class="delivery-date">Delivery Date : ${date}</span>
`

document.getElementById('dropdown').addEventListener('mouseover', showDropdown);
document.getElementById('dropdown').addEventListener('mouseout', hideDropdown);
function showDropdown(){
	document.querySelector('.dropdown-content').style.display = 'block';
	document.querySelector('.dropdown-head').style.display = 'block';
	document.querySelector('ion-icon.dropdown').style.transform = 'rotate(180deg)';
	setTimeout(function(){
		document.querySelector('.dropdown-content').style.height = '220px';
		document.querySelector('.dropdown-head').style.height = '50px';
	})
}

function hideDropdown(){
	document.querySelector('.dropdown-content').style.display = 'none';
	document.querySelector('.dropdown-head').style.display = 'none';
	document.querySelector('ion-icon.dropdown').style.transform = 'rotate(0deg)';
	document.querySelector('.dropdown-content').style.height = '0px';
	document.querySelector('.dropdown-head').style.height = '0px';
}
