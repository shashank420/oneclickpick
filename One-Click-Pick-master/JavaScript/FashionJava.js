let cart2 = document.querySelectorAll('.atc2');
let buy2 = document.querySelectorAll('.buy2');
let decrease2 = document.querySelectorAll('.decrease');
let increase2 = document.querySelectorAll('.increase');
let inCarts2 = document.querySelectorAll('.quantity');

let products2 = [
	{
		name: 0,
		fname: 'Casual Blue Demin Shirt With Spread Collar 100% cotton For Men',
		tag: 'MC(1)(1)',
		price: 1249,
		inCart: 0
	},
	{
		name: 1,
		fname: 'White Formal Shirt For Men',
		tag: 'MC(2)(1)',
		price: 1899,
		inCart: 0
	},
	{
		name: 2,
		fname: 'Black Denim Jacket Party Wear For Men',
		tag: 'MC(3)(1)',
		price: 3499,
		inCart: 0
	},
	{
		name: 3,
		fname: 'Multi-coloured And Ethnic Printed Nehru Jacket With Mandarian Collar For Men',
		tag: 'MC(2)(1)',
		price: 3999,
		inCart: 0
	},
	{
		name: 4,
		fname: "Casio Analog Blue Dial Men's Watch",
		tag: 'MW(1)(1)',
		price: 7695,
		inCart: 0
	},
	{
		name: 5,
		fname: "Fossil Machine Chronograph Men's Watch ",
		tag: 'MW(2)(1)',
		price: 9495,
		inCart: 0
	},
	{
		name: 6,
		fname: "Armani Exchange Analog Multi-Colour Dial Men's Watch",
		tag: 'MW(3)(1)',
		price: 12999,
		inCart: 0
	},
	{
		name: 7,
		fname: "Titan Regalia Chronograph Analog Silver Dial Men's Watch",
		tag: 'MW(4)(1)',
		price: 6649,
		inCart: 0
	},
	{
		name: 8,
		fname: "Nike Men's Flex Contact 2 Running Shoes",
		tag: 'MS(1)(1)',
		price: 6295,
		inCart: 0
	},
	{
		name: 9,
		fname: "Puma Men's Convex Pro IDP Running Shoes",
		tag: 'MS(2)(1)',
		price: 1999,
		inCart: 0
	},
	{
		name: 10,
		fname: "Derby Men's Dc-112 Formal Shoes",
		tag: 'MS(3)(1)',
		price: 1424,
		inCart: 0
	},
	{
		name: 11,
		fname: "Stylelure Men's Formal Shoes",
		tag: 'MS(4)(1)',
		price: 499,
		inCart: 0
	},
	{
		name: 12,
		fname: 'Pink Coloured Designer Sleeves Top For Women With Round Neck',
		tag: 'WC(1)(1)',
		price: 499,
		inCart: 0
	},
	{
		name: 13,
		fname: 'Premium Maroon Printed Top With Gradient Designs For Women',
		tag: 'WC(2)(1)',
		price: 1920,
		inCart: 0
	},
	{
		name: 14,
		fname: 'Polka Dot Hot Yellow Top With Lacey Bow For Women',
		tag: "WC(3)(1)",
		price: 1199,
		inCart: 0
	},
	{
		name: 15,
		fname: 'Black Crop Top With Bow For Women',
		tag: 'WC(4)(1)',
		price: 1499,
		inCart: 0
	},
	{
		name: 16,
		fname: "Fossil Chronograph Rose Gold Dial Women's Watch - ES3352",
		tag: 'WW(1)(1)',
		price: 6599,
		inCart: 0
	},
	{
		name: 17,
		fname: "Titan Ladies NeoIi Analog Rose Gold Dial Women's Watch NM2480KM01 / NL2480KM01",
		tag: 'WW(2)(1)',
		price: 11999,
		inCart: 0
	},
	{
		name: 18,
		fname: 'TIMESOON Black Round Diamond Dial with Latest Generation BLACKMagnet Belt Analogue Watch for Women Pack of - 1',
		tag: 'WW(3)(1)',
		price: 245,
		inCart: 0
	},
	{
		name: 19,
		fname: "Titan Youth Analog Black Dial Women's Watch NM2480SM02 / NL2480SM02",
		tag: 'WW(4)(1)',
		price: 1955,
		inCart: 0
	},
	{
		name: 20,
		fname: "Puma Women's Progression Pro Wn S Idp Black-Blue Running Shoes",
		tag: 'WS(1)(1)',
		price: 2175,
		inCart: 0
	},
	{
		name: 21,
		fname: "Flavia Women's Running Shoes",
		tag: 'WS(2)(1)',
		price: 649,
		inCart: 0
	},
	{
		name: 22,
		fname: "SHOFIEE Women's Fashion Sandal",
		tag: 'WS(3)(1)',
		price: 599,
		inCart: 0
	},
	{
		name: 23,
		fname: 'TRASE Judy Pumps Heel Sandal for Women Girls - 4 Inch Heel',
		tag: 'WS(4)(1)',
		price: 599,
		inCart: 0
	},
	{
		name: 24,
		fname: 'SNOT Boys & Girls Full Sleeve Crew Neck Mickey Printed Tshirt & Jogger Set',
		tag: 'BC(1)(1)',
		price: 495,
		inCart: 0
	},
	{
		name: 25,
		fname: "T2F Boy's Cotton Sweatshirt",
		tag: 'BC(2)(1)',
		price: 395,
		inCart: 0
	},
	{
		name: 26,
		fname: "Jam & Honey Boy's Plain Regular fit Cotton Shirt",
		tag: 'BC(3)(1)',
		price: 485,
		inCart: 0
	},
	{
		name: 27,
		fname: 'Hopscotch Baby Boys Polycotton Solid Denim Elastic Jeans in Black Color',
		tag: 'BC(4)(1)',
		price: 620,
		inCart: 0
	},
	{
		name: 28,
		fname: "Mickey Boy's Sneakers",
		tag: 'BS(1)(1)',
		price: 899,
		inCart: 0
	},
	{
		name: 29,
		fname: 'crocs Kids Unisex Classic Lined Clogs',
		tag: 'BS(2)(1)',
		price: 1622,
		inCart: 0
	},
	{
		name: 30,
		fname: "Reebok Boy's Rush Runner 2.0 Running Shoes",
		tag: "BS(3)(1)",
		price: 1109,
		inCart: 0
	},
	{
		name: 31,
		fname: "Adidas Boy's Dubbers K Running Shoes",
		tag: "BS(4)(1)",
		price: 2028,
		inCart: 0
	},
	{
		name: 32,
		fname: 'Geometrical Shaped Pattern Girl’s Dress with Bow at the back',
		tag: 'GC(1)(1)',
		price: 799,
		inCart: 0
	},
	{
		name: 33,
		fname: 'Rainbow Printed T-shirt,Pink Colour For Girls,Pure Cotton',
		tag: 'GC(2)(1)',
		price: 249,
		inCart: 0
	},
	{
		name: 34,
		fname: 'Multi-coloured Stylish Jumpsuits for Fashionable Girls With straps',
		tag: 'GC(3)(1)',
		price: 1013,
		inCart: 0
	},
	{
		name: 35,
		fname: 'Premium Floral Print Crop, Soft Fabric Jumpsuit Kids Fance Top & Plazo',
		tag: 'GC(4)(1)',
		price: 1299,
		inCart: 0
	},
	{
		name: 36,
		fname: "Barbie Girl's Indian Shoes",
		tag: 'GS(1)(1)',
		price: 359,
		inCart: 0
	},
	{
		name: 37,
		fname: "Skechers Girl's Galaxy Lights Leather Sneakers",
		tag: 'GS(2)(1)',
		price: 1265,
		inCart: 0
	},
	{
		name: 38,
		fname: "Barbie Girl's Indian Shoes",
		tag: 'GS(3)(1)',
		price: 349,
		inCart: 0
	},
	{
		name: 39,
		fname: 'Hopscotch Girls PU Solid Bow Applique Mary Jane in Gold Color',
		tag: 'GS(4)(1)',
		price: 378,
		inCart: 0
	}
];

for(let i = 0; i< cart2.length; i++){
	cart2[i].addEventListener('click', function() {
		var value2 = parseInt(inCarts2[i].value);
		cartnumbers2(products2[i],value2);
		totalcost2(products2[i],value2);
		inCarts2[i].value = "1";
	})
}

for(let i = 0; i< buy2.length; i++){
	buy2[i].addEventListener('click', function() {
		var value2 = parseInt(inCarts2[i].value);
		cost2(products2[i],value2);
		inCarts2[i].value = "1";
	})
}

for(let i = 0; i< decrease2.length; i++){
	decrease2[i].addEventListener('click', function() {
		var a = parseInt(inCarts2[i].value);
		if(a == 0){
			inCarts2[i].value = 0;
		}else{
			var b = a - 1;
			inCarts2[i].value = b;
		}
	})
}

for(let i = 0; i< increase2.length; i++){
	increase2[i].addEventListener('click', function() {
		var a = parseInt(inCarts2[i].value);
		var b = a + 1;
		inCarts2[i].value = b;
	})
}

function onLoadCart2(){
	let productnumbers2 = localStorage.getItem('cartnumbers');
	if(productnumbers2){
		document.querySelector('.items').textContent = productnumbers2;
	}
}

function cartnumbers2(product2,value2){
	let productnumbers2 = localStorage.getItem('cartnumbers');
	productnumbers2 = parseInt(productnumbers2);
	if( productnumbers2 ){
		localStorage.setItem('cartnumbers', productnumbers2 + value2);
		document.querySelector('.items').textContent = productnumbers2 + value2;
	}else{
		localStorage.setItem('cartnumbers', value2);
		document.querySelector('.items').textContent = value2;
	}
	setItems2(product2,value2);
}

function setItems2(product2,value2){
	let cartItems2 = localStorage.getItem('productsInCart2');
	cartItems2 = JSON.parse(cartItems2);
	if(cartItems2 != null){
		if(cartItems2[product2.name] == undefined){
			cartItems2 = {
				...cartItems2,
				[product2.name]: product2
			}
		}
		cartItems2[product2.name].inCart += value2;
	}else{
		product2.inCart = value2;
		cartItems2 = {
			[product2.name]: product2
		}
	}
	localStorage.setItem('productsInCart2', JSON.stringify(cartItems2));
}

function totalcost2(product2,value2){
	let cartCost2 = localStorage.getItem('totalCost');
	price2 = parseInt(product2.price);
	totalprice2 = price2 * value2;
	if(cartCost2 != null){
		cartCost2 = parseInt(cartCost2);
		localStorage.setItem('totalCost', cartCost2 + totalprice2);
	}else{
		localStorage.setItem('totalCost', totalprice2);
	}
}

function displayCart2(){
	let cartItems2 = localStorage.getItem("productsInCart2");
	cartItems2 = JSON.parse(cartItems2);
	let productContainers2 = document.querySelector('.products1');
	let productContainer2 = document.querySelector('.product2');
	let cartCost2 = localStorage.getItem('totalCost');
	if(cartItems2 && productContainer2){
		productContainers2.innerHTML = '';
		Object.values(cartItems2).map(item => {
			productContainer2.innerHTML += `
			<div class="productItem1">
				<a class="remove" onClick="removeItem2(${item.name})"><ion-icon name="close-circle"></ion-icon></a>
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
		let costContainer2 = document.querySelector('.sub-total');
		let numbers2 = localStorage.getItem('cartnumbers');
		costContainer2.innerHTML = '';
		costContainer2.innerHTML += `
		<div class="sub">
			<span class = "heading">SUB - TOTAL</span>
			<span class = "total-item">(${numbers2} items) :</span>
			<span class = "total-cost">&#8377; ${cartCost2}.00</span>
			<span class="payment"><a href="payment.html" onClick="buy()">Proceed to Buy</a></span>
		</div>
		`
	}
}

function cost2(product2,value2){
	let price2 = parseInt(product2.price);
	let name2 = (product2.fname);
	let totalprice2 = price2 * value2;
	localStorage.setItem('cost',totalprice2);
	localStorage.setItem('quantity',value2);
	localStorage.setItem('name',name2);
}

function buy(){
	let cost2 = localStorage.getItem('cost');
	if(cost2){
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

function removeItem2(product2){
	let cartItems2 = localStorage.getItem("productsInCart2");
	let cartCost2 = localStorage.getItem('totalCost');
	let productnumbers2 = localStorage.getItem('cartnumbers');
	cartItems2 = JSON.parse(cartItems2);
	var total2 = cartItems2[product2].price * cartItems2[product2].inCart;
	var cart2 = cartItems2[product2].inCart;
	cartCost2 = cartCost2 - total2;
	productnumbers2 = productnumbers2 - cart2;
	cartItems2[product2].inCart = 0;
	delete cartItems2[product2];
	localStorage.setItem('productsInCart2',JSON.stringify(cartItems2));
	localStorage.setItem('totalCost', cartCost2);
	localStorage.setItem('cartnumbers', productnumbers2);
	let lengthGet2 = localStorage.getItem("productsInCart2");
	let length2 = lengthGet2.length;
	if(length2 == 2){
		localStorage.removeItem('productsInCart2');
	}
	if(productnumbers2 == 0){
		localStorage.removeItem('cartnumbers');
	}
	if(cartCost2 == 0){
		localStorage.removeItem('totalCost');
	}
	location.reload();
}

 onLoadCart2();
 displayCart2();
