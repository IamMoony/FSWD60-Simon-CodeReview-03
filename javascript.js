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
	var  div_country_id = document.getElementById("country_id");
}

