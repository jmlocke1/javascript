(() => {
	const xhr = new XMLHttpRequest(),
		$xhr = document.getElementById("xhr"),
		$fragment = document.createDocumentFragment();
	
	xhr.addEventListener("readystatechange", e => {
		if(xhr.readyState !== 4) return;

		if(xhr.status >= 200 && xhr.status < 300){
			// console.log("Éxito");
			// console.log(xhr);
			// console.log(xhr.responseText);
			let json = JSON.parse(xhr.responseText);
			// console.log(json);
			json.forEach(el => {
				const $li = document.createElement("LI");
				$li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
				$fragment.appendChild($li);
			});
			$xhr.appendChild($fragment);
		}else{
			// console.log("Error");
			let message = xhr.statusText || "Ocurrió un error";
			$xhr.innerHTML = `Error: ${xhr.status}: ${message}`;
		}
		
	});

	// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
	xhr.open("GET", "assets/users.json");

	xhr.send();
})();