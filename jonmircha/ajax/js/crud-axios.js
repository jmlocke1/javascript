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

function errMessage(err){
	console.log("Están en errMessage");
	let message = err.message || "Ocurrió un error";
	$form.insertAdjacentHTML("afterend", `<p><b>Error ${err.response.status}: ${message}</b></p>`);
}

const getAll = async () => {
	cleanAll();
	try {
		let res = await axios.get("http://localhost:5000/santos"),
			json = await res.data;
		console.log(res, json);
		let name = $template.querySelector(".name"),
			constellation = $template.querySelector(".constellation"),
			edit = $template.querySelector(".edit"),
			deleteButton = $template.querySelector(".delete");
		json.forEach( el => {
			name.textContent = el.nombre;
			constellation.textContent = el.constelacion;
			edit.dataset.id = el.id;
			edit.dataset.name = el.nombre;
			edit.dataset.constellation = el.constelacion;
			deleteButton.dataset.id = el.id;
			deleteButton.dataset.name = el.nombre;
			deleteButton.dataset.constellation = el.constelacion;

			let $clone = d.importNode($template, true);
			$fragment.appendChild($clone);
		});
		$table.querySelector("tbody").appendChild($fragment);
	} catch (err) {
		errMessage(err);
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
		let res = await axios(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
			},
			data: JSON.stringify(data)
		});
		getAll();
	} catch (err) {
		errMessage(err);
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
			let res = await axios(`http://localhost:5000/santos/${e.target.dataset.id}`, {
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			getAll();
		} catch (err) {
			errMessage(err);
		}
	}
});