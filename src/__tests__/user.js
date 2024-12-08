/*
Этот файл отвечает за тестирование функции 
loadUser с использованием библиотеки Jest.
*/

import loadUser from '../loadUser'; // Функция для загрузки пользователя по его ID
import { httpGet } from '../http'; // Вызов заглушки для Mock-тестирования


jest.mock('../http'); // Указывает Jest, что модуль http.js будет заменён заглушкой


// Сбрасывает все вызовы и состояния заглушек перед каждым тестом, чтобы тесты были изолированными.
beforeEach(() => {
    jest.resetAllMocks();
}); 


test('should call load User once', () =>{
    httpGet.mockReturnValue(JSON.stringify({})); // Указывает, что заглушка httpGet должна вернуть строку '{}'.
    loadUser(1); // Вызывает тестируемую функцию с идентификатором пользователя 1.
    expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1'); // Проверяет, что функция httpGet была вызвана один раз с правильным URL.
});
