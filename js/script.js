mainList = {
 budget: "1500",
 name: "Veles",
 shopGoods:[],
 open: true
}
employers = {
	name:[]
}
for (var i = 0; i < 3; i++) {
	mainList.shopGoods = prompt("Какой тип товаров будем продавать?");
	console.log(mainList.shopGoods);
	if(i == 2){
		alert(mainList.budget);
	} 	
}
