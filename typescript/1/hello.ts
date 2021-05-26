function greet(person: string,date: Date){
	console.log(`¡Hola ${person}, hoy es ${date.toDateString()} y mañana ${date}!`)
}

greet("Brendan Fraser", new Date());

const user = {
    name: "Daniel",
    age: 26,
  };
console.log(user.name, ", tiene: ", user.age, " años"); // returns undefined

