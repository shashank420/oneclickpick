let cart3 = document.querySelectorAll('.atc3');
let buy3 = document.querySelectorAll('.buy3');
let decrease3 = document.querySelectorAll('.decrease');
let increase3 = document.querySelectorAll('.increase');
let inCarts3 = document.querySelectorAll('.quantity');

let products3 = [
	{
		name: 0,
		fname: 'Spalding Rebound Rubber Basketball',
		tag: 'B(1)(1)',
		price: 699,
		inCart: 0
	},
	{
		name: 1,
		fname: 'Web Sports Basketball Dunking Ring Heavy Duty Three Spring',
		tag: 'B(2)(1)',
		price: 3499,
		inCart: 0
	},
	{
		name: 2,
		fname: "Adidas Men's Ownthegame Leather Basketball Shoes",
		tag: 'B(3)(1)',
		price: 4025,
		inCart: 0
	},
	{
		name: 3,
		fname: "Nike Men's Ebernon Mid Leather Basketball Shoes",
		tag: 'B(4)(1)',
		price: 2199,
		inCart: 0
	},
	{
		name: 3,
		fname: 'SG RSD Spark Kashmir Willow Cricket Bat (Color May Vary)',
		tag: 'CT(1)(1)',
		price: 1199,
		inCart: 0
	},
	{
		name: 5,
		fname: 'Cosco Light Cricket Tennis Ball Sport Tennis, Cricket',
		tag: 'CT(2)(1)',
		price: 320,
		inCart: 0
	},
	{
		name: 6,
		fname: 'SG Ecolite RH Batting Gloves, Adult (Colour May Vary)',
		tag: 'CT(3)(1)',
		price: 600,
		inCart: 0
	},
	{
		name: 7,
		fname: 'Vector X Blast Cricket Shoes',
		tag: 'CT(4)(1)',
		price: 999,
		inCart: 0
	},
	{
		name: 8,
		fname: 'Nivia 1361AR Rubber Country Colour Molded Football, Size 3 (White)',
		tag: 'F(1)(1)',
		price: 275,
		inCart: 0
	},
	{
		name: 9,
		fname: 'Amf Brazil Football Jersey for Men',
		tag: 'F(2)(1)',
		price: 259,
		inCart: 0
	},
	{
		name: 10,
		fname: 'Adidas Carbonite Web Goalkeeper Gloves',
		tag: 'F(3)(1)',
		price: 499,
		inCart: 0
	},
	{
		name: 11,
		fname: "Nike Men's Vapor 13 Club NJR Fg/Mg Football Shoes",
		tag: 'F(4)(1)',
		price: 5475,
		inCart: 0
	},
	{
		name: 12,
		fname: 'Giovane Dumbbell 5kg Single Piece',
		tag: 'GM(1)(1)',
		price: 1001,
		inCart: 0
	},
	{
		name: 13,
		fname: 'BODYGRIP Rod 12.5 KGcm',
		tag: 'GM(2)(1)',
		price: 945,
		inCart: 0
	},
	{
		name: 13,
		fname: 'Protoner 18kg with 1 Rods PVC Weight Lifting',
		tag: "GM(3)(1)",
		price: 3200,
		inCart: 0
	},
	{
		name: 15,
		fname: 'VIFITKIT Yoga & Exercise Mat for Gym Workout and Flooring Exercise Long Size Yoga mat with Bag for Men & Women (Made in India)',
		tag: 'GM(4)(1)',
		price: 500,
		inCart: 0
	}
];

for(let i = 0; i< cart3.length; i++){
	cart3[i].addEventListener('click', function() {
		var value3 = parseInt(inCarts3[i].value);
		cartnumbers3(products3[i],value3);
		totalcost3(products3[i],value3);
		inCarts3[i].value = "1";
	})
}

for(let i = 0; i< buy3.length; i++){
	buy3[i].addEventListener('click', function() {
		var value3 = parseInt(inCarts3[i].value);
		cost3(products3[i],value3);
		inCarts3[i].value = "1";
	})
}

for(let i = 0; i< decrease3.length; i++){
	decrease3[i].addEventListener('click', function() {
		var a = parseInt(inCarts3[i].value);
		if(a == 0){
			inCarts3[i].value = 0;
		}else{
			var b = a - 1;
			inCarts3[i].value = b;
		}
	})
}

for(let i = 0; i< increase3.length; i++){
	increase3[i].addEventListener('click', function() {
		var a = parseInt(inCarts3[i].value);
		var b = a + 1;
		inCarts3[i].value = b;
	})
}

function onLoadCart3(){
	let productnumbers3 = localStorage.getItem('cartnumbers');
	if(productnumbers3){
		document.querySelector('.items').textContent = productnumbers3;
	}
}

function cartnumbers3(product3,value3){
	let productnumbers3 = localStorage.getItem('cartnumbers');
	productnumbers3 = parseInt(productnumbers3);
	if( productnumbers3 ){
		localStorage.setItem('cartnumbers', productnumbers3 + value3);
		document.querySelector('.items').textContent = productnumbers3 + value3;
	}else{
		localStorage.setItem('cartnumbers', value3);
		document.querySelector('.items').textContent = value3;
	}
	setItems3(product3,value3);
}

function setItems3(product3,value3){
	let cartItems3 = localStorage.getItem('productsInCart3');
	cartItems3 = JSON.parse(cartItems3);
	if(cartItems3 != null){
		if(cartItems3[product3.name] == undefined){
			cartItems3 = {
				...cartItems3,
				[product3.name]: product3
			}
		}
		cartItems3[product3.name].inCart += value3;
	}else{
		product3.inCart = value3;
		cartItems3 = {
			[product3.name]: product3
		}
	}
	localStorage.setItem('productsInCart3', JSON.stringify(cartItems3));
}

function totalcost3(product3,value3){
	let cartCost3 = localStorage.getItem('totalCost');
	price3 = parseInt(product3.price);
	totalprice3 = price3 * value3;
	if(cartCost3 != null){
		cartCost3 = parseInt(cartCost3);
		localStorage.setItem('totalCost', cartCost3 + totalprice3);
	}else{
		localStorage.setItem('totalCost', totalprice3);
	}
}

function displayCart3(){
	let cartItems3 = localStorage.getItem("productsInCart3");
	cartItems3 = JSON.parse(cartItems3);
	let productContainers3 = document.querySelector('.products1');
	let productContainer3 = document.querySelector('.product3');
	let cartCost3 = localStorage.getItem('totalCost');
	if(cartItems3 && productContainer3){
		productContainers3.innerHTML = '';
		Object.values(cartItems3).map(item => {
			productContainer3.innerHTML += `
			<div class="productItem1">
				<a class="remove" onClick="removeItem3(${item.name})"><ion-icon name="close-circle"></ion-icon></a>
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
		let costContainer3 = document.querySelector('.sub-total');
		let numbers3 = localStorage.getItem('cartnumbers');
		costContainer3.innerHTML = '';
		costContainer3.innerHTML += `
		<div class="sub">
			<span class = "heading">SUB - TOTAL</span>
			<span class = "total-item">(${numbers3} items) :</span>
			<span class = "total-cost">&#8377; ${cartCost3}.00</span>
			<span class="payment"><a href="payment.html" onClick="buy()">Proceed to Buy</a></span>
		</div>
		`
	}
}

function cost3(product3,value3){
	let price3 = parseInt(product3.price);
	let name3 = (product3.fname);
	let totalprice3 = price3 * value3;
	localStorage.setItem('cost',totalprice3);
	localStorage.setItem('quantity',value3);
	localStorage.setItem('name',name3);
}

function buy(){
	let cost3 = localStorage.getItem('cost');
	if(cost3){
		localStorage.removeItem('cost');
	}
}

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

function removeItem3(product3){
	let cartItems3 = localStorage.getItem("productsInCart3");
	let cartCost3 = localStorage.getItem('totalCost');
	let productnumbers3 = localStorage.getItem('cartnumbers');
	cartItems3 = JSON.parse(cartItems3);
	var total3 = cartItems3[product3].price * cartItems3[product3].inCart;
	var cart3 = cartItems3[product3].inCart;
	cartCost3 = cartCost3 - total3;
	productnumbers3 = productnumbers3 - cart3;
	cartItems3[product3].inCart = 0;
	delete cartItems3[product3];
	localStorage.setItem('productsInCart3',JSON.stringify(cartItems3));
	localStorage.setItem('totalCost', cartCost3);
	localStorage.setItem('cartnumbers', productnumbers3);
	let lengthGet3 = localStorage.getItem("productsInCart3");
	let length3 = lengthGet3.length;
	if(length3 == 2){
		localStorage.removeItem('productsInCart3');
	}
	if(productnumbers3 == 0){
		localStorage.removeItem('cartnumbers');
	}
	if(cartCost3 == 0){
		localStorage.removeItem('totalCost');
	}
	location.reload();
}

 onLoadCart3();
 displayCart3();
