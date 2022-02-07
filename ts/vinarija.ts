/// <reference path="vino.ts" />

class Vinarija {
    private _naziv: string;
    private _vina: Vino[];

	constructor(naziv: string) {
		this._naziv = naziv;
        this._vina = [];
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


    /**
     * Getter vina
     * @return {Vino[]}
     */
	public get vina(): Vino[] {
		return this._vina;
	}

    public setVina(value: Vino): void {
        this._vina.push(value);
    }

    public spisakVina(): void {
        for (let i = 0; i < this._vina.length; i++) {
             console.log(this._vina[i].naziv);   
            
        }
    }
    

    
}