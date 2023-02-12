//1.-  hasId: ¿propiedad llamada id?
const myObj01 = {
    name: "Alberto",
    id: 111,
    lastname: "Sánchez",
}
//const hasId = obj => obj.every(obj.id);
const hasId = ({ id }) => id ? true : false;
console.log(hasId(myObj01));


//2.- head: devuelva el primer elemento
const array01 = [3, 5, 9, 10];
const head = ([first]) => first;
console.log(head(array01));


//3.- tail: todos los elementos menos el primero.

const tail = ([, ...array]) => array;
console.log(tail(array01));


//4.- swapFirstToLast: primer elemento ha sido colocado en la última posición.
const swapFirstToLast = ([first, ...rest]) => { rest.push(first); return rest; };
console.log(swapFirstToLast(array01));


//5.- excludeId: objeto clonado excepto la propiedad id si la hubiera.
const excludeId = ({ id, ...rest }) => rest;
console.log(excludeId(myObj01));


//6.- wordsStartingWithA: array filtrado con aquellas palabras que empiecen por a
const array02 = ["anacoreta", "tablet", "animal", "zapato", "carro"];
const wordsStartingWithA = array => array.filter(word => word[0] === "A" | word[0] === "a");
console.log(wordsStartingWithA(array02));


//7.- concat: admita múltiples argumentos de tipo string y devuelva otro string con la concatenación de todos, separados por | .
const concat = (...rest) => rest.join(" | ");
console.log(concat("Peter", "Anne", "Duate"));

//8.- multArray: admita un array de números ( arr ) y otro parámetro que sea un
//               número ( x ) y devuelva un nuevo array donde cada elemento ha sido multiplicado por x.
const array03 = [2, 3, 4, 5, 6];
const multArray = (arr, x) => arr.map(element => element * x);
console.log(multArray(array03, 5), array03)


//9.- calcMult: admita múltiples números como argumento y devuelva como
//              resultado el producto de todos ellos.
const calcMult = (...numbers) => { let result = 1; numbers.forEach(n => result = result * n); return result; }
console.log(calcMult(2, 41, 10));


//___________Ejerc Extra___________//

console.log("======Ejerc Extra======");
//1.- swapFirstSecond: devuelva un nuevo array donde el primer elemento ha sido intercambiado por el segundo.
const array04 = [1, 2, 3, 4, 5];
const swapFirstSecond = ([first, second, ...rest]) => { rest.unshift(second, first); return rest };
console.log(swapFirstSecond(array04));

//2.- firstEqual:  devuelva un booleano indicando si todos los strings comienzan por dicho carácter o no.
const firstEqual = (n, ...str) => str.every(([first]) => first === n);
console.log(firstEqual("g", "genoma", "global", "gente"));

//3.- longest:  devuelva el array más largo.
const longest = (...arr) => {
    arr.sort((a, b) => a.length > b.length ? -1 : 1)
    return arr[0];
};
console.log(longest([1, 2, 3, 4], [1, 2], [1, 2, 3, 4, 5, 6, 7]));

//4.- searchInStringV1: dado un string como parámetro y también un carácter,
//                      devuelva cuantas veces aparece dicho carácter en el string.
const searchInStringV1 = (str, a) => {
    let total = 0;
    Array.from((str), c => { if (c === a) total++ });
    console.log(str);
    return total;
};
console.log(searchInStringV1("anacleta", "a"));

//5.- searchInStringV2: encontrando otra alternativa sin usar reduce.
const searchInStringV2 = (str, a) => {
    str.filter(c => c === a);
    return str.length;
};
console.log(searchInStringV1("aaaraña", "a"));

//6.- sortCharacters:  dado un string, lo devuelva con sus letras ordenadas alfabéticamente.
const sortCharacters = str => {
    return Array.from(str).sort().join("");
};
console.log(sortCharacters("abstención"));

//7.- shout: devuelva todas las palabras concatenadas en un texto donde aparezcan
//           en mayúsculas y con exclamaciones.
const shout = (...words) => {
    // let wUpperCase = [];
    // words.map(word => {
    //     word = "¡" + word.toUpperCase() + "!"
    //     wUpperCase.push(word);
    // });
    // return wUpperCase.join();
    let wUpperCase = [];
    words.forEach(word => {
        word = "¡" + word.toUpperCase() + "!";
        wUpperCase.push(word);
    });
    return wUpperCase.join();
};
console.log(shout("wololo", "roogan", "construir"));

//8.- Lista de la compra:
//      A. Obtén una nueva lista donde aparezca el IVA (21%) de cada producto.
//      B. Ordena la lista de más a menos unidades.
//      C. Obtén el subtotal gastado en droguería. 
//      D. Obtén la lista por consola en formato "Producto -> Precio Total €" y ordenada por categoría.
const shoppingCart = [
    { category: "Frutas y Verduras", product: "Lechuga", price: 0.8, units: 1 },
    { category: "Carne y Pescado", product: "Pechuga pollo", price: 3.75, units: 2 },
    { category: "Droguería", product: "Gel ducha", price: 1.15, units: 1 },
    { category: "Droguería", product: "Papel cocina", price: 0.9, units: 3 },
    { category: "Frutas y Verduras", product: "Sandía", price: 4.65, units: 1 },
    { category: "Frutas y Verduras", product: "Puerro", price: 4.65, units: 2 },
    { category: "Carne y Pescado", product: "Secreto ibérico", price: 5.75, units: 2 },
];

//A: obtener nueva con iva/unidad
const copyWithIva = shoppingCart.map(item => { return { iva: Number((item.price * 0.21).toFixed(2)), ...item } });
console.log(copyWithIva);

//B: ordenar nueva por unidades
copyWithIva.sort((a, b) => a.units > b.units ? 1 : -1)
console.log(copyWithIva);

//C: subtotal drog (sin IVA)==> entiendo que el subtotal es sin el IVA.
const subtotalDrog = () => {
    let subtotal = 0;
    shoppingCart.filter(item => item.category === "Droguería")
        .map(item => subtotal += (item.price * item.units));
    return subtotal;
};
console.log("Subtotal droguería: " + subtotalDrog() + "€");

//D: formatear con total y ordenar por categoría
console.log("\n" + "///---Lista de la compra---///")

copyWithIva.sort((a = 0, z = 27) => a.category > z.category ? 1 : -1)
copyWithIva.forEach(item =>
    console.log(
        item.category + "\n" + "   " + item.units + " - " + item.product +
        " -->  " + ((item.price + item.iva) * item.units).toFixed(2) + "€"));

const totalAPagar = () => {
    let total = 0;
    copyWithIva.forEach(item => {
        (total += (item.price + item.iva) * item.units).toFixed(2);
    });
    return total;
};
console.log("Precio TOTAL a pagar: " + totalAPagar() + "€");