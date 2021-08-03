var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //retorna todos da classe

for (var i = 0; i < pacientes.length; i++) {
	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent; // conteudo de texto apenas

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	var tdImc = paciente.querySelector(".info-imc");

	if (!pesoValido) {
		console.log("Peso invalido");
		pesoValido = false;
		tdImc.textContent = "Peso Ivalido";
		paciente.classList.add("paciente-invalido") //criando uma classe no html pra poder manipular todas atravez de css
	}
	if (!alturaValida) {
		console.log("Altura invalida");
		alturaValida = false;
		tdImc.textContent = "Altura invalida";
		paciente.classList.add("paciente-invalido")
	}
	if (alturaValida && pesoValido) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc; //to fixed serve para escolher as casas depois da virgula
	}
}

function validaPeso(peso){
	if(peso >= 0 && peso < 1000){
		return true;
	}else{
		return false;
	}
}

function validaAltura(altura){
	if(altura >=0 && altura <= 3.0){
		return true;
	}else{
		return false;
	}
}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura*altura);
	return imc.toFixed(2);
}