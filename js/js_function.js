// For Austria : insurance = horse_power x 100 / age   + 50;
// For Hungary: insurance = horse_power x 120 / age  + 100;
// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

function calculateInsurance(get_name, get_horse_power, get_age) {
	//define var to get the values from the input
	var get_age = parseFloat(document.getElementById("age").value);
	var get_horse_power = parseFloat(document.getElementById("horse_power").value);
	var get_name = document.getElementById("name").value;
	var get_country = document.getElementById("country_id").value;
	//if statement for each country
	if(get_country == "austria") {
		document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 100 / age + 50);
	} else if (get_country == "hungary") {
		document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 120 / age + 100);
	} else {
	document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 150 / (age + 3) + 150);
	}
}
//output
document.getElementById("calc_button").addEventListener('click', calculateInsurance, false);