const d = document,
	$table = d.querySelector(".crud-table"),
	$form = d.querySelector(".crud-form"),
	$title = d.querySelector(".crud-title"),
	$template = d.querySelector("#crud-template").content,
	$fragment = d.createDocumentFragment(),
	// $nombre = d.querySelector("input[name='nombre']"),
	// $constellation = d.querySelector("input[name='constelacion']"),
	// $id = d.querySelector("input[name='id']"),
	xhr = new XMLHttpRequest();
const ajax = (options) => {
	let {url, method,success, error, data} = options;
	const xhr = new XMLHttpRequest();
	xhr.addEventListener("readystatechange", e => {
		if(xhr.readyState !== 4) return;

		if(xhr.status >= 200 && xhr.status < 300){
			let json = JSON.parse(xhr.responseText);
			success(json)
		} else {
			let message = xhr.statusText || "Ocurrió un error";
			error(`Error: ${xhr.status}: ${message}`);
		}
	});

	xhr.open(method || "GET", url);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.send(JSON.stringify(data));
};

function limpiarTodo(){
	// Limpiamos el formulario
	$form.nombre.value = "";
	$form.constelacion.value = "";
	$form.id.value = "";
	// Actualizamos el título
	$title.textContent = "Agregar Santo";
	// Borramos la tabla anterior
	$table.querySelector("tbody").innerHTML = "";
}

function getAll() {
	limpiarTodo();
	ajax({
		url: "http://localhost:5000/santos",
		success: (res) => {
			res.forEach(el => {
				$template.querySelector(".name").textContent = el.nombre;
				$template.querySelector(".constellation").textContent = el.constelacion;
				$template.querySelector(".edit").dataset.id = el.id;
				$template.querySelector(".edit").dataset.name = el.nombre;
				$template.querySelector(".edit").dataset.constellation = el.constelacion;
				$template.querySelector(".delete").dataset.id = el.id;
				$template.querySelector(".delete").dataset.name = el.nombre;
				$template.querySelector(".delete").dataset.constellation = el.constelacion;
				

				let $clone = d.importNode($template, true);
				// $clone.querySelector(".edit").addEventListener("click", e => {
				// 	$nombre.value = e.target.dataset.name;
				// 	$constellation.value = e.target.dataset.constellation;
				// 	$id.value = e.target.dataset.id;
				// });
				// $clone.querySelector(".delete").addEventListener("click", e => {
				// 	ajax({
				// 		url: `http://localhost:5000/santos/${e.target.dataset.id}`,
				// 		method: "DELETE",
				// 		success: (res) => location.reload(),
				// 		error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
				// 	});
				// });
				$fragment.appendChild($clone);
			});
			$table.querySelector("tbody").appendChild($fragment);
		},
		error: (err) => {
			console.log(err);
			$table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);
		}
	});
}

d.addEventListener("DOMContentLoaded", getAll);

d.addEventListener("submit", e => {
	if(e.target !== $form){
		return;
	}
	e.preventDefault();
	if(!e.target.id.value){
		// Create - POST
		ajax({
			url: "http://localhost:5000/santos",
			method: "POST",
			// success: (res) => location.reload(),
			success: (res) => getAll(),
			error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
			data: {
				nombre: e.target.nombre.value,
				constelacion: e.target.constelacion.value
			}
		});
	} else {
		// Update - PUT
		ajax({
			url: `http://localhost:5000/santos/${e.target.id.value}`,
			method: "PUT",
			// success: (res) => location.reload(),
			success: (res) => getAll(),
			error: (err) => $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`),
			data: {
				nombre: e.target.nombre.value,
				constelacion: e.target.constelacion.value
			}
		});
	}
});

d.addEventListener("click", e => {
	if(e.target.matches(".edit")) {
		$title.textContent = "Editar Santo";
		$form.nombre.value = e.target.dataset.name;
		$form.constelacion.value = e.target.dataset.constellation;
		$form.id.value = e.target.dataset.id;
	}

	if(e.target.matches(".delete")){
		let isDelete = confirm(`¿Estás seguro de querer eliminar el caballero ${e.target.dataset.name} de la constelación ${e.target.dataset.constellation}?`);
		if(!isDelete) return;
		ajax({
			url: `http://localhost:5000/santos/${e.target.dataset.id}`,
			method: "DELETE",
			success: (res) => getAll(),
			error: (err) => alert(err)
		});
	}
});