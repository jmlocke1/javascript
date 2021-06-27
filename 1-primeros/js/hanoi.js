function move(n, orgPeg, destPeg, otherPeg){
	let step;
	let pasos = 1;
	if(n <= 1){
		step = "Mueve Disk1 desde Peg ";
		step += orgPeg + " hasta Peg " + destPeg;
		document.write(step,"<br>");
		return 1;
	}else{
		pasos += move(n - 1, orgPeg, otherPeg, destPeg);
		step = "Mueve Disk" + n + " desde Peg ";
		step += orgPeg + " hasta Peg " + destPeg;
		document.write(step,"<br>");
		pasos += move(n-1, otherPeg, destPeg, orgPeg);
		return pasos;
	}
}

let pasos = move (10, "A", "B", "C");
document.write("Se han utilizado ", pasos, " pasos para completarlo");