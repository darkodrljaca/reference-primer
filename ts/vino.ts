class Vino {
    private _naziv: string;

	constructor(naziv: string) {
		this._naziv = naziv;
	}


    /**
     * Getter naziv
     * @return {string}
     */
	public get naziv(): string {
		return this._naziv;
	}

    /**
     * Setter naziv
     * @param {string} value
     */
	public set naziv(value: string) {
		this._naziv = value;
	}


}