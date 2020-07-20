

class Rot13
{
	constructor(inputTextfield, outputTextfield)
	{
		this.generalShiftCipher = new GeneralShiftCipher(inputTextfield, outputTextfield);
		
		this.inputTextfield = inputTextfield;
		this.outputTextfield = outputTextfield;
	}
	
	encrypt(alphabet, message){this.generalShiftCipher.encrypt(alphabet, 13, message);}
	decrypt(alphabet, cipher){this.generalShiftCipher.decrypt(alphabet, 13, cipher);}
}