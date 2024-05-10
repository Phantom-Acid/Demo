async function fetchNameAjax(id) {
	let str="";
	let name=id.value;

	let url="./services/MenuNameService.php?name=" + name;
	try {
		const response = await fetch(url);
		if(!response.ok)
		{
			throw new Error("error: network erro");
		}
		const pizzas = await response.json();
		pizzas.forEach(p=>{
			str+=`${p.pizzaName}: ${p.topping}<br>`;
		});
		console.log("Download complete", response);
		return str;
	} catch (error) {
		console.log(`Download error: ${error.message}`);
	}	
}