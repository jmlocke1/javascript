"use strict";
class Persona {
	_name = "";
	_surname = "";
	constructor(name, surname) {
		this._name = name;
		this._surname = surname;
	}

	get name(){
		return this._name;
	}

	set name(name){
		this._name = name;
	}

	get surname(){
		return this._surname;
	}

	set surname(surname){
		this._surname = surname;
	}

	get fullName(){
		return this.name + " " + this.surname;
	}

	get message(){
		return `Me llamo ${this.name}, mi apellido es ${this.surname}, y mi nombre completo es ${this.fullName}<br>`;
	}
}

class CoffeeMachine {
	#waterLimit = 200;
	#waterAmount = 0;
  
	#fixWaterAmount(value) {
	  if (value < 0) return 0;
	  if (value > this.#waterLimit){
		return this.#waterLimit;
	  } else{
		return value;
	  }
	}
  
	/**
	 * @param {number} value
	 */
	set waterAmount(value) {
	  this.#waterAmount = this.#fixWaterAmount(value);
	}

	get waterAmount(){
		return this.#waterAmount;
	}
  
  }