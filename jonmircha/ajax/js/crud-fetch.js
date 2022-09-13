const d = document,
	$table = d.querySelector(".crud-table"),
	$form = d.querySelector(".crud-form"),
	$title = d.querySelector(".crud-title"),
	$template = d.querySelector("#crud-template").content,
	$fragment = d.createDocumentFragment();

function cleanAll(){
	if($form.nombre.value) console.log("Voy a limpiar el formulario");
	// Limpiamos el formulario
	$form.nombre.value = "";
	$form.constelacion.value = "";
	$form.id.value = "";
	// Actualizamos el título
	$title.textContent = "Agregar Santo";
	// Borramos la tabla anterior
	$table.querySelector("tbody").innerHTML = "";
	
}

const getAll = async () => {
	cleanAll();
	try {
		let res = await fetch("http://localhost:5000/santos"),
			json = await res.json();
		if(!res.ok) throw { status: res.status, statusText: res.statusText };

		json.forEach( el => {
			$template.querySelector(".name").textContent = el.nombre;
			$template.querySelector(".constellation").textContent = el.constelacion;
			$template.querySelector(".edit").dataset.id = el.id;
			$template.querySelector(".edit").dataset.name = el.nombre;
			$template.querySelector(".edit").dataset.constellation = el.constelacion;
			$template.querySelector(".delete").dataset.id = el.id;
			$template.querySelector(".delete").dataset.name = el.nombre;
			$template.querySelector(".delete").dataset.constellation = el.constelacion;

			let $clone = d.importNode($template, true);
			$fragment.appendChild($clone);
		});
		$table.querySelector("tbody").appendChild($fragment);
	} catch (err) {
		let message = err.statusText || "Ocurrió un error";
		$table.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
	}
}

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", async e => {
	if(e.target !== $form){
		return;
	}
	e.preventDefault();
	let data = {
		nombre: e.target.nombre.value,
		constelacion: e.target.constelacion.value
	},
		method = '';
		url = 'http://localhost:5000/santos';
	if(!e.target.id.value){
		// Create - POST
		method = 'POST';
	} else {
		// Update - PUT
		url += `/${e.target.id.value}`;
		method = 'PUT';
	}
	try {
		let res = await fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify(data)
		});
		getAll();
		if(!res.ok) throw { status: res.status, statusText: res.statusText};
	} catch (err) {
		let message = err.statusText || "Ocurrió un error";
		$form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
	}
});

d.addEventListener("click", async e => {
	if(e.target.matches(".edit")) {
		$title.textContent = "Editar Santo";
		$form.nombre.value = e.target.dataset.name;
		$form.constelacion.value = e.target.dataset.constellation;
		$form.id.value = e.target.dataset.id;
	}

	if(e.target.matches(".delete")){
		let isDelete = confirm(`¿Estás seguro de querer eliminar el caballero ${e.target.dataset.name} de la constelación ${e.target.dataset.constellation}?`);
		if(!isDelete) return;
		try {
			let res = await fetch(`http://localhost:5000/santos/${e.target.dataset.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			getAll();
			if(!res.ok) throw { status: res.status, statusText: res.statusText};
		} catch (err) {
			let message = err.statusText || "Ocurrió un error";
			$form.insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
		}
	}
});

