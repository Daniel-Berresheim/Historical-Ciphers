

class GeneralShiftCipher
{
	constructor(inputTextfield, outputTextfield)
	{
		this.inputTextfield = inputTextfield;
		this.outputTextfield = outputTextfield;
	}
	
	encrypt(alphabet, key, message)
	{
		var result = "";
		
		var shift = Number(key); // TODO: error handling if not a number + convert single letters to numbers
		
		for (var i=0; i<message.length; i++) {
			var letter = message.charAt(i);
			
			var pos = alphabet.indexOf(letter);
			if(pos==-1) result = result.concat(letter);
			else
			{
				pos=(pos+shift)%alphabet.length;
			
				result = result.concat(alphabet.charAt(pos));
			}
		}
		
		this.outputTextfield.value = result;
	}
	decrypt(alphabet, key, cipher)
	{
		var result = "";
		
		var shift = Number(key); // TODO: error handling if not a number + convert single letters to numbers
		
		for (var i=0; i<cipher.length; i++) {
			var letter = cipher.charAt(i);
			
			var pos = alphabet.indexOf(letter);
			if(pos==-1) result = result.concat(letter);
			else
			{
				pos=(pos-shift)%alphabet.length;
			
				result = result.concat(alphabet.charAt(pos));
			}
		}
		
		this.inputTextfield.value = result;
	}
}


