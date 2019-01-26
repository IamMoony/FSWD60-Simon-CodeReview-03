// For Austria : insurance = horse_power x 100 / age   + 50;
// For Hungary: insurance = horse_power x 120 / age  + 100;
// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

//define variables in an array

var insurance_price = {

	austria: [100, 0 ,50],
	hungary: [120, 0, 100],
	greece: [150, 3, 50]

}

//function

function calculateInsurance(country_id, horse_power, age) {
	var item = insurance_price[country_id];
	var insurance = horse_power * item[0] / (age + item[1] + item[2];
	return  insurance;
}

function onButtonClick() {
	var  get_country_id = document.getElementById("country_id");
	var get_horse_power = document.getElementById("horse_power");
	var get_age = document.getElementById("age");

	var country_id = get.country_id.value;
	var horse_power = get.horse_power.value;
	var age = get.age.value;

	var result = calculateInsurance(country_id, horse_power, age);

	var get_result = document.getElementById("result");

	get_result.innerHTML = result;
}

// Initialize Event

document.addEventListener(function() {
	var get_button = document.getElementById("calc_button");
	get_button.addEventListener("click", onButtonClick);
});
