const inputs = document.getElementsByTagName("input");
const bottoni = document.getElementsByTagName("button");
const fieldsets = document.getElementsByTagName("fieldset");
inputs[0].focus();

function first_counter() {
	max_balance = 50;
	current_balance = parseFloat(inputs[0].value);
	data = new Date();
	start_date = new Date(data.getFullYear(), data.getMonth(), 13);
	today_date = new Date(data.getFullYear(), data.getMonth(), data.getDate());
	current_period =
		(today_date.getTime() - start_date.getTime()) / 86400000 + 1;
	if (current_period < 0) {
		current_period += 30;
	}
	net = ((max_balance / 30) * current_period - current_balance).toFixed(2);
	const text_node = document.createTextNode(`Active Balance Gb: ${net}`);
	const paragraph = document.createElement("p");
	paragraph.appendChild(text_node);
	if (fieldsets[0].children[3] == undefined)
		fieldsets[0].appendChild(paragraph);
	else fieldsets[0].children[3].replaceWith(paragraph);
}

function second_counter() {
	max_balance = -600;
	current_balance = parseFloat(inputs[1].value);
	data = new Date();
	start_date = new Date(data.getFullYear(), 0, 1);
	end_date = new Date(data.getFullYear(), 11, 31);
	today_date = new Date(data.getFullYear(), data.getMonth(), data.getDate());
	days_by_period = (end_date.getTime() - start_date.getTime()) / 86400000 + 1;
	current_period =
		(today_date.getTime() - start_date.getTime()) / 86400000 + 1;
	net = (
		current_balance -
		(max_balance / days_by_period) * current_period
	).toFixed(2);
	const text_node = document.createTextNode(`Active Balance Gb: ${net}`);
	const paragraph = document.createElement("p");
	paragraph.appendChild(text_node);
	if (fieldsets[1].children[3] == undefined)
		fieldsets[1].appendChild(paragraph);
	else fieldsets[1].children[3].replaceWith(paragraph);
}

for (let i=0; i<inputs.length; i++)
inputs[i].addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		event.preventDefault();
		bottoni[i].click();
	}
});
bottoni[0].addEventListener("click", first_counter);
bottoni[1].addEventListener("click", second_counter);