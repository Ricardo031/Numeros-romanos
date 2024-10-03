function integerRoman(n) { //n = numero

    const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let res = '';

    value.forEach((value, i) => { //extraigo su indice
        while(n >= value) { // mientras que el numero sea mayor o igual al valor que esta en el array.
            res = res + romans[i]; //se posiciona el numero romano respecto al indice
            n = n - value; //luego se resta el valor para que continue el ciclo
        }
    });

    return res;
}

console.log(integerRoman(12)); //! a pesar que se ponga 4000 pues es que no lo establecemos en el array y da un valor que no
//? n = 12
// mientras que n >= value
// 12 - X(10) = 2
// 2 - I(1) = 1
// 1 - I(1) = 0. Fin
//* res = '' + la ubicacion de romans