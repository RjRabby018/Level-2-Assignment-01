const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    } else if (typeof value === 'number') {
        return value * 10;
    }
    return !value;
}

const getLength = (value: string | any[]): number => {
    if (typeof value === 'string') {
        return value.length
    } else if (Array.isArray(value)) {
        return value.length
    }
    throw new Error('Invalid Input')
}

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `"Name: ${this.name}, Age: ${this.age}"`
    }
}

const filterByRating = (value: { title: string, rating: number }[]): { title: string, rating: number }[] => {
    const newArray = value.filter((item) => item.rating >= 4 && item.rating <= 5);
    return newArray;
}

const filterActiveUsers = (value: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    const newArray = value.filter((item) => item.isActive === true);
    return newArray;
}


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean
}
const printBookDetails = (value: Book) => {
    return console.log(`Title: ${value.title}, Author: ${value.author}, Published: ${value.publishedYear}, Available: ${value.isAvailable ? 'Yes' : 'No'}`)
}

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

const calculateTotalPrice = (value: { name: string, price: number, quantity: number, discount?: number }[]): number => {
    const totalPrice = value.reduce((acc, item) => {
        let total = (item.price) * (item.quantity);
        return acc + (item.discount ? total - total * item.discount * .01 : total);
    }, 0)
    return totalPrice;
}
