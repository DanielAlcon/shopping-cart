var Fruta = function (name, price, amount) {
    this.name = name;
    this.price = price;
    this.amount = amount;
};

Fruta.prototype.totalPriceFruit = function () {
    return this.price * this.amount;
};

var banana = new Fruta ("banana", 0.9, 1);
var orange = new Fruta ("orange", 0.8, 2);
var kiwi = new Fruta("kiwi", 1.2, 1);
var frutas = [banana, orange, kiwi]

function addFruit (fruit) {
	frutas.push(fruit);
};

var precioTotal = frutas.reduce(function(memo,fruit){
	return memo + fruit.totalPriceFruit();
}, 0);

var total= function (fruta1, fruta2, fruta3) {
    console.log (fruta1.amount + " " + fruta1.name + " " + fruta1.price + " " + fruta1.totalPriceFruit());
    console.log (fruta2.amount + " " + fruta2.name + " " + fruta2.price + " " + fruta2.totalPriceFruit());
    console.log (fruta3.amount + " " + fruta3.name + " " + fruta3.price + " " + fruta3.totalPriceFruit());
    console.log ("Total" + " " + precioTotal);

};

// funcion mostrar
function showFruits () {
	for each (Fruta in frutas){
		console.log(name)
	};
};


