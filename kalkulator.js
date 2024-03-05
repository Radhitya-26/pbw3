// Penjumlahan
const add = (a, b) => a + b;

// Pengurangan
const subtract = (a, b) => a - b;

// Perkalian
const multiply = (a, b) => a * b;

// Pembagian
const divide = (a, b) => (b !== 0 ? a / b : 'Tidak dapat dibagi oleh 0');

// Modulo
const modulo = (a, b) => (b !== 0 ? a % b : 'Tidak dapat mod oleh 0');

// Kalkulator dengan Spread Operator
const calculator = (operator, ...operands) => {
    switch (operator) {
        case '+':
            return operands.reduce(add, 0);
        case '-':
            return operands.reduce(subtract);
        case '*':
            return operands.reduce(multiply, 1);
        case '/':
            return operands.reduce(divide);
        case '%':
            return operands.reduce(modulo);
        default:
            return 'Operator tidak valid';
    }
};

// Contoh penggunaan kalkulator untuk penjumlahan
const resultAddition = calculator('+', 5, 3, 2); // Ubah operator dan operand sesuai kebutuhan
console.log(`Hasil penjumlahan: ${resultAddition}`);

// Contoh penggunaan kalkulator untuk pengurangan
const resultSubtraction = calculator('-', 10, 3, 2); // Ubah operator dan operand sesuai kebutuhan
console.log(`Hasil pengurangan: ${resultSubtraction}`);

// Contoh penggunaan kalkulator untuk perkalian
const resultMultiplication = calculator('*', 2, 3, 4); // Ubah operator dan operand sesuai kebutuhan
console.log(`Hasil perkalian: ${resultMultiplication}`);

// Contoh penggunaan kalkulator untuk pembagian
const resultDivision = calculator('/', 20, 2, 2); // Ubah operator dan operand sesuai kebutuhan
console.log(`Hasil pembagian: ${resultDivision}`);
