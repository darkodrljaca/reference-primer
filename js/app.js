var Vino = /** @class */ (function () {
    function Vino(naziv) {
        this._naziv = naziv;
    }
    Object.defineProperty(Vino.prototype, "naziv", {
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    return Vino;
}());
/// <reference path="vino.ts" />
var Vinarija = /** @class */ (function () {
    function Vinarija(naziv) {
        this._naziv = naziv;
        this._vina = [];
    }
    Object.defineProperty(Vinarija.prototype, "naziv", {
        /**
         * Getter naziv
         * @return {string}
         */
        get: function () {
            return this._naziv;
        },
        /**
         * Setter naziv
         * @param {string} value
         */
        set: function (value) {
            this._naziv = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vinarija.prototype, "vina", {
        /**
         * Getter vina
         * @return {Vino[]}
         */
        get: function () {
            return this._vina;
        },
        enumerable: false,
        configurable: true
    });
    Vinarija.prototype.setVina = function (value) {
        this._vina.push(value);
    };
    Vinarija.prototype.spisakVina = function () {
        for (var i = 0; i < this._vina.length; i++) {
            console.log(this._vina[i].naziv);
        }
    };
    return Vinarija;
}());
/// <reference path="vinarija.ts" />
var vinarija = new Vinarija("Vinarija-1");
var vino = new Vino("Vino-1");
vinarija.setVina(vino);
vinarija.spisakVina();
//# sourceMappingURL=app.js.map