const { numbers } = require("./utils");
class Clase {

  static contadorInstancias;
  constructor(str) {
    Clase.contadorInstancias = (Clase.contadorInstancias || 0) + 1;
    
    this.texto = str;
  }

  isString() {
    return typeof this.texto === "string";
  }

  contadorPalabras() {
    if (this.isString()) {
      return !this.texto ? 0 : this.texto.split(" ").length;
    }
    return -1;
  }

  hayNumeros() {
    if (this.isString()) {
      return numbers.some((number) => this.texto.includes(number));
    }
    return -1;
  }

}


/*Queria encapsular la propiedad para que no pueda ser modificada desde afuera,
 por alguna razon que desconozco en el test se rompe

class Clase {
  static #contadorInstancias;
  constructor() {
    Clase.#contadorInstancias = (Clase.#contadorInstancias || 0) + 1;
  }
} */
module.exports = { Clase };
