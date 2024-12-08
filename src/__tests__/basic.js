import { calculateTotal } from '../calculate.js';


test('basic test', () => {
    // Здесь пишем тесты для проверки ожидаемого результата с фактическим
    let result = 4;
    expect(result).toBe(4); // Ожидаемый результат - 4
});


test('calculateTotal sum without discount', () => {
    const list = [
        { id: 456, name: 'Война и мир', count: 3, price: 400 },
        { id: 77, name: 'JavaScript', count: 1, price: 1300 },
    ];
    let result = calculateTotal(list);
    expect(result).toBe(2500);
});


test('calculateTotal sum with discount', () => {
    const list = [
        { id: 456, name: 'Война и мир', count: 3, price: 401, discount: 10 },
        { id: 77, name: 'JavaScript', count: 1, price: 1300, discount: 20 },
    ];
    let result = calculateTotal(list, true);
    expect(result).toBeCloseTo(2230.173, 3);
});
