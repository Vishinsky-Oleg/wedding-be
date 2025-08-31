// const uuid = require('uuid');
//
// const guests = [
//     'Светлана и Алим',
//     'Александра',
//     'Елена и Арсений',
//     'Людмила Семеновна',
//     'Александр и Анастасия',
//     'Ольга и Антон',
//     'Виктория',
//     'Дмитрий',
//     'Мама и Папа',
//     'Елена',
//     'Ольга и Николай',
//     'Елена Михайловна',
//     'Денис, Светлана и Дарья',
//     'Анатолий и Любовь',
//     'Ольга и Виктор',
//     'Дарья и Павел',
//     'Вячеслав и Евгения',
//     'Максим',
//     'Татьяна',
//     'Александр и Ирина',
//     'Екатерина',
//     'Марина',
//     'Максим и Анна',
//     'Борис и Ирина',
//     'Максим и Ольга',
//     'Ольга',
//     'Лев',
//     'Ксения',
//     'Алена',
//     'Антон и Диана',
//     'Влад и Екатерина',
//     'Маджид и Виктория',
//     'Виолетта',
//     'Ирина и Андрей',
//     'Алексей и Диана'
// ]
//
// const mapped = guests.map((guest) => {
//     return {
//         _id: uuid.v4(),
//         name: guest,
//         isPolled: false,
//         withC: false,
//         gen: 'he',
//         res: true,
//         createdAt: new Date().getTime()
//     }
// })
//
// console.log(mapped)

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

const a = [
    {
        _id: "f015bfec-4072-49d6-82a4-238a61096ce4",
        name: "Светлана и Алим",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.139Z",
        __v: 0
    },
    {
        _id: "455ff69f-1ba5-4208-811c-0c98422a5055",
        name: "Александра",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.139Z",
        __v: 0
    },
    {
        _id: "6f8ff612-d169-40ba-96ee-9c84f9fbf76e",
        name: "Елена и Арсений",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "64c9d075-c837-491e-b0de-c8195a485bf2",
        name: "Людмила Семеновна",
        isPolled: false,
        withC: false,
        gen: "s",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "65dd958f-c4c6-4b34-9ecd-81aef8e5b786",
        name: "Александр и Анастасия",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "fd0d9e63-507a-4f6f-8bd8-e682b638b9e4",
        name: "Ольга и Антон",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "208c9af9-6150-4fb8-bd45-518316dc483c",
        name: "Виктория",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "8731094d-4e77-48bb-a482-3a248842424c",
        name: "Дмитрий",
        isPolled: false,
        withC: false,
        gen: "h",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "884ea0da-1a42-41c0-a937-782bcc988f83",
        name: "Мама и Папа",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "23318be2-d4a0-446d-92b9-7d9c36eef06a",
        name: "Елена",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "dd0197fb-1601-4fad-9176-d9c9c1be2716",
        name: "Ольга и Николай",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "ad00bac1-eee6-457b-bb45-63418de2b14c",
        name: "Елена Михайловна",
        isPolled: false,
        withC: false,
        gen: "s",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "008fd995-305e-403d-ad29-2865e4ede01a",
        name: "Денис, Светлана и Дарья",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "2e86b285-ea05-4cb1-80ac-11adbadf2492",
        name: "Анатолий и Любовь",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "fb3bfc6e-a06c-4442-8e84-a5b7da121e64",
        name: "Ольга и Виктор",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "b457e3f0-a122-4e2b-a034-bb60412d81ab",
        name: "Дарья и Павел",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "1f56d201-9ac0-4212-b96c-17e349682a9d",
        name: "Вячеслав и Евгения",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "6996e948-ab1a-467e-b7e5-7b4cd23cbde1",
        name: "Максим",
        isPolled: false,
        withC: false,
        gen: "h",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "2bf6a55a-17cb-434a-8cc0-197ff8fca96a",
        name: "Татьяна",
        isPolled: false,
        withC: false,
        gen: "s",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "2f3115f0-493f-4cfe-bbf5-893845d1394b",
        name: "Александр и Ирина",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "5987d9fc-b326-4775-97fa-ccfd580929bc",
        name: "Екатерина",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "f3d64f0b-9e74-4f7d-86e2-d9a4ccf4de77",
        name: "Марина",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "f3993410-a7d8-4d16-be91-2a462a1ce9d9",
        name: "Максим и Анна",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "926aafc3-7545-45e6-afda-41c52d0357da",
        name: "Борис и Ирина",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "65c0a720-7aba-4d1e-8d65-db05c2c760c6",
        name: "Максим и Ольга",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "f75d3d41-3b72-4934-958d-846d9c44385e",
        name: "Ольга",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "85ac4b18-27e1-4d86-983b-56e8cd9aaf7f",
        name: "Лев",
        isPolled: false,
        withC: false,
        gen: "he",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "b0754d3b-ddc5-4e2b-a079-69566ef073df",
        name: "Ксения",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "36b66606-9876-421d-97a3-c0c9d5c4744c",
        name: "Алена",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "01f3ee8b-e2a8-40fe-b36d-c3421b811af6",
        name: "Антон и Диана",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "3938dde8-ffd3-4bc7-b13f-a31149d57884",
        name: "Влад и Екатерина",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "91d6fba0-8fcb-462f-8d63-4befed282fb0",
        name: "Маджид и Виктория",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "4e8e23fe-60b7-46a6-82a8-61ceb2164b7a",
        name: "Виолетта",
        isPolled: false,
        withC: false,
        gen: "s",
        res: false,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "72099784-93c0-46c3-a3db-8e67ce3e92e7",
        name: "Ирина и Андрей",
        isPolled: false,
        withC: true,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    },
    {
        _id: "f5652ffb-2bd7-4efc-ae96-7a2e8cc161db",
        name: "Алексей и Диана",
        isPolled: false,
        withC: false,
        gen: "t",
        res: true,
        createdAt: "2025-07-29T12:17:39.140Z",
        __v: 0
    }
]


const mapped = a.map(({name, _id}) => {
    return {
        url: `https://oleg-and-victoria-wedding.ru/${_id}`,
        name
    }
})
console.log(mapped)
