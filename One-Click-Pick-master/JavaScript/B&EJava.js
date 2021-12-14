let cart5 = document.querySelectorAll('.atc5');
let buy5 = document.querySelectorAll('.buy5');
let decrease5 = document.querySelectorAll('.decrease');
let increase5 = document.querySelectorAll('.increase');
let inCarts5 = document.querySelectorAll('.quantity');

let products5 = [
	{
		name: 0,
		fname: 'Harry Potter Box Set: The Complete Collection (Children’s Paperback) (Set of 7 Volumes) Paperback – Box set',
		tag: 'BK(1)(1)',
		price: 4250,
		inCart: 0
	},
	{
		name: 1,
		fname: 'Rick Riordan PERCY JACKSON Series Set Book 1-5 Paperback',
		tag: 'BK(2)(1)',
		price: 2100,
		inCart: 0
	},
	{
		name: 2,
		fname: 'Divergent Series - 4 in 1 Paperback – Box set',
		tag: 'BK(3)(1)',
		price: 1499,
		inCart: 0
	},
	{
		name: 3,
		fname: 'The Hunger Games 4-Book Hardback Box-Set (The Hunger Games, Catching Fire, Mockingjay, The Ballad of Songbirds and Snakes) Hardcover',
		tag: 'BK(4)(1)',
		price: 5787,
		inCart: 0
	},
	{
		name: 4,
		fname: '14" x 14" Collectible Wooden Folding Chess Game Board Set+Wooden Magnetic Crafted Pieces',
		tag: 'G(1)(1)',
		price: 2995,
		inCart: 0
	},
	{
		name: 5,
		fname: 'Uno Card with Uno Flip Playing Card & UNO Blink Card Game',
		tag: 'G(2)(1)',
		price: 999,
		inCart: 0
	},
	{
		name: 6,
		fname: 'SIPL Wooden Carrom Board 33 inches with Wooden Coins, Striker and Disco Powder (33*33Inch)',
		tag: 'G(3)(1)',
		price: 4950,
		inCart: 0
	},
	{
		name: 7,
		fname: 'PC NFS 2016 (PC)',
		tag: 'G(4)(1)',
		price: 1999,
		inCart: 0
	},
	{
		name: 8,
		fname: 'Havana Imported Chennai Musicals HV 522 5-Pieces Acoustic Drum Set with Cymbals and Hardware (Red)',
		tag: 'M(1)(1)',
		price: 30000,
		inCart: 0
	},
	{
		name: 9,
		fname: 'Kadence Acoustica Series,Semi Acoustic Guitar Ash Wood with Equlizer A-06-EQ',
		tag: 'M(2)(1)',
		price: 12000,
		inCart: 0
	},
	{
		name: 10,
		fname: 'Alesis SamplePad Pro | 8-Pad Percussion and Sample-Triggering Instrument with Dual Zone Rubber Pads, Blue LED Illumination, and Built-in Sounds (Black)',
		tag: 'M(3)(1)',
		price: 35599,
		inCart: 0
	},
	{
		name: 11,
		fname: 'Akshar Tabla Mart Professional Sheesham Wood Dayan and Still Bayan with Bag with Hammer with Gaddi Set and PVC gatta',
		tag: 'M(4)(1)',
		price: 3999,
		inCart: 0
	}
];

for(let i = 0; i< cart5.length; i++){
	cart5[i].addEventListener('click', function() {
		var value5 = parseInt(inCarts5[i].value);
		cartnumbers5(products5[i],value5);
		totalcost5(products5[i],value5);
		inCarts5[i].value = "1";
	})
}

for(let i = 0; i< buy5.length; i++){
	buy5[i].addEventListener('click', function() {
		var value5 = parseInt(inCarts5[i].value);
		cost5(products5[i],value5);
		inCarts5[i].value = "1";
	})
}

for(let i = 0; i< decrease5.length; i++){
	decrease5[i].addEventListener('click', function() {
		var a = parseInt(inCarts5[i].value);
		if(a == 0){
			inCarts5[i].value = 0;
		}else{
			var b = a - 1;
			inCarts5[i].value = b;
		}
	})
}

for(let i = 0; i< increase5.length; i++){
	increase5[i].addEventListener('click', function() {
		var a = parseInt(inCarts5[i].value);
		var b = a + 1;
		inCarts5[i].value = b;
	})
}

function onLoadCart5(){
	let productnumbers5 = localStorage.getItem('cartnumbers');
	if(productnumbers5){
		document.querySelector('.items').textContent = productnumbers5;
	}
}

function cartnumbers5(product5,value5){
	let productnumbers5 = localStorage.getItem('cartnumbers');
	productnumbers5 = parseInt(productnumbers5);
	if( productnumbers5 ){
		localStorage.setItem('cartnumbers', productnumbers5 + value5);
		document.querySelector('.items').textContent = productnumbers5 + value5;
	}else{
		localStorage.setItem('cartnumbers', value5);
		document.querySelector('.items').textContent = value5;
	}
	setItems5(product5,value5);
}

function setItems5(product5,value5){
	let cartItems5 = localStorage.getItem('productsInCart5');
	cartItems5 = JSON.parse(cartItems5);
	if(cartItems5 != null){
		if(cartItems5[product5.name] == undefined){
			cartItems5 = {
				...cartItems5,
				[product5.name]: product5
			}
		}
		cartItems5[product5.name].inCart += value5;
	}else{
		product5.inCart = value5;
		cartItems5 = {
			[product5.name]: product5
		}
	}
	localStorage.setItem('productsInCart5', JSON.stringify(cartItems5));
}

function totalcost5(product5,value5){
	let cartCost5 = localStorage.getItem('totalCost');
	price5 = parseInt(product5.price);
	totalprice5 = price5 * value5;
	if(cartCost5 != null){
		cartCost5 = parseInt(cartCost5);
		localStorage.setItem('totalCost', cartCost5 + totalprice5);
	}else{
		localStorage.setItem('totalCost', totalprice5);
	}
}

function displayCart5(){
	let cartItems5 = localStorage.getItem("productsInCart5");
	cartItems5 = JSON.parse(cartItems5);
	let productContainers5 = document.querySelector('.products1');
	let productContainer5 = document.querySelector('.product5');
	let cartCost5 = localStorage.getItem('totalCost');
	if(cartItems5 && productContainer5){
		productContainers5.innerHTML = '';
		Object.values(cartItems5).map(item => {
			productContainer5.innerHTML += `
			<div class="productItem1">
				<a class="remove" onClick="removeItem5(${item.name})"><ion-icon name="close-circle"></ion-icon></a>
				<img src="./images/${item.tag}.jpg" height=150 width=150 marginRight=20>
				<span class="name">${item.fname}</span>
			</div>
			<div class="price">&#8377; ${item.price}.00</div>
			<div class="quantity">
				<span class="quantity">${item.inCart}</span>
			</div>
			<div class="total">&#8377; ${item.price * item.inCart}.00</div>
			`
		});
		let costContainer5 = document.querySelector('.sub-total');
		let numbers5 = localStorage.getItem('cartnumbers');
		costContainer5.innerHTML = '';
		costContainer5.innerHTML += `
		<div class="sub">
			<span class = "heading">SUB - TOTAL</span>
			<span class = "total-item">(${numbers5} items) :</span>
			<span class = "total-cost">&#8377; ${cartCost5}.00</span>
			<span class="payment"><a href="payment.html" onClick="buy()">Proceed to Buy</a></span>
		</div>
		`
	}
}

function cost5(product5,value5){
	let price5 = parseInt(product5.price);
	let name5 = (product5.fname);
	let totalprice5 = price5 * value5;
	localStorage.setItem('cost',totalprice5);
	localStorage.setItem('quantity',value5);
	localStorage.setItem('name',name5);
}

function buy(){
	let cost5 = localStorage.getItem('cost');
	if(cost5){
		localStorage.removeItem('cost');
	}
}

document.getElementById('dropdown').addEventListener('mouseover', showDropdown);
document.getElementById('dropdown').addEventListener('mouseout', hideDropdown);
let open = false;
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

function removeItem5(product5){
	let cartItems5 = localStorage.getItem("productsInCart5");
	let cartCost5 = localStorage.getItem('totalCost');
	let productnumbers5 = localStorage.getItem('cartnumbers');
	cartItems5 = JSON.parse(cartItems5);
	var total5 = cartItems5[product5].price * cartItems5[product5].inCart;
	var cart5 = cartItems5[product5].inCart;
	cartCost5 = cartCost5 - total5;
	productnumbers5 = productnumbers5 - cart5;
	cartItems5[product5].inCart = 0;
	delete cartItems5[product5];
	localStorage.setItem('productsInCart5',JSON.stringify(cartItems5));
	localStorage.setItem('totalCost', cartCost5);
	localStorage.setItem('cartnumbers', productnumbers5);
	let lengthGet5 = localStorage.getItem("productsInCart5");
	let length5 = lengthGet5.length;
	if(length5 == 2){
		localStorage.removeItem('productsInCart5');
	}
	if(productnumbers5 == 0){
		localStorage.removeItem('cartnumbers');
	}
	if(cartCost5 == 0){
		localStorage.removeItem('totalCost');
	}
	location.reload();
}

 onLoadCart5();
 displayCart5();
