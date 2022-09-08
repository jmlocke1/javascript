const d = document,
	$table = d.querySelector(".crud-table"),
	$form = d.querySelector(".crud-form"),
	$title = d.querySelector(".crud-title"),
	$template = d.querySelector("#crud-template").content,
	$fragment = d.createDocumentFragment();

function cleanAll(){
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

		console.log(json);
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