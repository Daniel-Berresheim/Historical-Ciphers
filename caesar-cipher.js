

class CaesarCipher
{
	constructor(inputTextfield, outputTextfield)
	{
		this.generalShiftCipher = new GeneralShiftCipher(inputTextfield, outputTextfield);
		
		this.inputTextfield = inputTextfield;
		this.outputTextfield = outputTextfield;
	}
	
	encrypt(alphabet, message){this.generalShiftCipher.encrypt(alphabet, 3, message);}
	decrypt(alphabet, cipher){this.generalShiftCipher.decrypt(alphabet, 3, cipher);}
}