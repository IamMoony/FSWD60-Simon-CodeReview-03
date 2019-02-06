// For Austria : insurance = horse_power x 100 / age   + 50;
// For Hungary: insurance = horse_power x 120 / age  + 100;
// For Greece: insurance = horse_power x 150 / (age+3)  + 50;

function calculateInsurance() {
	//define var to get the values from the input
	var get_age = parseFloat(document.getElementById("age").value);
	var get_horse_power = parseFloat(document.getElementById("horse-power").value);
	var get_name = document.getElementById("full-name").value;
	var get_country = document.getElementById("form-selection").value;
	//if statement for each country
	if(get_country == "austria") {
		document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 100 / get_age + 50);
	} else if (get_country == "hungary") {
		document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 120 / get_age + 100);
	} else {
	document.getElementById("result").innerHTML = get_name + " ,your insurance costs: " + Math.floor(get_horse_power * 150 / (get_age + 3) + 150);
	}
}
//output
document.getElementById("form-button").addEventListener('click', calculateInsurance, false);


