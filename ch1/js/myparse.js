/** @author Nicolás Tutor
 * Se creo una función que, luego de depurada la cadena de texto, genera la estructura del 
 * objeto con sus propiedades y valores, usando algunas variables auxilares pertenecientes 
 * a la misma.
 */

const button = document.querySelector("button");
const msg = document.querySelector("p");
const json = {};

button.addEventListener("click", () => {
    jsonParser(document.getElementById("textarea").value);
    msg.textContent = "JSON convertido a objeto!";
    console.log(json);
});

function jsonParser(string) {
    let counter = 0;
    let counter2 = 0;
    let semaphore = 1;
    let aux, aux2;

    const array = string.slice(2, -2).split(/:|,|{|}/);

    array.forEach(function (value, index, array) {
        array[index] = value.replace(/[\n]|"/g, "").trim();
    });

    for (element of array) {
        if (counter % 2 === 0) { //Propiedades            
            if (element.includes("]")) {
                counter--;
                semaphore = 1;
                counter2 = 0;
            } else {
                if (semaphore === 1) {
                    json[element];
                    aux = element;
                } else {
                    if (Number(element) != 0) { //Agrego objeto al array                        
                        aux2 = element;
                        json[aux][counter2][element];
                    } else {
                        counter2++;
                        json[aux][counter2] = {};
                    }
                }
            }
        } else { //Valores            
            if (element.includes("[")) {
                json[aux] = [];
                json[aux][counter2] = {};
                semaphore = 0;
            } else {
                if (semaphore === 1) {
                    json[aux] = typeCheck(element);
                } else {
                    if (Number(element) != 0) {
                        json[aux][counter2][aux2] = typeCheck(element);
                    }
                }
            }
        }
        counter++;
    }
}

function typeCheck(string) {
    if (!isNaN(string)) return Number(string);
    else if (string === "false" || string === "true") return (string === 'true');
    else if (string === "null") return null;
    return String(string);
}



