function move(n, orgPeg, destPeg, otherPeg){
	let step, temp, orgpeg1, orgPeg2, destPeg1, destPeg2, otherPeg1, otherPeg2;
	let pasos = 1;
	while(pasos <= n){
		if(n <= 1){
			step = "Mueve Disk1 desde Peg ";
			step += orgPeg + " hasta Peg " + destPeg;
			document.write(step,"<br>");
			pasos += 1;
		}else{
			orgPeg1 = orgPeg;
			destPeg = otherPeg;
			otherPeg = temp;
			step = "Mueve Disk" + pasos + " desde Peg ";
			step += orgPeg + " hasta Peg " + destPeg;
			document.write(step,"<br>");
			pasos++;
			temp = orgPeg;
			orgPeg = otherPeg;

			
		}
	}
}