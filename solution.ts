
// Problem 01
const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    }
    return !value;

}
// console.log(formatValue('hello'));
// console.log(formatValue(5));
// console.log(formatValue(true));

// problem 02
const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    throw new Error('Invalid Input')
}
// console.log(getLength('typescript'));
// console.log(getLength([10, 20, 30, 40]));

// problem 03
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}
// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());

// problem 04

const filterByRating = (value: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    const check = value.filter((item) => item.rating >= 4 && item.rating <= 5);
    return check;
}
// const books = [
//   { title: 'Book A', rating: 4.5 },
//   { title: 'Book B', rating: 3.2 },
//   { title: 'Book C', rating: 5.0 },
// ];

// console.log(filterByRating(books));

// problem 05
const filterActiveUsers = (value: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    const newArray = value.filter((item) => item.isActive === true);
    return newArray;
}
// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];
// console.log(filterActiveUsers(users));

// problem 06

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}
const printBookDetails = (value: Book) => {
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable}`)
}
// const myBook: Book = {
//     title: 'The Great Gatsby',
//     author: 'F. Scott Fitzgerald',
//     publishedYear: 1925,
//     isAvailable: true,
// };

// printBookDetails(myBook);

// problem 07
const getUniqueValues = <T extends number | string>(value1: T[], value2: T[]) => {
    const newArray: T[] = [];
    for (let i = 0; i < value1.length; i++) {
        let exists = false;
        for (let j = 0; j < newArray.length; j++) {
            if (value1[i] === newArray[j]) {
                exists = true
                break;
            }
        }
        if (!exists) {
            newArray.push(value1[i])
        }
    }
    for (let i = 0; i < value2.length; i++) {
        let exists = false;
        for (let j = 0; j < newArray.length; j++) {
            if (value2[i] === newArray[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            newArray.push(value2[i])
        }
    }
    return newArray
}
// const array1 = [1, 2, 3, 4, 5,];
// const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

// problem 08
const calculateTotalPrice = (value: { name: string, price: number, quantity: number, discount?: number }[]): number => {
    const totalPrice = value.reduce((acc, item) => {
        let total = (item.price) * (item.quantity);
        return acc + (item.discount ? total - total * item.discount * .01 : total);
    }, 0)
    return totalPrice
}
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));