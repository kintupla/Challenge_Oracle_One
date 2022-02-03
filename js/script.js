/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/
var input = document.querySelector("#input-texto");
var buttonCript = document.querySelector("#btn-cripto");
var buttonDescript = document.querySelector("#btn-descripto");
var buttonCopiar = document.querySelector("#btn-copy");
var resultadoText = document.querySelector("#msg");
//Utilizando switch
function criptografia(event){
	let inputValue = input.value.toLowerCase();
	let resultadoCript = ''
	for(let posicao = 0; posicao < inputValue.length; posicao++){

		switch(inputValue[posicao]){
			case "e":
				resultadoCript += "enter";
				break;
			case "i":
				resultadoCript += "imes";
				break;
			case "a":
				resultadoCript += "ai";
				break;
			case "o":
				resultadoCript += "ober";
				break;
			case "u":
				resultadoCript += "ufat"
				break;
			default:
				resultadoCript += inputValue[posicao];
				break;
		}
		event.preventDefault();
		resultadoText.value = resultadoCript;
	}
	
}
// Utilizando for e replace
function descriptografia(event){
	let inputValue = input.value.toLowerCase(); 
	let descript = ["enter", "imes", "ai", "ober", "ufat"];
	let vogal = ["e", "i", "a", "o", "u"];
	let resultadoDescript = inputValue;
	for (let j = 0; j < descript.length; j++){
		resultadoDescript = resultadoDescript.replaceAll(descript[j], vogal[j]);
	}
	event.preventDefault();
	resultadoText.value = resultadoDescript;
	
}

function copiar(){
	let copiaTexto = resultadoText;
	navigator.clipboard.writeText(copiaTexto.value);
	if (copiaTexto.value == ''){
		alert("Campo vazio!");
	}else{
		alert("Copiado com sucesso!")
	}
	
}
buttonCript.addEventListener("click", criptografia, false);
buttonDescript.addEventListener("click", descriptografia, false);
buttonCopiar.addEventListener("click", copiar, false);

