/**
 * "index" index view controller
 *
 * @name: controller/index.js
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: index view controller
 * @params {none}
 * @return: none
 * @operations {"decimal2binary", "binary2decimal"}
 */
var indexController = {
	version: "0.0.1",
	operation: "decimal2binary",
	version: function () {
		return this.version;
	},
	/**
	 * @name: swapInputs
	 * @description: Changes the div decimal-block with the div binary-block, changes
	 				 the operation value of the object
 	 * @params {number}
 	 * @return: {none}
	 * @author Aleix Velasco
	 */
	swapInputs: function () { //Aleix
		if ($("#binary-block").next($("#buttons-block"))) {
				$("#binary-block").after($("#decimal-block"));
		}else if($("#decimal-block").next($("#buttons-block"))){
				$("#decimal-block").after($("#binary-block"));
		}

 		//return false;
	},
	/**
	 * @name: convert
	 * @description: Calls to converter to calculate the operation. Changes the
	                 input value from binary/decimal inputs with the result of the
	                 operation
 	 * @params {number}
 	 * @return: {none}
	 */
	convert: function () {
		// Tienes que mirar cual está encima. ese es el que se convertirá
		// Luego al darle al botón de convert comprobará si es decimal o binario con las funciones
		// parser.isDigit(numeroinsertado)
		// si no es el mismo valor que pide la caja error
		// si es el mismo valor haz la conversión con la función adecuada.
		// :)
 		return false;
	},
}

$(document).ready(function() {
	$("#swap").click(function() {
			indexController.swapInputs();
	});
})
