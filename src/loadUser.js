/*
Этот файл экспортирует функцию loadUser, которая принимает 
идентификатор пользователя (id), выполняет HTTP-запрос для 
получения данных о пользователе, а затем возвращает их в виде объекта.
*/

import { httpGet } from './http'; // Вызов заглушки для Mock-тестирования HTTP-запроса

export default function loadUser(id) {
    const data = httpGet(`http://server:8080/users/${id}`); // Загрузка данных о пользователе
    return JSON.parse(data); // Преобразование данных в JSON
}
