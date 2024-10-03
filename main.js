const btn = document.getElementById('btn');
const result = document.getElementById('result')

btn.addEventListener('click', () => {
    let input = parseInt(document.getElementById('input').value)

    //todo Usando constante
    // const numerosRomanos = (num)  => {
    //     const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    //     const valor = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

    //     let R = ''

    //     valor.forEach((valor, i)=> {
    //         while(num >= valor) {
    //             R += romanos[i];
    //             num -= valor;
    //         }
    //     })
    //     return R;
    // }

    function numerosRomanos(num) {
        const romanos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const valor = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]

        let R = ''; //Variable acumuladora

        valor.forEach((valor, i) => { //*iterando sobre cada valor numérico junto con su índice i.
            while (num >= valor) { 
                R += romanos[i];
                num -= valor
            } //Este proceso se repite para todos los valores en el array valor. Cada vez que el número es mayor o igual a un valor en la lista, el correspondiente símbolo romano se añade a R, y el número se reduce hasta que se convierte completamente.
        })
        return R;// y por ultimo se vuelve a poner el iterdor 
    }

    let p = document.getElementById('error')

    if (input > 0 && input < 4000) {
        result.textContent = numerosRomanos(input)
        p.style.display = 'none'

    } else {
        result.textContent = 'Numero no validos'
        p.style.display = 'block'
        p.textContent = 'Escribe un numero entre 1-3999'
    }
})