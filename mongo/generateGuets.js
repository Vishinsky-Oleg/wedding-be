const uuid = require('uuid');

const guests = [
    'Светлана и Алим',
    'Александра',
    'Елена и Арсений',
    'Людмила Семеновна',
    'Александр и Анастасия',
    'Ольга и Антон',
    'Виктория',
    'Дмитрий',
    'мама и папа',
    'Елена',
    'Ольга и Николай',
    'Елена Михайловна',
    'Денис, Светлана и Дарья',
    'Анатолий и Любовь',
    'Ольга и Виктор',
    'Дарья и Павел',
    'Вячеслав и Евгения',
    'Максим',
    'Татьяна',
    'Александр и Ирина',
    'Екатерина',
    'Марина',
    'Максим и Анна',
    'Борис и Ирина',
    'Максим и Ольга',
    'Ольга',
    'Лев',
    'Ксения',
    'Алена',
    'Антон и Диана',
    'Влад и Екатерина',
    'Маджид и Виктория',
    'Виолетта',
    'Ирина и Андрей',
]

const mapped = guests.map((guest) => {
    return {
        _id: uuid.v4(),
        name: guest,
        isPolled: false,
        withC: false,
        gen: 'he',
        res: true,
        createdAt: new Date().getTime()
    }
})

console.log(mapped)

// Гости
// 1. Мама Олега
// 2. Алим
// Светлана и Алим
//
// 3. Саша сестра
// Александра
//
// 4. Лена
// 5 Арсений
// Елена и Арсений
//
// 5. Бабушка
// Людмила Семеновна
//
// 7. Саша друг
// 8. Настя
// Александр и Анастасия
//
// 9. Ольга атяшева
// 11. Сын Ольги
// Ольга и Антон
//
// 12. Вика продакт гость Олега
// Виктория
//
// Дима Данилин
// Дмитрий
//
// 13. Мама викуси
// 14. Папа Викуси
// мама и папа
//
// 15. Лена
// Елена
//
// 16. Оля
// 17. Коля
// Ольга и Николай
//
// 18. Т Лена
// Елена Михайловна
//
// 19. Крестная
// 20. Денис
// 21. Даша
// Денис, Светлана и Дарья
//
//
// 22. Крестный
// 23. Люба
// Анатолий и Любовь
//
// 24. Т Оля одрузова
// 25. Д Витя одрузов
// Ольга и Виктор
//
// 26. Даша
// 27. Паша
// Дарья и Павел
// (дети?)
//
// 28. Слава
// 29. Женя
// Вячеслав и Евгения
//
// 30. Максим мелкий плясунов
// Максим
//
// 31. Таня плясунова
// Татьяна
//
// 32. Д Саша Киткевич
// 33. Т Ира киткевич
// Александр и Ирина
//
// 34. Катя Тарантаева
// Екатерина
//
// 35. Марина Аристова
// Марина
//
// 36. Калуцкая Аня
// 37. Муж Максим
// Максим и Анна
// (дети?)
//
// 38. Ира
// 39. Борис
// Борис и Ирина
// (дети?)
//
// 40. Оля
// 41. Максим одрузов
// Максим и Ольга
// (дети?)
//
// 42. Кривошеева Т Оля
// Ольга
//
// 43. Лева
// Лев
//
// 44. Ксюша
// Ксения
//
// 45. Алёна Ихнева
// Алена
//
//
//
// ??????
//
// 48. Диана
// 49. Антон
// Антон и Диана
//
// Влад Салтыков и Катя Салтыкова
// Влад и Екатерина
//
// Маджид
// Маджид и Виктория
//
// Виолетта
//
// Ирина Семагина (сестра жени)
// Ирина и Андрей
// (дети?)
