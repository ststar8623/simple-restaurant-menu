var headImg = document.createElement('img')
headImg.setAttribute('src', 'img/v16lounge01.jpg')
headImg.setAttribute('class', 'img-responsive')
headImg.setAttribute('alt', 'restaurant')
headImg.setAttribute('class', 'img-thumbnail')

var loungeImg = document.getElementById('jumbotron')
loungeImg.appendChild(headImg)


// sushi sashimi array
var sushiSashimi = [
	{
		name: 'Maguro',
		info: 'tuna',
		price: '3.5 / 10'
	},
	{
		name: 'Hamachi',
		info: 'yellowtail',
		price: '3.5 / 10'
	},
	{
		name: 'Shiro Maguro',
		info: 'albcore',
		price: '3.5 / 10'
	},
	{
		name: 'Sake',
		info: 'salmon',
		price: '3 / 9'
	},
	{
		name: 'Ebi',
		info: 'cooked shrimp',
		price: '3 / n/a'
	},
	{
		name: 'Ikura',
		info: 'salmon roe',
		price: '3 / n/a'
	},
	{
		name: 'Tobiko',
		info: 'flying fish roe',
		price: '3 / n/a'
	},
	{
		name: 'Ankimo',
		info: 'monkfish liver',
		price: '3 / n/a'
	},
	{
		name: 'Amaebi',
		info: 'sweet shrimp',
		price: '4 / n/a'
	},
	{
		name: 'Tamago',
		info: 'egg omelette',
		price: '3.5 / n/a'
	},
	{
		name: 'Unagi',
		info: 'eel',
		price: '3 / 8'
	},
	{
		name: 'Hotate',
		info: 'scallop',
		price: '3.5 / n/a'
	},
	{
		name: 'Wagu',
		info: 'escolar',
		price: '3 / 8'
	}
]

// classic rolls and handrolls array
var classicRolls = [
	{
		name: 'Kampyo Maki',
		info: 'cooked dried gourd',
		price: '5 / 4'
	},
	{
		name: 'Kappy Maki',
		info: 'cucumber',
		price: '4 / 4'
	},
	{
		name: 'Avocado Maki',
		info: '',
		price: '4 / 4'
	},
	{
		name: 'Q & A',
		info: 'cucumber & avocado',
		price: '4 / 4'
	},
	{
		name: 'Oshinko Maki',
		info: 'pickled radish',
		price: '4 / 4'
	},
	{
		name: 'Shitake Maki',
		info: 'soy braised mushroom',
		price: '4 / 4'
	},
	{
		name: 'Ume Shiso',
		info: 'plum paste, perilla leaves',
		price: '4 / 4'
	},
	{
		name: 'Sweet Potato Maki',
		info: '',
		price: '6 / 4'
	},
	{
		name: 'Tekka Maki',
		info: 'tuna',
		price: '7 / 5'
	},
	{
		name: 'Negihama',
		info: 'yellowtail, green onion',
		price: '8 / 5'
	},
	{
		name: 'California Roll',
		info: 'snowcrab, avocado, tobiko',
		price: '7 / 5'
	},
	{
		name: 'Spicy Tuna Roll',
		info: 'cucumber, garlic, spicy aioli, nanami spice',
		price: '8 / 5'
	},
	{
		name: 'Spicy Hamachi Roll',
		info: 'cucumber, kaiware',
		price: '8 / 5'
	},
	{
		name: 'Philly Roll',
		info: 'smoked salmon, cream cheese & tobiko',
		price: '9 / 5'
	},
	{
		name: 'Salmon Avocado Roll',
		info: '',
		price: '7 / 5'
	},
	{
		name: 'Rock-N-Roll',
		info: 'eel, avocado, eel sauce',
		price: '8 / 5'
	},
	{
		name: 'Salmon Skin Roll',
		info: 'shiso, cucumber, daikon',
		price: '8 / 5'
	},
]

// array for special rolls
var specialRolls = [
	{
		name: 'King of Jungle',
		info: 'snowcrab, avocado, topped w/ salmon, tobiko, spicy sauce "baked"',
		price: '14'
	},
	{
		name: 'T-N-T',
		info: 'yellowtail, whitefish, "tempura"',
		price: '15'
	},
	{
		name: 'Spicy Rainbow',
		info: 'spicy tuna, cucumber, topped w/ 5 assorted fish',
		price: '16'
	},
	{
		name: 'Salmon Citrous Roll',
		info: 'snowcrab, avocado, topped with salmon & sliced lemon',
		price: '15'
	},
	{
		name: 'Lobster Roll',
		info: 'tempura lobster, avocado, tobiko',
		price: '14'
	},
	{
		name: 'Wagyu Roll',
		info: 'grilled asparagus, garlic chip, seared wagyu beef',
		price: '18'
	},
	{
		name: 'Flying Buddha',
		info: 'tempura sweet potato, topped with grilled eggplant, avocado',
		price: '13'
	},
	{
		name: 'Rainbow Roll',
		info: 'snowcrab, avocado, topped with assorted fish',
		price: '15'
	},
	{
		name: 'Dragon Roll',
		info: 'tempura shrimp, snowcrab topped with avocado, eel, tobiko, eel sauce',
		price: '16'
	},
	{
		name: 'Futomaki',
		info: 'brown rice, asparagus, kaiware, cucumber, kampo & pickled radish',
		price: '8'
	},
	{
		name: 'Mission Roll',
		info: 'tuna, salmon, albacore, tobiko, wrapped w/cucumber & ponzu sauce',
		price: '10'
	},
	{
		name: 'Rising Sun',
		info: 'avocado, cucumber, hamachi topped with seared escolar',
		price: '16'
	},
	{
		name: 'Crunchy Roll',
		info: 'eel, avocado, tempura flakes with spicy crab & unagi sauce',
		price: '17'
	},
	{
		name: 'Sakura Blossom',
		info: 'salmon, mango, cucumber topped spicy tuna tobiko & micro green',
		price: '16'
	},
	{
		name: 'Green Forest',
		info: 'brown rice, cucumber, asparagus topped with avocado & ume salt',
		price: '15'
	},
	{
		name: 'Aloha',
		info: 'assorted fish poke, cucumber, kaiware topped with red tuna',
		price: '15'
	},
	{
		name: 'Ninja',
		info: 'eel, albacore, avocado, tobiko wrapped with seaweed',
		price: '10'
	},

]

var soupSalad = [
	{
		name: 'Miso Soup',
		info: 'seaweed, tofu, green onion',
		price: 3
	},
	{
		name: 'Red Miso Clam',
		info: 'red miso, sake, clam',
		price: 7
	},
	{
		name: 'Fire Roasted Beets',
		info: 'orange, micro green, goat cheese & balisamic beets vinaigrette',
		price: 10
	},
	{
		name: 'Goma Ae',
		info: 'cold spinach with seasame sauce',
		price: 6
	},
	{
		name: 'House Salad',
		info: 'mix green, cherry tomato, soy ginger dressing',
		price: 6
	},
	{
		name: 'Sunomomno',
		info: 'cucumber seaweed, rice vinegar',
		price: 5
	},
	{
		name: 'Wakame Salad',
		info: 'seaweed, fresh tosaka',
		price: 6
	},
	{
		name: 'Mizuna Salad',
		info: 'mizuna, vinaigrette sesame dressing',
		price: 7
	},
	{
		name: 'Seared Tuna Salad',
		info: 'mix green, sesame crusted ahi tuna, miso-mustard vinaigrette',
		price: 12
	},
	{
		name: 'Salmon Skin Salad',
		info: 'seasonal green, kaiware, yuzu-ponzu dressing',
		price: 8
	}
]

var oysterCrudo = [
	{
		name: 'Miyagi',
		info: '',
		price: 13
	},
	{
		name: 'Shigoku',
		info: '',
		price: 16
	},
	{
		name: 'Kumamoto',
		info: '',
		price: 20
	},
	{
		name: 'Oyster Gem',
		info: 'oyster,uni, tobiko, ikura, quail egg, ponzu & green onion',
		price: 9
	},
	{
		name: 'Oyster Tasting',
		info: '1 each Miygai, Shigoku, Kumamoto',
		price: 9
	},
	{
		name: 'Oyster Shooter',
		info: 'negi, ponzu, momiji oroshi, tabasco, miyagi, sake',
		price: 6
	},
	{
		name: 'Hamachi Crudo',
		info: 'tosaka, serrano, ikura, black tobiko, orange soy',
		price: 14
	},
	{
		name: 'Wagyu Beef Carpaccio',
		info: 'microgreen, kaiware, wasabi vina',
		price: 15
	},
	{
		name: 'Salmon Tiradito',
		info: 'seared salmon, yuzu kosho, red onion, kaiware, ponzu & tobiko',
		prie: 12
	},
	{
		name: 'Ankimo Appetizer',
		info: 'monk fish liver',
		price: 9
	},
	{
		name: 'Salmon Taco',
		info: 'salsa, avocado, tempura nori',
		price: 12
	},
	{
		name: 'Konbu-jime Carpaccio',
		info: 'konbo kelp cured white fish, yuzu',
		price: 15
	},
	{
		name: 'Albacore Tataki',
		info: 'momiji, garlic chip, sweet onion, kaiware, ponzu, tobiko',
		price: 12
	},
	{
		name: 'Taro Poke',
		info: 'marinated tuna, serrano, sesame seed, avocado, taro chip',
		price: 13
	},
	{
		name: 'Mini Chirashi',
		info: 'assorted fresh fish w/ sushi rice',
		price: 15
	}
]

var starterGrilled = [
	{
		name: 'Edamame',
		info: 'soy bean',
		price: 4
	},
	{
		name: 'Sauteed Edamame',
		info: 'butter, garlic, spice',
		price: 7
	},
	{
		name: 'Agedashi Tofu',
		info: 'ito kaki, house dashi',
		price: 8
	},
	{
		name: 'Green Bean Goma',
		info: 'roasted green bean, black sesame dressing',
		price: 7
	},
	{
		name: 'Goyza',
		info: 'japanese pot sticker',
		price: 6
	},
	{
		name: 'Karaage Chicken',
		info: 'sake, garlic, soy',
		price: 7
	},
	{
		name: 'Fried Calamari',
		info: 'tempura calamari with roasted garlic ponzu sauce',
		price: 8
	},
	{
		name: 'Mochiko Ebi',
		info: 'crusted shrimp, spicy aioli',
		price: 6
	},
	{
		name: 'Baby Hotate',
		info: 'pan fry baby scallop, spicy ailoli, masago',
		price: 8
	},
	{
		name: 'Yakitori',
		info: 'chicken skewer with scallion',
		price: 7
	},
	{
		name: 'Hotate Bacon Skewer',
		info: 'bacon wrapped jumbo size scallop',
		price: 9
	},
	{
		name: '"Kobe" Sliders',
		info: 'masami ranch kobe burgers with aioli, pickles cucumber & mirco green on steamed bun',
		price: 8
	},
	{
		name: 'Kakiage Tempura',
		info: 'vegetable fritters with tentsuyu dipping sauce',
		price: 8
	},
	{
		name: 'Lamb Chop',
		info: 'steam organic baby broccoli, shichimi oyster sauce',
		price: 13,
		img: 'img/starterGrilled/lambchop.jpg'

	},
	{
		name: 'Pan-seared Duck Breast',
		info: 'red wine sauce, grilled seasonal vegetable',
		price: 18
	},
	{
		name: 'Saikyo Salmon',
		info: 'miso glazed salmon',
		price: 11
	},
	{
		name: 'Grilled Hamachi Kama',
		info: 'collar of yellowtail, oroshi ponzu (limited)',
		price: 12
	},
	{
		name: 'Prawn Tempura',
		info: 'black tiger shrimp, seasonal vegetable',
		price: 10
	},
	{
		name: 'Japanese White or Brown Rice',
		info: '',
		price: 3
	}
]

var moriawase = [
	{
		name: 'Moriawase',
		info: 'tuna, yellowtail, salmon, ebi & 4 pieces chef choice from seasonal item',
		price: 24
	}
]

// add menu table
	var sushi = document.getElementById('sushiSashimi');
	var classic = document.getElementById('classicRolls');
	var special = document.getElementById('specialRolls');
	var soupSaladList = document.getElementById('soupSalad');
	var oysterCrudoList = document.getElementById('oysterCrudo');
	var starterGrilledList = document.getElementById('starterGrilled');
	var moriawaseList = document.getElementById('moriawase');

	var table = document.createElement('table');
		table.className = 'table table-condensed table-hover'
	var table2 = document.createElement('table');
		table2.className = 'table table-condensed table-hover'
	var table3 = document.createElement('table');
		table3.className = 'table table-condensed table-hover'
	var table4 = document.createElement('table');
		table4.className = 'table table-condensed table-hover'
	var table5 = document.createElement('table');
		table5.className = 'table table-condensed table-hover'
	var table6 = document.createElement('table');
		table6.className = 'table table-condensed table-hover'
	var table7 = document.createElement('table');
		table7.className = 'table table-condensed table-hover' 

	var tBody = document.createElement('tbody');
	var tBody2 = document.createElement('tbody');
	var tBody3 = document.createElement('tbody');
	var tBody4 = document.createElement('tbody');
	var tBody5 = document.createElement('tbody');
	var tBody6 = document.createElement('tbody');
	var tBody7 = document.createElement('tbody');

	var row = document.createElement('tr');
	var row2 = document.createElement('tr');
	var row3 = document.createElement('tr');
	var row4 = document.createElement('tr');
	var row5 = document.createElement('tr');
	var row6 = document.createElement('tr');
	var row7 = document.createElement('tr');

	var cellHead = document.createElement('th');
	var cellHead2 = document.createElement('th');
	var cellHead3 = document.createElement('th');
	var cellHead4 = document.createElement('th');
	var cellHead5 = document.createElement('th');
	var cellHead6 = document.createElement('th');
	var cellHead7 = document.createElement('th');

	cellHead.textContent = 'A La Carte' + ' ' + '[ ' + 'Nigiri 1PC / Sashimi 3PCs' + ' ]';
	cellHead2.textContent = 'Classic Rolls / Hand Rolls';
	cellHead3.textContent = 'Special Rolls';
	cellHead4.textContent = 'Soup & Salad';
	cellHead5.textContent = 'Oyster & Crudo';
	cellHead6.textContent = 'Hot Starters / Tempura, Grill & Side';
	cellHead7.textContent = 'Moriawase';

	row.appendChild(cellHead);
	row2.appendChild(cellHead2);
	row3.appendChild(cellHead3);
	row4.appendChild(cellHead4);
	row5.appendChild(cellHead5);
	row6.appendChild(cellHead6);
	row7.appendChild(cellHead7);

	tBody.appendChild(row);
	tBody2.appendChild(row2);
	tBody3.appendChild(row3);
	tBody4.appendChild(row4);
	tBody5.appendChild(row5);
	tBody6.appendChild(row6);
	tBody7.appendChild(row7);


	for (i = 0; i < sushiSashimi.length; i++){
		var sushiName = sushiSashimi[i].name;
		var sushiInfo = sushiSashimi[i].info;
		var sushiPrice = sushiSashimi[i].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = sushiName + " " + " " + "( " + sushiInfo + " )" + " " + sushiPrice;

		row.appendChild(cell);

		tBody.appendChild(row);
	}

	for (j = 0; j < classicRolls.length; j++){
		var classicName = classicRolls[j].name;
		var classicInfo = classicRolls[j].info;
		var classicPrice = classicRolls[j].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = classicName + " " + " " + "( " + classicInfo + " )" + " " + classicPrice;

		row.appendChild(cell);

		tBody2.appendChild(row);

	}

	for (k = 0; k < specialRolls.length; k++){
		var specialName = specialRolls[k].name;
		var specialInfo = specialRolls[k].info;
		var specialPrice = specialRolls[k].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td')
			cell.textContent = specialName + " " + " " + "( " + specialInfo + " )" + " " + specialPrice; 

		row.appendChild(cell);

		tBody3.appendChild(row);
	}

	for (m = 0; m < soupSalad.length; m++){
		var soupSaladName = soupSalad[m].name;
		var soupSaladInfo = soupSalad[m].info;
		var soupSaladPrice = soupSalad[m].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = soupSaladName + " " + " " + "( " + soupSaladInfo + " )" + " " + soupSaladPrice;

		row.appendChild(cell);

		tBody4.appendChild(row);
	}

	for (n = 0; n < oysterCrudo.length; n++){
		var oysterCrudoName = oysterCrudo[n].name;
		var oysterCrudoInfo = oysterCrudo[n].info;
		var oysterCrudoPrice = oysterCrudo[n].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = oysterCrudoName + " " + " " + "( " + oysterCrudoInfo + " )" + " " + oysterCrudoPrice;

		row.appendChild(cell);

		tBody5.appendChild(row);
	}

	for (p = 0; p < starterGrilled.length; p++){
		var starterGrilledName = starterGrilled[p].name;
		var starterGrilledInfo = starterGrilled[p].info;
		var starterGrilledPrice = starterGrilled[p].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = starterGrilledName + " " + " " + "( " + starterGrilledInfo + " )" + " " + starterGrilledPrice;
			cell.setAttribute('id', 'starterGrill');

		row.appendChild(cell);			

		tBody6.appendChild(row);
	}

	for (q = 0; q < moriawase.length; q++){
		var moriawaseName = moriawase[q].name;
		var moriawaseInfo = moriawase[q].info;
		var moriawasePrice = moriawase[q].price;

		var row = document.createElement('tr');

		var cell = document.createElement('td');
			cell.textContent = moriawaseName + " " + " " + "( " + moriawaseInfo + " )" + " " + moriawasePrice;

		row.appendChild(cell);

		tBody7.appendChild(row);

	}

	table.appendChild(tBody);
	sushi.appendChild(table);

	table2.appendChild(tBody2);
	classic.appendChild(table2);

	table3.appendChild(tBody3);
	special.appendChild(table3);

	table4.appendChild(tBody4);
	soupSaladList.appendChild(table4);

	table5.appendChild(tBody5);
	oysterCrudoList.appendChild(table5);

	table6.appendChild(tBody6);
	starterGrilledList.appendChild(table6);

	table7.appendChild(tBody7);
	moriawaseList.appendChild(table7);


// welcoming page animation 

$(function() {

	setTimeout(function() {
		$('li.colorful').removeClass('hidden');
	}, 1000);
	setTimeout(function() {
		$('li.colorful1').removeClass('hidden');
	}, 1100);
	setTimeout(function() {
		$('li.colorful2').removeClass('hidden');
	}, 1200);
	setTimeout(function() {
		$('li.colorful3').removeClass('hidden');
	}, 1300);
	setTimeout(function() {
		$('li.colorful4').removeClass('hidden');
	}, 1400);
	setTimeout(function() {
		$('li.colorful5').removeClass('hidden');
	}, 1500);
	setTimeout(function() {
		$('li.colorful6').removeClass('hidden');
	}, 1600);
	setTimeout(function() {
		$('li.colorful6').addClass('hidden');
	}, 3200);
	setTimeout(function() {
		$('li.colorful5').addClass('hidden');
	}, 3300);
	setTimeout(function() {
		$('li.colorful4').addClass('hidden');
	}, 3400);
	setTimeout(function() {
		$('li.colorful3').addClass('hidden');
	}, 3500);
	setTimeout(function() {
		$('li.colorful2').addClass('hidden');
	}, 3600);
	setTimeout(function() {
		$('li.colorful1').addClass('hidden');
	}, 3700);
	setTimeout(function() {
		$('li.colorful').addClass('hidden');
	}, 3800);
	setTimeout(function() {
		$('.fly-in-text').remove();
	}, 4000);


	setTimeout(function() {
		$('li.colorful-1').removeClass('hidden');
	}, 4600);
	setTimeout(function() {
		$('li.colorful-2').removeClass('hidden');
	}, 4700);
	setTimeout(function() {
		$('li.colorful-3').removeClass('hidden');
	}, 4800);
	setTimeout(function() {
		$('li.colorful-4').removeClass('hidden');
	}, 4900);
	setTimeout(function() {
		$('li.colorful-5').removeClass('hidden');
	}, 5000);
	setTimeout(function() {
		$('li.colorful-6').removeClass('hidden');
	}, 5100);
	setTimeout(function() {
		$('li.colorful-7').removeClass('hidden');
	}, 5200);
	setTimeout(function() {
		$('li.colorful-8').removeClass('hidden');
	}, 5300);
	setTimeout(function() {
		$('li.colorful-9').removeClass('hidden');
	}, 5400);
	setTimeout(function() {
		$('li.colorful-10').removeClass('hidden');
	}, 5500);
	setTimeout(function() {
		$('li.colorful-11').removeClass('hidden');
	}, 5600);
	setTimeout(function() {
		$('li.colorful-12').removeClass('hidden');
	}, 5700);
	setTimeout(function() {
		$('li.colorful-13').removeClass('hidden');
	}, 5800);
	setTimeout(function() {
		$('li.colorful-14').removeClass('hidden');
	}, 5900);
	setTimeout(function() {
		$('li.colorful-14').addClass('hidden');
	}, 8000);
	setTimeout(function() {
		$('li.colorful-13').addClass('hidden');
	}, 8100);
	setTimeout(function() {
		$('li.colorful-12').addClass('hidden');
	}, 8200);
	setTimeout(function() {
		$('li.colorful-11').addClass('hidden');
	}, 8300);
	setTimeout(function() {
		$('li.colorful-10').addClass('hidden');
	}, 8400);
	setTimeout(function() {
		$('li.colorful-9').addClass('hidden');
	}, 8500);
	setTimeout(function() {
		$('li.colorful-8').addClass('hidden');
	}, 8600);
	setTimeout(function() {
		$('li.colorful-7').addClass('hidden');
	}, 8700);
	setTimeout(function() {
		$('li.colorful-6').addClass('hidden');
	}, 8800);
	setTimeout(function() {
		$('li.colorful-5').addClass('hidden');
	}, 8900);
	setTimeout(function() {
		$('li.colorful-4').addClass('hidden');
	}, 9000);
	setTimeout(function() {
		$('li.colorful-3').addClass('hidden');
	}, 9100);
	setTimeout(function() {
		$('li.colorful-2').addClass('hidden');
	}, 9200);
	setTimeout(function() {
		$('li.colorful-1').addClass('hidden');
	}, 9300);
	setTimeout(function() {
		$('.fly-in-text2').remove();
	}, 10000);
});

$(document).ready(function(){
	$('#cutesushigroup').mouseenter(function(){
		$('#cutesushigroup').fadeTo('slow', 1);
	});
	$('#cutesushigroup').mouseleave(function(){
		$('#cutesushigroup').fadeTo('slow', 0.5);
	});
});



