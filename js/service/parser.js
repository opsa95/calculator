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
	 * @author Aleix Velasco
	 */
	isDigit: function (number) { //Aleix
		var digitVerification = false;
		var digit = "";
		for (var i = 0; i < number.length; i++) {
			digit = number.substr(i, 1);
			if (digit >= "0" && digit <= "9") {
					digitVerification = true;
			}
			else {
					digitVerification = false;
			}
		}
		return digitVerification;
	},
	/**
	 * @name: isBit
	 * @description: Checks if number is 0 or 1
 	 * @params {number}
 	 * @return: true if number is 0 or 1, false otherwise
	 */
	isBit: function (number) {
 		return false;
	},
}
