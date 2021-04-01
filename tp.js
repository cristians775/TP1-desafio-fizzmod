
const { Clase } = require("./Clase");
const { vowels } = require("./utils");
/*Realizar una función que permita contar la cantidad de vocales que tiene un texto que se recibe como parámetro. No habrá discriminación entre las vocales en mayúscula y en minúscula. Las vocales acentuadas no se contarán. El valor obtenido se retornará al terminar la función. Si se no se recibe un string retornará -1.
 */

function contarVocales(texto) {
  return typeof texto === "string"
    ? texto
        .toLowerCase()
        .split("")
        .reduce(
          (accumulator, currentCharValue) =>
            vowels.get(currentCharValue) ? accumulator + 1 : accumulator + 0,
          0
        )
    : -1;
}

/* 
Crear un repo en github y subir todo el proyecto. Se ignorará la carpeta node_modules (para ellos está creado el archivo .gitignore en este proyecto) Esta función devolverá un string con la url del repo.
*/
function urlRepo() {
  return "https://github.com/cristians775/TP1-desafio-fizzmod.git";
}

/* 
Crear una función arrow, que devuelva una clase en ES6 que contendrá dos métodos llamados contadorPalabras y hayNumeros. La clase recibirá un texto que se guardará en una propiedad llamada texto. contadorPalabras retornará la cantidad de palabras encontradas en la propiedad texto y hayNumeros devolverá true en caso de que encuentre un número en dicho texto, caso contrario retorna false. En ambos métodos, si el texto no es válido, se devolverá -1
Crear un propiedad estática contadorInstancias que me indique cuantas instancias hay de esa clase.
*/

const crearClase = () => {
  return Clase;
};
module.exports = {
  contarVocales,
  urlRepo,
  crearClase,
};
