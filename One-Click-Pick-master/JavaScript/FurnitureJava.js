let cart4 = document.querySelectorAll('.atc4');
let buy4 = document.querySelectorAll('.buy4');
let decrease4 = document.querySelectorAll('.decrease');
let increase4 = document.querySelectorAll('.increase');
let inCarts4 = document.querySelectorAll('.quantity');

let products4 = [
	{
		name: 0,
		fname: 'Solimo Virgo Solid Sheesham Wood 4 seater Dining Table with Chairs (Teak Finish)',
		tag: 'dining(1)(1)',
		price: 24999,
		inCart: 0
	},
	{
		name: 1,
		fname: 'Solimo Clara 4 Seater Sheesham Wood Dining Table Set with Chairs (Walnut Finish)',
		tag: 'dining(2)(1)',
		price: 22999,
		inCart: 0
	},
	{
		name: 2,
		fname: 'Woodness Daisy 6 Seater Basic Upholstered Dining Table Set (Matte Finish, Wenge)',
		tag: 'dining(3)(1)',
		price: 34999,
		inCart: 0
	},
	{
		name: 3,
		fname: 'KM Decor Sheesham Wood Dining Table 6 Seater Set | 6 Seater Dining Table with Chairs for Living Room',
		tag: 'dining(4)(1)',
		price: 29899,
		inCart: 0
	},
	{
		name: 4,
		fname: 'Solimo Pyxis Engineered Wood TWO-Door Wardrobe (Wenge Finish)',
		tag: 'W(1)(1)',
		price: 21990,
		inCart: 0
	},
	{
		name: 5,
		fname: 'Solimo 2-Door Foldable Wardrobe, 6 Racks, Black',
		tag: 'W(2)(1)',
		price: 2199,
		inCart: 0
	},
	{
		name: 6,
		fname: 'Spacewood Optima 2-Door Wardrobe (Walnut Rigato)',
		tag: 'W(3)(1)',
		price: 9150,
		inCart: 0
	},
	{
		name: 7,
		fname: 'Atlantic Drawbridge Media Storage Cabinet - Store & Organize A Mix of Media 240Cds, 108DVDs Or 132 Blue-Ray/Video Games, Adjustable Shelves, PN37935726 in Black',
		tag: 'W(4)(1)',
		price: 2399,
		inCart: 0
	},
	{
		name: 8,
		fname: 'Serta RNE-3S-CC-SET Rane Collection Convertible Sofa, L66.1 x W33.1 x H29.5, Charcoal',
		tag: 'S(1)(1)',
		price: 11999,
		inCart: 0
	},
	{
		name: 9,
		fname: 'Novogratz Brittany Sofa Futon - Navy Linen',
		tag: 'S(2)(1)',
		price: 16999,
		inCart: 0
	},
	{
		name: 10,
		fname: 'Homelegance Rubin 85" Bonded Leather Sofa, Dark Brown',
		tag: 'S(3)(1)',
		price: 29500,
		inCart: 0
	},
	{
		name: 11,
		fname: 'Easy-Going Stretch Sofa Slipcover 1-Piece Couch Sofa Cover images Protector Soft with Elastic Bottom for Kids, Spandex Jacquard Fabric Small Checks(Sofa,Dark Gray)',
		tag: 'S(4)(1)',
		price: 3999,
		inCart: 0
	},
	{
		name: 12,
		fname: 'Captiver Bellezza Wooden Wall Mounted Dressing Table Stands Classic Walnut (80X60X13) cm',
		tag: 'dressing(1)(1)',
		price: 2999,
		inCart: 0
	},
	{
		name: 13,
		fname: '7 Drawers Dresser - images Storage Tower Unit for Bedroom, Hallway, Closet, Office Organization - Steel Frame, Wood Top, Easy Pull Fabric Bins Black/Charcoal',
		tag: 'dressing(2)(1)',
		price: 5200,
		inCart: 0
	},
	{
		name: 14,
		fname: 'Winsome Wood Henry Accent Table, Black',
		tag: "dressing(3)(1)",
		price: 3599,
		inCart: 0
	},
	{
		name: 15,
		fname: 'ODK Dresser with 5 Drawers, Fabric Storage Tower, Organizer Unit for Bedroom, Chest for Hallway, Closet. Steel Frame and Wood Top, Dark Grey',
		tag: 'dressing(4)(1)',
		price: 5099,
		inCart: 0
	}
];

for(let i = 0; i< cart4.length; i++){
	cart4[i].addEventListener('click', function() {
		var value4 = parseInt(inCarts4[i].value);
		cartnumbers4(products4[i],value4);
		totalcost4(products4[i],value4);

		inCarts4[i].value = "1";
	})
}

for(let i = 0; i< buy4.length; i++){
	buy4[i].addEventListener('click', function() {
		var value4 = parseInt(inCarts4[i].value);
		cost4(products4[i],value4);
		inCarts4[i].value = "1";
	})
}

for(let i = 0; i< decrease4.length; i++){
	decrease4[i].addEventListener('click', function() {
		var a = parseInt(inCarts4[i].value);
		if(a == 0){
			inCarts4[i].value = 0;
		}else{
			var b = a - 1;
			inCarts4[i].value = b;
		}
	})
}

for(let i = 0; i< increase4.length; i++){
	increase4[i].addEventListener('click', function() {
		var a = parseInt(inCarts4[i].value);
		var b = a + 1;
		inCarts4[i].value = b;
	})
}

function onLoadCart4(){
	let productnumbers4 = localStorage.getItem('cartnumbers');
	if(productnumbers4){
		document.querySelector('.items').textContent = productnumbers4;
	}
}

function cartnumbers4(product4,value4){
	let productnumbers4 = localStorage.getItem('cartnumbers');
	productnumbers4 = parseInt(productnumbers4);
	if( productnumbers4 ){
		localStorage.setItem('cartnumbers', productnumbers4 + value4);
		document.querySelector('.items').textContent = productnumbers4 + value4;
	}else{
		localStorage.setItem('cartnumbers', value4);
		document.querySelector('.items').textContent = value4;
	}
	setItems4(product4,value4);
}

function setItems4(product4,value4){
	let cartItems4 = localStorage.getItem('productsInCart4');
	cartItems4 = JSON.parse(cartItems4);
	if(cartItems4 != null){
		if(cartItems4[product4.name] == undefined){
			cartItems4 = {
				...cartItems4,
				[product4.name]: product4
			}
		}
		cartItems4[product4.name].inCart += value4;
	}else{
		product4.inCart = value4;
		cartItems4 = {
			[product4.name]: product4
		}
	}
	localStorage.setItem('productsInCart4', JSON.stringify(cartItems4));
}

function totalcost4(product4,value4){
	let cartCost4 = localStorage.getItem('totalCost');
	let price4 = parseInt(product4.price);
	let totalprice4 = price4 * value4;
	if(cartCost4 != null){
		cartCost4 = parseInt(cartCost4);
		localStorage.setItem('totalCost', cartCost4 + totalprice4);
	}else{
		localStorage.setItem('totalCost', totalprice4);
	}
}

function cost4(product4,value4){
	let price4 = parseInt(product4.price);
	let name4 = (product4.fname);
	let totalprice4 = price4 * value4;
	localStorage.setItem('cost',totalprice4);
	localStorage.setItem('quantity',value4);
	localStorage.setItem('name',name4);
}

function displayCart4(){
	let cartItems4 = localStorage.getItem("productsInCart4");
	cartItems4 = JSON.parse(cartItems4);
	let productContainers4 = document.querySelector('.products1');
	let productContainer4 = document.querySelector('.product4');
	let cartCost4 = localStorage.getItem('totalCost');
	if(cartItems4 && productContainer4){
		productContainers4.innerHTML = '';
		Object.values(cartItems4).map(item => {
			productContainer4.innerHTML += `
			<div class="productItem1">
				<a class="remove" onClick="removeItem4(${item.name})"><ion-icon name="close-circle"></ion-icon></a>
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
		let costContainer4 = document.querySelector('.sub-total');
		let numbers4 = localStorage.getItem('cartnumbers');
		costContainer4.innerHTML = '';
		costContainer4.innerHTML += `
		<div class="sub">
			<span class = "heading">SUB - TOTAL</span>
			<span class = "total-item">(${numbers4} items) :</span>
			<span class = "total-cost">&#8377; ${cartCost4}.00</span>
			<span class="payment"><a href="payment.html" onClick="buy()">Proceed to Buy</a></span>
		</div>
		`
	}
}

function buy(){
	let cost4 = localStorage.getItem('cost');
	if(cost4){
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

function removeItem4(product4){
	let cartItems4 = localStorage.getItem("productsInCart4");
	let cartCost4 = localStorage.getItem('totalCost');
	let productnumbers4 = localStorage.getItem('cartnumbers');
	cartItems4 = JSON.parse(cartItems4);
	var total4 = cartItems4[product4].price * cartItems4[product4].inCart;
	var cart4 = cartItems4[product4].inCart;
	cartCost4 = cartCost4 - total4;
	productnumbers4 = productnumbers4 - cart4;
	cartItems4[product4].inCart = 0;
	delete cartItems4[product4];
	localStorage.setItem('productsInCart4',JSON.stringify(cartItems4));
	localStorage.setItem('totalCost', cartCost4);
	localStorage.setItem('cartnumbers', productnumbers4);
	let lengthGet4 = localStorage.getItem("productsInCart4");
	let length4 = lengthGet4.length;
	if(length4 == 2){
		localStorage.removeItem('productsInCart4');
	}
	if(productnumbers4 == 0){
		localStorage.removeItem('cartnumbers');
	}
	if(cartCost4 == 0){
		localStorage.removeItem('totalCost');
	}
	location.reload();
}

 onLoadCart4();
 displayCart4();
