// For Austria : insurance = horse_power x 100 / age   + 50;
// For Hungary: insurance = horse_power x 120 / age  + 100;
// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

//not working javascript
//define variables in an array

var insurance_price = [
	[100, 0 ,50],			//how to add countrys??
	[120, 0, 100],
	[150, 3, 50]

]


// console.log(insurance_price[austria])
	
//function

function calculateInsurance(country_id, horse_power, age) {
	var item = insurance_price[country_id];
	var insurance = horse_power * item[0] / (age + item[1]) + item[2];
	return  insurance;
}

function onButtonClick() {
	var get_country_id = document.getElementById("country_id");
	var get_horse_power = document.getElementById("horse_power");
	var get_age = document.getElementById("age");

	var country_id = get_country_id.value;
	var horse_power = get_horse_power.value;
	var age = get_age.value;

	var result = calculateInsurance(country_id, horse_power, age);

	var get_result = document.getElementById("result");

	get_result.innerHTML = result;
}

// Initialize Event

document.addEventListener("DOMContentLoaded", function()  {
	var get_button = document.getElementById("calc_button");
	get_button.addEventListener("click", onButtonClick);
});
