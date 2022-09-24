// importar la función sum del archivo app.js
const { fromDollarToyen , fromEurotoDollar, fromYentoPound } = require('./app.js');

// comienza tu primera prueba
test('100 USD = 10658.33', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = fromDollarToyen(100);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(10658.33);
});

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const {fromEurotoDollar} = require('./app.js')
    
    // hago mi comparacion (la prueba)
    let total = fromEurotoDollar(1) 
    expect (total).toBe(1.2)
});

test("1000 JPY should be 6.25 GPB", function(){
    // importo la funcion desde app.js
    const { fromYentoPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYentoPound(1000)).toBe(6.25); 
});