// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToyen = (cantidad) => {
    cantidad = cantidad/oneEuroIs.USD //pasando de USD a EUR
    cantidad = cantidad*oneEuroIs.JPY //pasando de EUR a JPY
    cantidad = cantidad.toFixed(2) //devuelve como string
    cantidad = parseFloat (cantidad)//reconvierte el number
    return cantidad
}
const fromEurotoDollar = (cantidad) => {
    cantidad = cantidad*oneEuroIs.USD // pasando de Euro to Dolar
    return cantidad
}
const fromYentoPound = (cantidad) => {
    cantidad = cantidad/oneEuroIs.JPY // pasando de Yen to Euro
    cantidad = cantidad*oneEuroIs.GBP // pasando de Euro to Pound
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad)
    return cantidad
}
// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToyen, fromEurotoDollar, fromYentoPound };