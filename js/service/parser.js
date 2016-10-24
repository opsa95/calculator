/**
 * "parser" checks inputs searching for patterns
 *
 * @name: parser
 * @version: 0.0.1
 * @author: DAW-M08
 * @description: checks inputs searching for patterns
 * @params {none}
 * @return: none
 */
var parser = {
	version: "0.0.1",
	version: function () {
		return this.version;
	},
	/**
	 * @name: isDigit
	 * @description: Checks if number is between 0-9
 	 * @params {number}
 	 * @return: true if number is between 0-9, false otherwise
	 */
	isDigit: function (number) {
 		return false;
	},
	/**
	 * @name: isBit
	 * @description: Checks if number is 0 or 1
 	 * @params {number}
 	 * @return: true if number is 0 or 1, false otherwise
	 */
	isBit: function (number) { // DAVID
		var isBin = false;
		var actualNum = "0";
		for (var i =0; i<number.length;i++){
				actualNum = number.substr(i,1);
			if(actualNum>="0" && actualNum<= "1"){
				isBin=true;
			} else{
				isBin=false;
				return isBin;
			}
		}
 		return isBin;
	},
}
