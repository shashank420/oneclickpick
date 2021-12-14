let cart1 = document.querySelectorAll('.atc1');
let buy1 = document.querySelectorAll('.buy1');
let decrease1 = document.querySelectorAll('.decrease');
let increase1 = document.querySelectorAll('.increase');
let inCarts1 = document.querySelectorAll('.quantity');

let products1 = [
	{
		name: 0,
		fname: 'New Apple MacBook Air (13-inch, 1.1GHz Dual-core 10th-Generation Intel Core i3 Processor, 8GB RAM, 256GB Storage) - Space Grey',
		tag: 'C(4)(1)',
		price: 92990,
		inCart: 0
	},
	{
		name: 1,
		fname: 'ASUS ZenBook Duo UX481FL-BM5811T Intel Core i5 10th Gen 14-inch FHD Thin and Light Laptop (8GB RAM/512GB NVMe SSD/Windows 10/2GB NVIDIA GeForce MX250 Graphics/ScreenPad Plus/1.50 Kg), Celestial Blue',
		tag: 'C(1)(1)',
		price: 89980,
		inCart: 0
	},
	{
		name: 2,
		fname: 'HP 20-c417in AIO 2018 19.5-inch All-in-One Desktop (Celeron J4005/4GB/1TB/Windows 10/Integrated Graphics)',
		tag: 'C(2)(1)',
		price: 28719,
		inCart: 0
	},
	{
		name: 3,
		fname: 'Lenovo Ideacentre A340 8th Gen Intel Core I3 21.5 inch All in One Desktop (4GB/ 1 TB HDD/DOS/Integrated Graphics/DVD-RW/Black)',
		tag: 'C(3)(1)',
		price: 34988,
		inCart: 0
	},
	{
		name: 4,
		fname: 'Artis S21 2.0 Channel Stereo USB Multimedia Speaker (Black)',
		tag: 'CA(1)(1)',
		price: 649,
		inCart: 0
	},
	{
		name: 5,
		fname: 'ASUS 90W Laptop Charger AC/DC',
		tag: 'CA(2)(1)',
		price: 2344,
		inCart: 0
	},
	{
		name: 6,
		fname: 'Cooler Master MLX-D36M-A20PC-R1 MasterLiquid ML360R Addressable RGB AIO CPU Liquid Cooler 28 Independently-Controlled LEDs Triple 120mm ARGB Air Balance MF',
		tag: 'CA(3)(1)',
		price: 13690,
		inCart: 0
	},
	{
		name: 7,
		fname: 'Corsair TX-M Series 650 Watt 80 Plus Gold Certified PSU (CP-9020132-UK) Hybrid Modular Power Supply Unit - Black',
		tag: 'CA(4)(1)',
		price: 10699,
		inCart: 0
	},
	{
		name: 8,
		fname: 'Gskill F4-3000C16D-16GTZR TridentZ RGB Series 16GB (2x8GB) 3000MHz DDR4 CL16 Desktop Gaming Memory (F4-3000C16D-16GTZR)',
		tag: 'CA(5)(1)',
		price: 9877,
		inCart: 0
	},
	{
		name: 9,
		fname: 'HP KM300F Gaming Keyboard and Mouse Combo (8AA01AA)',
		tag: 'CA(6)(1)',
		price: 1654,
		inCart: 0
	},
	{
		name: 10,
		fname: 'Intel® Core™ i9-10900K Processor (20M Cache, up to 5.30 GHz)',
		tag: 'CA(7)(1)',
		price: 53644,
		inCart: 0
	},
	{
		name: 11,
		fname: 'Samsung 970 PRO SSD 512GB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology (MZ-V7P512BW), Black/Red',
		tag: 'CA(8)(1)',
		price: 12456,
		inCart: 0
	},
	{
		name: 12,
		fname: 'iBELL Hold The World. Digitally! SM515 750-Watt Panini Grill Sandwich Maker with Floating Hinges',
		tag: 'H(1)(1)',
		price: 1399,
		inCart: 0
	},
	{
		name: 13,
		fname: 'LG 679 L Door-in-Door Inverter linear Side-by-Side Refrigerator (GC-M247UGBM, Black Glass, LG ThinQ)',
		tag: 'H(2)(1)',
		price: 115449,
		inCart: 0
	},
	{
		name: 14,
		fname: 'Samsung 23 L Solo Microwave Oven (MS23K3513AK/T, Black)',
		tag: "H(3)(1)",
		price: 6200,
		inCart: 0
	},
	{
		name: 15,
		fname: 'Whirlpool 1.5 Ton 3 Star Inverter Split AC (Copper, 1.5T MAGICOOL PRO+ 3S COPR INVERTER, White)',
		tag: 'H(4)(1)',
		price: 28990,
		inCart: 0
	},
    {
		name: 16,
		fname: 'Apple iPhone 11 Pro Max (512GB) - Space Grey',
		tag: 'S(1)(1)',
		price: 150800,
		inCart: 0
	},
	{
		name: 17,
		fname: 'OnePlus 8 (Glacial Green 8GB RAM+128GB Storage)',
		tag: 'S(2)(1)',
		price: 41999,
		inCart: 0
	},
	{
		name: 18,
		fname: 'Mi 10 (Coral Green, 8GB RAM, 256GB Storage) - 108MP Quad Camera, SD 865 Processor, 5G Ready',
		tag: 'S(3)(1)',
		price: 49999,
		inCart: 0
	},
	{
		name: 19,
		fname: 'Samsung Galaxy Note 10+ (Aura Glow, 12GB RAM, 256GB Storage)',
		tag: 'S(4)(1)',
		price: 84000,
		inCart: 0
	},
	{
		name: 20,
		fname: 'boAt BassHeads 100 in-Ear Wired Earphones with Super Extra Bass',
		tag: 'SA(1)(1)',
		price: 398,
		inCart: 0
	},
	{
		name: 21,
		fname: 'JBL Tune 750BTNC Over-Ear Wireless Active Noise-Cancelling Headphones with 15 Hours Playtime (Black)',
		tag: 'SA(2)(1)',
		price: 5999,
		inCart: 0
	},
	{
		name: 22,
		fname: 'Mi 10000mAH Li-Polymer Power Bank 2i (Black) with 18W Fast Charging',
		tag: 'SA(3)(1)',
		price: 899,
		inCart: 0
	},
	{
		name: 23,
		fname: 'Samsung Original EP-TA20IWECGIN Type C Fast Charger (White)',
		tag: 'SA(4)(1)',
		price: 649,
		inCart: 0
	}
];

for(let i = 0; i< cart1.length; i++){
	cart1[i].addEventListener('click', function() {
		var value1 = parseInt(inCarts1[i].value);
		cartnumbers1(products1[i],value1);
		totalcost1(products1[i],value1);
		inCarts1[i].value = "1";
	})
}

for(let i = 0; i< buy1.length; i++){
	buy1[i].addEventListener('click', function() {
		var value1 = parseInt(inCarts1[i].value);
		cost1(products1[i],value1);
		inCarts1[i].value = "1";
	})
}

for(let i = 0; i< decrease1.length; i++){
	decrease1[i].addEventListener('click', function() {
		var a = parseInt(inCarts1[i].value);
		if(a == 0){
			inCarts1[i].value = 0;
		}else{
			var b = a - 1;
			inCarts1[i].value = b;
		}
	})
}

for(let i = 0; i< increase1.length; i++){
	increase1[i].addEventListener('click', function() {
		var a = parseInt(inCarts1[i].value);
		var b = a + 1;
		inCarts1[i].value = b;
	})
}

function onLoadCart1(){
	let productnumbers1 = localStorage.getItem('cartnumbers');
	if(productnumbers1){
		document.querySelector('.items').textContent = productnumbers1;
	}
}

function cartnumbers1(product1,value1){
	let productnumbers1 = localStorage.getItem('cartnumbers');
	productnumbers1 = parseInt(productnumbers1);
	if( productnumbers1 ){
		localStorage.setItem('cartnumbers', productnumbers1 + value1);
		document.querySelector('.items').textContent = productnumbers1 + value1;
	}else{
		localStorage.setItem('cartnumbers', value1);
		document.querySelector('.items').textContent = value1;
	}
	setItems1(product1,value1);
}

function setItems1(product1,value1){
	let cartItems1 = localStorage.getItem('productsInCart1');
	cartItems1 = JSON.parse(cartItems1);
	if(cartItems1 != null){
		if(cartItems1[product1.name] == undefined){
			cartItems1 = {
				...cartItems1,
				[product1.name]: product1
			}
		}
		cartItems1[product1.name].inCart += value1;
	}else{
		product1.inCart = value1;
		cartItems1 = {
			[product1.name]: product1
		}
	}
	localStorage.setItem('productsInCart1', JSON.stringify(cartItems1));
}

function totalcost1(product1,value1){
	let cartCost1 = localStorage.getItem('totalCost');
	price1 = parseInt(product1.price);
	totalprice1 = price1 * value1;
	if(cartCost1 != null){
		cartCost1 = parseInt(cartCost1);
		localStorage.setItem('totalCost', cartCost1 + totalprice1);
	}else{
		localStorage.setItem('totalCost', totalprice1);
	}
}

function displayCart1(){
	let cartItems1 = localStorage.getItem("productsInCart1");
	cartItems1 = JSON.parse(cartItems1);
	let productContainers1 = document.querySelector('.products1');
	let productContainer1 = document.querySelector('.product1');
	let cartCost1 = localStorage.getItem('totalCost');
	if(cartItems1 && productContainer1){
		productContainers1.innerHTML = '';
		Object.values(cartItems1).map(item => {
			productContainer1.innerHTML += `
			<div class="productItem1">
				<a class="remove" onClick="removeItem1(${item.name})"><ion-icon name="close-circle"></ion-icon></a>
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
		let costContainer1 = document.querySelector('.sub-total');
		let numbers1 = localStorage.getItem('cartnumbers');
		costContainer1.innerHTML = '';
		costContainer1.innerHTML += `
		<div class="sub">
			<span class = "heading">SUB - TOTAL</span>
			<span class = "total-item">(${numbers1} items) :</span>
			<span class = "total-cost">&#8377; ${cartCost1}.00</span>
			<span class="payment"><a href="payment.html" onClick="buy()">Proceed to Buy</a></span>
		</div>
		`
	}
}

function cost1(product1,value1){
	let price1 = parseInt(product1.price);
	let name1 = (product1.fname);
	let totalprice1 = price1 * value1;
	localStorage.setItem('cost',totalprice1);
	localStorage.setItem('quantity',value1);
	localStorage.setItem('name',name1);
}

function buy(){
	let cost1 = localStorage.getItem('cost');
	if(cost1){
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

function removeItem1(product1){
	let cartItems1 = localStorage.getItem("productsInCart1");
	let cartCost1 = localStorage.getItem('totalCost');
	let productnumbers1 = localStorage.getItem('cartnumbers');
	cartItems1 = JSON.parse(cartItems1);
	var total1 = cartItems1[product1].price * cartItems1[product1].inCart;
	var cart1 = cartItems1[product1].inCart;
	cartCost1 = cartCost1 - total1;
	productnumbers1 = productnumbers1 - cart1;
	cartItems1[product1].inCart = 0;
	delete cartItems1[product1];
	localStorage.setItem('productsInCart1',JSON.stringify(cartItems1));
	localStorage.setItem('totalCost', cartCost1);
	localStorage.setItem('cartnumbers', productnumbers1);
	let lengthGet1 = localStorage.getItem("productsInCart1");
	let length1 = lengthGet1.length;
	if(length1 == 2){
		localStorage.removeItem('productsInCart1');
	}
	if(productnumbers1 == 0){
		localStorage.removeItem('cartnumbers');
	}
	if(cartCost1 == 0){
		localStorage.removeItem('totalCost');
	}
	location.reload();
}



 onLoadCart1();
 displayCart1();
