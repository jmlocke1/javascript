const d = document,
	$table = d.querySelector(".crud-table"),
	$form = d.querySelector(".crud-form"),
	$title = d.querySelector(".crud-title"),
	$template = d.querySelector("#crud-template").content,
	$fragment = d.createDocumentFragment(),
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

function getAll() {
	const $nombre = d.querySelector("input[name='nombre']");
	const $constellation = d.querySelector("input[name='constelacion']");
	$nombre.value = "";
	$constellation.value = "";
	ajax({
		url: "http://localhost:5000/santos",
		success: (res) => {
			console.log(res);
			res.forEach(el => {
				$template.querySelector(".name").textContent = el.nombre;
				$template.querySelector(".constellation").textContent = el.constelacion;
				$template.querySelector(".edit").dataset.id = el.id;
				$template.querySelector(".edit").dataset.name = el.nombre;
				$template.querySelector(".edit").dataset.constellation = el.constelacion;
				$template.querySelector(".delete").dataset.id = el.id;
				

				let $clone = d.importNode($template, true);
				$clone.querySelector(".edit").addEventListener("click", (e) => {
					console.log("Has hecho click");
					console.log(e);
					$nombre.value = e.target.dataset.name;
					$constellation.value = e.target.dataset.constellation;
				});
				$fragment.appendChild($clone);
			});
			$table.querySelector("tbody").appendChild($fragment);
		},
		error: (err) => {
			console.log(err);
			$table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
		}
	});
}

d.addEventListener("DOMContentLoaded", getAll);