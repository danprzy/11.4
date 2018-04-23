function Phone(brand, price, color) {
	this.brand = brand;
	//by using this, the "brand" property of the object we create will assume the value of the brand argument
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var SamsungGalaxyS6 = new Phone("Samsung", 1400, "black");
var iPhone6S = new Phone("Apple", 2250, "silver");
var OnePlusOne = new Phone("OnePlus", 1500, "black");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();