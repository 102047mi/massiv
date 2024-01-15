let array = ['Ivan', 'Nikola', 'Albert']

//Массивы в JavaScript это спец вид объектов, информацию в которых можно хранить упорядченно

// для чтения элементов массива нужно обращаться к ним по числовым индексам
//массив начинается с 0!

// обращение элементу к массива
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])

array[0] = 'Иван';

//длинна массива = length(свойство)
console.log(array.length);

//Метод push() = добавить элемент в конец массива
array.push('Eva');

console.log(array);

//перебор элемента массива с помощью цикла for
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let mas = [
    {
        userName: 'Vzasiliy',
        lastName: 'Petrov'
    },
    {
        userName: 'Nikola',
        lastName: 'Semenov'
    },
    {
        userName: 'Ivan',
        lastName: 'Maximov'
    }
]

console.log(mas)

//получить начени определенных свойств объекта
for (let i = 0; i < mas.length; i++) {
    let userName = mas[i].userName;
    let lastName = mas[i].lastName;
    console.log(`${userName} ${lastName}`)
}

//получить последнийэлемент массива
console.log(mas[mas.length - 1])

// метод at() - возвращает элемент массива с заданным индексом
//положительное - поиск с начала
//отрицательное - поиск с конца
console.log(mas.at(-1));

// удаление последнего элемента
mas.pop()

console.log(mas)